import { useEffect, useState } from "react";
import { GITHUB_API } from "../utils/constants";
import { LINKEDIN_URL } from "../utils/constants";
import { EMAIL_ID } from "../utils/constants";

const About = () => {
  const [githubData, setGithubData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(GITHUB_API);
    const json = await data.json();
    setGithubData(json);
    console.log(json);
  };

  const { avatar_url, name, html_url } = githubData;

  return (
    <>
      <div className="flex justify-center m-10">
        <div className="w-1/2 shadow-md shadow-gray-300 border-t border-gray-300 flex flex-col items-center">
          <img
            src={avatar_url}
            alt="profilePic"
            className="self-center w-80 m-4 border-2 border-black rounded-full"
          />
          <h1 className="mb-4 text-3xl font-bold">{name}</h1>
          <h1 className="mb-4 text-2xl font-semibold">Follow Me</h1>
          <div>
            <a
              href={html_url}
              target="_blank"
              className="fa-brands fa-github mb-4 mx-2 text-2xl border border-black px-2 py-1 rounded-full hover:text-white hover:bg-black"
              rel="noopener noreferrer"
            ></a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              className="fa-brands fa-linkedin-in mb-4 mx-2 text-2xl border border-black px-[9.5px] py-1 rounded-full hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2]"
              rel="noopener noreferrer"
            ></a>
            <a
              href={"mailto:" + EMAIL_ID}
              target="_blank"
              className="fa-solid fa-envelope mb-4 mx-2 text-2xl border border-black px-2 py-1 rounded-full hover:text-[#E50914] hover:bg-white"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
