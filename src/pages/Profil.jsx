import React from "react";
import { useUser } from "../components/UserContext";
import { useToast } from "../components/ToastContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useTheme } from "../components/ThemeContext";

const Profil = () => {
  const { isDarkMode, _ } = useTheme();
  const { user, setUser } = useUser();
  const { showToast } = useToast();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .required("Nama tidak boleh kosong")
        .min(3, "Jumlah karakter minimal 3"),
      email: Yup.string()
        .email("Email tidak valid")
        .required("Email tidak boleh kosong"),
    }),
    onSubmit: (values, { resetForm }) => {
      setUser({ name: values.name, email: values.email });
      showToast("Data berhasil disimpan");
      resetForm();
    },
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`max-w-xl mx-auto mt-6 p-6 ${isDarkMode ? "bg-black border-white text-white" : "bg-white text-black"} rounded-lg shadow-lg`}
      >
        <div className="">
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
        <div className="max-w-xl mx-auto border rounded-xl py-2 flex flex-col items-center">
          <p className="text-2xl font-bold mb-4 text-center">Profil Pengguna</p>
          <form onSubmit={formik.handleSubmit} className="flex flex-col">
            <input
              name="name"
              className="border rounded-lg p-2 mb-2 bg-white text-black"
              type="text"
              placeholder="Nama"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <>
                <div className="">
                  <p className="text-red-500">{formik.errors.name}</p>
                </div>
              </>
            ) : null}
            <input
              name="email"
              className="border rounded-lg p-2 mb-2 bg-white text-black"
              type="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <>
                <div className="">
                  <p className="text-red-500">{formik.errors.email}</p>
                </div>
              </>
            ) : null}
            <button
              type="submit"
              className="border rounded-lg p-2 my-2"
              disabled={
                (!formik.isValid && formik.dirty) || formik.isSubmitting
              }
            >
              Kirim
            </button>
          </form>
          {user.name && user.email ? (
            <>
              <button
                type="button"
                className="border rounded-lg p-2 my-2 bg-red-500 text-white hover:bg-red-600 transition duration-300"
                onClick={() => {
                  setUser({ name: "", email: "" });
                  showToast("Anda telah log out");
                }}
              >
                Log Out
              </button>
            </>
          ) : null}
        </div>
      </motion.div>
    </>
  );
};

export default Profil;
