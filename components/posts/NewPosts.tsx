'use client';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from '@nextui-org/react';

import { FcAddImage } from 'react-icons/fc';
import { FormEvent, useEffect, useRef, useState } from 'react';
import useUploadFileAppend from '@/utils/hooks/useUploadFileAppend';
import Image from 'next/image';
import FormRow from '../form/FormRow';
import TextAreaController from '../nextui/controllers-react-hook-form/TextAreaController';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PostSchema } from '@/utils/zod/PostSchema';
import {
  getSignedUrl,
  validateRequiredS3Data
} from '@/utils/actions/AWSS3Action';
import { BucketSchemaDB, PostSchemaDB } from '@/utils/types/mongodbSchema';
import { computeSHA256 } from '@/utils/Helper';

export interface FormValues {
  description: string;
}

const NewPosts = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [statusMesssage, setStatusMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const submitPostBtnRef = useRef<any>(null);
  const x = 1;

  const methods = useForm<FormValues>({
    mode: 'all',
    defaultValues: getDefaultValues(),
    resolver: zodResolver(PostSchema)
  });

  const {
    formState: { isValid, errors },
    setError,
    getValues,
    reset
  } = methods;

  function getDefaultValues(): FormValues {
    return {
      description: ''
    };
  }

  const {
    handlePickClick,
    handleSelectFile,
    resetFilesPost,
    mediaFiles,
    uploadBtnRef
  } = useUploadFileAppend();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const postDescription = getValues('description');

    console.log('handleSubmit started...');
    console.log('mediaFiles', mediaFiles);

    // uploading
    setIsLoading(true);
    setStatusMessage('Uploading...');

    // Validatin files to upload
    // TODO: Not finished
    const validationResult = await Promise.all(
      mediaFiles.map(async media => {
        return await validateRequiredS3Data(media.file.type, media.file.size);
      })
    );

    console.log('validationResult:', validationResult);

    // Upload each file
    let bucketValue: BucketSchemaDB[] = [];
    await Promise.all(
      mediaFiles.map(async media => {
        const checkSum = await computeSHA256(media.file);
        const signedUrlResult = await getSignedUrl(
          media.file.name,
          media.file.type,
          media.file.size,
          checkSum,
          true
        );
        if (signedUrlResult.failure) {
          setStatusMessage(signedUrlResult.failure.message);
          setIsLoading(false);
          console.log('Failed', signedUrlResult.failure.message);
          return;
        }
        const url = signedUrlResult.success.url;

        console.log('AWS S3 Signed URL:', url);

        // Upload to AWS S3
        const res = await fetch(url, {
          method: 'PUT',
          body: media.file,
          headers: {
            'Content-Type': media.file.type
          }
        });

        // Setup BucketSchemaDB
        bucketValue.push({
          attachment: url.split('?')[0],
          mediaType: media.file.type,
          order: media.order
        });
      })
    );

    console.log('bucketValue ', bucketValue);
    setStatusMessage('Posting...');
    // Saving to database
    const postDBValue: PostSchemaDB = {
      post: postDescription,
      bucket: bucketValue
    };
    // Saving to MongoDB REST API
    const dbUrl = 'http://localhost:3001/api/posts';

    console.log('Saving to MongoDB REST API');

    try {
      const res = await fetch(dbUrl, {
        method: 'POST',
        body: JSON.stringify(postDBValue),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    console.log('Done saving to MongoDB REST API');

    setIsLoading(false);
    setStatusMessage('');

    reset(); // reset the input fields
    onClose(); // close the modal
    console.log('handleSubmit finished...');
  };

  // if isOpen is false then release the object url  to avoid memory leaks
  useEffect(() => {
    console.log('Modal is open?', isOpen);

    if (!isOpen && mediaFiles.length > 0) {
      mediaFiles.map(media => URL.revokeObjectURL(media.objectUrl));
      resetFilesPost();
    }
  }, [isOpen, resetFilesPost, mediaFiles]);

  function handlePostBtn() {
    submitPostBtnRef.current?.click();
  }

  return (
    <FormProvider {...methods}>
      <div className='flex flex-col gap-2'>
        <Button onPress={onOpen} className='max-w-fit'>
          Open Modal
        </Button>

        <Modal
          isOpen={isOpen}
          placement='center'
          size='xl'
          onOpenChange={onOpenChange}
          scrollBehavior='inside'
        >
          <ModalContent>
            {onClose => (
              <>
                <ModalHeader className='flex flex-col gap-1'>
                  Create Post
                </ModalHeader>
                <ModalBody>
                  <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                    <FormRow>
                      <TextAreaController
                        controllerName='description'
                        label='Description'
                        className=' min-w-[300px] max-w-[500px]'
                        showError
                        placeholder={`What's on your mind?`}
                      />
                    </FormRow>
                    <FormRow>
                      <input
                        className='hidden w-full'
                        type='file'
                        accept='image/png, image/jpeg, image/webp, video/mp4, video/webm'
                        multiple={true}
                        ref={uploadBtnRef}
                        onChange={handleSelectFile}
                      />
                    </FormRow>
                    <FormRow>
                      <div className=' mx-auto grid grid-cols-3 gap-5'>
                        {mediaFiles.length > 0 &&
                          mediaFiles.map((media, index) => {
                            return (
                              <Image
                                key={index}
                                src={media.objectUrl}
                                alt='some image'
                                width={200}
                                height={200}
                                className='aspect-square w-full object-cover object-center'
                              />
                            );
                          })}
                      </div>
                    </FormRow>
                    <FormRow>
                      <button
                        ref={submitPostBtnRef}
                        className=' hidden bg-red-400 px-10'
                        type='submit'
                      >
                        Post Submit
                      </button>
                    </FormRow>
                  </form>
                </ModalBody>
                <ModalFooter>
                  <Button
                    isIconOnly
                    variant='light'
                    aria-label='Take a photo'
                    startContent={<FcAddImage size={35} />}
                    onPress={handlePickClick}
                  ></Button>

                  <Button
                    color='primary'
                    onPress={handlePostBtn}
                    className='px-10'
                  >
                    {statusMesssage === '' ? 'Post' : statusMesssage}
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </FormProvider>
  );
};
export default NewPosts;
