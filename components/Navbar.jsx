import Link from "next/link";
import New from "../components/New";
import { useState, useContext } from "react";
import {ListingsContext} from "../context/ListingsContext"

export default function Navbar() {
  const {onSearch} = useContext(ListingsContext);
  const [searchValue, setSearchValue] = useState("");
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <div className="navbar sticky top-0 -z-500 shadow-lg bg-gray-dark text-off-white">
      <div className="flex-none px-2 mx-2">
        <span className="text-lg font-bold">Up4Grabs</span>
      </div>
      {display && <New handleClick={handleClick} setDisplay={setDisplay}/>}
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          <Link href="/">
            <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
          </Link>
          <Link href="/">
            <a className="btn btn-ghost btn-sm rounded-btn">Listings</a>
          </Link>
          <a className="btn btn-ghost btn-sm rounded-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </a>

          <a onClick={handleClick} className="btn btn-ghost btn-sm rounded-btn">
            <svg
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />{" "}
              <line x1="12" y1="8" x2="12" y2="16" />{" "}
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </a>
        </div>
      </div>
      <button onClick={() => onSearch(searchValue)} className="btn btn-">
      enter
      </button>
      <div className="flex-1 lg:flex-none">
        <div className="form-control">
          <input
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              if (e.target.value === "") {
                onSearch("");
              }
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                onSearch(searchValue);
              }
            }}
            type="text"
            placeholder="Search"
            className="input input-ghost h-7"
          />
        </div>
      </div>
    </div>
  );
}
