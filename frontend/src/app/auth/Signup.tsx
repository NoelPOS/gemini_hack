import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'

import landingRobot from '../assets/img/landingRobot.png'

interface Props {
  showLogin: boolean
  setShowLogin: Dispatch<SetStateAction<boolean>>
}

const Signup = (props: Props) => {
  return (
    <section className='bg-white'>
      <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
        <aside className='relative  h-16 lg:order-first lg:col-span-5 lg:h-full xl:col-span-6 bg-gradient-to-b from-purple-600 to-blue-100 flex items-center justify-center '>
          {/* <img
            alt=''
            src='https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            className='absolute inset-0 h-full w-full object-cover'
          /> */}
          <div className='text-white lg:flex lg:flex-col lg:items-center lg:justify-center md:hidden sm:hidden'>
            <Image
              src={landingRobot}
              width={300}
              height={300}
              alt='Landing Page Img'
            />
            <h2 className='text-3xl mb-2 '>Glad to see you</h2>
            <p className=''>Sign up to start your English Learning Journey</p>
          </div>
        </aside>

        <main className='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
          <div className='max-w-xl lg:max-w-3xl'>
            <h1 className='mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl'>
              Welcome to Wordwave!
            </h1>

            <p className='mt-4 leading-relaxed text-gray-500'>
              The best AI language learning platform for you.
            </p>

            <form action='#' className='mt-8 grid grid-cols-6 gap-6'>
              <div className='col-span-6'>
                <label
                  htmlFor='Fullname'
                  className='block text-sm font-medium text-gray-700'
                >
                  {' '}
                  Full Name{' '}
                </label>

                <input
                  type='string'
                  id='Fullname'
                  name='Fullname'
                  className='mt-1 py-2 w-full rounded-lg bg-white text-sm text-gray-700 shadow-md border outline-purple-100'
                />
              </div>

              <div className='col-span-6'>
                <label
                  htmlFor='Email'
                  className='block text-sm font-medium text-gray-700'
                >
                  {' '}
                  Email{' '}
                </label>

                <input
                  type='email'
                  id='Email'
                  name='email'
                  className='mt-1 py-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md border outline-purple-100'
                />
              </div>
              <div className='col-span-6 '>
                <label
                  htmlFor='Password'
                  className='block text-sm font-medium text-gray-700'
                >
                  {' '}
                  Password{' '}
                </label>

                <input
                  type='password'
                  id='Password'
                  name='password'
                  className='mt-1 py-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md border outline-purple-100'
                />
              </div>
              <div className='col-span-6 sm:flex sm:items-center sm:justify-between sm:gap-4'>
                <button className='inline-block shrink-0 rounded-xl bg-purple-100 px-5 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500'>
                  Sign In
                </button>

                <p className='mt-4 text-sm text-gray-500 sm:mt-0'>
                  Already have an account?{' '}
                  <a
                    href='#'
                    className='text-gray-700 underline'
                    onClick={() => {
                      props.setShowLogin(true)
                    }}
                  >
                    Log in
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  )
}

export default Signup
