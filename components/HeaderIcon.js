import React from "react";


export default function HeaderIcon({ Icon, title }) {
  return (
    <div className="flex flex-col cursor-pointer mx-4 lg:mx-6 hover:text-gray-100 active:text-red-400">
     <Icon className="h-8" />
     <p className="my-2">{title}</p>
    </div>
  );
}
