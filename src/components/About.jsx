import { skills } from "../data/Data"

const About = () => {
  return (
    <div id="About" className="lg:mt-20 p-5 w-full">
      <div className="md:text-center w-full max-w-[900px] mx-auto">

        <h2 className="mb-8" >About Me</h2>
        <div className="text-center">
          <p className=" text-left text-2xl leading-relaxed tracking-wider">
            <span className="text-5xl font-black font-serif inline-block mr-4">I</span>
            look forward to working with driven and successful teams. I thrive at both team and individual work.
            <div className="my-4">
          </div>
            I am proficient in:
          </p>
          <ul className="my-4">
            {
              skills.map((skill,index) =>

                <li key={index} className="flex items-center gap-4">
                  <input type="checkbox" checked value='' className="w-4 lg:w-5 lg:h-5 h-4 text-green-600 active:bg-green-400 bg-gray-100 rounded " />
                  <label className=" text-left text-2xl lg:text-3xl leading-relaxed tracking-wider">
                    {skill}
                  </label>
                </li>
              )}
            

          </ul>
          <div className="my-4">
          </div>
          <p className=" text-left text-2xl leading-relaxed tracking-wider">
            Think it and I'll Code it 😏
          </p>
         
        </div>
      </div>
    </div>
  )
}

export default About
