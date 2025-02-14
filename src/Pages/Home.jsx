import { Link } from "react-router-dom";
import wave from "../assets/wave.svg";
export const Home = () => {
  return (
    <div className="hero relative  min-h-[calc(100vh-116px)] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">
            Welcome to{" "}
            <span className=" bg-300% bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text bg-300% animate-gradient">
              BLADEZADE
            </span>{" "}
          </h1>
          <p className="py-6">
            BladeZade is the bridge between the complex world of technology and
            the curious minds eager to understand it
          </p>
          <div className="space-x-3">
            <Link to="/blogs" className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Read Blogs</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </Link>
            <Link to="/bookmarks" className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Bookmarks</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </Link>
          </div>
        </div>
      </div>
      <img src={wave} className="w-full absolute bottom-0" alt="" />
    </div>
  );
};
