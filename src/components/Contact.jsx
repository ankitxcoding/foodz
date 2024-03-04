import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    setSubmit("Thanks for contacting! The message has been sent.");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="m-6 flex flex-col items-center justify-center">
      <h1 className="m-4 text-6xl font-semibold">Contact</h1>
      <div className="w-full md:w-1/2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleName}
          className="border-2 border-gray-500 rounded-md p-2 m-2 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          className="border-2 border-gray-500 rounded-md p-2 m-2 w-full"
        />
        <textarea
          type="text"
          placeholder="Message"
          value={message}
          onChange={handleMessage}
          className="border-2 border-gray-500 rounded-md p-2 m-2 w-full"
        />
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-black hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
        <h1 className="text-2xl font-semibold text-center m-4">{submit}</h1>
      </div>
    </div>
  );
};
export default Contact;
