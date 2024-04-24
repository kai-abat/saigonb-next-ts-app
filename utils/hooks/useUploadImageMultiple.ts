import { ChangeEvent, useEffect, useRef, useState } from 'react';

export default function useUploadImageMultiple() {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  // const [imagePreviewUrl, setImagePreviewUrl] = useState<string | undefined>();
  const imageInputRef = useRef<HTMLInputElement>(null);

  // create a preview as a side effect, whenever selected file is changed
  // useEffect(() => {
  //   if (!imageFiles) {
  //     setImagePreviewUrl(undefined);
  //     return;
  //   }

  //   const objectUrl = URL.createObjectURL(imageFiles);
  //   setImagePreviewUrl(objectUrl);

  //   // free memory when ever this component is unmounted
  //   return () => URL.revokeObjectURL(objectUrl);
  // }, [imageFiles]);

  function handlePickClick() {
    imageInputRef.current?.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    if (!event.target.files || event.target.files.length === 0) {
      // setImageFiles([]);
      return;
    }

    const uploadedFiles = Array.from(event.target.files);

    const files = uploadedFiles.map(file => file);
    setImageFiles(files);

    // const file = event.target.files.setImageFiles(event.target.files[0]);
  }

  function resetFiles() {
    setImageFiles([]);
  }

  return {
    handlePickClick,
    handleImageChange,
    imageInputRef,
    imageFiles,
    resetFiles
  };
}
