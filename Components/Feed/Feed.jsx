import { SparklesIcon } from "@heroicons/react/24/outline";
import Input from "./Input";

export default function Feed() {
  return (
    <div className="xl:ml-[370px] sm:ml-[70px] border-l border-r xl:min-w-[576px] max-w-xl">
      <div className="flex items-center justify-between py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="textlg sm:text-xl font-bold cursor-pointer text-zinc-600">
          Home
        </h2>
        <div className="hoverEffect flex items-center justify-center">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
    </div>
  );
}
