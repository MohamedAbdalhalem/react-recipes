
import img1 from '../../assets/logo-BfNap0Pe.png'
export default function Footer() {
  return (
<div>
       <div className='relative z-50 bg-white'>
         <div className='container p-5 mx-auto '>
               <div className='flex justify-between items-center pb-5 border-b '>
                   <div>
                       <img src={img1} className='w-[40px] inline align-bottom' alt="" />
                       <span className='text-xl font-bold'>Recipe</span>
                   </div>
                   <p className='text-xl text-blue-600 font-bold'>Mohamed</p>
               </div>
               <p className='text-gray-400 text-center mt-5'>© 2025 Mohamed abdalhalim™. All Rights Reserved.</p>
         </div>
       </div>
</div>
  )
}
