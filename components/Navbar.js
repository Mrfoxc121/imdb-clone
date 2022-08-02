import Requests from "../utils/Requests";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter()
  return (
    <div className="flex justify-center bg-gray-600 text-gray-200 p-8 select-none text-xl lg:text-2xl">
      {Object.entries(Requests).map(([key, { title, url }]) => (
        <h2
          onClick={() => router.push(`?genre=${key}`)}
          className="m-6 cursor-pointer text-gray-300 hover:text-gray-100 active:text-red-400"
          key={key}
        >
          {title}
        </h2>
      ))}
    </div>
  );
}
