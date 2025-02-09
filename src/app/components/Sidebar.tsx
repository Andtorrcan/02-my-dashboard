import React from 'react'
import Image from 'next/image';

import { IoBrowsersOutline, IoCalculator, IoLogoReact } from 'react-icons/io5'
import { SidebarMenuItem } from './SidebarMenuItem';

const menuItems = [{
   path: '/dashboard/main',
   icon: <IoBrowsersOutline size={40} />,
   title: "Dashboard",
   subtitle: "Visualización"
},
{
   path: '/dashboard/counter',
   icon: <IoCalculator size={40} />,
   title: "Counter",
   subtitle: "Counter Client side"
}];

export const Sidebar = () => {
   return (
      <div id="menu"
         style={{ width: '400px' }}
         className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll">
         <div id="logo" className="flex items-center my-4 px-6">
            <IoLogoReact />
            <h1 className="text-lg ml-2 md:text-2xl font-bold text-white">NextJS.</h1>
            <p className="text-slate-500 text-sm">Testing NextJS</p>
         </div>
         <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Welcome back,</p>
            <a href="#" className="inline-flex space-x-2 items-center">
               <span>
                  <Image
                     className="rounded-full w-8 h-8"
                     src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                     alt='Avatar'
                     width={50}
                     height={50}
                  ></Image>
                  <img alt="" />
               </span>
               <span className="text-sm md:text-base font-bold">
                  Andres Torres
               </span>
            </a>
         </div>


         <div id="nav" className="w-full px-6">
            {
               menuItems.map(item => (
                  <SidebarMenuItem
                     key={item.path}
                     path={item.path}
                     icon={item.icon}
                     subtitle={item.subtitle}
                     title={item.title}>
                  </SidebarMenuItem>
               ))
            }
         </div>
      </div>

   )
}
