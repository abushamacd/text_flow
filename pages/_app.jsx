import Header from "@/sections/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
