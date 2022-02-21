import Link from "next/link";
import New from "../components/New";
import { useState, useContext } from "react";
import { ListingsContext } from "../context/ListingsContext";
import { UsersContext } from "../context/UsersContext";

export default function Navbar(props) {
  const { onSearch, searchValue, setSearchValue } = useContext(ListingsContext);
  const { users, user, switchUser, loaded } = useContext(UsersContext); //with this line can import into any component and access users/ state level step-up
  // const [searchValue, setSearchValue] = useState("");
  const [newDisplay, setNewDisplay] = useState(false);
  const [showDropdown, setShowDropdown] = useState(true);

  const handleClickNew = () => {
    setNewDisplay((prev) => !prev);
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const isHidden = showDropdown ? "hidden" : "";

  const userList = users.map((oneUser) => {
    return (
      <option value={oneUser.id} key={oneUser.id} className="user-option">
        {oneUser.name}
      </option>
    );
  });

  return (
    <div className=" relative navbar sticky sm:flex flex-wrap  top-0 z-index shadow-lg bg-gray-dark text-off-white">
      <div class="md:hidden flex items-center">
        <button
          onClick={handleDropdown}
          class="outline-none mobile-menu-button"
        >
          <svg
            class="w-6 h-6 text-gray-500"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {/* Mobile menu  */}
      <div class={`${isHidden} mobile-menu flex-col mobile-dropDown`}>
        <ul class="">
          <li>
            <Link href="#listings">
              <a className=" ml-2.5 mt-0.5 btn input input-ghost btn-sm rounded-btn">
                <svg
                  class="w-7 h-7  text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />{" "}
                  <rect x="9" y="3" width="6" height="4" rx="2" />{" "}
                  <line x1="9" y1="12" x2="9.01" y2="12" />{" "}
                  <line x1="13" y1="12" x2="15" y2="12" />{" "}
                  <line x1="9" y1="16" x2="9.01" y2="16" />{" "}
                  <line x1="13" y1="16" x2="15" y2="16" />
                </svg>
              </a>
            </Link>
          </li>
          <Link href="/users/likes">
            <a className="mt-1 btn input input-ghost btn-sm rounded-btn mx-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6  hover:fill-red hover:text-red stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </a>
          </Link>
        </ul>
        <a
          onClick={handleClickNew}
          className=" mb-2 mt-1 btn input input-ghost btn-sm rounded-btn"
        >
          <svg
            className="h-6 w-6 text-white "
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

      {/* large-screen size */}

      <div className="flex-none px-2 mx-2">
        <Link href="/">
          <a className="text-lg mt-2 font-lucky font-bold">Up4Grabs</a>
        </Link>
      </div>
      {newDisplay && (
        <New handleClick={handleClickNew} setDisplay={setNewDisplay} />
      )}

      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch lg:flex">
          <Link href="#listings">
            <a className="hidden sm:block btn input input-ghost btn-sm rounded-btn">
              Listings
            </a>
          </Link>
          <Link href="/users/likes">
            <a className="hidden sm:block btn input input-ghost btn-sm rounded-btn mx-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="mb-2 inline-block w-6 h-6  hover:fill-red hover:text-red stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </a>
          </Link>

          <a
            onClick={handleClickNew}
            className="hidden sm:block btn input input-ghost btn-sm rounded-btn"
          >
            <svg
              className="mt-0.5 h-6 w-6 text-white "
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
      <div className="flex-1 lg:flex-none">
        <div className="form-control">
          <input
            defaultValue={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              onSearch(searchValue);
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
            // placeholder="Search"
            className="mr-5 p-4 text-white btn btn-sm input input-ghost h-7"
          />
        </div>
        <button
          onClick={() => onSearch(searchValue)}
          className="btn btn-sm mr-10 input input-ghost "
        >
          search
        </button>
      </div>
      <div className="">
        <div className="">
          <i className=""></i>
        </div>

        <div className="flex flex-row">
          <label htmlFor="select-user">
            <svg
              className="h-6 w-6 text-white mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </label>
          {loaded && (
            <select
              name="Users"
              onChange={(e) => {
                switchUser(e.target.value);
              }}
              className=" text-white w-[250px] btn btn-sm input input-ghost"
              value={user.id}
            >
              <option value="0" className="" disabled>
                Switch user
              </option>
              {userList}
            </select>
          )}
        </div>
      </div>
    </div>
  );
}
