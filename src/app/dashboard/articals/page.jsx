"use client"

import Headings from '@/app/_components/_resusable_components/Headings'
import IImage from '@/app/_components/_resusable_components/IImage';
import { Eye, Heart, PencilSimpleLine, TrashSimple } from '@phosphor-icons/react/dist/ssr'
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link'
import { useSelector } from 'react-redux';

export default function page() {

  const { user_data } = useSelector(state => state.HomeSlice);

  const { data, isLoading } = useQuery({
    queryKey: ["articalsByuser"],
    queryFn: async () => await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/user/blogs/${user_data.user_id}`).then(res => res.json()),
    enabled: true,
  });

  console.log(data, isLoading)

  return (
    <div className='p-4'>

      <Headings title='Your Articals' subTitle='' />
      <div className="w-full py-3 flex flex-row justify-end">
        <Link
          href="/dashboard/articals/createNew"
          className="font-inter font-medium text-green-500"
        >
          + Write Artical
        </Link>
      </div>

      <div className=' space-y-2 py-5'>

        {
          data?.data?.map((item, index) => (
            <SingleBlog key={index} data={item} />
          ))
        }

      </div>

    </div>
  )
}



function SingleBlog({ data }) {
  return (
    <div className=' flex bg-gray-50 p-3 rounded-2xl w-full flex-row justify-between  items-center h-[90px]  '>

      <div className=' flex flex-row  items-center h-full gap-4'>

        <div className=' aspect-square overflow-hidden relative  h-full bg-gray-100 rounded-xl'>
          <IImage url={data?.thumbnail} quality={10} alt={data?.title}  />
        </div>

        <div className=' flex flex-col h-full  justify-between '>
          <p className=' font-manrope text-[16px] font-semibold '>{data?.title}</p>
          <p className=' text-[14px] font-inter text-black/70 tracking-wide '>Created At</p>
        </div>
      </div>


      <div className=' pr-4 flex flex-row  items-center'>

        <div className=' flex text-gray-400 flex-row items-center'>


          <span className=' mr-2   font-inter text-[20px]'>0</span>

          <Eye size={22} weight="fill" className=' mr-8' />

          <span className=' mr-2   font-inter text-[20px]'>
            0
          </span>

          <Heart size={22} weight="fill" className=' mr-8' />

    
        </div>

        <button className=' font-medium mx-6 font-inter   text-[13px]'>
          Edit
          {/* <PencilSimpleLine size={22} weight="fill" /> */}
        </button>
        <button className=' font-medium font-inter text-red-600 text-[13px]'>
          Delete
          {/* <TrashSimple size={22} weight="fill" /> */}
        </button>
      </div>
    </div>
  )
}