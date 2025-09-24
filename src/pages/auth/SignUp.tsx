import React, { useState } from "react";
import desktopAuth from "../../../public/images/auth/finance-login.png";
import { Link } from "react-router-dom";
import eyeIcon from "../../../public/images/auth/eye-icon.png";
import hidden from "../../../public/images/auth/hidden.png";
import axios from "axios";
import { Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const inputStyling = "w-full border border-gray-300 outline-none p-2 rounded";

const SignUp = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleShowPassword = () => {
    if (showPassword === true) {
      setShowPassword(false);
    } else {
      setShowPassword(true)
    }
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email format is invalid";
    }
    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true)
    if (validate()) {
      console.log("Valid form submitted:", form);
      setErrors({});
    }

    setTimeout(() => {
      setErrors({});
    }, 3000);

    if (!validate()) return;

      try {
      const res = await axios.post("https://finance-poc.onrender.com/api/auth/signup", form);
      console.log("User saved:", res.data);
    } catch (err) {
      console.error("Error saving user:", err);
    }

    window.location.href = "/login";
  };

  return (
    <>
      <div className="flex flex-col gap-30 lg:gap-0 lg:flex-row lg:w-[1224px] mx-auto bg-[#F8F4F0] pt-0 lg:p-5 h-[920px]">
        <div className="flex flex-col justify-between items-center mx-auto lg:items-start bg-[#201F24] w-full max-w-[760px] lg:h-full rounded-b-xl lg:rounded-b-0 lg:rounded-xl overflow-hidden relative z-1 p-10">
          <div>
            <h2 className="text-3xl font-bold pl-7 text-white lg:block">FinPlan</h2>
          </div>
          <img
            src={desktopAuth}
            alt="a finance signup image"
            className="hidden lg:block w-[100%] h-[100%] absolute top-0 left-0 z-[-1]"
            loading="lazy"
          />
          <div className="hidden lg:flex flex-col gap-3 pr-10">
            <h1 className="text-3xl text-white font-bold pr-10">
              Keep track of your money and save for your future
            </h1>
            <p className="text-[14px] text-gray-300">
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
        <div className="flex mx-auto justify-center items-center p-5 lg:p-0 w-full max-w-[740px]">
          <form
            onSubmit={handleSubmit}
            className="w-full lg:max-w-[450px] space-y-4 p-6 bg-white rounded-md"
          >
            <h2 className="text-3xl lg:text-xl font-bold">Sign Up</h2>
            <div>
              <label className="block text-[14px]">Name</label>
              <input
                className={inputStyling}
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-[14px]">Email</label>
              <input
                className={inputStyling}
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-[14px]">Password</label>
              <div className="flex items-center justify-between pr-5 w-full border border-gray-300 rounded">
                <input
                  className={`w-[85%] border-none outline-none p-2 `}
                  type={`${showPassword ? "password": "text"}`}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
                {showPassword ? 
                  <img
                    src={eyeIcon}
                    alt="a eye icon"
                    className="cursor-pointer w-[16px] h-[16px]"
                    onClick={handleShowPassword}
                  />
                  :
                  <img
                    src={hidden}
                    alt="a closed eye icon"
                    className="cursor-pointer w-[16px] h-[16px]"
                    onClick={handleShowPassword}
                  />
                }
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
              <p className="text-[14px] text-right">Passwords must be at least 8 characters</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <button className="flex justify-center text-[12px] text-white bg-[rgba(32,31,36,1)] cursor-pointer px-4 py-3 rounded w-full text-center">
              { isLoading 
              ?
              <Loader2 className="h-4 w-4 animate-spin"/>
              :
                <p>Sign up</p>
              }     
              </button>
              <p className="text-gray-500 text-[14px] mt-3">
                Already have an account? 
                <span>
                  <Link to="/login" className="text-gray-900 underline ml-3 font-bold">
                    Login
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
