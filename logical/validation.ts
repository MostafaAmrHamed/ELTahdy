export const nameValidate = (name: string) => {
  const nameFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  let state = { message: "", validate: false };
  if (!name) {
    state.message = "من فضلك ادخل اسم الطالب";
    state.validate = true;
  } else if (nameFormat.test(name)) {
    state.message = "يجب ان لا يكون الاسم يحتوي على حروف خاصة";
    state.validate = true;
  } else {
    state.message = "";
    state.validate = false;
  }
  return state;
};
export const phoneValidate = (phone: string) => {
  let state = { message: "", validate: false };
  if (!phone) {
    state.message = "من فضلك ادخل رقم الهاتف";
    state.validate = true;
  } else if (phone.length !== 11) {
    state.message = "تاكد من رقم الهاتف ان يكون 11 رقم";
    state.validate = true;
  } else {
    state.message = "";
    state.validate = false;
  }
  return state;
};
export const passwordValidate = (password: string) => {
  let state = { message: "", validate: false };
  if (!password) {
    state.message = "من فضلك ادخل كلمة السر";
    state.validate = true;
  } else if (password.length < 8) {
    state.message = "يجب ان لا تقل عن 8 حروف أو ارقام";
    state.validate = true;
  } else {
    state.message = "";
    state.validate = false;
  }
  return state;
};
export const yearValidate = (year: string) => {
  let state = { message: "", validate: false };
  if (!year) {
    state.message = "من فضلك اختر الصف";
    state.validate = true;
  } else {
    state.message = "";
    state.validate = false;
  }
  return state;
};
