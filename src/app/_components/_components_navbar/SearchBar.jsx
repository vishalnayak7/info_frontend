'use client'

import { Search, X } from 'lucide-react'
import { useState, useEffect } from 'react'

import Link from 'next/link'
import { useSearch } from '@/app/utils/apis/SearchApi';

export default function SearchBar() {
     const [query, setQuery] = useState('');
     const [showDropdown, setShowDropdown] = useState(false);
     const { data, isLoading } = useSearch(query);

     useEffect(() => {

          setShowDropdown(data?.length > 0 ? true : false);

     }, [query, data]);


     return (
          <div className="relative   w-[280px]">

               <div className="flex items-center gap-2 bg-[#fffffff5] px-3 py-1.5 rounded-full">

                    <Search size={20} className="text-black/70" />
                    
                    <input
                         type="text"
                         name="search"

                         value={query}
                         onChange={(e) => setQuery(e.target.value)}
                         placeholder="Search"
                         className="w-full text-sm text-black bg-transparent outline-none font-nunito placeholder:text-black/60"
                    />
               </div>

            

               {
                    showDropdown &&
                    <div className="absolute z-50 right-0 w-[450px] p-2 bg-whiteish-300  dark:bg-blackish-400 shadow-lg rounded-md mt-2   overflow-y-auto">

                         {data?.map((item) => {
                              if (item?.type == 'TAG') {
                                   return (
                                        <Link onClick={() => { setShowDropdown(false); setQuery('') }} href={'/' + item?.slug} key={item?.slug} className="block px-4 py-2 hover:bg-gray-100">
                                             <span className="text-black font-manrope  ">{item?.name}</span>
                                        </Link>
                                   )
                              } else {
                                   return (
                                        <Link onClick={() => { setShowDropdown(false); setQuery('') }} href={'/blog/' + item?.slug} key={item?.slug} className="block rounded-md  p-2 text-black font-manrope leading-[120%]  font-semibold text-[15px] dark:text-whiteish-300 hover:bg-gray-200 dark:hover:bg-blackish-300">
                                             {item?.title}
                                        </Link>
                                   )

                              }
                         })}
                    </div>
               }

          </div>
     );
}
