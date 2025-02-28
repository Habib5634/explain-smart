"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
const router = useRouter()
    // Toggle Sidebar
    const toggleSidebar = () => setIsOpen(!isOpen);
    const handleScroll = (id) => {
        router.push(id)
        // const element = document.getElementById(id);
        // if (element) {
        //     // Scroll to the section if it exists
        //     element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false)
        // }
    }
    return (
        <div>
            {/* Menu Button */}
            <div className="text-thr  cursor-pointer" onClick={toggleSidebar}>
                <FaBars size={25} />
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: isOpen ? "0%" : "100%" }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col"
            >
                {/* Close Button */}
                <div className="flex justify-between items-center pl-4">
                    <img src="/assets/logo.png" alt="" className="h-[71px] w-[71px] mt-7" />
                    <FaTimes size={22} className="absolute top-4 left-4 cursor-pointer" onClick={toggleSidebar} />
                </div>

                {/* Sidebar Items */}
                <nav className="flex flex-col gap-6 p-4 text-gray-800">
                    <div onClick={() => handleScroll('/')} className="hover:text-blue-500  cursor-pointer">Home</div>
                    <div onClick={() => handleScroll('/')} className="hover:text-blue-500  cursor-pointer">Our Missions</div>
                    <div onClick={() => handleScroll('/blog')} className="hover:text-blue-500  cursor-pointer">Blog</div>
                    <div onClick={() => handleScroll('/')} className="hover:text-blue-500  cursor-pointer">Contact</div>
                
                </nav>
            </motion.div>
        </div>
    );
}