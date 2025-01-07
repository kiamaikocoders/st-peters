'use client';
import Image from 'next/image';
import { useState } from 'react';

const teachers = [
  {
    name: "Mrs. Jane Doe",
    position: "Headteacher",
    image: "/placeholder-teacher.jpg"
  },
  {
    name: "Mr. John Smith",
    position: "Deputy Headteacher",
    image: "/placeholder-teacher.jpg"
  },
  {
    name: "Ms. Alice Johnson",
    position: "Senior Teacher",
    image: "/placeholder-teacher.jpg"
  },
  {
    name: "Mr. David Brown",
    position: "Mathematics Teacher",
    image: "/placeholder-teacher.jpg"
  },
  {
    name: "Mrs. Sarah Lee",
    position: "English Teacher",
    image: "/placeholder-teacher.jpg"
  },
  {
    name: "Mr. Michael Chen",
    position: "Science Teacher",
    image: "/placeholder-teacher.jpg"
  }
];

export default function AboutUs() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <Image
            src="/logo.png"
            alt="St. Peter's Berry School Logo"
            width={150}
            height={150}
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-primary">About St. Peter's Berry School</h1>
        </header>

        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-4 text-primary">Our History</h2>
          <p className="text-lg mb-4 text-gray-700">
            St. Peter's Berry School was founded in 1985 with a vision to provide quality education to the 
            children of Mirangine and surrounding areas. Over the years, we have grown from a small local 
            school to a respected institution known for academic excellence and character development.
          </p>
        </section>

        <section className="mb-16 bg-primary p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
          <p className="text-lg mb-4 text-white">
            Our mission is to nurture well-rounded individuals who are academically proficient, morally 
            upright, and ready to face the challenges of the 21st century.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-primary text-center">Our Teachers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-primary">{teacher.name}</h3>
                <p className="text-gray-600">{teacher.position}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-secondary p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-4 text-primary">Our Facilities</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Modern classrooms equipped with smart boards</li>
            <li>Well-stocked library with a wide range of books and digital resources</li>
            <li>Computer lab with high-speed internet access</li>
            <li>Spacious playground for various sports activities</li>
            <li>Science laboratory for hands-on learning experiences</li>
            <li>Comfortable dormitories for boarding students</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

