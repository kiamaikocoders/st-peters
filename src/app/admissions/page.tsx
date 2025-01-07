import Link from 'next/link'

export default function Admissions() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#8B4513]">Admissions</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-[#8B4513]">Admission Process</h2>
        <ol className="list-decimal list-inside text-lg">
          <li>Fill out the admission form (available for download below)</li>
          <li>Submit the completed form along with required documents to the school office</li>
          <li>Pay the application fee</li>
          <li>Schedule an interview with the admissions team</li>
          <li>Receive the admission decision</li>
          <li>If accepted, pay the admission fee to secure your child's place</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-[#8B4513]">Required Documents</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Birth certificate</li>
          <li>Previous school records (if applicable)</li>
          <li>Immunization records</li>
          <li>Passport-sized photographs</li>
          <li>Parent/Guardian identification</li>
        </ul>
      </section>

      <div className="mb-8">
        <Link href="/admission-form.pdf" className="bg-[#8B4513] text-white py-2 px-4 rounded hover:bg-[#A0522D] transition duration-300">
          Download Admission Form (PDF)
        </Link>
      </div>

      <div className="mb-8">
        <Link href="/enrollment-checklist.pdf" className="bg-[#8B4513] text-white py-2 px-4 rounded hover:bg-[#A0522D] transition duration-300">
          Download Enrollment Checklist (PDF)
        </Link>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-[#8B4513]">Contact Admissions Office</h2>
        <p>For any questions regarding the admissions process, please contact:</p>
        <p>Phone: +254 725 911 651</p>
        <p>Email: st.peterberry24@gmail.com</p>
      </section>
    </div>
  )
}

