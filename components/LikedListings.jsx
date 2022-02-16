import Listings from "./ListingItem";
import Layout from "./Layout";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { ListingsContext } from "../context/ListingsContext";

export default function LikedListings({ handleClick, setDisplay }) {
  const { listings } = useContext(ListingsContext);
  return (
    // <Layout>
<div
      aria-hidden="true"
      className={`max-w-fill overflow-y-auto overflow-x-auto fixed  right-0 left-0 top-4 z-100 justify-center items-center h-modal md:h-full md:inset-0`}
    >
      <div className="absolute inset-0  w-full  h-full md:h-auto">
        <div className="flex w-full h-screen absolute opacity-75 bg-t-gray">
        <button
            onClick={handleClick}
            type="button"
            className="text-black hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  absolute right-0 top-0"
          >
            <svg
              className="w-7 h-7 bg-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <Listings />
        </div>
        
      </div>
    </div>
    // </Layout>
  )
}
