import { useState } from "react";
import Button from "../components/Button";

type ProjectProps = {
  projectName: string;
  projectDesc: string;
  projectImage: string;
  projectStack: Array<any>;
  projectDate: string;
};

export default function WindowMock({
  projectName,
  projectDesc,
  projectImage,
  projectStack,
  projectDate,
}: ProjectProps) {
  const [show, setShow] = useState(false);
  function showDetail() {
    setShow(!show);
  }

  return (
    <>
      {show ? (
        <div className="w-[85%] lg:w-[50%] transition-colors ease-linear shadow-md">
          <div className="flex rounded-t-lg items-center justify-center px-4 bg-gray-200 dark:bg-gray-900">
            <div className="w-full h-12 rounded-t-lg bg-gray-200 dark:bg-gray-900 flex justify-start items-center space-x-1.5">
              <span className="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent "></span>
              <span className="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent"></span>
              <span className="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent"></span>
            </div>
            <div>
              <p className="text-yellow-600 font-semibold">
                Projects/{projectName}
              </p>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 border-t-0 w-[100%] h-[430px] lg:h-[384px] rounded-b-lg p-3 flex flex-col">
            <p className="font-bold text-gray-700 text-2xl">
              {projectName} | {projectDate}
            </p>
            <div className="border my-4"></div>
            <p className="text-gray-600 font-medium">{projectDesc}</p>
            <p className="font-bold text-gray-700 text-2xl lg:mt-5">Stack</p>
            <div className="border my-4"></div>
            <div className="w-[100%] flex justify-start items-center flex-wrap gap-1 lg:gap-3">
              {projectStack.map((tec) => (
                <p className="font-medium text-gray-700">
                  {tec} -
                </p>
              ))}
            </div>
            <div className="w-full h-full bottom-0 py-3 flex justify-end items-end gap-4">
              <a className="bg-yellow-200 text-gray-700 font-medium flex justify-center items-center py-1 px-3 rounded-lg gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                <span>Deploy</span>
              </a>
              <a className="bg-yellow-200 text-gray-700 font-medium flex justify-center items-center py-1 px-3 rounded-lg gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="w-6 h-6 text-gray-700"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                </svg>
                <span>Repository</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[85%] lg:w-[50%] transition-colors ease-linear shadow-md">
          <div className="flex rounded-t-lg items-center justify-center px-4 bg-gray-200 dark:bg-gray-900">
            <div className="w-full h-12 rounded-t-lg bg-gray-200 dark:bg-gray-900 flex justify-start items-center space-x-1.5">
              <span className="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent "></span>
              <span className="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent"></span>
              <span className="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent"></span>
            </div>
            <div>
              <p className="text-yellow-600 font-semibold">
                Projects/{projectName}
              </p>
            </div>
          </div>
          <div className="bg-gray-900 dark:bg-gray-700 border-t-0 w-full h-[430px] lg:h-[384px] rounded-b-lg p-3 flex flex-col lg:flex-row items-center justify-center">
            <Button onClick={showDetail} />
            <img src={projectImage} className="object-cover w-full" />
          </div>
        </div>
      )}
    </>
  );
}
