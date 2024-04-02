import { ChangeEvent, useEffect, useRef, useState } from "react";

export default function useUploadImage() {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | undefined>();
  const imageInputRef = useRef<HTMLInputElement>(null);

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setImagePreviewUrl(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setImagePreviewUrl(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  function handlePickClick() {
    imageInputRef.current?.click();
  }

  function getImagePreviewUrl() {
    return imagePreviewUrl;
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(event.target.files[0]);
  }

  return {
    handlePickClick,
    getImagePreviewUrl,
    imagePreviewUrl,
    handleImageChange,
    imageInputRef,
    selectedFile,
  };
}
