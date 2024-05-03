import React, { useEffect, useState } from "react";
import { auth } from "../../backend/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { IoIosLogOut } from "react-icons/io";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState();

  // Set User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(auth.currentUser);
      } 
    });
    return unsubscribe;
  }, []);

  const nav = useNavigate();

  const alert = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `نراك لاحق`,
      text: "سيتم تحويلك الي الصفحة تسجيل الدخول",
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

  // Handle Log Out
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        alert();
        setTimeout(() => {
          nav("/login");
          location.reload();
        }, 2010);
      })
      .catch((error) => {
        alertError(error);
      });
  };

  return (
    <div className="smT0:pt-[100px] min-h-[100vh] overflow-hidden">
      <div className="container min-h-[100vh] flex justify-center items-center flex-col">
        <h2 className="text-3xl font-bold">الملف الشخصي</h2>
        <div className="text w-full max-w-[300px]">

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">الاسم</span>
            </div>
            <input disabled value={user ? user.displayName : "unKnow"} type="text" placeholder="Type here" className="input input-bordered w-full" />
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">الايميل</span>
            </div>
            <input disabled value={user ? user.email : "loading..."} type="text" placeholder="Type here" className="input input-bordered w-full" />
          </label>

          <button
            onClick={() => handleLogOut()}
            className="btn mt-10 flex items-center justify-center gap-3 bg-red-600 text-white font-bold text-2xl rounded-lg p-2 mx-auto "
          >
            <p>تسجيل خروج</p>
            <IoIosLogOut />
          </button>

        </div>
      </div>
    </div>
  );
};

export default Profile;
