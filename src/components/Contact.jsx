import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MotionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import emailjs from "@emailjs/browser";
import { fadeIn, textVariant } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Bob Kyneth Ruizo",
          from_email: form.email,
          to_email: "kynethruizo@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      className={`py-12 relativeflex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={textVariant()}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl pb-12"
      >
        <div className=" text-center">
          <p className="font-light font-mono text-black dark:text-white">
            Get in touch
          </p>
          <h1 className="font-bold text-[45px] sm:text-md lg:text-lg text-black dark:text-white ">
            Contact
            <span className="text-secondary">.</span>
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="rounded-lg w-full md:w-1/2 p-5 shadow-lg dark:bg-darken">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 "
            >
              <label className="flex flex-col">
                <span className="text-slate-100 dark:text-slate-50 font-medium mb-4">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-slate-10 dark:bg-tertiary py-4 px-6 placeholder:text-slate-50 dark:placeholder:text-secondary text-black dark:text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-slate-100 dark:text-slate-50 font-medium mb-4">
                  Your email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="bg-slate-10 dark:bg-tertiary py-4 px-6 placeholder:text-slate-50 dark:placeholder:text-secondary text-black dark:text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-slate-100 dark:text-slate-50 font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What you want to say?"
                  className="bg-slate-10 dark:bg-tertiary py-4 px-6 placeholder:text-slate-50 dark:placeholder:text-secondary text-black dark:text-white rounded-lg outline-none border-none font-medium"
                />
              </label>

              <button
                type="submit"
                className="bg-slate-5 dark:bg-tertiary py-3 px-4 rounded-xl outline-none w-fit text-secondary dark:text-secondary font-bold shadow-primary"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      ></motion.div>
    </section>
  );
};

export default MotionWrapper(Contact, "contact");
