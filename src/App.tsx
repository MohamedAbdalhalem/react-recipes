
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from './Components/Layout/Layout'
import Detials from './Components/Detials/Detials'
import Home from './Components/Home/Home'

const router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      {
      path:'',element:<Home/>
    },
      {
        path:':c',element:<Home/>
      },
      {
        path:'detials/:id',element:<Detials/>
      }
    ]
  }
  
])
const client = new QueryClient()
export default function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}
