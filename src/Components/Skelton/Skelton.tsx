
import  Skeleton  from '@mui/material/Skeleton';

export default function Skelton() {
  return (
      <div className=' container mx-auto py-7'>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5'>
              <div>
              <Skeleton variant="rectangular" sx={{width:'100%,',mb:'10px'}} height={60} />
          <Skeleton variant="rectangular" sx={{width:'100%'}} height={60} />
          <Skeleton animation="wave" sx={{width:'100%'}} />
              </div>
              <div>
              <Skeleton variant="rectangular" sx={{width:'100%,',mb:'10px'}} height={60} />
          <Skeleton variant="rectangular" sx={{width:'100%'}} height={60} />
          <Skeleton animation="wave" />
              </div>
              <div>
              <Skeleton variant="rectangular" sx={{width:'100%,',mb:'10px'}} height={60} />
          <Skeleton variant="rectangular" sx={{width:'100%'}} height={60} />
          <Skeleton animation="wave" sx={{width:'100%'}} />
              </div>
              <div>
              <Skeleton variant="rectangular" sx={{width:'100%,',mb:'10px'}} height={60} />
          <Skeleton variant="rectangular" sx={{width:'100%'}} height={60} />
          <Skeleton animation="wave"  sx={{width:'100%'}}/>
              </div>
          </div>

    </div>
  )
}
