import { useState } from "react";

export default function New({ handleClick }) {
  const defaultState = {
    title: "",
    description: "",
    img_src: "",
    end_date: "",
    postal_code: "K1Y4W1",
  };

  const [state, setState] = useState(defaultState);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const newState = { ...state, [name]: value };
    setState(newState);
  };

  const saveListing = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/new", {
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    });

    // saveImage(e);
    uploadToWebApi(e);
    const newListing = await response.json();
    setState(defaultState);
  };

  const imageToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const saveImage = (e) => {
    // console.log("Inside saveImage", e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      const savedImage = e.target.files[0];
      setState({ ...state, img_src: savedImage });
    }
  };

  //change state into listing before sending it to the backend
  // const uploadToWebApi = async (listing) => {
  //   // console.log("Inside uploadToWebApi", listing.img_src);
  //   const rawImage = await imageToBase64(listing.img_src);
  //   const parsedImage = rawImage.split(",")[1];
  //   // console.log(222, parsedImage);
  //   const body = new FormData();
  //   body.append("image", parsedImage);
  //   // console.log(333, Object.fromEntries(body));
  //   const imageServerWebApi = `https://api.imgbb.com/1/upload?key=44cfa4dc7b5f14fa19e55b846de10cd4`;
  //   const response = await fetch(imageServerWebApi, {
  //     method: "POST",
  //     body,
  //   });
  //   const res = await response.json();
  //   console.log(res);
  // };

  return (
    <div
      aria-hidden="true"
      className={`max-w-fill overflow-y-auto overflow-x-auto fixed  right-0 left-0 top-4 z-100 justify-center items-center h-modal md:h-full md:inset-0`}
    >
      <div className="absolute inset-0  w-full  h-full md:h-auto">
        {/* <div className="flex justify-center items-center rounded-lg shadow w-screen h-screen"> */}
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
        </div>
        <form
          onSubmit={saveListing}
          className="overflow-auto px-4 pb-4 space-y-8 rounded-lg  lg:px-8 sm:pb-6  bg-white fixed inset-24 "
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
              value={state.title}
              onChange={changeHandler}
              name="title"
              className="bg-gray-50 border border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
              value={state.value}
              onChange={changeHandler}
              type="text"
              name="description"
              placeholder="..."
              className="bg-gray-50 border border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required=""
            />
          </div>

          {/*  */}
          <div>
            <label
              htmlFor="title"
              className="block mt-6 text-sm font-medium text-black "
            >
              Postal code
            </label>
            <input
              onChange={changeHandler}
              value={state.postal_code}
              name="postal_code"
              className="bg-gray-50 border border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="..."
              required=""
            />
          </div>
          {/*  */}
          <label
            htmlFor="start"
            className="flow-root mt-2 text-sm font-medium text-black "
          >
            Draw Date{" "}
          </label>
          <input
            onChange={changeHandler}
            value={state.end_date}
            name="end_date"
            className="bg-gray-50 border border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="date"
            min="2020-01-01"
            max="2024-12-31"
          />
          {/*  */}
          <div className="flex justify-center">
            <div className="max-w-2xl rounded-lg bg-gray-50">
              <div className="">
                <label className="inline-block mb-2 text-gray-500">
                  File Upload
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex flex-col items-center justify-center pt-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                        Attach a file
                      </p>
                    </div>

                    {/* <input  */}
                    {/* onChange={(e) => saveImage(e)} */}

                    <input
                      onChange={saveImage}
                      // value={state.img_src}
                      type="file"
                      className="opacity-0"
                      name="img_src"
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-center p-2">
                <button className="w-full px-4 py-2 text-white bg-gray-dark rounded shadow-xl">
                  Create
                </button>
              </div>
            </div>
          </div>
          {/*  */}
        </form>
      </div>
      {/* </div> */}
    </div>
  );
}
