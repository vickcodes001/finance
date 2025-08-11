import React, { useState } from "react";
import desktopAuth from "../../../public/images/auth/finance-login.png";
import Logo from "../../../public/images/Logo.png";
import { Link } from "react-router-dom";

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

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("✅ Valid form submitted:", form);
      alert("Form submitted successfully!");
      // Reset form if needed:
      setForm({ name: "", email: "", password: "" });
      setErrors({});
    }

    setTimeout(() => {
      setErrors({});
    }, 3000);

    if (!validate()) return;

    window.location.href = "/login";
  };

  return (
    <>
      <div className="flex w-full p-5 h-[760px]">
        <div className="flex flex-col justify-between min-w-[40%] h-full rounded-xl overflow-hidden relative p-10">
          <div>
            <img src={Logo} alt="finance logo image" className="w-[100px]" />
          </div>
          <img
            src={desktopAuth}
            alt="a finance signup image"
            className="object-cove w-[100%] absolute top-0 left-0 z-[-1]"
          />
          <div className="flex flex-col gap-3 pr-10">
            <h1 className="text-xl text-white font-bold pr-20">
              Keep track of your money and save for your future
            </h1>
            <p className="text-[10px] text-gray-300">
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center min-w-[60%]">
          <form
            onSubmit={handleSubmit}
            className="w-[100%] lg:w-[60%] space-y-4 p-6 rounded"
          >
              <h2 className="text-xl font-bold">Login</h2>
            <div>
              <label className="block font-semibold">Email</label>
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
              <label className="block font-semibold">Password</label>
              <input
                className={inputStyling}
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div className="flex flex-col items-center gap-2">
              <button className="text-[12px] text-white bg-gray-900 cursor-pointer px-4 py-3 rounded w-full text-center">
                Create Account
              </button>
              <p className="text-gray-500">
                Already have an account?
                <span>
                  <Link to="/login" className="text-gray-900 underline">
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
