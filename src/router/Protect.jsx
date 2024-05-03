import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../backend/firebase";
import Swal from "sweetalert2";

const Protect = ({ children }) => {
  const nav = useNavigate();

  const alert = () => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: `يجب تسجيل الدخول او إنشاء حساب`,
      text: "تم تحويلك الي صفحة تسجيل الدخول لتتمكن من عرض محتويات المنصة",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  const alert2 = () => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: `يجب تسجيل الخروج `,
      text: "لتسجيل حساب اخر يجب تسجيل الخروج من حسابك الحالي",
      showConfirmButton: false,
      showCancelButton:true,
      timer: 2500,
    });
  };

  const [user, setUser] = useState();
  // Set User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(auth.currentUser);
      } else {
        console.warn("No User");
          nav("/login");
          alert()
      }
    });
    return unsubscribe;
  }, []);






  return user ? children : null
};

export default Protect;
