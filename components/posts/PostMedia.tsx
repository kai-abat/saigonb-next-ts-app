'use client';

import { setMedia } from '@/lib/redux/features/postPreviewSlice';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { BucketSchemaDBUpdate } from '@/utils/types/mongodbSchema';
import Image from 'next/image';
import { useState } from 'react';

const PostMedia = ({
  media,
  onOpen
}: {
  media: BucketSchemaDBUpdate;
  onOpen: () => void;
}) => {
  const dispatch = useAppDispatch();
  const type = useAppSelector(state => state.postPreview.type);
  const currentMedia = useAppSelector(state => state.postPreview.media);

  function handleImageClick() {
    dispatch(setMedia(media.attachment));
    onOpen();
  }
  return (
    <span onClick={handleImageClick} className=' cursor-pointer'>
      <Image
        src={media.attachment}
        alt={media.attachment}
        width={300}
        height={300}
        className=' aspect-square rounded-md object-cover'
      />
    </span>
  );
};
export default PostMedia;
