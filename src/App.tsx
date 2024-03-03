import { useState } from "react"
import AppLogo from "./components/AppLogo"

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900 min-h-screen pb-48 text-white">
      <button className="hidden max-sm:flex absolute right-10 top-10 text-4xl" onClick={() => setMenuOpen(state => !state)}>🍔</button>
      <nav onClick={() => setMenuOpen(state => !state)} className={`hidden ${menuOpen && "max-sm:flex"} flex-col items-center w-screen h-screen absolute bg-gray-900 bg-opacity-95`}>
        <div className="border-white border-b-2">
          <a href="#"><AppLogo width={200} /></a>
        </div>
        <div className="w-full flex flex-col items-center mt-5">
          <ol className="w-3/4 flex flex-col items-center gap-10">
            <a href="#" className="w-full border-2 border-green-blue outline-1 hover:outline-4 text-xl font-bold py-2 text-center">About</a>
            <a href="#" className="w-full border-2 border-green-blue outline-1 hover:outline-4 text-xl font-bold py-2 text-center">Experience</a>
            <a href="#" className="w-full border-2 border-green-blue outline-1 hover:outline-4 text-xl font-bold py-2 text-center">Work</a>
          </ol>
        </div>
        <div className="mt-10">
          <a href="#" className="text-green-blue outline outline-1 outline-offset-2 hover:outline-4 p-2 font-bold text-2xl">Resume</a>
        </div>
      </nav>
      <main className="w-full lg:w-9/12 md:w-10/12 xl:w-8/12 flex flex-col mx-auto  p-5">
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