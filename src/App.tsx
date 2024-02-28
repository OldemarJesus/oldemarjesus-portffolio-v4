export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <main className="w-full lg:w-9/12 md:w-10/12 xl:w-8/12 min-h-screen flex mx-auto">
        <section className="mt-56 font-mono flex flex-col gap-8">
          <div>
            <h1 className="text-green-blue font-bold text-xl">Hi, I'm</h1>
          </div>
          <div>
            <h2 className="text-lightest-slate text-7xl font-bold">Oldemar Gonçalves</h2>
          </div>
          <div>
            <h3 className="text-lowest-slate text-4xl font-bold">I build web and native application for joy</h3>
          </div>
          <div>
            <p className="max-w-[540px] text-lowest-slate font-bold text-lg">Currently, I'm software developer, working in system management and automation. I like re-creating beatiful website and other application that I found through out internet.</p>
          </div>
          <div className="mt-5">

            <a className="text-green-blue outline outline-2 outline-offset-2 hover:outline-4 p-4 font-bold" href="#" target="_blank">
              Check out my Linkedin!
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}