import Head from 'next/head'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import profilePic from "../public/dev.svg";
import computerPic from "../public/computer.svg";
import bookPic from "../public/books.svg";
import toolPic from "../public/tools.svg";



export default function Home() {
  return (
    <div>
      <Head>
        <title>Chaeikim Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />
      </Head>

      <main className='bg-white px-10'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-2xl font-oswald'>developedbychae</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Chaei Kim</h2>
            <h3 className='text-2xl py-2'>Front-end Developer</h3>
            <p className='text-md py-t leading-8 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum interdum turpis, ut porta leo auctor nec. Praesent in vulputate tellus. Mauris nec mauris sit amet libero mattis finibus id at mi.</p>
          </div>
          <div className='text-5xl flex justify-center gap-10 py-3 text-gray-500'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className='relative bg-gradient-to-b from-teal-300 rounded-full w-80 h-80 mx-auto mt-15 overflow-hidden'>
            <Image src={profilePic} layout="fill" />
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>It's Me</h3>
            <p className='text-md py-2 leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <span className='text-teal-500'>incididunt</span> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <span className='text-teal-500'>exercitation</span> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in <span className='text-teal-500'>voluptate</span> velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 '>
              <Image src={computerPic} width={100} height={100} />
              <h3 className='text-lg font-medium pt-7 pb-2'>My Stacks</h3>
              <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <h4 className='py-4 text-teal-600 font-medium'>Programming Language I use</h4>
              <p className='py-1'>JavaScript</p>
              <p className='py-1'>TypeScript</p>
              <p className='py-1'>Java</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 '>
              <Image src={bookPic} width={100} height={100} />
              <h3 className='text-lg font-medium pt-7 pb-2'>My Stacks</h3>
              <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <h4 className='py-4 text-teal-600 font-medium'>Programming Language I use</h4>
              <p className='py-1'>JavaScript</p>
              <p className='py-1'>TypeScript</p>
              <p className='py-1'>Java</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 '>
              <Image src={toolPic} width={100} height={100} />
              <h3 className='text-lg font-medium pt-7 pb-2'>My Stacks</h3>
              <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <h4 className='py-4 text-teal-600 font-medium'>Programming Language I use</h4>
              <p className='py-1'>JavaScript</p>
              <p className='py-1'>TypeScript</p>
              <p className='py-1'>Java</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
