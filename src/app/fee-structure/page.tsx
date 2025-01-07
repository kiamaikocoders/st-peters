import Link from 'next/link'

export default function FeeStructure() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#8B4513]">Fee Structure</h1>
      
      <div className="mb-8">
        <Link href="/fee-structure.pdf" className="bg-[#8B4513] text-white py-2 px-4 rounded hover:bg-[#A0522D] transition duration-300">
          Download Fee Structure (PDF)
        </Link>
      </div>

      <table className="w-full border-collapse border border-[#8B4513]">
        <thead>
          <tr className="bg-[#8B4513] text-white">
            <th className="border border-[#8B4513] p-2">Class</th>
            <th className="border border-[#8B4513] p-2">Term 1</th>
            <th className="border border-[#8B4513] p-2">Term 2</th>
            <th className="border border-[#8B4513] p-2">Term 3</th>
            <th className="border border-[#8B4513] p-2">Uniforms</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#8B4513] p-2">PP1</td>
            <td className="border border-[#8B4513] p-2">KSH 2,500</td>
            <td className="border border-[#8B4513] p-2">KSH 2,500</td>
            <td className="border border-[#8B4513] p-2">KSH 2,500</td>
            <td className="border border-[#8B4513] p-2">KSH 4,500</td>
          </tr>
          <tr>
            <td className="border border-[#8B4513] p-2">PP2</td>
            <td className="border border-[#8B4513] p-2">KSH 2,500</td>
            <td className="border border-[#8B4513] p-2">KSH 2,500</td>
            <td className="border border-[#8B4513] p-2">KSH 2,500</td><td className="border border-[#8B4513] p-2">KSH 4,500</td>
          </tr>
          <tr>
            <td className="border border-[#8B4513] p-2">Grade 7 (Boarders)</td>
            <td className="border border-[#8B4513] p-2">KSH 16,000</td>
            <td className="border border-[#8B4513] p-2">KSH 16,000</td>
            <td className="border border-[#8B4513] p-2">KSH 16,000</td>
            <td className="border border-[#8B4513] p-2">KSH 8,500</td>
          </tr>
          <tr>
            <td className="border border-[#8B4513] p-2">Grade 7 (Day Scholars)</td>
            <td className="border border-[#8B4513] p-2">KSH 11,500</td>
            <td className="border border-[#8B4513] p-2">KSH 11,500</td>
            <td className="border border-[#8B4513] p-2">KSH 11,500</td>
            <td className="border border-[#8B4513] p-2">KSH 8,500</td>
          </tr>
          <tr>
            <td className="border border-[#8B4513] p-2">Grade 8 (Boarders)</td>
            <td className="border border-[#8B4513] p-2">KSH 16,000</td>
            <td className="border border-[#8B4513] p-2">KSH 16,000</td>
            <td className="border border-[#8B4513] p-2">KSH 16,000</td>
            <td className="border border-[#8B4513] p-2">KSH 8,500</td>
          </tr>
          <tr>
            <td className="border border-[#8B4513] p-2">Grade 8 (Day Scholars)</td>
            <td className="border border-[#8B4513] p-2">KSH 11,500</td>
            <td className="border border-[#8B4513] p-2">KSH 11,500</td>
            <td className="border border-[#8B4513] p-2">KSH 11,500</td>
            <td className="border border-[#8B4513] p-2">KSH 8,500</td>
          </tr>
          <tr>
            <td className="border border-[#8B4513] p-2">Grade 9 (Boarders)</td>
            <td className="border border-[#8B4513] p-2">KSH 16,000</td>
            <td className="border border-[#8B4513] p-2">KSH 16,000</td>
            <td className="border border-[#8B4513] p-2">KSH 16,000</td>
            <td className="border border-[#8B4513] p-2">KSH 8,500</td>
          </tr>
          <tr>
            <td className="border border-[#8B4513] p-2">Grade 9 (Day Scholars)</td>
            <td className="border border-[#8B4513] p-2">KSH 11,500</td>
            <td className="border border-[#8B4513] p-2">KSH 11,500</td>
            <td className="border border-[#8B4513] p-2">KSH 11,500</td>
            <td className="border border-[#8B4513] p-2">KSH 8,500</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-[#8B4513]">Mode of Payment</h2>
        <p><strong>Account Name:</strong> MARIA KIMARI</p>
        <p><strong>Account Number:</strong> 0150100070254</p>
        <p><strong>Bank:</strong> EQUITY BANK</p>
        <p><strong>Branch:</strong> NAKURU</p>
        <p className="mt-4"><strong>Or through:</strong></p>
        <p><strong>Paybill:</strong> BUSINESS NO 247247</p>
        <p><strong>Account No:</strong> 0150100070254</p>
        <p><strong>Account Name:</strong> MARIA KIMARI</p>
      </div>
    </div>
  )
}

