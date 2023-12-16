import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from '@/utils/axios'
import MainLayout from '@/layouts/MainLayout';

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('access_token') === null) {
      router.push('/login')
    }

    // (async () =>{
    //   try {
    //     const {data} = await axios.get(`/home/`)
    //     console.log('data ',data)
    //   }
    //   catch (e){
    //     console.log('not auth ',e)
    //   }
    // })()
  }, [])

  return (
    <MainLayout>

    </MainLayout>
  )
}

export default Home