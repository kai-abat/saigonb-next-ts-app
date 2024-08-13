import { PostSchemaDBUpdate } from '@/utils/types/mongodbSchema';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button
} from '@nextui-org/react';
import PostMedia from './PostMedia';
import PostCTA from './PostCTA';

const Post = ({
  post,
  onOpen
}: {
  post: PostSchemaDBUpdate;
  onOpen: () => void;
}) => {
  const buckets = post.bucket.slice().sort((a, b) => a.order - b.order);

  return (
    <Card className='w-full gap-y-5 rounded-xl bg-primary/60 dark:bg-stone-700/60'>
      <CardHeader className='justify-between'>
        <div className='flex gap-5'>
          <Avatar isBordered radius='full' size='lg' src='/svg/logo.svg' />
          <div className='flex flex-col items-start justify-center gap-1'>
            <h4 className='text-small font-semibold leading-none text-default-600'>
              Saigon Brewers Team
            </h4>
            {/* <h5 className='text-small tracking-tight text-default-400'>
                @zoeylang
              </h5> */}
          </div>
        </div>
        <div className='flex gap-2'>
          <PostCTA />
        </div>
      </CardHeader>
      <CardBody className='px-3 py-0 text-medium text-default-700'>
        <pre className='whitespace-pre-wrap'>{post.post}</pre>
      </CardBody>
      <CardFooter className='gap-3'>
        <div className=' grid grid-cols-3 gap-3'>
          {buckets.map((media, index) => {
            return (
              <PostMedia
                key={`post-media-${media._id}-${index}`}
                media={media}
                onOpen={onOpen}
              />
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
};
export default Post;