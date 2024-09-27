'use client';

import Post from './Post';
import { initializePostPreview } from '@/lib/redux/features/postPreviewSlice';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { BlogType } from '@/utils/types/blogTypes';
import { UserProfile } from '@/utils/types/Props';
import { useDisclosure } from '@nextui-org/react';
import MediaPreviewModal from '../ui/MediaPreviewModal';

type Props = {
  data: BlogType[] | null;
};

const Posts = ({ data }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useAppDispatch();
  dispatch(initializePostPreview());

  const type = useAppSelector(state => state.postPreview.type);
  const currentMedia = useAppSelector(state => state.postPreview.media);

  if (!data) {
    return <p>No posts found!</p>;
  }

  const sortedPosts = data.slice().sort((a, b) => {
    const date1 = Date.parse(a.created_at);
    const date2 = Date.parse(b.created_at);
    return date2 - date1;
  });

  return (
    <div>
      <div className='flex w-full flex-col gap-3'>
        {sortedPosts.map((post, index) => {
          return (
            <Post key={`${post.id}_${index}`} post={post} onOpen={onOpen} />
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
