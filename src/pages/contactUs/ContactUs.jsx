import React, { useState } from "react";
import { motion } from "framer-motion";
import { animationPagesLeft, animationPagesRight } from "../../animations/animations";

function ContactUs() {
  const [emailValue, setEmailValue] = useState("");

  // CHANGE THE DIRCTION OF EMAIL INPUT WHEN USER WRITE IN IT
  const handleDirEmail = () => {
    return emailValue.length > 0 ? true : false;
  };

  return (
    <div className="smT0:pt-[100px] min-h-[100vh] overflow-hidden">
      <div className="container min-h-[100vh] flex justify-around items-center smT0:flex-col">
        <motion.div variants={animationPagesRight} initial="hidden" animate="show" exit="exit" className="text-image w-[400px] max-w-full flex flex-col items-center">
          <h2 className="text-4xl font-semibold">تواصل معنا</h2>
          <div className="img w-full">
            <img src="contactUs.svg" alt="" />
          </div>
        </motion.div>
        <motion.form variants={animationPagesLeft} initial="hidden" animate="show" exit="exit" className="grid grid-cols-4 grid-rows-7 
          smT0:grid-rows-8 smT0:w-[90%] w-[500px] gap-5">
          <motion.input
            whileFocus={{ scale: 1.05 }}
            className="all-input-filld-contact input-contact "
            type="text"
            required
            placeholder="الاسم"
            name="from_name"
          />
          <motion.input
            onChange={(event) => setEmailValue(event.target.value)}
            dir={`${handleDirEmail() ? "ltr" : "rtl"}`}
            whileFocus={{ scale: 1.05 }}
            className="all-input-filld-contact input-contact "
            type="email"
            required
            placeholder="الإيميل"
            name="from_email"
          />

          <motion.textarea
            whileFocus={{ scale: 1.05 }}
            className="all-input-filld-contact col-span-4 outline-none
              p-2 bg-[white] shadow-xl row-span-4 rounded resize-none"
            id="msg"
            required
            placeholder="محتوى الرسالة"
            name="message"
          ></motion.textarea>
          <motion.button
            whileTap={{ scale: 1.05 }}
            className="border col-start-3 col-end-5 row-span-1
            rounded bg-[var(--main-color)] text-white font-bold"
          >
            إرسال
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}

export default ContactUs;
