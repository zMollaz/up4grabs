import React from "react";

export default function Navbar() {
  return (
    <div className="navbar mb-2 shadow-lg bg-aqua text-neutral-content">
      <div className="flex-none px-2 mx-2">
        <span className="text-lg font-bold">Up4Grabs</span>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
          <a className="btn btn-ghost btn-sm rounded-btn">Listings</a>
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
        </div>
      </div>
      <div className="flex-1 lg:flex-none">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-ghost"
          />
        </div>
      </div>
    </div>
  );
}
