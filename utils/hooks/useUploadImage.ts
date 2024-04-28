import { ChangeEvent, useEffect, useRef, useState } from 'react';

export default function useUploadImage() {
  const [selectedFile, setSelectedFile] = useState<File>();
  // const [imagePreviewUrl, setImagePreviewUrl] = useState<string | undefined>();
  const imageInputRef = useRef<HTMLInputElement>(null);

  // create a preview as a side effect, whenever selected file is changed
  // useEffect(() => {
  //   if (!selectedFile) {
  //     setImagePreviewUrl(undefined);
  //     return;
  //   }

  //   const objectUrl = URL.createObjectURL(selectedFile);
  //   setImagePreviewUrl(objectUrl);

  //   // free memory when ever this component is unmounted
  //   return () => URL.revokeObjectURL(objectUrl);
  // }, [selectedFile]);

  function handlePickClick() {
    imageInputRef.current?.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    const file = event.target.files[0];
    setSelectedFile(file);
  }

  return {
    handlePickClick,
    handleImageChange,
    imageInputRef,
    selectedFile
  };
}
