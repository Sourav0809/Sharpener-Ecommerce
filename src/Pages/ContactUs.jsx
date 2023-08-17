import { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");

  const nameHandeler = (e) => {
    setName(e.target.value);
  };

  const emailHandeler = (e) => {
    setEmail(e.target.value);
  };

  const phoneHandeler = (e) => {
    setPhoneNo(e.target.value);
  };

  /* -------------------------------------------------------------------------- */
  /*                  // when user sumited the contact us Form                  */
  /* -------------------------------------------------------------------------- */
  const submitedFormHandeler = async (e) => {
    e.preventDefault();
    const submitedData = {
      name: name,
      email: email,
      phoneNo: phoneNo,
    };
    try {
      const postedData = await axios.post(
        "https://sharpener-ecommerce-default-rtdb.firebaseio.com/users.json",
        submitedData
      );

      console.log(postedData);
    } catch (error) {
      console.log(error);
    }

    setName("");
    setEmail("");
    setPhoneNo("");
  };

  return (
    <>
      <section className="flex justify-center items-center bg-gray-600 text-white mt-1 mb-2 p-20 text-8xl">
        <h1 className=" font-mono">Contact Us</h1>
      </section>

      {/* Contact Us Form  */}

      <div className="mt-6 mb-20 w-[60rem] ml-auto mr-auto bg-slate-500 rounded-lg form-container min-[340px]:w-[90%]  max-[700px]:w-[90%] min-[700px]:w-[60rem]">
        <form
          className="flex flex-col p-16 text-xl gap-2 justify-center"
          onSubmit={submitedFormHandeler}
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="  text-white">
              Name
            </label>
            <input
              type="text"
              className=" p-[0.2rem]"
              onChange={nameHandeler}
              value={name}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="  text-white">
              Email
            </label>
            <input
              type="email"
              className=" p-[0.2rem]"
              onChange={emailHandeler}
              value={email}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="  text-white">
              Phone
            </label>
            <input
              type="number"
              className=" p-[0.2rem]"
              onChange={phoneHandeler}
              value={phoneNo}
            />
          </div>

          <button type="submit" className=" mt-6 bg-cyan-500 p-1 text-white">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
