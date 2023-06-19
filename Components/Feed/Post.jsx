import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <div className="flex p-3">
      <div className="">
        <Image
          src={post.imgProfile}
          alt="amir-yadavar"
          className="w-11 h-11 rounded-full mt-2"
          width={45}
          height={45}
        />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center">
            <h2 className="font-bold text-gray-800 px-1">{post.name}</h2>
            <h3 className="text-gray-600 px-1 text-sm">{post.userName}</h3>
            <span className="text-gray-500 text-xs px-1">
              {post.timestamps}
            </span>
          </div>
          <div className="text-gray-600">
            <EllipsisHorizontalIcon className="iconHover" />
          </div>
        </div>

        <p className="p-2">{post.title}</p>

        <div className="p-2">
            <Image 
            src={post.imgPost}
            alt="amir-yadavar"
            className="w-full h-96 "
            width={500}
            height={385}
            />
        </div>

        <div className="flex items-center justify-around p-2"></div>
      </div>
    </div>
  );
}
