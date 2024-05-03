import { Route, Routes } from "react-router-dom";
import Landing from "../components/landing/Landing";
import AboutUs from "../pages/aboutUs/AboutUs";
import ContactUs from "../pages/contactUs/ContactUs";
import Courses from "../pages/courses/Courses";
import CoursePage from "../pages/coursePage/CoursePage";
import { useLocation } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Landing />,
//       },
//       {
//         path: "/about-us",
//         element: <AboutUs />,
//       },

//       {
//         path: "/contact-us",
//         element: <ContactUs />
//       },
//       {
//         path: "/courses",
//         element: <Courses />,
//       },
//       {
//         path: "courses/:course",
//         element: <CoursePage/>,
//       },
//     ],
//   },
// ]);

import React from "react";
import { AnimatePresence } from "framer-motion";
import Login from "../pages/login/Login";
import SignIn from "../pages/signIn/SignIn";
import Profile from "../pages/profile/Profile";
import Protect from "./Protect";
import Protect2 from "./Protect2";

const RouterComponent = () => {
  const loction = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={loction} key={location.pathname}>
        
          <Route path="/" element={<Landing />} />
          <Route path="/courses" element={<Protect><Courses /></Protect>} />
          <Route path="courses/:course" element={<Protect><CoursePage /></Protect>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Protect2><Login /></Protect2>} />
          <Route path="/sign-in" element={<Protect2><SignIn /></Protect2>} />
          <Route path="/profile" element={<Protect><Profile /></Protect>} />
        
      </Routes>
    </AnimatePresence>
  );
};

export default RouterComponent;
