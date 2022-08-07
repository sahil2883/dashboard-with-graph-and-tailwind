import React from 'react';
import { MdHome, MdSettingsSuggest, MdHomeWork } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { BsBell } from 'react-icons/bs';
import { BiTransferAlt,BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlinePrinter,AiOutlineCheck } from 'react-icons/ai';
import { VscGraph } from 'react-icons/vsc';
import { FiUserPlus } from 'react-icons/fi';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            display: false,
        },
        title: {
            display: true,
        },
    },
    scales: {
        x: {
            grid: {
                display: false
            }, beginAtZero: false,
            ticks: {
                color: 'white',
            }
        },
        y: {
            grid: {
                display: false,
            }, beginAtZero: false,
            ticks: {
                color: 'white',
            }
        }
    }

};

const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export const data = {
    labels,
    datasets: [
        {
            label: '',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255,255,255)',
            borderColor: "#fff"
        },
    ],
};


function Header() {
    return (
        <div className='p-3 basis-5/6'>
            <div>
                <div className='flex items-center justify-between'>
                    <div>
                        <div className='flex items-center text-stone-500'>
                            <p><MdHome /></p>
                            <p className='text-sm'>/ Dashboard</p>
                        </div>
                        <p> Dashboard</p>
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <input placeholder='search here' className='p-2 rounded-lg focus:outline-none focus:border-sky-500'></input>
                            <CgProfile className='mx-2 text-xl text-stone-600' />
                            <MdSettingsSuggest className='mx-2 text-xl text-stone-600' />
                            <BsBell className='mx-2 text-xl text-stone-600' />
                        </div>

                    </div>
                </div>

                <div className='mt-5'>
                    <div className='flex flex-row '>
                        <div className='basis-1/4 mx-2 mt-5 '>
                            <div className='bg-white p-2 rounded-xl'>
                                <div className='flex justify-between items-start'>
                                    <div className='bg-stone-800 text-white p-3 shadow-lg shadow-stone-400 rounded-xl relative bottom-6'>
                                        <AiOutlinePrinter className='text-2xl' />
                                    </div>
                                    <div>
                                        <p className='text-xs text-stone-500'>Booking</p>
                                        <p className='font-bold text-stone-600'>200</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div>
                                    <p className='text-stone-400 text-xs mt-3 mb-3'><span className='text-green-600 '>+55%</span> than last week</p>
                                </div>
                            </div>

                        </div>

                        <div className='basis-1/4 mx-2 mt-5 '>
                            <div className='bg-white p-2 rounded-xl'>
                                <div className='flex justify-between items-start'>
                                    <div className=' bg-blue-500 text-white p-3 shadow-lg shadow-stone-400  rounded-xl relative bottom-6'>
                                        <VscGraph className='text-2xl' />
                                    </div>
                                    <div>
                                        <p className='text-xs text-stone-500'>Today's users</p>
                                        <p className='font-bold text-stone-600'>15</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div>
                                    <p className='text-stone-400 text-xs mt-3 mb-3'><span className='text-green-600 '>+2%</span> than last week</p>
                                </div>
                            </div>
                        </div>

                        <div className='basis-1/4 mx-2 mt-5 '>
                            <div className='bg-white p-2 rounded-xl'>
                                <div className='flex justify-between items-start'>
                                    <div className='bg-green-400 text-white p-3 shadow-lg shadow-stone-400  rounded-xl relative bottom-6'>
                                        <MdHomeWork className='text-2xl' />
                                    </div>
                                    <div>
                                        <p className='text-xs text-stone-500'>total users</p>
                                        <p className='font-bold text-stone-600'>500</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div>
                                    <p className='text-stone-400 text-xs mt-3 mb-3'><span className='text-green-600 '>+1%</span> than last week</p>
                                </div>
                            </div>
                        </div>

                        <div className='basis-1/4 mx-2 mt-5 '>
                            <div className='bg-white p-2 rounded-xl'>
                                <div className='flex justify-between items-start'>
                                    <div className='bg-red-400 text-white p-3 shadow-lg shadow-stone-400  rounded-xl relative bottom-6'>
                                        <FiUserPlus className='text-2xl' />
                                    </div>
                                    <div>
                                        <p className='text-xs text-stone-500'>Followers</p>
                                        <p className='font-bold text-stone-600'>20,003</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div>
                                    <p className='text-stone-400 text-xs mt-3 mb-3'>Just Updated</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 pt-3'>
                        <div className='flex flex-row '>
                            <div className='basis-2/6 mx-2 mt-5 '>
                                <div className='bg-white p-2 rounded-xl'>
                                    <div className=''>
                                        <div className='bg-blue-600 text-white p-3 shadow-lg shadow-stone-400 rounded-xl relative bottom-10'>
                                            <Bar options={options} data={data} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-stone-600 font-bold text-sm'>Website Viewer</p>
                                        <p className='text-stone-400 mb-3 text-xs '>last Campaign Performance</p>
                                    </div>
                                    <hr></hr>
                                    <div>

                                        <div className='flex items-center'>
                                            <BiTransferAlt className='text-stone-500 text-sm mx-2' />
                                            <p className='text-stone-400 text-xs mt-3 mb-3'> Campaign sent 2 days ago</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='basis-2/6 mx-2 mt-5 '>
                                <div className='bg-white p-2 rounded-xl'>
                                    <div className=''>
                                        <div className='bg-green-500 text-white p-3 shadow-lg shadow-stone-400 rounded-xl relative bottom-10'>
                                            <Line options={options} data={data} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-stone-600 font-bold text-sm'>Daily Sales</p>
                                        <p className='text-stone-400 mb-3 text-xs '><span className='text-stone-900 font-bold'>(+15%)</span> increase % today sales</p>
                                    </div>
                                    <hr></hr>
                                    <div>

                                        <div className='flex items-center'>
                                            <BiTransferAlt className='text-stone-500 text-sm mx-2' />
                                            <p className='text-stone-400 text-xs mt-3 mb-3'> Updated 4min ago</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='basis-2/6 mx-2 mt-5 '>
                                <div className='bg-white p-2 rounded-xl'>
                                    <div className=''>
                                        <div className='bg-stone-600 text-white p-3 shadow-lg shadow-stone-400 rounded-xl relative bottom-10'>
                                            <Line options={options} data={data} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-stone-600 font-bold text-sm '>Completed Tasks</p>
                                        <p className='text-stone-400 mb-3 text-xs '>last Campaign Performance</p>
                                    </div>
                                    <hr></hr>
                                    <div>

                                        <div className='flex items-center'>
                                            <BiTransferAlt className='text-stone-500 text-sm mx-2' />
                                            <p className='text-stone-400 text-xs mt-3 mb-3'>Just ypdated</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='flex flex-row '>
                        <div className='basis-4/6 mx-2 mt-5 '>
                            <div className='bg-white p-4 rounded-xl'>
                                <div className='flex justify-between items-start '>
                                    <div className=''>
                                        <p className='text-sm font-semibold text-stone-600'>Projects</p>
                                        <div className='flex items-center'>
                                            <AiOutlineCheck className='text-blue-500 mt-1'/>
                                            <p className='text-slate-500  text-xs'><span className='text-slate-600 font-bold text-xs'>30 done</span> this month</p>
                                        </div>
                                    </div>
                                    <div>
                                        <BiDotsVerticalRounded className='text-lg font-semibold text-stone-600 cursor-pointer'/>
                                    </div>
                                </div>

                                <div className='mt-3'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>dcdsf</th>
                                                <th>dcdsf</th>
                                                <th>dcdsf</th>
                                                <th>dcdsf</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>

                        </div>

                        <div className='basis-2/6 mx-2 mt-5 '>
                            <div className='bg-white p-2 rounded-xl'>
                                <div className='flex justify-between items-start'>
                                    <div className='bg-stone-800 text-white p-3 shadow-lg shadow-stone-400 rounded-xl relative bottom-6'>
                                        <AiOutlinePrinter className='text-2xl' />
                                    </div>
                                    <div>
                                        <p className='text-xs text-stone-500'>Booking</p>
                                        <p className='font-bold text-stone-600'>200</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div>
                                    <p className='text-stone-400 text-xs mt-3 mb-3'><span className='text-green-600 '>+55%</span> than last week</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header