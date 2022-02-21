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

  const handleClickNew = () => {
    setNewDisplay((prev) => !prev);
  };

  const userList = users.map((oneUser) => {
    return (
      <option value={oneUser.id} key={oneUser.id} className="user-option">
        {oneUser.name}
      </option>
    );
  });

  return (
    <div className="navbar sticky top-0 z-index shadow-lg bg-gray-dark text-off-white">
      <div className="">
        <Link href="/">
          <a className="lg:text-lg mt-2 font-lucky font-bold ">Up4Grabs</a>
        </Link>
      </div>
      {newDisplay && (
        <New handleClick={handleClickNew} setDisplay={setNewDisplay} />
      )}

      <div className="lg:px-2 lg:mx-2">
        <div className="lg:flex">
          <Link href="#listings">
            <a className="btn lg:btn-sm input input-ghost rounded-btn">
              Listings
            </a>
          </Link>
          <Link href="/users/likes">
            <a className="btn lg:btn-sm input input-ghost rounded-btn lg:mx-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="lg:w-6 lg:h-6  hover:fill-red hover:text-red stroke-current"
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
            className="btn lg:btn-sm input input-ghost rounded-btn"
          >
            <svg
              className="lg:h-6 lg:w-6 text-white "
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
      <div className="">
        <div className="">
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
            className="lg:ml-2 lg:mr-2 lg:w-32 btn lg:btn-sm text-white focus:bg-white input input-ghost"
          />
        </div>
        <a
          onClick={() => onSearch(searchValue)}
          className="btn lg:btn-sm input input-ghost lg:mr-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="lg:h-6 lg:w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </a>
      </div>
      <div className="">
        <div className="flex">
          <label htmlFor="users">
            <svg
              className="lg:h-7 lg:w-7 text-white mt-1"
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
              name="users"
              onChange={(e) => {
                switchUser(e.target.value);
              }}
              className=" text-white lg:w-24 btn lg:btn-sm input input-ghost"
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
