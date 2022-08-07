import React from 'react';
import { VscDashboard } from 'react-icons/vsc';
import { MdOutlineDashboard,MdOutlineTableRows,MdOutlinePayments,MdFormatListNumberedRtl,MdOutlineNotifications,MdOutlineSupervisedUserCircle,MdLogin,MdLogout } from 'react-icons/md';

function Sidebar() {
  return (
    <div className='bg-stone-700 rounded-lg p-5 text-white fixed'>
      <nav>
        <div className='flex items-center justify-center'>
          <VscDashboard className='mx-2 text-xl' />
          <h1>Sidebar tailwind</h1>
        </div>
        <hr className='mt-3'></hr>

        <div className='mt-5'>
          <ul >
            <li className='flex items-center hover:bg-blue-600 hover:rounded-lg hover:ease-in-out duration-300 cursor-pointer px-5 py-2'><MdOutlineDashboard className='mr-2' /> Dashboard</li>
            <li className='flex items-center hover:bg-blue-600 hover:rounded-lg hover:ease-in-out duration-300 cursor-pointer px-5 py-2'><MdOutlineTableRows className='mr-2' /> Tables</li>
            <li className='flex items-center hover:bg-blue-600 hover:rounded-lg hover:ease-in-out duration-300 cursor-pointer px-5 py-2'><MdOutlinePayments className='mr-2' /> Billing</li>
            <li className='flex items-center hover:bg-blue-600 hover:rounded-lg hover:ease-in-out duration-300 cursor-pointer px-5 py-2'><MdFormatListNumberedRtl className='mr-2' /> RTL</li>
            <li className='flex items-center hover:bg-blue-600 hover:rounded-lg hover:ease-in-out duration-300 cursor-pointer px-5 py-2'><MdOutlineNotifications className='mr-2' /> Notifications</li>
            <li className='flex items-center hover:bg-blue-600 hover:rounded-lg hover:ease-in-out duration-300 cursor-pointer px-5 py-2'><MdOutlineSupervisedUserCircle className='mr-2' /> Profile</li>
            <li className='flex items-center hover:bg-blue-600 hover:rounded-lg hover:ease-in-out duration-300 cursor-pointer px-5 py-2'><MdLogin className='mr-2' /> Sign in</li>
            <li className='flex items-center hover:bg-blue-600 hover:rounded-lg hover:ease-in-out duration-300 cursor-pointer px-5 py-2'><MdLogout className='mr-2' />Sign up</li>
            <li className=' bg-blue-800  hover:bg-blue-600  rounded-xl hover:rounded-lg hover:ease-in-out duration-300 cursor-pointer px-5 py-2 mt-32 text-center'>update to pro</li>
          </ul>

        </div>
      </nav>
    </div>
  )
}

export default Sidebar;