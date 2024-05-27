import React from 'react';
import { IoDocumentOutline } from "react-icons/io5";
const TelechargerDoc = ({ text, link }) => {
    return (
        <div className="relative my-[1%] ">
            <div className="flex items-center">
                <button
                    className="text-black bg-white border min-w-[50%] border-gray-400 shadow-sm relative z-10"
                    type="button"
                >
                    <div className="flex items-center">
                        <div className="bg-[#185B9C] w-12 h-12 flex justify-center items-center text-white">
                            <IoDocumentOutline size={24} />
                        </div>
                        <div className="p-2 ml-2 flex items-center">
                            <a className="font-poppins text-[18px]" href={link}>{text}</a>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default TelechargerDoc