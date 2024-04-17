import { ReactNode } from "react";
import Image from "next/image";
import { Divider } from "@nextui-org/react";

const FeaturedPost = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative py-4 gap-x-4 flex bg-primary/60 p-4 rounded-xl h-max">
      {children}
    </div>
  );
};

const ImageContent = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className=" aspect-square object-cover w-full max-w-[400px] rounded-xl overflow-hidden">
      <Image src={imageUrl} alt="image content" width={500} height={400} />
    </div>
  );
};

const Content = ({ title, details }: { title: string; details: string[] }) => {
  return (
    <div className="  w-full flex flex-col gap-4">
      <span className=" text-4xl font-semibold text-secondary capitalize">
        {title}
      </span>
      <Divider />

      <span className="flex flex-col gap-4">
        {details.map((detail, i) => (
          <p key={i} className=" text-lg text-foreground">
            {detail}
          </p>
        ))}
      </span>
    </div>
  );
};

FeaturedPost.ImageContent = ImageContent;
FeaturedPost.Content = Content;
export default FeaturedPost;
