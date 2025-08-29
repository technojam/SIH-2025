import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { data } from "./utils/data";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function ThemePageTable() {
  const [openModal, setOpenModal] = useState(false);
  const [problemId, setProblemId] = useState(0);
  const modalRef = useRef(null);

  const { id } = useParams();
  const theme = data.find((theme) => theme.id.toString() === id);
  const statements = theme?.ps || [];

  const handleOpenModal = (psId) => {
    setProblemId(psId);
    setOpenModal(true);
  };

  useEffect(() => {
    const adjustModalPosition = () => {
      if (modalRef.current) {
        const modal = modalRef.current;
        const { innerHeight, innerWidth } = window;
        const modalHeight = modal.offsetHeight;
        const modalWidth = modal.offsetWidth;

        modal.style.top = `${(innerHeight - modalHeight) / 2}px`;
        modal.style.left = `${(innerWidth - modalWidth) / 2}px`;
      }
    };

    if (openModal) {
      adjustModalPosition();
      window.addEventListener("resize", adjustModalPosition);
    }

    return () => window.removeEventListener("resize", adjustModalPosition);
  }, [openModal]);

  const problem = statements.find((problem) => problem.ID === problemId);

  if (!statements.length) return <div>No data found</div>;
  const style = {
    fontFamily: "Mukta, sans-serif",
  };
  return (
    <div
    >
      {openModal && problem && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setOpenModal(false)}
          ></div>
          <div
            ref={modalRef}
            style={style}
            className="bg-white p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg shadow-lg mx-2 sm:mx-4 md:mx-6 lg:mx-8 z-10 w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl"
          >
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-1.5 right-1.5 text-[#f6921e] bg-white rounded-full w-7 h-7 text-xl duration-150 hover:bg-[#f6921e] hover:text-white"
            >
              &times;
            </button>
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">
              {problem.Title}
            </h2>

            <div className="overflow-y-auto max-h-[50vh]">
              <table className="w-full text-left text-xs sm:text-sm md:text-base  border table-auto">
                <tbody>
                  <tr className="border">
                    <th className="py-1 px-2 sm:px-3 md:px-4 border-r text-gray-600">
                      Description
                    </th>
                    <td className="py-1 px-2 sm:px-3 md:px-4 text-gray-800">
                      {problem.Description}
                    </td>
                  </tr>
                  <tr className="border">
                    <th className="py-1 px-2 sm:px-3 md:px-4 border-r text-gray-600">
                      Organisation
                    </th>
                    <td className="py-1 px-2 sm:px-3 md:px-4 text-gray-800">
                      {problem.Org}
                    </td>
                  </tr>
                  <tr className="border">
                    <th className="py-1 px-2 sm:px-3 md:px-4 border-r text-gray-600">
                      Category
                    </th>
                    <td className="py-1 px-2 sm:px-3 md:px-4 text-gray-800">
                      {problem.Category}
                    </td>
                  </tr>
                  <tr>
                    <th className="py-1 px-2 sm:px-3 md:px-4 border-r text-gray-600">
                      PS Number
                    </th>
                    <td className="py-1 px-2 sm:px-3 md:px-4 text-gray-800">
                      {problem.ID}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center pt-[12vh] overflow-y-scroll no-scrollbar opacity-90 h-[92vh]">
        <div className="flex items-center w-[90vw] p-3">
          <Link
            to="/#themes"
            className="text-[#f6921e] pl-5 text-2xl font-bold"
          >
            <IoMdArrowRoundBack />
          </Link>
          <div className="w-full text-white text-center lg:text-5xl text-3xl mb-[28.5px]">
            {theme.bucket}
          </div>
        </div>
        <table className="rounded-lg opacity-90 lg:w-[90vw] bg-white   mb-9 justify-center">
          <thead>
            <tr>
              <th className="py-2 px-2 border-b">S.No</th>
              <th className="py-2 px-2 border-l border-b ">Organization</th>
              <th className="py-2 px-2 border-l border-b">Problem Statement</th>
              <th className="py-2 px-2 border-l border-b">Category</th>
              <th className="py-2 border-l border-b px-2">PS Number</th>
            </tr>
          </thead>
          <tbody>
            {statements.map((problem, idx) => (
              <tr key={problem.ID} className="border-t">
                <td className="py-2 px-2 border-r text-center">{idx + 1}</td>
                <td className="py-2 px-2 border-r ">{problem.Org}</td>
                <td className="py-2 px-2 border-r ">
                  <p
                    className="cursor-pointer text-blue-500 hover:underline"
                    onClick={() => handleOpenModal(problem.ID)}
                  >
                    {problem.Title}
                  </p>
                </td>
                <td className="py-2 px-2 border-l ">{problem.Category}</td>
                <td className="py-2 px-2 border-l ">{problem.ID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
