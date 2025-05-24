import React, { useState } from 'react';

// Mock marine data
const mockShips = [
  { name: 'Ever Given', imo: '9811000', flag: 'Panama', type: 'Container Ship', year: 2018 },
  { name: 'Symphony of the Seas', imo: '9744001', flag: 'Bahamas', type: 'Cruise Ship', year: 2018 },
  { name: 'Seawise Giant', imo: '7381154', flag: 'Norway', type: 'Oil Tanker', year: 1979 },
  { name: 'Queen Mary 2', imo: '9241061', flag: 'UK', type: 'Ocean Liner', year: 2003 },
];

const MarineData = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(mockShips); // Show all by default
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setError('');
    if (!query.trim()) {
      setResult(mockShips);
      return;
    }
    const found = mockShips.filter(
      ship => ship.name.toLowerCase().includes(query.trim().toLowerCase())
    );
    if (found.length > 0) {
      setResult(found);
    } else {
      setResult([]);
      setError('No ship found with that name.');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-6 animate-fade-in">
      <h3 className="text-xl font-bold mb-6 text-blue-700">Search Ship Details</h3>
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Enter ship name..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="border-2 border-blue-200 px-4 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500 transition text-lg"
        />
        <button type="submit" className="bg-blue-600 text-white px-8 py-2 rounded-lg font-bold text-lg shadow hover:bg-blue-700 transition">Search</button>
      </form>
      {error && <div className="text-red-500 mb-2 font-semibold">{error}</div>}
      {result && result.length > 0 && (
        <div className="table-scroll mt-4">
          <table className="w-full border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-100 text-blue-800">
                <th className="p-3 border">Name</th>
                <th className="p-3 border">IMO</th>
                <th className="p-3 border">Flag</th>
                <th className="p-3 border">Type</th>
                <th className="p-3 border">Year</th>
              </tr>
            </thead>
            <tbody>
              {result.map((ship, idx) => (
                <tr key={ship.imo} className={idx % 2 === 0 ? 'bg-white' : 'bg-blue-50 hover:bg-blue-100'}>
                  <td className="p-3 border font-semibold">{ship.name}</td>
                  <td className="p-3 border">{ship.imo}</td>
                  <td className="p-3 border">{ship.flag}</td>
                  <td className="p-3 border">{ship.type}</td>
                  <td className="p-3 border">{ship.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {result && result.length === 0 && !error && (
        <div className="text-gray-500 text-center mt-4">No data to display.</div>
      )}
    </div>
  );
};

export default MarineData;
