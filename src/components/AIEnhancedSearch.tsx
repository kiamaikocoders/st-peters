'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function AIEnhancedSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error('Failed to get search results');
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error('Error:', error);
      setResults(['An error occurred while searching. Please try again.']);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex items-center border-2 border-primary rounded-md overflow-hidden">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for information about St. Peter's Berry School..."
            className="flex-grow p-3 focus:outline-none"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="bg-primary text-white p-3 hover:bg-primary-dark transition duration-300"
          >
            {isLoading ? 'Searching...' : <Search />}
          </button>
        </div>
      </form>
      {results.length > 0 && (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-serif font-bold mb-2 text-primary">Search Results:</h3>
          <ul className="list-disc pl-5 space-y-2">
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

