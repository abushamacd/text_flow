import { store } from "@/redux/store";
import Header from "@/sections/Header";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="max-w-[1920px] mx-auto">
        <Header />
        <Component {...pageProps} />
      </div>
      <ToastContainer />
    </Provider>
  );
}
