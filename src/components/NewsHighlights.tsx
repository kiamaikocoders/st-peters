import Link from 'next/link'

const newsItems = [
  {
    id: 1,
    title: "Annual Sports Day a Great Success",
    date: "2023-05-15",
    excerpt: "Our annual Sports Day was held last week with enthusiastic participation from all students..."
  },
  {
    id: 2,
    title: "St. Peter's Berry School Wins Regional Science Fair",
    date: "2023-04-22",
    excerpt: "We are proud to announce that our students took first place in the Regional Science Fair..."
  },
  {
    id: 3,
    title: "New Computer Lab Inaugurated",
    date: "2023-03-10",
    excerpt: "We are excited to announce the opening of our new state-of-the-art computer lab..."
  }
]

export default function NewsHighlights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {newsItems.map((item) => (
        <div key={item.id} className="card hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-serif font-bold mb-2 text-primary">{item.title}</h3>
          <p className="text-sm text-gray-600 mb-2">Published on {item.date}</p>
          <p className="mb-4">{item.excerpt}</p>
          <Link href={`/news/${item.id}`} className="text-primary hover:text-accent transition duration-300">
            Read more
          </Link>
        </div>
      ))}
    </div>
  )
}

