import { ChangeEvent, useEffect, useRef, useState } from 'react';

export interface UploadFileType {
  id: string;
  file: File;
}

interface MediaFile {
  file: File;
  objectUrl: string;
  order: Number;
}

export default function useUploadFileAppend() {
  const uploadBtnRef = useRef<HTMLInputElement>(null);
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);

  function handlePickClick() {
    uploadBtnRef.current?.click();
  }

  function handleSelectFile(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const mediaFilesLength = mediaFiles.length;

    for (let i = 0; i < event.target.files.length; i++) {
      const selectedFile = event.target.files[i];

      // create object url
      const objectUrl = URL.createObjectURL(selectedFile);

      // set media files
      const mediaFile: MediaFile = {
        file: selectedFile,
        objectUrl: objectUrl,
        order: mediaFilesLength + (i + 1)
      };

      setMediaFiles(prev => [...prev, mediaFile]);
    }
  }

  function showFilesPost() {
    console.log('showFilesPost');
  }

  function resetFilesPost() {
    setMediaFiles([]);
  }

  return {
    handlePickClick,
    handleSelectFile,
    showFilesPost,
    resetFilesPost,
    mediaFiles,
    uploadBtnRef
  };
}
