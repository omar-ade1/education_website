import React, { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";
import code from "../../../public/code.json";
import clock from "../../../public/clock.json";
import lang from "../../../public/lang.json";
import markting from "../../../public/markting.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animationCourseBox, animationParentOfCourseBox, animationTitleText } from "../../animations/animations";
import Skeleton from "react-loading-skeleton";

const Courses = () => {


  const data = [
    {
      title: "البرمجة",
      description: "تعلم أساسيات البرمجة و اختر من مجالاتها المختلفة",
      link: "coding",
      icon: code,
      ref: useRef(null),
    },
    {
      title: "إدارة الوقت وتطوير الذات",
      description: "تعلم كيف تدير وقت لتطوير مهاراتك و تحسين انتاجيتك",
      link: "time_improve",
      icon: clock,
      ref: useRef(null),
      
    },
    {
      title: "اكتسب لغة جديدة",
      description: "تعلم العديد من اللغات المختلفة حسب اهتمامتك",
      link: "lang",
      icon: lang,
      ref: useRef(null),
      
    },
    {
      title: "التسويق و إدارة الأعمال",
      description: "تعلم أساسيات التسويق لبناء اسم لك في السوق",
      link: "markting",
      icon: markting,
      ref: useRef(null),
      
    },
  ];

  const marktingRef = useRef(null);
  useEffect(() => {
    marktingRef.current?.playFromBeginning();
  }, []);

  useEffect(() => {
    data.forEach((item) => {
      item.ref.current?.playFromBeginning();
    });
  }, []);

  return (
    <div className="pt-[100px] min-h-[100vh] overflow-hidden">
      <div className="container min-h-[calc(100vh-100px)] flex flex-col justify-center items-center">
        {data.length ?
          <>
          <motion.h2 variants={animationTitleText} initial="hidden" animate="show" exit="exit" className="text-4xl text-[var(--main-color)] font-semibold py-[50px]">دوراتنا المتاحة</motion.h2>
        <motion.div
              variants={animationParentOfCourseBox}
              initial="hidden"
              animate="show" className="our-courses w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[50px]">
          {data.map((item, id) => {
            return (
              <motion.div variants={animationCourseBox} key={id} className="card bg-base-100 shadow-xl">
                <figure>
                  <Player
                    onComplete={() =>
                      setTimeout(() => {
                        item.ref.current?.playFromBeginning();
                      }, 1000)
                    }
                    size="200px"
                    ref={item.ref}
                    icon={item.icon}
                    />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="card-actions justify-end">
                    <Link to={`./${item.link}`} className="btn flex btn-primary">
                      اشترك الان
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
          </>
        
        : 
        
        <>
        <Skeleton width={200} className="text-4xl mb-5"></Skeleton>
        <div className="boxs flex flex-wrap justify-center items-center gap-[20px]">
          {[1, 2, 3, 4].map((i) => {
            return (
              <div key={i} className="border w-[250px] shadow-xl p-3 rounded-xl">
                <div className="image h-[150px]">
                  <Skeleton className="block w-[150px] h-[150px]" />
                </div>
                <Skeleton className="text-3xl uppercase mt-5"></Skeleton>
                <p className="mt-2"></p>
                <div className="teachers grid gap-[20px] mt-5">
                <Skeleton count={3} className="text-sm"></Skeleton>
                </div>
                <Skeleton width={100} style={{marginRight: "auto", display: "block", padding: "5px"}} className="block mt-4" />
              </div>
            );
          })}
        </div>
      </>
          
          
        }
      </div>
    </div>
  );
};

export default Courses;

