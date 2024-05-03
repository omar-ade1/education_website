import React, { useRef, useState } from "react";
import { BiShowAlt, BiSolidHide } from "react-icons/bi";
import { FaSignInAlt } from "react-icons/fa";
import { auth } from "../../backend/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import GoogleButton from "../../components/googleButton/GoogleButton";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false); // حالة التحميل

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const nav = useNavigate();

  const alert = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "مرحبا بك في المنصة",
      text: "سيتم تحويلك الي صفحة تسجيل الدخول",
      showConfirmButton: false,
      timer: 2000,
    });
    setTimeout(() => {
      nav("/login");
    }, 2000);
  };

  const alertGoogle = (name) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${name} مرحبا بك في المنصة`,
      text: "سيتم تحويلك الي الصفحة الرئيسية",
      showConfirmButton: false,
      timer: 2000,
    });
    setTimeout(() => {
      nav("/");
    }, 2000);
  };

  const alertError = (msgError) => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "خطأ",
      text: msgError,
      showConfirmButton: false,
      timer: 2000,
    });
  };

  // Handle Sign In With Email And Password
  const handleSignIn = () => {
    setLoading(true); // تغيير حالة التحميل عند النقر على زر التسجيل
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert();

      })

      .catch((error) => {
        const errorMessage = error.message;
        alertError(errorMessage);
      })

      .finally(() => {
        setLoading(false); // إلغاء حالة التحميل بعد الحصول على الرد من Firebase
      });
  };

  // Handle Sign In With Google
  const provider = new GoogleAuthProvider();
  const handleSignInGoogle = () => {
    setLoading(true)
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const Token = credential.accessToken;
        const user = result.user;
        alertGoogle(user.displayName);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alertError(errorMessage);
      }).finally(() => {
        setLoading(false); // إلغاء حالة التحميل بعد الحصول على الرد من Firebase
      });
  };

  return (
    <div className="smT0:pt-[50px] min-h-[100vh] overflow-hidden">
      <div className="container min-h-[100vh] flex justify-center items-center flex-col ">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-2">
          إنشاء حساب
          <FaSignInAlt />
        </h2>
        <div className="flex w-full justify-around items-center xsm:flex-col">
          <div className="img">
            <img className="w-[400px]" src="./sign.svg" alt="" />
          </div>

          <div className="w-[400px] max-w-full flex flex-col gap-[20px]" action="">
            <label className="input input-bordered flex items-center gap-2">
              {/* إضافة loader هنا */}
              {loading && <div className="loader"></div>}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input onChange={(event) => setEmail(event.target.value)} type="text" className="grow" placeholder="الإيميل" required />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                onChange={(event) => setPassword(event.target.value)}
                type={showPass ? "text" : "password"}
                className="grow"
                placeholder="كلمة السر"
                required
              />
              {showPass ? (
                <BiShowAlt onClick={handleShowPass} className="cursor-pointer text-lg" />
              ) : (
                <BiSolidHide onClick={handleShowPass} className="cursor-pointer text-lg" />
              )}
            </label>

            <GoogleButton handleGoogleAuth={handleSignInGoogle} />

            <button disabled={loading} onClick={handleSignIn} className="btn w-full bg-[var(--main-color)]">
              {loading ? <span className="loading loading-dots loading-md"></span> : "تسجيل"}
            </button>
            <Link to="/login" className="block text-center underline">تمتلك حساب ؟ تسجيل الدخول</Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
