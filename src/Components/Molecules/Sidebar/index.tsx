import Sidebaritems from '../../Atoms/Sidebaritem'
import { GoHeartFill, GoHomeFill, GoPlus, GoSearch} from 'react-icons/go'
import { IoPerson } from "react-icons/io5";
import { FaThreads } from "react-icons/fa6";
import { VscPinned } from 'react-icons/vsc';
import { HiBars3BottomLeft } from 'react-icons/hi2';
import { useEffect, useRef, useState } from 'react';

const dataSidebarMid = [
    {
        id : 1,
        icon: <GoHomeFill size={27}/>,
    },
    {
        id : 2,
        icon: <GoSearch size={27}/>,
    },
    {
        id : 3,
        icon: <GoPlus size={27}/>,
    },
    {
        id : 4,
        icon: <GoHeartFill size={27}/>,
    },
    {
        id : 5,
        icon: <IoPerson size={27}/>,
    }
]; 

const menuItems = [
    { id: 1, label: "For you" },
    { id: 2, label: "Following" },
    { id: 3, label: "Liked" },
    { id: 4, label: "Saved" },
    { id: 5, label: "Search" },
    { id: 6, label: "Activity" },
    { id: 7, label: "Profile" },
    { id: 8, label: "Insights" },
    { id: 9, label: "Custom feeds" }
];
const Sidebar = () => {
    const [openOption,setOpenOption] = useState (false);
    const menuRef = useRef(null);

    const handleOpenOption = () => {
        setOpenOption(!openOption);
    }

    const handleClickOutside = (event: { target: any; }) => {
        if(menuRef.current && !menuRef.current.contains(event.target)) {
            setOpenOption(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);
    
    return (
    <div className='flex flex-col justify-between h-full items-center max-h-screen overflow-visible '>
        <div>
            <div className="w-fit transition-all hover:scale-105">
                <FaThreads size={35}/>
            </div>
        </div>
            <div>
                <div className="flex flex-col items-center gap-5">
                    {dataSidebarMid.map((item) => (
                        <Sidebaritems key={item.id} icon={item.icon}/>
                    ))}
                </div>
            </div>
            <div className='space-y-2 pb-4 relative'>
                {/* BUTTON PIN */}
                {openOption && (
                    <>
                        <div className='absolute bg-zinc-900 border-zinc-700 border-[1px] w-96 bottom-20 px- rounded-2xl' ref={menuRef}>
                            <div className='flex flex-col items-start font-semibold px-4 py-3'>
                                <div className='py-2 flex justify-center items-center w-full'>
                                    <span>Pin to home</span>
                                </div>
                                <div className='py-4 relative w-full'>
                                    <div className='absolute inset-y-0 left-4 flex items-center opacity-50'>
                                        <GoSearch/>
                                    </div>
                                    <input type="text" placeholder='Search keywords and profiles'className="border-zinc-700 border-[1px] font-light bg-black text-white w-full pl-10 py-2 rounded-xl placeholder-zinc-400 focus:outline-none"/>
                                </div>
                                {menuItems.map ((item) => (
                                    <div key={item.id}className='flex items-center transition-all hover:bg-white/5 w-full py-3.5 px-3 rounded-xl '>
                                        <a href="#">{item.label}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                <div onClick={handleOpenOption}> 
                    <a href="#">
                        <div     className={`relative flex items-center transition-all hover:opacity-100 w-fit py-2 px-5 rounded-xl ${openOption ? "z-10 opacity-0 pointer-events-none" : "z-20 opacity-20"}`}>
                            <VscPinned size={30}/>
                        </div>
                    </a>
                </div>
                {/* BUTTON MORE */}
                <div>
                    <a href="#">
                        <div className="flex items-center opacity-20 transition-all hover:opacity-100 w-fit py-2 px-5 rounded-xl">
                            <HiBars3BottomLeft size={30}/>
                        </div>
                    </a>
                </div>
            </div>
    </div>
  )
}

export default Sidebar
