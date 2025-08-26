import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FollowMe = () => {
  return (
    <div>
      <div className="section4 flex pt-[2px]">
        {/* GitHub */}
        <div className="gradient-border flex flex-col items-center justify-center w-1/2 h-[450px] bg-black bg-gradient-to-tr from-[#000000] to-[#36363662]">
          <div className="p-4 flex flex-col">
            <div className="mb-4">
              <FaGithub size={35} />
            </div>
            <h1 className="text-lg font-semibold text-white">
              Follow me on GitHub
            </h1>
            <p className="text-gray-400 mt-2 text-sm">
              Check out my projects and the code behind them.
            </p>
            <a
              href="https://github.com/1anishraut?tab=repositories"
              className="border rounded-full border-[#99000080] px-2 mt-4 shadow-lg hover:shadow-[#99000080] hover:scale-110 transition-all duration-300 mr-auto cursor-pointer"
            >
              <h1 className="bg-black rounded-4xl w-20 py-2 text-center">
                Follow
              </h1>
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col items-center justify-center w-1/2 h-[450px] bg-black bg-gradient-to-br from-[#36363662] to-[#000000]">
          <div className="p-4 flex flex-col">
            <div className="mb-4">
              <FaLinkedin size={35} />
            </div>
            <h1 className="text-lg font-semibold text-white">
              Connect with me on LinkedIn
            </h1>
            <p className="text-gray-400 mt-2 text-sm">
              Let’s connect and share ideas in tech & design.
            </p>
            <a
              href="www.linkedin.com/in/anish-raut"
              className="border rounded-full border-[#99000080] px-2 mt-4 shadow-lg hover:shadow-[#99000080] hover:scale-110 transition-all duration-300 mr-auto cursor-pointer"
            >
              <h1 className="bg-black rounded-4xl w-20 py-2 text-center">
                Connect
              </h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowMe;
