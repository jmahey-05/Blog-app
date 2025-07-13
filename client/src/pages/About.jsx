import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Blog App
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Welcome to the Blog App! This blog was built by Jatin and Jiya as part of a training project to practice creating a full blogging platform. It lets users share their thoughts and ideas on different topics. The project highlights important features like user login, creating and managing posts, and a design that works well on different devices. It’s a simple example of using modern web technologies and shows the progress made in learning web development.
            </p>

            <p>
              On this blog, you'll find weekly articles and tutorials on topics
              such as web development, software engineering, and programming
              languages. 
            </p>
            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
 