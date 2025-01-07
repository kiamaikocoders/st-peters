'use client';

import { useState } from 'react';

const schoolInfo = `
St. Peter's Berry School, founded in 1985, is a mixed primary school providing day and boarding options in Mirangine, Nakuru County, Kenya.

Mission: To nurture well-rounded individuals who are academically proficient, morally upright, and ready to face the challenges of the 21st century.

Facilities:
- Modern classrooms with smart boards
- Well-stocked library
- Computer lab with high-speed internet
- Spacious playground
- Science laboratory
- Comfortable dormitories for boarding students

Staff:
- Mrs. Jane Doe: Headteacher
- Mr. John Smith: Deputy Headteacher
- Ms. Alice Johnson: Senior Teacher
- Mr. David Brown: Mathematics Teacher
- Mrs. Sarah Lee: English Teacher
- Mr. Michael Chen: Science Teacher

Admissions:
- Fill out the admission form
- Submit completed form with required documents
- Pay application fee
- Schedule an interview
- Receive admission decision
- Pay admission fee if accepted

Fee Structure (Sample):
- PP1 & PP2: KSH 2,500 per term
- Grade 7-9 (Boarders): KSH 16,000 per term
- Grade 7-9 (Day Scholars): KSH 11,500 per term
- Uniforms: KSH 4,500 - 8,500

Contact:
- Phone: +254 725 911 651
- Email: st.peterberry24@gmail.com
- Location: Mirangine, Nakuru County, Kenya

Academics:
- Follow Competency-Based Curriculum (CBC)
- Subjects: English, Kiswahili, Mathematics, Science and Technology, Social Studies, Religious Education, Creative Arts, Physical and Health Education

Co-Curricular Activities:
- Sports (Football, Netball, Athletics, Swimming)
- Music and Drama
- Debate Club
- Environmental Club
- Chess Club
- Scouts and Girl Guides

Recent Achievements:
- 1st place in County Science Fair (2022)
- Winners of Regional Debate Championship (2021, 2022)
- Top 5 in National Mathematics Olympiad (2023)
- Gold Medal in Inter-School Athletics Competition (2022)
- Best Performance in KCPE exams in Nakuru County (2021, 2022)
`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response based on school information
    const aiResponse = generateResponse(input);
    setTimeout(() => {
      const botMessage = { role: 'assistant', content: aiResponse };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const generateResponse = (query: string) => {
    query = query.toLowerCase();
    if (query.includes('history') || query.includes('founded')) {
      return "St. Peter's Berry School was founded in 1985 in Mirangine, Nakuru County, Kenya. It's a mixed primary school offering both day and boarding options.";
    } else if (query.includes('mission')) {
      return "Our mission is to nurture well-rounded individuals who are academically proficient, morally upright, and ready to face the challenges of the 21st century.";
    } else if (query.includes('facilities') || query.includes('amenities')) {
      return "Our facilities include modern classrooms with smart boards, a well-stocked library, computer lab with high-speed internet, spacious playground, science laboratory, and comfortable dormitories for boarding students.";
    } else if (query.includes('staff') || query.includes('teachers')) {
      return "Our key staff members include Mrs. Jane Doe (Headteacher), Mr. John Smith (Deputy Headteacher), Ms. Alice Johnson (Senior Teacher), Mr. David Brown (Mathematics Teacher), Mrs. Sarah Lee (English Teacher), and Mr. Michael Chen (Science Teacher).";
    } else if (query.includes('admission') || query.includes('enroll')) {
      return "The admission process involves filling out an application form, submitting required documents, paying an application fee, scheduling an interview, and paying the admission fee if accepted.";
    } else if (query.includes('fee') || query.includes('cost')) {
      return "Our fee structure varies by grade level. For example, PP1 & PP2 is KSH 2,500 per term, while Grade 7-9 boarding is KSH 16,000 per term. Day scholars in Grade 7-9 pay KSH 11,500 per term. Uniforms cost between KSH 4,500 - 8,500.";
    } else if (query.includes('contact') || query.includes('reach')) {
      return "You can contact us at +254 725 911 651 or email st.peterberry24@gmail.com. We're located in Mirangine, Nakuru County, Kenya.";
    } else if (query.includes('curriculum') || query.includes('subjects')) {
      return "We follow the Competency-Based Curriculum (CBC) and offer subjects including English, Kiswahili, Mathematics, Science and Technology, Social Studies, Religious Education, Creative Arts, and Physical and Health Education.";
    } else if (query.includes('activities') || query.includes('clubs')) {
      return "We offer various co-curricular activities including sports (football, netball, athletics, swimming), music and drama, debate club, environmental club, chess club, and scouts and girl guides.";
    } else if (query.includes('achievements') || query.includes('awards')) {
      return "Our recent achievements include 1st place in County Science Fair (2022), winning the Regional Debate Championship (2021, 2022), Top 5 in National Mathematics Olympiad (2023), Gold Medal in Inter-School Athletics Competition (2022), and Best Performance in KCPE exams in Nakuru County (2021, 2022).";
    } else {
      return "I'm sorry, I don't have specific information about that. Is there anything else I can help you with regarding St. Peter's Berry School?";
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">St. Peter's Berry School Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-white">&times;</button>
          </div>
          <div className="flex-grow overflow-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.role === 'user' ? 'bg-primary text-white' : 'bg-secondary text-primary'}`}>
                  {message.content}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow p-2 border rounded-l-lg"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-primary text-white p-2 rounded-r-lg hover:bg-opacity-90 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-colors"
        >
          Chat
        </button>
      )}
    </div>
  );
}

