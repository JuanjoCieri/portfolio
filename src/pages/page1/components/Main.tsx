import Header from "./Header";

export default function Main() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center lg:items-start justify-center">
        <h3 className="text-4xl font-bold ">Hello!, i am</h3>
        <h1
          className="text-6xl lg:text-8xl text-center lg:text-start font-bold bg-gradient-to-r bg-clip-text text-transparent 
            from-indigo-700 via-purple-700 to-indigo-400
            animate-text"
        >
          Juan José Cieri
        </h1>
        <h2 className="text-4xl font-semibold flex gap-2">
          Full Stack <p className="text-yellow-500">Developer</p>
        </h2>
      </main>
    </>
  );
}
