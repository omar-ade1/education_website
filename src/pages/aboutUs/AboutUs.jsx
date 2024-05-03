import React from "react";
import ParallaxText from "./animation";
import { motion } from "framer-motion"
import { animationLogin, animationPagesLeft, animationPagesRight } from "../../animations/animations";

const AboutUs = () => {
  return (
    <div className="pt-[100px] pb-[50px] min-h-[100vh] overflow-hidden">
      <div className="container">
        <div className="flex justify-around items-center smT0:flex-col">
          <motion.div variants={animationPagesRight} initial="hidden" animate="show" exit="exit" className="text w-1/2 smT0:w-[90%]">
            <h2 className="text-2xl font-extrabold tracking-wider text-[var(--main-color)]">من نحن ؟</h2>
            <p className="mt-3 text-lg max-w-[600px]">
              نحن منصة تعليمة مميزة مقرها مصر تقوم بخدمة الطلاب على مستوى العال م خيث نقدم شرح للمواد العلمية في مختلف المجالات مثل العلوم الطبيعية و
              العلوم الفضائية و علوم الحاسب و الالة و تطوير الذات و ادارة الوقت
            </p>
            <p>نمتلك فريق مميز من المدرسين و المعلمين في جميع المجالات حاصلين على شهادات عالمية</p>
          </motion.div>
          <motion.div variants={animationPagesLeft} initial="hidden" animate="show" exit="exit" className="image w-[400px] max-w-full smT0:mt-5">
            <img src="./aboutUs.svg" alt="about-us" />
          </motion.div>
        </div>

        <div className="mt-6 flex justify-around items-center smT0:flex-col">
          <motion.div variants={animationPagesRight} initial="hidden" animate="show" exit="exit" className="text w-1/2 smT0:w-[90%]">
            <h2 className="text-2xl font-extrabold tracking-wider text-[var(--main-color)]">ما هو هدفنا</h2>
            <p className="mt-3 text-lg ">مما لا يخفى علينا اننا نحن العرب نمتلك نقص في الفيديوهات التعليمية خاصة في علوم الحاسب الالي و البرمجة</p>
            <p className="mt-2 text-lg ">
              وقد تم انشاء المنصة هذه <span>التميز للدورات</span> لمعالجة هذا النقص باستخدام طرق شرح حديثة و معلمين متميزين للارتقاء بمستوى الطالب
              العربي في مختلف المجالات
            </p>
          </motion.div>
          <motion.div variants={animationPagesLeft} initial="hidden" animate="show" exit="exit" className="image w-[400px] max-w-full smT0:mt-5">
            <img className="block" src="./Team goals-cuate.svg" alt="team goals" />
          </motion.div>
        </div>

        <motion.div variants={animationLogin} initial="hidden" animate="show" exit="exit" className=" py-[50px]">
          <h2 className="text-3xl text-center font-extrabold tracking-wider text-[var(--main-color)]">قائمة المعلمين</h2>

          <section className="bg-white">
            <ParallaxText baseVelocity={100}>
              <div className="boxs  flex w-fit gap-5">
                <div className="box shadow-xl bg-white min-w-[300px] max-w-[300px] min-h-[300px] max-h-[300px] rounded-full p-2 ">
                  <img className="w-[200px] block m-auto h-[200px] rounded-full  object-cover object-top " src="./ibrahimAdel.webp" alt="" />
                  <div className="mt-4 mx-auto w-fit text-center">
                    <h2 className="text-lg font-bold text-[var(--main-color)] ">ابراهيم عادل</h2>
                    <p>معلم إنجليزي و مبرمج</p>
                  </div>
                </div>
                <div className="box shadow-xl bg-white min-w-[300px] max-w-[300px] min-h-[300px] max-h-[300px] rounded-full p-2 ">
                  <img className="w-[200px] block m-auto h-[200px] rounded-full  object-cover object-top " src="./ahmedAbozaid.webp" alt="" />

                  <div className="mt-4 mx-auto w-fit text-center">
                    <h2 className="text-lg font-bold text-[var(--main-color)] ">أحمد ابوزيد</h2>
                    <p>تطوير الذات و ادارة الوقت</p>
                  </div>
                </div>
                <div className="box shadow-xl bg-white min-w-[300px] max-w-[300px] min-h-[300px] max-h-[300px] rounded-full p-2 ">
                  <img className="w-[200px] block m-auto h-[200px] rounded-full  object-cover object-top " src="./ehapMesallum.webp" alt="" />
                  <div className="mt-4 mx-auto w-fit text-center">
                    <h2 className="text-lg font-bold text-[var(--main-color)] ">د. إيهاب مسلم</h2>
                    <p>خبير اقتصادي و تسويق</p>
                  </div>
                </div>
                <div className="box shadow-xl bg-white min-w-[300px] max-w-[300px] min-h-[300px] max-h-[300px] rounded-full p-2 ">
                  <img className="w-[200px] block m-auto h-[200px] rounded-full  object-cover object-top " src="./elzero.webp" alt="" />
                  <div className="mt-4 mx-auto w-fit text-center">
                    <h2 className="text-lg font-bold text-[var(--main-color)] ">أسامة الزيرو</h2>
                    <p>مهندس برمجيات</p>
                  </div>
                </div>
                <div className="box shadow-xl bg-white min-w-[300px] max-w-[300px] min-h-[300px] max-h-[300px] rounded-full p-2 ">
                  <img className="w-[200px] block m-auto h-[200px] rounded-full  object-cover object-top " src="./codezilla.webp" alt="" />
                  <div className="mt-4 mx-auto w-fit text-center">
                    <h2 className="text-lg font-bold text-[var(--main-color)] ">اسلام كودزيلا</h2>
                    <p>مهندس برمجيات</p>
                  </div>
                </div>
                <div className="box shadow-xl bg-white min-w-[300px] max-w-[300px] min-h-[300px] max-h-[300px] rounded-full p-2 ">
                  <img className="w-[200px] block m-auto h-[200px] rounded-full  object-cover object-top " src="./ghareebElshaidh.webp" alt="" />

                  <div className="mt-4 mx-auto w-fit text-center">
                    <h2 className="text-lg font-bold text-[var(--main-color)] ">غريب الشيخ</h2>
                    <p>تطوير الذات و ادارة الوقت</p>
                  </div>
                </div>
                <div className="box shadow-xl bg-white min-w-[300px] max-w-[300px] min-h-[300px] max-h-[300px] rounded-full p-2 ">
                  <img className="w-[200px] block m-auto h-[200px] rounded-full  object-cover object-top " src="./ahmedFathy.webp" alt="" />
                  <div className="mt-4 mx-auto w-fit text-center">
                    <h2 className="text-lg font-bold text-[var(--main-color)] ">أحمد فتحي</h2>
                    <p>خبير اقتصادي و تسويق</p>
                  </div>
                </div>
                <div className="box shadow-xl bg-white min-w-[300px] max-w-[300px] min-h-[300px] max-h-[300px] rounded-full p-2 ">
                  <img className="w-[200px] block m-auto h-[200px] rounded-full  object-cover object-top " src="./mohamedAbusrea.webp" alt="" />
                  <div className="mt-4 mx-auto w-fit text-center">
                    <h2 className="text-lg font-bold text-[var(--main-color)] ">محمد أبو سريع</h2>
                    <p>مهندس برمجيات</p>
                  </div>
                </div>
                <div className="box shadow-xl bg-white min-w-[300px] max-w-[300px] min-h-[300px] max-h-[300px] rounded-full p-2 ">
                  <img className="w-[200px] block m-auto h-[200px] rounded-full  object-cover object-top " src="./kreemEsmail.webp" alt="" />
                  <div className="mt-4 mx-auto w-fit text-center">
                    <h2 className="text-lg font-bold text-[var(--main-color)] ">كريم إسماعيل</h2>
                    <p>معلم إنجليزي و مبرمج</p>
                  </div>
                </div>
                <div className="box shadow-xl bg-white min-w-[300px] max-w-[300px] min-h-[300px] max-h-[300px] rounded-full p-2 ">
                  <img className="w-[200px] block m-auto h-[200px] rounded-full  object-cover object-top " src="./yehiaTech.webp" alt="" />

                  <div className="mt-4 mx-auto w-fit text-center">
                    <h2 className="text-lg font-bold text-[var(--main-color)] ">يحيى تك</h2>
                    <p>تطوير الذات و ادارة الوقت</p>
                  </div>
                </div>
                <div className="box shadow-xl bg-white min-w-[300px] max-w-[300px] min-h-[300px] max-h-[300px] rounded-full p-2 ">
                  <img className="w-[200px] block m-auto h-[200px] rounded-full  object-cover object-top " src="./ibrahimAdel.webp" alt="" />
                  <div className="mt-4 mx-auto w-fit text-center">
                    <h2 className="text-lg font-bold text-[var(--main-color)] ">ابراهيم عادل</h2>
                    <p>معلم إنجليزي و مبرمج</p>
                  </div>
                </div>
              </div>
            </ParallaxText>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
