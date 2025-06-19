const mentors = [
  {
    name: "Sahil Verma",
    title: "Software Engg.",
    company: "NVIDIA",
  },
  {
    name: "Sahil Verma",
    title: "Software Engg.",
    company: "NVIDIA",
  },
  {
    name: "Sahil Verma",
    title: "Software Engg.",
    company: "NVIDIA",
  },
]

export default function Mentors() {
  return (
    <div className="w-full max-w-[1200px] mx-auto pt-20 pb-16">
      {/* Section Title */}
      <div className="text-center mb-12 px-4">
        <h2 className="font-bold text-[clamp(28px,5vw,48px)] leading-tight text-white m-0">
          Learn From The <span className="text-yellow-400">Best Mentors</span>
        </h2>
      </div>

      {/* Mentor Cards - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12 w-full px-4">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="flex items-center min-h-[100px] sm:min-h-[120px] gap-4 sm:gap-6 rounded-3xl p-4 sm:p-6 bg-gradient-to-r from-[rgba(129,28,157,0.75)] via-[rgba(26,90,153,0.75)] to-[rgba(4,2,45,0.75)] border border-white/20"
          >
            {/* Profile Image */}
            <div className="w-20 h-20 sm:w-[120px] sm:h-[120px] rounded-2xl bg-[#1B1B1B] flex-shrink-0">
              {/* Placeholder for profile image */}
            </div>

            {/* Mentor Info */}
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <h3 className="font-bold text-[clamp(18px,3vw,24px)] leading-tight text-white m-0 mb-1 sm:mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                {mentor.name}
              </h3>
              <p className="font-medium text-[clamp(14px,2.5vw,20px)] leading-normal text-[#C3C3C3] m-0 mb-1 overflow-hidden text-ellipsis whitespace-nowrap">
                {mentor.title}
              </p>
              <p className="font-medium text-[clamp(14px,2.5vw,20px)] leading-normal text-[#C3C3C3] m-0 overflow-hidden text-ellipsis whitespace-nowrap">
                {mentor.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
