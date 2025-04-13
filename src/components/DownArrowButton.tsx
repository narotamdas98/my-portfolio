import { FaArrowDown } from "react-icons/fa";

const DownArrowButton = ({ nextSection }: { nextSection: string }) => {
  const handleClick = () => {
    const nextSectionElement = document.querySelector(nextSection);
    if (nextSectionElement) {
      nextSectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={handleClick}
        className="text-blue-600 hover:text-blue-800 transition duration-300"
      >
        <FaArrowDown size={30} />
      </button>
    </div>
  );
};

export default DownArrowButton;
