import React, { useEffect, useRef, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { animationLogin, animationSideBar } from "../../animations/animations";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../backend/firebase";
import { onAuthStateChanged } from "firebase/auth";
import signInIconAnimation from "../../../public/signInIconAnimation.json";
import { Player } from "@lordicon/react";

const Header = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [openSecondMenu, setOpenSecondMenu] = useState(false);
  const [openSecondMenuMoblie, setOpenSecondMenuMoblie] = useState(false);

  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(auth.currentUser);
      }
    });
    return unsubscribe;
  }, []);

  const iconRef = useRef();


  const handleLoginOpen = () => {
    setLoginOpen(!loginOpen);
  };
  const handelShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <header className="py-5 bg-[#F1F8Fe] shadow-lg fixed w-full z-50">
      <div className="container flex justify-between items-center">
        <div className="logo">
          <h1 className="text-2xl font-bold">
            <Link to="/">
              <span className="text-[var(--main-color)]">التميز</span> للدورات
            </Link>
          </h1>
        </div>
        <nav className="smT0:hidden">
          <ul className="flex gap-3">
            <li>
              <NavLink
                to="/"
                className="text-lg text-gray-600 hover:text-gray-900 px-1 hover:bg-[#fca3108c] rounded block transition-all duration-200"
                href="#"
              >
                الرئيسية
              </NavLink>
            </li>
            <li className="relative" onMouseLeave={() => setOpenSecondMenu(false)}>
              <NavLink
                onMouseEnter={() => setOpenSecondMenu(true)}
                to="/courses"
                className="text-lg text-gray-600 hover:text-gray-900 px-1 hover:bg-[#fca3108c] rounded block transition-all duration-200"
              >
                <p className="inline-block">الدورات</p>
                <IoIosArrowDown className="inline-block" />
              </NavLink>
              <AnimatePresence>
                {openSecondMenu && (
                  <motion.ul
                    variants={animationLogin}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="seconde-menu absolute left-1/2 -translate-x-1/2 divide-y-2 divide-white mt-3 bg-gray-300 w-[200px]  top-full rounded"
                  >
                    <li>
                      <NavLink to="./courses/coding" className="block p-1 hover:bg-[#fca3108c] transition-transform duration-200">
                        البرمجة
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="./courses/time_improve" className="block p-1 hover:bg-[#fca3108c] transition-transform duration-200">
                        إدارة الوقت وتطوير الذات
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="./courses/lang" className="block p-1 hover:bg-[#fca3108c] transition-transform duration-200">
                        اكتسب لغة جديدة
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="./courses/markting" className="block p-1 hover:bg-[#fca3108c] transition-transform duration-200">
                        التسويق و إدارة الأعمال
                      </NavLink>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li>
              <NavLink
                to="/about-us"
                className="text-lg text-gray-600 hover:text-gray-900 px-1 hover:bg-[#fca3108c] rounded block transition-all duration-200"
              >
                من نحن
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className="text-lg text-gray-600 hover:text-gray-900 px-1 hover:bg-[#fca3108c] rounded block transition-all duration-200"
              >
                تواصل معنا
              </NavLink>
            </li>
          </ul>
        </nav>

        {user ? (
          <Link to="/profile"
            onMouseEnter={() => iconRef.current?.playFromBeginning()}
            className="flex smT0:hidden justify-center items-center border-2 p-1 border-gray-300 rounded hover:border-[var(--main-color)] hover:bg-[var(--main-color)] transition duration-200"
          >
            <p>الملف الشخصي</p>
            <Player state="hover-looking-around" size="20px" ref={iconRef} icon={signInIconAnimation} />
          </Link>
        ) : (
          <div className="login-sign flex gap-2 mdT0:hidden">
            <div className="login">
              <Link to="/login" className="btn flex btn-outline btn-accent">
                تسجيل
              </Link>
            </div>
            <div className="sign">
              <Link to="/sign-in" className="btn flex btn-outline btn-secondary">
                إنشاء حساب
              </Link>
            </div>
          </div>
        )}

        {!user && (
          <div className="smT0:hidden login-sign-md md:block  hidden relative">
            <BiDotsVerticalRounded onClick={handleLoginOpen} className="text-xl p-2 box-content cursor-pointer hover:bg-slate-100 rounded-full" />
            <AnimatePresence>
              {loginOpen && (
                <motion.div
                  variants={animationLogin}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="login-sign absolute mdT0:flex hidden left-full  bg-gray-300 items-center flex-col rounded-lg "
                >
                  <div className="login">
                    <Link to="/login" className="block p-1 " href="#">
                      تسجيل
                    </Link>
                  </div>
                  <div className="sign">
                    <Link to="/sign-in" className="block p-1 text-nowrap mt-2" href="#">
                      إنشاء حساب
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {!showSideBar && <MdOutlineMenu className="text-3xl smT0:block hidden cursor-pointer" onClick={handelShowSideBar} />}
        <AnimatePresence>
          {showSideBar && (
            <motion.div
              variants={animationSideBar}
              initial="hidden"
              animate="show"
              exit="exit"
              className="sidebar h-screen w-[200px] hidden smT0:block bg-gray-100 p-3 shadow-xl fixed top-0 left-0"
            >
              <IoIosCloseCircleOutline className="text-3xl cursor-pointer text-red-600" onClick={handelShowSideBar} />
              <nav className="mt-5">
                <ul className="divide-y-2">
                  <li>
                    <NavLink to="/" className="block mt-5 hover:bg-[#fca3108c] rounded  font-semibold p-2 text-center " href="#">
                      الرئيسية
                    </NavLink>
                  </li>

                  <li className="relative" onMouseLeave={() => setOpenSecondMenuMoblie(false)}>
                    <NavLink
                      onMouseEnter={() => setOpenSecondMenuMoblie(true)}
                      to="/courses"
                      className="block mt-5 hover:bg-[#fca3108c] rounded  font-semibold p-2 text-center "
                    >
                      <p className="inline-block">الدورات</p>
                      <IoIosArrowDown className="inline-block" />
                    </NavLink>
                    <motion.ul
                      className={`divide-y-2  ${
                        openSecondMenuMoblie ? "max-h-[500px]" : "max-h-0"
                      } overflow-hidden divide-white mt-3 rounded transition-all duration-500`}
                    >
                      <li>
                        <NavLink to="./courses/coding" className="block p-1 hover:bg-[#fca3108c] transition-transform duration-200">
                          البرمجة
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="./courses/time_improve" className="block p-1 hover:bg-[#fca3108c] transition-transform duration-200">
                          إدارة الوقت وتطوير الذات
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="./courses/lang" className="block p-1 hover:bg-[#fca3108c] transition-transform duration-200">
                          اكتسب لغة جديدة
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="./courses/markting" className="block p-1 hover:bg-[#fca3108c] transition-transform duration-200">
                          التسويق و إدارة الأعمال
                        </NavLink>
                      </li>
                    </motion.ul>
                  </li>
                  <li>
                    <NavLink to="/about-us" className="block mt-5 hover:bg-[#fca3108c] rounded  font-semibold p-2 text-center " href="#">
                      من نحن
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact-us" className="block mt-5 hover:bg-[#fca3108c] rounded  font-semibold p-2 text-center ">
                      تواصل معنا
                    </NavLink>
                  </li>
                </ul>
              </nav>
              {user ? (
                <Link to="/profile" 
                  onMouseEnter={() => iconRef.current?.playFromBeginning()}
                  className="flex justify-center items-center border-2 p-1 mt-10 border-gray-300 rounded hover:border-[var(--main-color)] hover:bg-[var(--main-color)] transition duration-200"
                >
                  <p>الملف الشخصي</p>
                  <Player state="hover-looking-around" size="20px" ref={iconRef} icon={signInIconAnimation} />
                </Link>
              ) : (
                <div className="buttons-login mt-10">
                  <Link to="/login" className=" mt-5 flex w-full btn btn-outline btn-accent">
                    تسجيل
                  </Link>
                  <Link to="/sign-in" className=" mt-5 flex w-full btn btn-outline btn-secondary">
                    إنشاء حساب
                  </Link>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
