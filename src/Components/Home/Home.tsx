import { Link, NavLink } from 'react-router-dom';
import img from '../../assets/logo-BfNap0Pe.png';
import Meals from '../Meals/Meals.tsx';

export default function Home() {
  return (
    <>
     <div>
  <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span className="sr-only">Open sidebar</span>
    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
    </svg>
  </button>
  <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar">
    <div className="h-full px-3 py-4  bg-gray-100 ">
                      <img src={img} className='w-full' alt="" />
                      <Link to='/' type="Link" className="w-full block focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 font-medium text-center rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"><i className="fa-solid me-2 fa-utensils"></i>Yellow</Link>
                      <Link to='/' type="Link" className="text-yellow-400 block w-full hover:text-white border border-yellow-400 hover:bg-yellow-500  focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"><i className="fa-solid me-2 fa-utensils "></i>Yellow</Link>
                      <Link to='/' type="Link" className="text-yellow-400 w-full block hover:text-white border border-yellow-400 hover:bg-yellow-500  focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"><i className="fa-solid me-2 fa-utensils"></i>Yellow</Link>
    </div>
  </aside>
  <div className="p-4 sm:ml-64 ">
                  <div className='meals border-b border-gray-200 '>
                      <h1 className='text-4xl italic font-bold text-yellow-500'>Learn, Cook, Eat Your Food</h1>
                      <div className='mb-2 mt-10'>
                      <NavLink to='/' className='py-1 mb-4  inline-block cursor-pointer hover:shadow-xl transition-all me-5 px-4 border border-gray-400 shadow-md text-gray-400 rounded-2xl '>All</NavLink>
                      <NavLink to='/Beef' className='py-1 mb-4 inline-block cursor-pointer me-5  hover:shadow-xl transition-allpx-4 px-4 border border-gray-400 shadow-lg text-gray-400 rounded-2xl '>Beef</NavLink>
                      <NavLink to='/Breakfast' className='py-1 mb-4 inline-block cursor-pointer me-5 px-4 border border-gray-400 shadow-lg text-gray-400 rounded-2xl '>Breakfast</NavLink>
                      <NavLink to='/Chicken' className='py-1 mb-4 inline-block cursor-pointer me-5 hover:shadow-xl transition-all px-4 border border-gray-400 shadow-lg text-gray-400 rounded-2xl '>Chicken</NavLink>
                      <NavLink to='/Dessert' className='py-1 mb-4 inline-block cursor-pointer me-5 hover:shadow-xl transition-all px-4 border border-gray-400 shadow-lg text-gray-400 rounded-2xl '>Dessert</NavLink>
                      <NavLink to='/goat' className='py-1 mb-4 inline-block cursor-pointer me-5 hover:shadow-xl transition-all px-4 border border-gray-400 shadow-lg text-gray-400 rounded-2xl '>Goat</NavLink>
                      <NavLink to='/Lamb' className='py-1 mb-4 inline-block cursor-pointer me-5 hover:shadow-xl transition-all px-4 border border-gray-400 shadow-lg text-gray-400 rounded-2xl '>Lamb</NavLink>
                      <NavLink to='/Miscellaneous' className='py-1 mb-4 inline-block cursor-pointer me-5 hover:shadow-xl transition-all px-4 border border-gray-400 shadow-lg text-gray-400 rounded-2xl '>Miscellaneous</NavLink>
                      <NavLink to='/Pasta' className='py-1 mb-4 inline-block cursor-pointer me-5 hover:shadow-xl transition-all px-4 border border-gray-400 shadow-lg text-gray-400 rounded-2xl '>Pasta</NavLink>
                      <NavLink to='/Pork' className='py-1 mb-4 inline-block cursor-pointer me-5 px-4 hover:shadow-xl transition-all border border-gray-400 shadow-lg text-gray-400 rounded-2xl '>Pork</NavLink>
                      <NavLink to='/Seafood' className='py-1 mb-4 inline-block cursor-pointer me-5 px-4 hover:shadow-xl transition-all border border-gray-400 shadow-lg text-gray-400 rounded-2xl '>Seafood</NavLink>
                      <NavLink to='/Side' className='py-1 mb-4 inline-block cursor-pointer me-5 px-4 hover:shadow-xl transition-all border border-gray-400 shadow-lg text-gray-400 rounded-2xl '>Side</NavLink>
                      <NavLink to='/Starter' className='py-1 mb-4 inline-block cursor-pointer me-5 px-4 hover:shadow-xl transition-all border border-gray-400 shadow-lg text-gray-400 rounded-2xl '>Strater</NavLink>
                      <NavLink to='/Vegan' className='py-1 mb-4 inline-block cursor-pointer me-5 px-4 hover:shadow-xl transition-all border border-gray-400 shadow-lg text-gray-400 rounded-2xl '>Vegan</NavLink>
                      <NavLink to='/Vegetarian' className='py-1 mb-4 inline-block cursor-pointer me-5 px-4 hover:shadow-xl transition-all border border-gray-400 shadow-lg text-gray-400 rounded-2xl '>Vegetarian</NavLink>
            </div>
            <Meals/>
                  </div>
  </div>
</div>

 
    </>
  )
}
