import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Skelton from '../Skelton/Skelton';


type MealType = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strArea?: string;
};
export default function Meals() {
    const { c } = useParams()
    console.log(c);
    
    function getMeals() {
        return axios.get(c === undefined ? 'https://www.themealdb.com/api/json/v1/1/search.php?s=':`https://themealdb.com/api/json/v1/1/filter.php?c=${c}`)
    }
    const { data,isLoading } = useQuery({
        queryFn: getMeals,
        queryKey: ['getMeals',c]
    })
    if (isLoading) {
        return <Skelton/>
    }
    return (
        <div className=' container mx-auto py-5'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-10'>
                {data?.data.meals.map((meal:MealType) => <div key={meal.idMeal} className='shadow-lg group rounded-2xl py-3 hover:scale-[1.1] transition-all   '>
                    <img src={meal.strMealThumb} className='w-1/2 -translate-y-6 group-hover:rotate-[360deg]
                    transition-all duration-500 rounded-full mx-auto' alt="" />
                    <p className='text-xl text-center text-gray-900'>{ meal.strMeal }</p>
                    {meal.strArea?<p className='text-green-600 text-center my-3'><i className='fa-solid fa-earth'></i>{meal.strArea}</p>:''}
                    <Link to={`/detials/${meal.idMeal}`} className='text-white block  bg-green-500 font-bold py-2 w-[75%] text-center  mx-auto rounded-4xl'>View Recipes</Link>
                </div>)}
            </div>
        </div>
    )
}