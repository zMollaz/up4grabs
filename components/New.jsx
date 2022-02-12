export default function New({handleClick}) {
  
  return (
    <div
      id="authentication-modal"
      aria-hidden="true"
      className={` max-w-fill overflow-y-auto overflow-x-auto fixed  right-0 left-0 top-4 z-100 justify-center items-center h-modal md:h-full md:inset-0`}
    >
      <div className="absolute inset-0  w-full  h-full md:h-auto">
        <div className="flex justify-center items-center rounded-lg shadow w-screen h-screen">
          <div className="flex max-w-fill p-2 w-[100%] h-screen absolute opacity-75 bg-t-gray">
            <button
              onClick={handleClick}
              type="button"
              className="text-black hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  absolute right-0 top-0"
              data-modal-toggle="authentication-modal"
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
          </div>
          <form
            className="px-4 pb-4 space-y-10 rounded-lg lg:px-8 sm:pb-6  bg-white relative"
            action="#"
          >
            <div>
              <label
                htmlFor="title"
                className="block mt-6 text-sm font-medium text-black "
              >
                Title
              </label>
              <input
                name="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="..."
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-black "
              >
                Description
              </label>
              <textarea
                type="text"
                name="description"
                placeholder="..."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
  );
}
