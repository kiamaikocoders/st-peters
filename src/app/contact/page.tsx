'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = (data) => {
    console.log(data)
    setIsSubmitted(true)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          {isSubmitted ? (
            <p className="text-green-600 text-lg">Thank you for your message. We'll get back to you soon!</p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", { required: "Message is required" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
              </div>
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </form>
          )}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <ul className="space-y-4 text-lg">
            <li>
              <strong>Address:</strong> St. Peter's Berry School, Mirangine, Nakuru County, Kenya
            </li>
            <li>
              <strong>Phone:</strong> +254 123 456 789
            </li>
            <li>
              <strong>Email:</strong> info@stpetersberry.ac.ke
            </li>
          </ul>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
              <a href="#" className="text-pink-600 hover:text-pink-800">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

