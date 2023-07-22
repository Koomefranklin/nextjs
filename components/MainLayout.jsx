import React from "react";
import MainHeader from "./MainHeader";
import Link from "next/link";

import { AiOutlineHome } from "react-icons/ai";
import { FaAngleRight, FaUsers } from "react-icons/fa";


const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start">
        <aside className="bg-gray-500 rounded-lg w-60 p-4">
          <ul>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineHome className="mr-2" />
              <Link href="/">Home</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <FaUsers className="mr-2" />
              <Link href="/users">Users</Link>
              {/* <h3 className="flex-1">Users</h3> */}
              {/* <FaAngleRight /> */}
            </li>
            
          </ul>
        </aside>
        <aside className="bg-purple-200 rounded-lg h-5 w-50"></aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
