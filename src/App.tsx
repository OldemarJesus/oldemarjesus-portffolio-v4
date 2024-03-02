import AppLogo from "./components/AppLogo"

export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-5">
      <main className="w-full lg:w-9/12 md:w-10/12 xl:w-8/12 flex flex-col mx-auto">
        <nav className="max-sm:hidden flex justify-between items-center">
          <div className="hover:outline-4 outline-green-blue hover:outline outline-2 outline-offset-2">
            <a href="#"><AppLogo width={100} /></a>
          </div>
          <div className="flex justify-between items-center gap-20">
            <ol className="flex justify-between items-center gap-5">
              <li className="hover:border-b-2 border-green-blue"><a href="#">About</a></li>
              <li className="hover:border-b-2 border-green-blue"><a href="#">Experience</a></li>
              <li className="hover:border-b-2 border-green-blue"><a href="#">Work</a></li>
            </ol>
            <div className="text-green-blue outline outline-1 outline-offset-2 hover:outline-4 p-2 font-bold cursor-pointer">
              <a href="#">Resume</a>
            </div>
          </div>
        </nav>
        <section className="mt-20 font-mono flex flex-col gap-8">
          <div>
            <h1 className="text-green-blue font-bold text-xl">Hi, I'm</h1>
          </div>
          <div>
            <h2 className="text-lightest-slate text-clamp-xl font-bold">Oldemar Gonçalves</h2>
          </div>
          <div>
            <h3 className="text-lowest-slate text-clamp-lg font-bold">I build web and native application for joy</h3>
          </div>
          <div>
            <p className="max-w-[540px] text-lowest-slate font-bold text-lg">Currently, I'm software developer, working in system management and automation. I like re-creating beatiful website and other application that I found through out internet.</p>
          </div>
          <div className="mt-5">
            <a className="text-green-blue outline outline-2 outline-offset-2 hover:outline-4 p-4 font-bold" href="https://www.linkedin.com/in/oldemar-jesus-892250206/" target="_blank">
              Check out my Linkedin!
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}