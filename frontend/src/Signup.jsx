import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const { signup, loading } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const res = await signup(name, email, password);
    if (res.success) {
      navigate('/dashboard');
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-400">
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md border-t-8 border-blue-600 animate-fade-in">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700">Sign Up</h2>
        {error && <div className="mb-4 text-red-500 text-center font-semibold">{error}</div>}
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required className="w-full border-2 border-blue-200 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 transition" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-700">Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full border-2 border-blue-200 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 transition" />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-semibold text-gray-700">Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full border-2 border-blue-200 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 transition" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold text-lg shadow hover:bg-blue-700 transition" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        <div className="mt-6 text-center text-gray-600">
          Already have an account? <Link to="/login" className="text-blue-700 font-semibold hover:underline">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
