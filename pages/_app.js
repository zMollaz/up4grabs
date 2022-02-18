import "../styles/globals.css";
import useUsers from "../hooks/useUsers"
import {UsersContext} from "../context/UsersContext"

function MyApp({ Component, pageProps }) {
  return (
    <UsersContext.Provider value={useUsers()}>
      <Component {...pageProps} />
    </UsersContext.Provider>
  );
}

export default MyApp;
