import contact from '../assets/messaging.svg';
import newMessage from '../assets/newMessage.svg'
import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className='w-full lg:h-screen p-5 mt-[70px]'>
      <div className='max-w-[1990px] '>
        <div className='md:text-center'>
          <span className='uppercase text-xl tracking-widest text-[#5651e5] '>Contact</span>
          <h2 className='py-4'>Get In Touch</h2>
        </div>
        <div className='grid lg:grid-cols-5 gap-8'>

          <div className='col-span-3 lg:col-span-2 shadow-xl shadow-gray-400 p-4 rounded-xl h-full '>
            <img src={contact} className='rounded-xl' width={400} height={300} alt='' />
            <h3 className='py-4'>Taro Chilongoshi</h3>
            <p>Front-End Developer</p>
            <p>I am available for freelance or full-time positions contact me and let&apos;s talk</p>

            <div className='mt-10'>
              <p className='uppercase text-blue-500 tracking-widest'>Let&apos;s connect</p>
              <ul className='flex items-center justify-between mt-4 md:w-[80%] gap-5 py-3 lg:w-[50%]'>
                <li className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2'>
                  <a href='https://www.linkedin.com/in/taro-chilongoshi/' target='_blank'>
                    <a>
                      <FaLinkedinIn size={25} />
                    </a>
                  </a>
                </li>
                <li className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2'>
                  <a href='https://twitter.com/tchiloross' target='_blank'>
                    <a>
                      <AiOutlineTwitter size={25} />
                    </a>
                  </a>
                </li>
                <li className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2'>
                  <a href='mailto:tchiloross@gmail.com' target='_blank'>
                    <a>
                      <AiOutlineMail size={25} />
                    </a>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div id='Contact' className='shadow-xl shadow-gray-400 p-4 rounded-xl h-auto col-span-3'>
            <div className='flex flex-col items-center'>
              <div>

                <img src={newMessage} className='rounded-xl' width={400} height={300} alt='' />
              </div>

              <div className='grid gap-4 w-full lg:w-[50%] py-2 '>
                <div className="flex flex-col">
                  <a href="mailto:tciloross@gmail.com?  
subject= Hello there&body=Hello Taro">
                    <button className=' w-full p-4 mt-4 rounded-xl uppercase '>
                      E-mail
                    </button>
                  </a>
                  <p className='text-2xl py-2'>Drop me an email at - tchiloross@gmail.com</p>
                </div>

              </div>


            </div>
          </div>

        </div>

        <div className='flex justify-center py-12'>
          <a href='/#Home'>
            <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-4'>
              <HiOutlineChevronDoubleUp size={30} className='text-[#5361e5]' />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
