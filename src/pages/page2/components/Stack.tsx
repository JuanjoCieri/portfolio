export default function Stack() {
  return (
    <div className="flex flex-col bg-gray-200 dark:bg-gray-600 rounded-xl shadow-xs shadow-fuchsia-400">
      <div className="flex border border-gray-200 rounded-t-lg items-center justify-center px-4">
        <div className="w-full h-12 rounded-t-lg bg-gray-200 dark:bg-gray-900 flex justify-start items-center space-x-1.5">
          <span className="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent "></span>
          <span className="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent"></span>
          <span className="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent"></span>
        </div>
        <div>
            <p className="text-yellow-600 font-semibold">Knowleadge</p>
        </div>
      </div>
      <div className="flex flex-row lg:flex-col flex-wrap lg:flex-nowrap p-4 gap-3 bg-white border border-gray-200">
        <p className="text-black dark:text-white font-semibold">React</p>
        <p className="text-black dark:text-white font-semibold">Javascript</p>
        <p className="text-black dark:text-white font-semibold">Redux</p>
        <p className="text-black dark:text-white font-semibold">Typescript</p>
        <p className="text-black dark:text-white font-semibold">Express</p>
        <p className="text-black dark:text-white font-semibold">NodeJS</p>
        <p className="text-black dark:text-white font-semibold">MongoDB</p>
        <p className="text-black dark:text-white font-semibold">MySQL</p>
      </div>
    </div>
  );
}
