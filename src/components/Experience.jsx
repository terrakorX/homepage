import useContent from '../hooks/useContent'

export default function Experience() {
  const { experiences, transition } = useContent()

  return (
    <section id="experience" className="px-6 py-24 text-white bg-[#0b0c12] border-t border-white/5 max-sm:px-4 max-sm:py-[72px]">
      <div className="max-w-[780px] mb-11 text-left max-sm:text-center max-sm:mx-auto">
        <p className="mb-4 text-cyan-300 text-xs font-extrabold tracking-[0.14em] uppercase">Experience</p>
        <h2 className="m-0 text-white text-[clamp(2rem,4vw,4rem)] leading-[1.05] font-extrabold">{transition.experience}</h2>
      </div>

      <div className="grid gap-[18px]">
        {experiences.map((item) => (
          <article className="grid grid-cols-1 gap-4 p-7.5 border border-white/10 rounded-lg bg-linear-to-br from-purple-600/12 to-cyan-400/5 bg-[rgba(255,255,255,0.035)] max-sm:p-6" key={`${item.period}-${item.role}`}>
            <div className="text-cyan-300 text-sm font-black">{item.period}</div>
            <div className="text-left">
              <div>
                <h3 className="m-0 text-white text-[1.45rem] leading-[1.15]">{item.role}</h3>
                <p className="mt-1.5 text-white/60 font-extrabold">{item.company}</p>
                <div className="grid grid-cols-[180px_1fr] gap-6 mt-[18px] max-sm:grid-cols-1">
                  <img className="w-full self-start object-contain max-sm:max-w-[120px]" src={item.image} alt={item.company} />
                  <ul className="m-0 mt-[18px] pl-5 text-white/68 leading-[1.7] list-disc list-outside [&_li::marker]:text-cyan-300 [&_li+li]:mt-3">
                    {item.description.map((desc) => (
                      <li key={desc} className="pl-1">{desc}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2.5 mt-5">
                  {item.stack.map((tech) => (
                    <span key={tech} className="border border-white/14 rounded-full px-3 py-1.5 text-white/78 bg-white/6 text-sm font-bold">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
