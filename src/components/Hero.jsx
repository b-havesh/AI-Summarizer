import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { logo } from "../assets";

const Hero = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex justify-center items-center gap-2">
          <img src={logo} alt="sumz_logo" className="w-12 object-contain" />
          <h1 className="logo_text text-3xl font-bold text-[#333333]">
            Briefy
          </h1>
        </div>

        <div className="flex gap-4 ">
          <button
            type="button"
            onClick={() => window.open("https://github.com/b-havesh", "_blank")}
            className="black_btn"
          >
            GitHub
          </button>

          {isAuthenticated ? (
            <button
              className="border border-black px-6 text-sm rounded-3xl hover:bg-black hover:text-white transition duration-300"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            <button
              className="border border-black px-6 text-sm rounded-3xl hover:bg-black hover:text-white transition duration-300"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          )}
        </div>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="lavender_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Briefy, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
