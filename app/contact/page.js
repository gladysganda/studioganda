'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError(false);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setLoading(false);
    if (res.ok) {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } else {
      setError(true);
    }
  };

  return (
    <main className="pt-30 px-6 md:px-20 py-20 max-w-3xl mx-auto text-neutral-800">
      <h1 className="text-4xl text-white font-light mb-12">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-6 text-white">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            name="name"
            type="text"
            required
            onChange={handleChange}
            value={form.name}
            className="w-full border border-neutral-300 px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            onChange={handleChange}
            value={form.email}
            className="w-full border border-neutral-300 px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            onChange={handleChange}
            value={form.message}
            className="w-full border border-neutral-300 px-4 py-2 rounded"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-neutral-900 text-white px-6 py-2 rounded hover:bg-neutral-700 transition"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>

        {sent && <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>}
        {error && <p className="text-red-400 text-sm mt-2">Failed to send message. Please try again later.</p>}
      </form>

      <div className="mt-16 text-white">
        <h2 className="text-2xl font-medium mb-2">Studio Ganda</h2>
        <p>Email: hello@studioganda.co</p>
        <p>Phone: </p>
        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?..."
            width="100%"
            height="300"
            className="rounded"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
