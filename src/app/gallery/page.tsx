import Image from 'next/image'

const galleryItems = [
  { src: 'https://www.eurokidsindia.com/blog/wp-content/uploads/2023/08/sports-day-1.jpg', alt: 'Sports Day', category: 'Sports' },
  { src: 'https://images.pexels.com/photos/8093032/pexels-photo-8093032.jpeg?cs=srgb&dl=pexels-olia-danilevich-8093032.jpg&fm=jpg', alt: 'Graduation Ceremony', category: 'Events' },
  { src: 'https://media.cobbk12.org/media/WWWCobb/pgg/4482/1728663216745.jpg', alt: 'Science Fair', category: 'Academics' },
  { src: 'https://d4f7y6nbupj5z.cloudfront.net/wp-content/uploads/2023/06/Youth-1-1.jpg', alt: 'Music Performance', category: 'Arts' },
  { src: 'https://www.naeyc.org/sites/default/files/globally-shared/Images/resources/pubs/blk_bm_ii_page_22.jpg', alt: 'Classroom Activity', category: 'Academics' },
  { src: 'https://www.shutterstock.com/image-photo/group-african-american-children-having-600nw-1902063001.jpg', alt: 'Outdoor Learning', category: 'Academics' },
]

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <div key={index} className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src={item.src}
              alt={item.alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
              <p className="text-lg font-semibold">{item.alt}</p>
              <p className="text-sm">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

