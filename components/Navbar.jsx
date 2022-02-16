import Link from "next/link";
import New from "../components/New";
import { useState, useContext } from "react";
import { ListingsContext } from "../context/ListingsContext";

// pass set display and set state and defaultState as props


export default function Navbar({users}) {
  const { user, switchUser } = useContext(ListingsContext);
  const test = user;
  const [searchValue, setSearchValue] = useState("");
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay((prev) => !prev);
  };

  const userList = users.map((user) => {
    return (
      //bug alert
      <option value={test} key={user.id}className="user-option">
        {user.name}
      </option>
    );
  });

  return (
    <div className="navbar sticky top-0 z-index shadow-lg bg-gray-dark text-off-white">
      <div className="flex-none px-2 mx-2">
        <Link href="/">
          <a className="text-lg font-lucky font-bold">Up4Grabs</a>
        </Link>
      </div>
      {display && <New handleClick={handleClick} setDisplay={setDisplay} />}
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          <Link href="#listings">
            <a className="btn input input-ghost btn-sm rounded-btn">Listings</a>
          </Link>
          <a className="btn input input-ghost btn-sm rounded-btn mx-3">
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

          <a
            onClick={handleClick}
            className="btn input input-ghost btn-sm rounded-btn"
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
            className="mr-5 p-4 input input-ghost h-7"
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

        <div className="flex">
          <label for="select-user">
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
          <select
            name="Users"
            onChange={switchUser}
            className="ml-1 text-white btn btn-sm input input-ghost"
          >
            <option value="0" className="" disabled selected>
              Switch user
            </option>
            {userList}
          </select>
        </div>
      </div>
    </div>
  );
}
