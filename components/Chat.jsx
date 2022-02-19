import React from "react";

export default function Chat({ handleClick, setDisplay }) {
  return (
    <div className=" chat absolute container w-3">
      <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
        <div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
          <input
            className="fs-5 fw-semibold"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div
          className="list-group list-group-flush border-bottom scrollarea"
          style={{ minHeight: "500px" }}
        >
          {/* {messages.map((message) => {
            return (
              <div className="list-group-item list-group-item-action py-3 lh-tight">
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1">{message.username}</strong>
                </div>
                <div className="col-10 mb-1 small">{message.message}</div>
              </div>
            );
          })} */}
        </div>
      </div>

      {/* <form onSubmit={submit}> */}
      <form >
        <input
          className="form-control"
          placeholder="Write a message"
          // value={message}
          // onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
    // <div
    //   aria-hidden="true"
    //   className={`max-w-fill overflow-y-auto overflow-x-auto  z-100 justify-center items-center h-modal md:h-[340px] md:inset-0`}
    // >
    //   <div className="absolute right-0  w-[390px]  h-full md:h-auto">
    //     <div className="flex flex-col items-start w-full h-fit absolute right-0 bottom-0 opacity-75 bg-t-gray">
    //       <button
    //         onClick={handleClick}
    //         type="button"
    //         className="text-black hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  absolute right-0 top-0"
    //       >
    //         <svg
    //           className="w-7 h-7 bg-white"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //             clipRule="evenodd"
    //           ></path>
    //         </svg>
    //       </button>

    //       <div className="w-fit h-fit">
    //         <div className="w-fit h-fit">
    //           {/* <!-- HEADING --> */}
    //           <div
    //             className=" w-fit h-fit top-0 bg-green-400 pt-2 text-white flex justify-between shadow-md"
    //             // style={"top":"0px"; "overscroll-behavior": "none"}
    //           >
    //             {/* <!-- back button --> */}
    //             <a href="#">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 24 24"
    //                 className="w-12 h-12 my-1 text-green-100 ml-2"
    //               >
    //                 <path
    //                   className="text-green-100 fill-current"
    //                   d="M9.41 11H17a1 1 0 0 1 0 2H9.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L9.4 11z"
    //                 />
    //               </svg>
    //             </a>

    //           </div>

    //           {/* <!-- MESSAGES --> */}
    //           <div className=" w-[250px] h-fit ">
    //             {/* <!-- SINGLE MESSAGE --> */}
    //             <div className="clearfix">
    //               <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg">
    //                 this is a basic mobile chat layout, build with tailwind css
    //               </div>
    //             </div>

    //             {/* <!-- SINGLE MESSAGE 2 --> */}
    //             <div className="clearfix">
    //               <div className="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
    //                 It will be used for a full tutorial about building a chat
    //                 app with vue, tailwind and firebase.
    //               </div>
    //             </div>

    //             {/* <!-- SINGLE MESSAGE 3 --> */}
    //             <div className="clearfix">
    //               <div className="bg-green-300 float-right w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">
    //                 check my twitter to see when it will be released.
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* <!-- MESSAGE INPUT AREA --> */}
    //         <div className=" w-fit h-fit flex justify-between bg-green-100">
    //           <textarea
    //             className="m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none"
    //             rows="1"
    //             placeholder="Message..."
    //           ></textarea>
    //           <button className="m-2 text-white">
    //             <svg
    //               className="svg-inline--fa text-green-400 fa-paper-plane fa-w-16 w-12 h-12 py-2 mr-2"
    //               aria-hidden="true"
    //               focusable="false"
    //               data-prefix="fas"
    //               data-icon="paper-plane"
    //               role="img"
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 512 512"
    //             >
    //               <path
    //                 fill="currentColor"
    //                 d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
