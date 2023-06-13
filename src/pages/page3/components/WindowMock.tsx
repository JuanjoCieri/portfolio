export default function WindowMock() {
    return (
      <div className="w-[85%] lg:w-[50%] transition-colors ease-linear shadow-md">
        <div className="flex rounded-t-lg items-center justify-center px-4 bg-gray-200 dark:bg-gray-900">
        <div className="w-full h-12 rounded-t-lg bg-gray-200 dark:bg-gray-900 flex justify-start items-center space-x-1.5">
          <span className="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent "></span>
          <span className="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent"></span>
          <span className="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent"></span>
        </div>
        <div>
          <p className="text-yellow-600 font-semibold">Projects</p>
        </div>
      </div>
        <div className="bg-gray-100 dark:bg-gray-700 border-t-0 w-full h-[430px] lg:h-[384px] rounded-b-lg p-3 flex flex-col lg:flex-row">
        </div>
      </div>
    );
  }