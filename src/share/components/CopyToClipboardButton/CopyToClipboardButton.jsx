import React, { useRef, useState } from 'react'
import { IoCopyOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";


export default function CopyToClipboardButton({value}) {
    const textRef = useRef(null);
    const [showCheck, setShowCheck] = useState(false);


    const copyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(value);
          setShowCheck(true);
    
          setTimeout(() => {
            setShowCheck(false);
          }, 1000);
        } catch (error) {
          console.error('Error copying to clipboard:', error);
        }
    };
  
    return (
        <button
            className='col-span-4 md:col-span-1 relative px-4 py-2 group/copy text-black bg-sky-300 rounded-lg grid place-content-center cursor-pointer'
            onClick={copyToClipboard}
        >
            <input readOnly={true} hidden ref={textRef} id="email" className="text-lg bg-transparent w-full" value={value} />
            {showCheck ? <FaCheck size={24} /> : <IoCopyOutline size={24} />}
        </button>
    );
}
