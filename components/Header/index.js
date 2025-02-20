import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5 w-full px-4">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link hover:text-purple-500 transition-all duration-300"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800/90" : "bg-white/90"
              } shadow-xl rounded-2xl backdrop-blur-md backdrop-filter transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl border border-slate-100/20`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showResume && (
                    <Button
                      onClick={() =>
                        window.open("mailto:hanlunwangcareer@gmail.com")
                      }
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() =>
                      window.open("mailto:hanlunwangcareer@gmail.com")
                    }
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() =>
                      window.open("mailto:hanlunwangcareer@gmail.com")
                    }
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div className="w-full px-4 fixed top-0 left-0 right-0 z-50 pt-4">
        <div
          className={`hidden tablet:flex flex-row items-center justify-between ${
            mounted && theme === "light" ? "bg-white/80" : "bg-slate-900/80"
          } dark:text-white backdrop-blur-md backdrop-filter px-8 py-4 
          transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl
          rounded-2xl mx-auto max-w-7xl border border-slate-100/20
          shadow-lg hover:border-purple-500/20`}
        >
          <h1
            onClick={() => router.push("/")}
            className="font-medium cursor-pointer mob:p-2 laptop:p-0 hover:text-purple-500 
            transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
          >
            {name}
          </h1>
          {!isBlog ? (
            <div className="flex items-center gap-2">
              <Button onClick={handleWorkScroll}>Work</Button>
              <Button onClick={handleAboutScroll}>About</Button>
              {showBlog && (
                <Button onClick={() => router.push("/blog")}>Blog</Button>
              )}
              {showResume && (
                <Button
                  onClick={() => router.push("/resume")}
                  classes="first:ml-1"
                >
                  Resume
                </Button>
              )}

              <Button
                onClick={() => window.open("mailto:hanlunwangcareer@gmail.com")}
              >
                Contact
              </Button>
              {mounted && theme && data.darkMode && (
                <Button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <img
                    className="h-6"
                    src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  ></img>
                </Button>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button onClick={() => router.push("/")}>Home</Button>
              {showBlog && (
                <Button onClick={() => router.push("/blog")}>Blog</Button>
              )}
              {showResume && (
                <Button
                  onClick={() => router.push("/resume")}
                  classes="first:ml-1"
                >
                  Resume
                </Button>
              )}

              <Button
                onClick={() => window.open("mailto:hanlunwangcareer@gmail.com")}
              >
                Contact
              </Button>

              {mounted && theme && data.darkMode && (
                <Button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <img
                    className="h-6"
                    src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  ></img>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="h-24 w-full"></div>
    </>
  );
};

export default Header;
