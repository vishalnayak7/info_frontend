'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import DropDown from "./_components_navbar/DropDown";
import MainNav_sideButton from "./_components_navbar/MainNav_sideButton";
import { useDispatch, useSelector } from "react-redux";
import { setUserLoginDetails, setUserLoginStatus } from "../utils/Redux/slices/HomePage.slice";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { GET_DROPDOWN_BLOGS } from "../utils/graphql/apis_gql";
import { gqlClient } from "./Wrapper";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropData, setDropData] = useState('');
  const [showSearch, setShowSearch] = useState(false);


  //  -- -------------    AUTHENTICATION CHECKING --------------- 
  const dispatch = useDispatch();
  const { is_user_logged_in, user_data } = useSelector(state => state.HomeSlice)

  async function checkToken() {

    let token = window.localStorage.getItem('PruthatekINFO_token');

    if (!token) {
      return;
    }

    let request = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/v1/auth/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token
      }),
    })
    let response = await request.json();

    if (response.status) {

      if (response.exp < Math.floor(Date.now() / 1000)) {
        window.localStorage.removeItem('PruthatekINFO_token');
        return;
      } else {
        dispatch(setUserLoginStatus(true));
        dispatch(setUserLoginDetails({
          user_id: response.user_id,
          username: response.username,
          avatar: response.avatar,
          accountType: response.accountType
        }));
      }

    } else {

      window.localStorage.removeItem('PruthatekINFO_token');
    }

  }

  useEffect(() => {
    if (!is_user_logged_in) {
      checkToken();
    }
  }, [is_user_logged_in]);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };





  //  ---------------    DROPDOWN DATA FETCHING --------------- 
  const { data, isLoading, error } = useQuery({
    queryKey: ["GET_DROPDOWN_BLOGS"],
    queryFn: () => gqlClient.request(GET_DROPDOWN_BLOGS, {
      tags: ["Trending", "AI", "Entertainment", "Tech", "Homes", "Education", "Money", "Wellness", "Home", "Deals", "Gift Guide", "Cover Stories"]
    }),
  });

  return (
    <div onMouseLeave={handleMouseLeave} className=" w-full    sticky  top-0 z-[200]">


      <div className=" w-full  relative z-[999] bg-blackish-500  dark:bg-black/60  backdrop-blur-md  md:dark:bg-blackish-500  md:bg-blackish-500 text-whiteish-400  ">

        <div onMouseEnter={handleMouseLeave} className=" py-3    max-w-screen-2xl w-[87%] md:w-[85%] flex flex-row items-center justify-between mx-auto  ">
          <Link href="/" className=" font-manrope text-xl flex flex-row items-center">
            <div className=" relative w-4 h-[15px] bottom-[-0.5px] right-[0.5px] ">
              <Image src="/images/footerLogo.png" fill className=" w-full h-full" alt="Pruthatek" />
            </div>
            <span className=" uppercase gradient-text leading-none   font-medium">
              ruthatek.info
            </span>
          </Link>

          <MainNav_sideButton showSearch={showSearch} setShowSearch={setShowSearch} />

        </div>


        <div onMouseEnter={handleMouseEnter} className="py-2.5 hidden   max-w-screen-2xl   w-[87%] md:w-[85%]  lg:flex flex-row justify-between  mx-auto  overflow-auto ">

          {
            data?.navbarDropDown?.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => { setDropData(item) }}
                className={` text-nowrap cursor-pointer font-semibold tracking-[0.01rem] text-[12px] lg:text-[14px]  xl:text-[16px]   font-nunito  ${item.cls}`}>
                {item.name}</div>
            ))
          }

        </div>


      </div>


      <DropDown setIsOpen={setIsOpen} isLoading={isLoading} isOpen={isOpen} dropData={dropData} handleMouseLeave={handleMouseLeave} />


    </div >
  )
}



const Navlinks_data = [
  {
    name: "Trending",
    href: "/Trending",
    cls: "",
    discription: "Start Exploring the latest news on pruthatek.info ,moves the dropdown up, which can cause it to go behind other elements.   "

  },
  {
    name: "AI",
    href: "/AI",
    cls: " pl-5",
    discription: "Start Exploring the latest news on pruthatek.info ,moves the dropdown up, which can cause it to go behind other elements.   "

  },
  {
    name: "Entertainment",
    href: "/Entertainment",
    cls: " pl-5",
    discription: "Start Exploring the latest news on pruthatek.info ,moves the dropdown up, which can cause it to go behind other elements.   "

  },
  {
    name: "Tech",
    href: "/Tech",
    cls: "",
    discription: "Start Exploring the latest news on pruthatek.info ,moves the dropdown up, which can cause it to go behind other elements.   "

  },
  {
    name: "Education",
    href: "/Education",
    cls: "",
    discription: "Start Exploring the latest news on pruthatek.info ,moves the dropdown up, which can cause it to go behind other elements.   "

  },
  {
    name: "Money",
    href: "/Money",
    cls: "",
    discription: "Start Exploring the latest news on pruthatek.info ,moves the dropdown up, which can cause it to go behind other elements.   "
  },
  {
    name: "Home",
    href: "/Home",
    cls: "",
    discription: "Start Exploring the latest news on pruthatek.info ,moves the dropdown up, which can cause it to go behind other elements.   "

  },
  {
    name: "Wellness",
    href: "/Wellness",
    cls: "",
    discription: "Start Exploring the latest news on pruthatek.info ,moves the dropdown up, which can cause it to go behind other elements.   "

  },
  {
    name: "Home Internet",
    href: "/HomeInternet",
    cls: "",
    discription: "Start Exploring the latest news on pruthatek.info ,moves the dropdown up, which can cause it to go behind other elements.   "

  },
  {
    name: "Deals",
    href: "/Deals",
    cls: " ",
    discription: "Start Exploring the latest news on pruthatek.info ,moves the dropdown up, which can cause it to go behind other elements.   "

  },
  {
    name: "Gift Guide",
    href: "/GiftGuide",
    cls: "",
    discription: "Start Exploring the latest news on pruthatek.info ,moves the dropdown up, which can cause it to go behind other elements.   "

  },
  {
    name: "Cover Stories",
    href: "/CoverStories",
    cls: " ",
    discription: "Start Exploring the latest news on pruthatek.info ,moves the dropdown up, which can cause it to go behind other elements.   "

  },
  {
    name: "More",
    href: "/More",
    cls: " "
  }
]