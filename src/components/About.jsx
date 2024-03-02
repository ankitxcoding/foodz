import { useEffect, useState } from "react";
import { GITHUB_API } from "../utils/constants";

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

  const { avatar_url, name } = githubData;

  return (
    <>
      <div className="flex justify-center m-10">
        <div className="w-1/2 shadow-md shadow-gray-300 border-t border-gray-300 flex flex-col items-center">
          <img
            src={avatar_url}
            alt="profilePic"
            className="self-center m-4 rounded-full"
          />
          <h1 className="mb-4 text-3xl font-bold">{name}</h1>
          <h1 className="mb-4 text-2xl font-semibold">Follow Me</h1>
          <div>
            <a
              href="http://github.com/ankitxcoding"
              target="_blank"
              className="fa-brands fa-github mb-4 mx-2 text-2xl"
              rel="noopener noreferrer"
            ></a>
            <a
              href="https://www.linkedin.com/in/ankitz9"
              target="_blank"
              className="fa-brands fa-linkedin mb-4 mx-2 text-2xl"
              rel="noopener noreferrer"
            ></a>
            <a
              href="mailto:sharmaankitk666@gmail.com"
              target="_blank"
              className="fa-regular fa-envelope mb-4 mx-2 text-2xl"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
