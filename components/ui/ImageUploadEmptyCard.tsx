import { Card, CardFooter, CardHeader } from "@nextui-org/react";
import { RiImageAddLine } from "react-icons/ri";

const ImageUploadEmptyCard = ({ handler }: { handler: any }) => {
  return (
    <div onClick={handler} className="cursor-pointer">
      <Card className="p-3 bg-content3 border-2 gap-y-4 rounded-xl w-60 h-96 border-primary hover:border-secondary ">
        <CardHeader className=" p-2">
          <RiImageAddLine className="w-full h-full fill-stone-300 " />
        </CardHeader>

        <CardFooter className="p-2 flex flex-col gap-4 w-full">
          <div className="w-full h-10 bg-stone-300 rounded-lg "></div>
          <div className="w-full h-10 bg-stone-300 rounded-lg  "></div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default ImageUploadEmptyCard;
