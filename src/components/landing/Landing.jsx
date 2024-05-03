import React from "react";
import { motion } from "framer-motion";
import { animationPagesLeft, animationPagesRight } from "../../animations/animations";
import { auth } from "../../backend/firebase";
const Landing = () => {



  return (
    <main className="landing pt-[100px] h-screen flex justify-center items-center">
      <div className="container flex items-center justify-around xsm:pt-[30px] xsm:flex-col">
        <motion.div variants={animationPagesRight} initial="hidden" animate="show" exit="exit" className="text">
          <h1 className="text-3xl font-bold text-center">
            منصة <span className="text-[var(--main-color)] font-extrabold text-6xl">التميز</span>
          </h1>
          <h2 className="text-2xl text-center font-semibold mt-4">منصة متكاملة بها ما يحتاجه الطالب ليتفوق</h2>
          <hr className="mt-3 border-2 border-[var(--main-color)]" />
          <button className="bg-[var(--main-color)] mt-5 w-full text-3xl font-bold p-2 xsm:box-border xsm:my-5 box-content rounded-xl transition-all duration-200 hover:scale-105">
            ابدأ الان
          </button>
        </motion.div>
        <motion.div variants={animationPagesLeft} initial="hidden" animate="show" exit="exit" className="img w-[500px] max-w-full">
          <img src="./landingStudent.svg" alt="student" />
        </motion.div>
      </div>
    </main>
  );
};

export default Landing;
