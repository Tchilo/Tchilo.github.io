import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineGithub, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  
  const handleClick = () => {
    setNav(!nav)
  }
  return (
    <div className="fixed w-full h-16 py-3 shadow-xl z-[100] mb-96 bg-[#ecf0f3]">
      <div className='container mx-auto px-6 lg:px-0'>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link to='/'>
        <h2>TC</h2>
        </Link>
        <div>
          <ul className='hidden md:flex '>
            <a href='/#Home'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </a>
            <a href='/#About'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </a>
            <a href='/#Skills'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </a>
            <a href='/#Projects'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </a>
            <a href='/#Contact'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </a>
          </ul>
          <div className='md:hidden'>
            < AiOutlineMenu size={25} onClick={handleClick} />
          </div>
          {nav &&
            <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
              <div className="fixed left-0 top-0 w-[75%] h-screen sm:w-[60%] md:w-[60%] bg-[#ecf0f3] p-10 ease-in duration-500" >
                <div>
                  <div className='flex justify-between items-center w-full'>
                    <div className=''>
                      <h2>TC</h2>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-1' >
                      <AiOutlineClose onClick={handleClick} size={25} />
                    </div>
                  </div>
                  <div className='border-b border-gray-300 my-4'>
                    <p className='w-[85%] md:w-[90%] py-4'>Let&apos;s make the world better one app at a time</p>
                  </div>
                </div>

                <div className='py-4 '>
                  <ul className='flex flex-col gap-5 '>
                    <Link  to='/#Home'>
                      <li onClick={handleClick}className='text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link  to='/#About'>
                      <li onClick={handleClick}className=' text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link to='/#Skills'>
                      <li onClick={handleClick}  className=' text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link  to='/#Projects'>
                      <li onClick={handleClick}className='text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link  to='/#Contact'>
                      <li onClick={handleClick}className='text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                  </ul>

                  <div className='pt-40'>
                    <p className='uppercase text-blue-500 tracking-widest'>Let&apos;s connect</p>
                    <ul className='flex items-center justify-between mt-4 md:w-[80%]'>
                        <li className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2'>
                        <a href='https://www.linkedin.com/in/taro-chilongoshi/' target='_blank'>
                            <FaLinkedinIn size={25} />
                            </a>
                      </li>
                        <li className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2'>
                          <a href="https://github.com/Tchilo" target='_blank'>

                        <AiOutlineGithub size={25} />
                          </a>
                      </li>
                        <li className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2'>
                  <a href='mailto:tchiloross@gmail.com' target='_blank'>
                          
                            <AiOutlineMail size={25} />
                            </a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          }
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar