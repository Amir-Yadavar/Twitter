import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";

export default function Input() {
  return (
    <div className="p-3">
      <div className="flex border-b border-gray-200 space-x-3">
        <img
          src="/img/profile-user.jpg"
          alt="amir-yadavar"
          className="h-11 w-11 rounded-full transition-all hover:brightness-95 cursor-pointer"
        />

        <div className="w-full">
          <div className="">
            <textarea
              rows="2"
              className="w-full p-1 border-none focus:ring-0 placeholder-gray-700 text-gray-700 text-lg tracking-wide min-h-[50px]"
              placeholder="What's happening ?"
            ></textarea>
          </div>
          <div className="flex items-center justify-between p-1 border-t border-gray-200">
            <div className="flex">
              <PhotoIcon className="iconHover text-sky-500" />
              <FaceSmileIcon className="iconHover text-sky-500" />
            </div>

            <button className="cursor-pointer bg-blue-500 text-white font-bold hover:brightness-95 rounded-full px-4 py-1.5 disabled:opacity-50">Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
}
