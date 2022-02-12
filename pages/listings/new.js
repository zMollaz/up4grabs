import Layout from "../../components/Layout";
import Header from "../../components/Header";
import { useState } from "react";

export default function Create() {
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <Layout onClick={handleClick}>
      <Header />
      {/* 
<div className={`w-screen h-screen z-100`}>
  <div className={`w-[500px] h-[500px] bg-gray opacity-25 absolute -z-5`}> </div>
  <div className={`w-[300px] h-[300px] bg-purple z-50 relative`}></div>
</div> */}

      <div>
        {display && (
          <div
            id="authentication-modal"
            aria-hidden="true"
            className={` max-w-fill overflow-y-auto overflow-x-auto fixed  right-0 left-0 top-4 z-100 justify-center items-center h-modal md:h-full md:inset-0`}
          >
            <div className="absolute inset-0  w-full  h-full md:h-auto">
              <div className="flex justify-center items-center rounded-lg shadow dark:bg-gray-700 w-screen h-screen">
                <div className="flex max-w-fill p-2 w-[100%] h-screen absolute opacity-75 bg-t-gray">
                  <button
                    onClick={() => {
                      setDisplay(!display);
                    }}
                    type="button"
                    className="text-black-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white absolute right-0 top-0"
                    data-modal-toggle="authentication-modal"
                  >
                    <svg
                      className="w-7 h-7 bg-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <form
                  className="px-4 pb-4 space-y-10 rounded-lg lg:px-8 sm:pb-6  bg-white relative"
                  action="#"
                >
                  <div>
                    <label
                      for="email"
                      className="block mt-6 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Title
                    </label>
                    <input
                      name="title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="..."
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Description
                    </label>
                    <textarea
                      type="text"
                      name="description"
                      placeholder="..."
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required=""
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-start"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
