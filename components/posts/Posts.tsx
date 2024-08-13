'use client';

import { getPost, PostActionReturnType } from '@/utils/actions/postActions';
import Post from './Post';
import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { initializePostPreview } from '@/lib/redux/features/postPreviewSlice';
import MediaPreviewModal from '../ui/MediaPreviewModal';
import { useDisclosure } from '@nextui-org/react';

const Posts = ({ data }: { data: PostActionReturnType }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useAppDispatch();
  dispatch(initializePostPreview());

  const type = useAppSelector(state => state.postPreview.type);
  const currentMedia = useAppSelector(state => state.postPreview.media);

  if (data.failure) {
    return <p>No posts found!</p>;
  }

  const sortedPosts = data.success.slice().sort((a, b) => {
    const date1 = Date.parse(a.createdAt);
    const date2 = Date.parse(b.createdAt);
    return date2 - date1;
  });

  return (
    <div>
      <div className='flex w-full flex-col gap-3'>
        {sortedPosts.map((post, index) => {
          return (
            <Post key={`${post._id}_${index}`} post={post} onOpen={onOpen} />
          );
        })}
      </div>
      <MediaPreviewModal
        media={currentMedia}
        type={type}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
};
export default Posts;
