import React, { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Validate from "../components/Validation";
import {
  nameValidate,
  phoneValidate,
  yearValidate,
} from "../logical/validation";
import { editStudent } from "../types";
import axios from "axios";

const EditStudentForm: React.FC<editStudent> = (studentData) => {
  const router = useRouter();
  const [validate, setValidate] = useState(false);
  const [student, setStudent] = useState<editStudent>({
    id: studentData.id,
    user: {
      username: studentData.user.username,
    },
    phone: studentData.phone,
    parent_phone: studentData.parent_phone,
    year: studentData.year,
  });
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (
      nameValidate(student.user.username).validate ||
      phoneValidate(student.phone).validate ||
      phoneValidate(student.parent_phone).validate ||
      yearValidate(student.year).validate
    ) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "هناك خطأ في ادخال البيانات",
        confirmButtonText: "عودة",
      });
      setValidate(true);
    } else {
      axios
        .put(
          `https://eltahdy.herokuapp.com/api/students/${studentData.id}/`,
          student
        )
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "تم الحفظ",
            text: "تم تغير بيانات الطالب",
            showConfirmButton: false,
            timer: 1500,
          });
          setValidate(false);
          setTimeout(() => {
            router.reload();
          }, 1000);
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "خطأ",
            text: error,
            confirmButtonText: "عودة",
          });
        });
    }
  };
  const recoverData = () => {
    setStudent({
      id: studentData.id,
      user: {
        username: studentData.user.username,
      },
      phone: studentData.phone,
      parent_phone: studentData.parent_phone,
      year: studentData.year,
    });
    setValidate(false);
  };
  return (
    <div className="bg-component rounded-lg w-11/12 lg:w-8/12 xl:w-1/2 mt-5 py-8 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-5 border-b-2 border-color-2 mx-5 pb-5 md:grid md:grid-cols-4 items-center text-center ">
          <label className="text-color-4 text-2xl font-semibold">
            اسم الطـالب
          </label>
          <input
            type="text"
            className="w-11/12 md:w-auto md:col-span-3 py-2 px-2 mt-3 md:mt-0 md:p-2 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-color-4 shadow-sm"
            value={student.user.username}
            onChange={(e) => {
              setStudent({
                ...student,
                user: {
                  ...student.user,
                  username: e.target.value,
                },
              });
            }}
          />
          {validate && (
            <div className="mt-2 col-start-2 col-span-3 text-center md:text-right md:pr-2">
              <Validate
                message={nameValidate(student.user.username).message}
                validation={nameValidate(student.user.username).validate}
              />
            </div>
          )}
        </div>
        <div className="mb-5 border-b-2 border-color-2 mx-5 pb-5 md:grid md:grid-cols-4 items-center text-center ">
          <label className="text-color-4 text-2xl font-semibold">
            رقم الهاتف
          </label>
          <input
            type="number"
            className="w-11/12 md:w-auto md:col-span-3 py-2 px-2 mt-3 md:mt-0 md:p-2 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-color-4 shadow-sm"
            value={student.phone}
            onChange={(e) => {
              setStudent({ ...student, phone: e.target.value });
            }}
          />
          {validate && (
            <div className="mt-2 col-start-2 col-span-3 text-center md:text-right md:pr-2">
              <Validate
                message={phoneValidate(student.phone).message}
                validation={phoneValidate(student.phone).validate}
              />
            </div>
          )}
        </div>
        <div className="mb-5 border-b-2 border-color-2 mx-5 pb-5 md:grid md:grid-cols-4 items-center text-center">
          <label className="text-color-4 text-2xl font-semibold">
            رقم هاتف الأب
          </label>
          <input
            type="number"
            className="w-11/12 md:w-auto md:col-span-3 py-2 px-2 mt-3 md:mt-0 md:p-2 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-color-4 shadow-sm"
            value={student.parent_phone}
            onChange={(e) => {
              setStudent({ ...student, parent_phone: e.target.value });
            }}
          />
          {validate && (
            <div className="mt-2 col-start-2 col-span-3 text-center md:text-right md:pr-2">
              <Validate
                message={phoneValidate(student.parent_phone).message}
                validation={phoneValidate(student.parent_phone).validate}
              />
            </div>
          )}
        </div>
        <div className="mb-5 mx-5 pb-5 grid gap-2 md:gap-0 md:grid-cols-4 items-center place-content-center text-center">
          <label className="text-color-4 text-2xl font-semibold">الصف </label>
          <select
            className="py-2 text-2xl font-medium px-2 rounded-md shadow-sm w-[200px] md:col-span-3 focus:outline-none focus:ring-2 focus:ring-color-4"
            value={student.year}
            onChange={(e) => {
              setStudent({ ...student, year: e.target.value });
            }}
          >
            <option value="">الصف</option>
            <option value="اولي">اولي</option>
            <option value="ثانيه علمي">ثانية علمي</option>
            <option value="ثانيه ادبي">ثانية ادبي</option>
            <option value="ثالثه">ثالثة</option>
          </select>
          {validate && (
            <div className="mt-2 col-start-2 col-span-3 text-center md:text-right md:pr-2">
              <Validate
                message={yearValidate(student.year).message}
                validation={yearValidate(student.year).validate}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col mt-5 items-center md:flex-row gap-5 justify-center">
          <button
            type="submit"
            className="bg-true w-[140px] py-1 text-2xl text-color-2 rounded-lg"
          >
            حفظ
          </button>
          <button
            type="button"
            className="bg-cancel w-[140px] py-1 text-2xl text-color-2 rounded-lg"
            onClick={recoverData}
          >
            إسترجاع
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStudentForm;
