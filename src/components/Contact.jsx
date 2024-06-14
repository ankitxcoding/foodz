import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const validateForm = () => {
    let errors = {};

    if (!name) errors.name = "Name is required!";
    if (!email) errors.email = "Email is required!";
    if (!message) errors.message = "Enter your message!";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setStatus("Thanks for contacting! The message has been sent.");
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      setTimeout(() => {
        setStatus("");
      }, 5000);
    }
  };

  return (
    <div className="m-6 flex flex-col items-center justify-center">
      <h1 className="m-4 text-6xl font-semibold">Contact</h1>
      <div className="w-full md:w-1/2">
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={handleName}
          className="border-2 border-gray-500 rounded-md p-2 m-2 w-full"
        />
        {errors.name ? (
          <p className="mx-4 text-red-500">{errors.name}</p>
        ) : null}
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={handleEmail}
          className="border-2 border-gray-500 rounded-md p-2 m-2 w-full"
        />
        {errors.email ? (
          <p className="mx-4 text-red-500">{errors.email}</p>
        ) : null}
        <textarea
          type="text"
          placeholder="Enter Message"
          value={message}
          onChange={handleMessage}
          className="border-2 border-gray-500 rounded-md p-2 m-2 w-full"
        />
        {errors.message ? (
          <p className="mx-4 text-red-500">{errors.message}</p>
        ) : null}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-black hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
        <div className="m-2 flex justify-center">
          {status ? <p className="text-green-500">{status}</p> : null}
        </div>
      </div>
    </div>
  );
};
export default Contact;
