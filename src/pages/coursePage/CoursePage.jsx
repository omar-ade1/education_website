import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import python from "../../../public/python.json";
import html from "../../../public/html.json";
import alarm from "../../../public/alarm.json";
import { Player } from "@lordicon/react";
import { motion } from "framer-motion";
import { animationCourseBox, animationParentOfCourseBox, animationTitleText } from "../../animations/animations";
const CoursePage = () => {
  let pram = useParams();

  let data = {
    coding: [
      {
        titleOfPage: "البرمجة",
        nameOfCourse: "html",
        teacher: [
          {
            name: "اسلام جودزيلا",
            img: "../codezilla.webp",
            link: "https://www.youtube.com/watch?v=aHzw_8wWl48&pp=ygUe2KfYs9mE2KfZhSDYrNmI2K_YstmK2YTYpyBodG1s"
          },
          {
            name: "أسامة الزيرو",
            img: "../elzero.webp",
            link: "https://www.youtube.com/watch?v=6QAELgirvjs&list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji"
          },
        ],
        description: "انه رجل عظيم و هذا كورس جميل",
        link: "https://google.com",
        icon: html,
        ref: useRef(null),
      },
      {
        titleOfPage: "البرمجة",
        nameOfCourse: "css",
        teacher: [
          {
            name: "أسامة الزيرو",
            img: "../elzero.webp",
            link: "https://www.youtube.com/watch?v=X1ulCwyhCVM&list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe"
            
          },
        ],
        description: "انه رجل عظيم و هذا كورس جميل",
        link: "https://google.com",
        ref: useRef(null),
        imgLink: "../css.svg",
      },
      {
        titleOfPage: "البرمجة",
        nameOfCourse: "js",
        teacher: [
          {
            name: "أسامة الزيرو",
            img: "../elzero.webp",
            link: "https://www.youtube.com/watch?v=GM6dQBmc-Xg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv"
          },
        ],
        description: "انه رجل عظيم و هذا كورس جميل",
        ref: useRef(null),
        imgLink: "../js.svg",
      },
      {
        titleOfPage: "البرمجة",
        nameOfCourse: "python",
        teacher: [
          {
            name: "أسامة الزيرو",
            img: "../elzero.webp",
            link: "https://www.youtube.com/watch?v=mvZHDpCHphk&list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs"
          },
        ],
        description: "انه رجل عظيم و هذا كورس جميل",
        link: "https://google.com",
        icon: python,
        ref: useRef(null),
      },
    ],

    time_improve: [
      {
        titleOfPage: "إدارة الوقت وتطوير الذات",
        nameOfCourse: "ادارة الوقت",
        teacher: [
          {
            name: "أحمد أبوزيد",
            img: "../ahmedAbozaid.webp",
            link: "https://www.youtube.com/watch?v=bJ6kfrEQJuM&pp=ygUTYWJvemFpZCBtYW5hZ2UgdGltZQ%3D%3D"
          },
        ],
        description: "انه رجل عظيم و هذا كورس جميل",
        link: "https://google.com",
        icon: alarm,
        ref: useRef(null),
      },
    ],

    lang: [
      {
        titleOfPage: "اكتسب لغة جديدة",
        nameOfCourse: "english",
        teacher: [
          {
            name: "إبراهيم عادل",
            img: "../ibrahimAdel.webp",
            link : "https://www.youtube.com/watch?v=69aLCcVsrnw&list=PLp22-4PivYmI4PahZ0eyFjcihT7_VAs79"
          },
        ],
        description: "انه رجل عظيم و هذا كورس جميل",
      },
    ],

    markting: [
      {
        titleOfPage: "التسويق و إدارة الأعمال",
        nameOfCourse: "markting",
        imgLink: "../markgint.jpeg",
        teacher: [
          {
            name: "إيهاب مسلم",
            img: "../ehapMesallum.webp",
            link: "https://www.youtube.com/watch?v=g0alb1Ya1bY&pp=ygUn2YPZiNix2LMg2KrYs9mI2YrZgiDYo9mK2YfYp9ioINmF2LPZhNmF"
          },
        ],
        description: "انه رجل عظيم و هذا كورس جميل",
      },
    ],
  };

  const [coursesData, setCoursesData] = useState(null);

  useEffect(() => {
    setCoursesData(data[`${pram.course}`]);
  }, [pram]);

  // fix hi meta ai why this is not work
  useEffect(() => {
    setTimeout(() => {
      if (coursesData) {
        coursesData.forEach((item) => {
          item.ref && item.ref.current?.playFromBeginning();
        });
      }
    }, 0);
  }, [coursesData]);

  return (
    <div className="pt-[100px] min-h-[100vh] overflow-hidden">
      <div className="container min-h-[calc(100vh-100px)] flex flex-col justify-center items-center">
        {coursesData ? (
          <div>
            <motion.h2 variants={animationTitleText} initial="hidden" animate="show" exit="exit" className="text-4xl text-[var(--main-color)] font-semibold py-[50px]">{coursesData[0].titleOfPage}</motion.h2>
            <motion.div
              variants={animationParentOfCourseBox}
              initial="hidden"
              animate="show"
              className="boxs flex flex-wrap justify-center items-center gap-[20px]"
            >
              {coursesData.map((item, index) => {
                return (
                  <motion.div variants={animationCourseBox} key={index} className="border w-[250px] shadow-xl p-3 rounded-xl">
                    <div className="image flex h-[150px] justify-center items-center">
                      {item.icon ? (
                        <Player
                          onComplete={() =>
                            setTimeout(() => {
                              item.ref.current?.playFromBeginning();
                            }, 1000)
                          }
                          size="150px"
                          ref={item.ref}
                          icon={item.icon}
                        />
                      ) : item.imgLink ? (
                        <img className="w-[150px] h-[150px]" src={item.imgLink} alt={item.nameOfCourse} />
                      ) : (
                        <h2 className="text-center text-2xl font-semibold">لا يوجد صورة</h2>
                      )}
                    </div>
                    <h3 className="text-3xl uppercase">{item.nameOfCourse}</h3>
                    <p className="mt-2">{item.description}</p>
                    <div className="teachers grid gap-[10px] mt-5">
                      {item.teacher && (
                        <>
                          {item.teacher.map((tech, i) => {
                            return (
                              <div key={i}>
                              <div className="flex justify-around items-center">
                                <p>{tech.name}</p>
                                <img loading="lazy" className="w-[40px] h-[40px] object-cover rounded-full" src={tech.img} alt="" />
                                </div>
                                <div>
                                <a href={tech.link} target="_blank" className="flex w-full justify-center items-center underline text-[#777] hover:text-black">الذهاب للكورس</a>

                              </div>
                              </div>
                              
                            );
                          })}
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ) : (
          <>
            <Skeleton width={200} className="text-4xl mb-5"></Skeleton>
            <div className="boxs flex flex-wrap justify-center items-center gap-[20px]">
              {[1, 2, 3, 4].map((num,index) => {
                return (
                  <div key={index} className="border w-[250px] shadow-xl p-3 rounded-xl">
                    <div className="image h-[150px]">
                      <Skeleton className="block w-[150px] h-[150px]" />
                    </div>
                    <Skeleton className="text-3xl uppercase mt-5"></Skeleton>
                    <p className="mt-2"></p>
                    <div className="teachers grid gap-[20px] mt-5">
                      <>
                        <div className="flex justify-around items-center gap-5">
                          <Skeleton containerClassName="flex-1" />
                          <Skeleton height={40} width={40} circle="true" className="block object-cover" src="" alt="" />
                        </div>
                      </>
                    </div>
                    <Skeleton className="btn btn-wide max-w-full mt-4" />
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
      ;
    </div>
  );
};

export default CoursePage;
