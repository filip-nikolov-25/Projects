import Image from 'next/image';
import React from 'react'


const NotificationPopUp = ({ onClose }:any) => {
    return (
      <div className="fixed inset-0 h-[100vh]  flex items-center justify-center bg-black bg-opacity-50 z-60">
        <div className="bg-white rounded-lg p-5 flex relative">
          <div className='p-5 w-[20%]'>
            <Image src={"/popUpImg/popUpImg.svg"} width={300} height={300} alt='image' />
            </div>  
          <div className='p-5 w-[80%]'>
            <p className='text-gray-400 font-bold'>Уште само 5 дена до :</p>
            <h2 className='text-5xl w-[70%] mt-5 font-bold'>HR кафе : Потребата од зајакнување на соработ...</h2>
            <p className='mt-10'>25.07.2024 Лабараториум, Скопје</p>
            </div>        

            <i onClick={onClose}  className="fa-solid fa-x mt-4 cursor-pointer text-gray-400 text-3xl px-4 absolute top-2 right-6 py-2 rounded"></i>
        </div>
      </div>
    );
  };
  export default NotificationPopUp
  