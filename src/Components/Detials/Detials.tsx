
import img from '../../assets/logo-BfNap0Pe.png';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@mui/material';
export default function Detials() {
    const { id } = useParams()
    function getdetails() {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    }
    const { data,isLoading } = useQuery({
        queryFn: getdetails,
        queryKey:['getdetails',id]
    })
  if (isLoading) {
    return <Skeleton/>
  }
  return (
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

          <div className='sm:ml-64'>
            <div className='p-4 container bg-gray-200'>
                <div className="grid lg:grid-cols-3 gap-10">
                    <div>
                        <h2 className='text-4xl font-bold mb-3'>{data?.data.meals[0].strMeal}</h2>
                        <img src={data?.data.meals[0].strMealThumb} className='w-full rounded-4xl mb-5' alt="" />
                        <div className='flex justify-center items-center gap-5'>
                            
                        <a className='text-white bg-red-600 py-2 px-5 rounded-2xl' href={data?.data.meals[0].strYoutube}><i className='fa-brands fa-youtube me-2 align-baseline'></i>you tube</a>
                        <a className='text-white bg-green-600 py-2 px-5 rounded-2xl' href={data?.data.meals[0].strSource}><i className='fa-solid fa-earth me-2 align-baseline'></i>source</a>
                        </div>
                    </div>
                    <div>
                        <p>{ data?.data.meals[0].strInstructions }</p>
                    </div>
                      <div className='p-4 bg-white h-fit rounded-3xl'>
                          <h2 className='text-2xl pb-2 font-bold border-b-2  border-gray-400 '>Ingredients</h2>
                          <p className='flex justify-between w-full items-center py-2 border-b border-gray-300 text-gray-800'><span>{data?.data.meals[0].strIngredient1}</span><span>{ data?.data.meals[0].strMeasure1 }</span></p>
                          <p className='flex justify-between items-center py-2 border-b border-gray-300 text-gray-800'><span>{data?.data.meals[0].strIngredient2}</span><span>{ data?.data.meals[0].strMeasure2 }</span></p>
                          <p className='flex justify-between items-center py-2 border-b border-gray-300 text-gray-800'><span>{data?.data.meals[0].strIngredient3}</span><span>{ data?.data.meals[0].strMeasure3 }</span></p>
                          <p className='flex justify-between items-center py-2 border-b border-gray-300 text-gray-800'><span>{data?.data.meals[0].strIngredient4}</span><span>{ data?.data.meals[0].strMeasure4 }</span></p>
                          <p className='flex justify-between items-center py-2 border-b border-gray-300 text-gray-800'><span>{data?.data.meals[0].strIngredient5}</span><span>{ data?.data.meals[0].strMeasure5 }</span></p>
                          <p className='flex justify-between items-center py-2 border-b border-gray-300 text-gray-800'><span>{data?.data.meals[0].strIngredient6}</span><span>{ data?.data.meals[0].strMeasure6 }</span></p>
                          <p className='flex justify-between items-center py-2  text-gray-800'><span>{data?.data.meals[0].strIngredient7}</span><span>{ data?.data.meals[0].strMeasure7 }</span></p>
                    </div>
                </div>
            </div>
          </div>
    </div>
  )
}
