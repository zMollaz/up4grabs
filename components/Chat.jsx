import { useEffect, useState } from "react";
import io from "Socket.IO-client";

let socket;

export default function Chat({ handleClick, setDisplay }) {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  console.log(111, messages);
  useEffect(() => {
    const socketInitializer = async () => {
      await fetch("/api/socket");
      socket = io();

      socket.on("connect", () => {
        console.log("connected");
      });

      socket.on("return", (messagesArr) => {
        console.log("Return", messagesArr);
        setMessages(messagesArr);

      });
    };
    socketInitializer();
    return () => {
      // socket.    get the proper syntax for socekt disconnection for cleanup
    };
  }, []);

  const changeHandler = (e) => {
    setText((prev) => {
      return e.target.value;
    });
  };

  const submitHandler = (e) => {

    e.preventDefault();
    setMessages((prev) => {
      const newMessages = [...prev, text];
      socket.emit("sent", newMessages);
      return newMessages;
    });

    setText((prev) => {
      console.log("Sent", prev);
      return "";
    });
  };

  return (
    //<div className="container">
     // <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
       // {/* <div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">

    <div className=" chat absolute container w-3">
      <div className=" border d-flex flex-column align-items-stretch flex-shrink-0 bg-gray-light">
        <div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">

          {/* <input
            className="fs-5 fw-semibold text-black "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /> */}
        </div> 
        <div
          className="list-group list-group-flush w-[250px] border-bottom scrollarea"
          style={{ minHeight: "250px" }}
        >
          {messages.map((message) => {
            console.log(121, message);
            return (
              <div className="">
                <div className="d-flex w-fit align-items-center justify-content-between">
                  {/* <strong className="mb-1">{message.username}</strong> */}
                  <strong className="mb-1">Owner</strong>
                </div>
                <div className=" mb-1 small">{message}</div>
              </div>
            );
          })}
        </div>
      </div>
      <form onSubmit={submitHandler} className="border-text-area">
        <input
          className="pl-6 form-control text-black"
          placeholder="Write a message"
          value={text}
          onChange={changeHandler}
        />
      </form>
    </div>
    
  );
}
