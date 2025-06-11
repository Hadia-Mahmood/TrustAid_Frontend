import Link from "next/link";
import Image from "next/image";
import { useGetTopViewedThreads } from "../../../hooks/districtAdmin-hook"; // Adjust the path as needed
import formatDate from "@/utils/helper";

const ChatCard = () => {
  const { data, isLoading, error } = useGetTopViewedThreads();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="col-span-12 rounded-sm border  bg-white py-6 xl:col-span-12 font-poppins">
      <h4 className="mb-4 px-5 text-xl font-semibold text-black ">
        Top Articles
      </h4>

      <div className="border-t-[1px] border-[#c9c8c8">
        {data.map((thread, key) => (
          <Link
            href={`/forum/${thread?._id}`}
            className="flex items-center gap-3 py-3 px-5 hover:bg-[#e2e2e2] "
            key={key}
          >
            <div className="relative h-14 w-14 rounded-md">
              <img
                src={thread?.avatar || "/default_avatar.jpg"}
                alt={thread?.name}
                className="w-full h-full rounded-md"
              />
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <p className="text-xs text-black break-words dark:text-white">
                  {thread.title}
                </p>

                <p className="text-[10px] mt-1 text-gray-700 break-words dark:text-white">
                  Posted on : {formatDate(thread.date)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatCard;
