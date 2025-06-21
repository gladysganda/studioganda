export default function ContactPage() {
    return (
      <main className="px-6 md:px-20 py-20 max-w-3xl mx-auto text-neutral-800">
        <h1 className="text-4xl font-light mb-12">Contact Us</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input type="text" className="w-full border border-neutral-300 px-4 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" className="w-full border border-neutral-300 px-4 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea rows="5" className="w-full border border-neutral-300 px-4 py-2 rounded" />
          </div>
          <button type="submit" className="bg-neutral-900 text-white px-6 py-2 rounded hover:bg-neutral-700 transition">
            Send
          </button>
        </form>
        <div className="mt-16">
          <h2 className="text-2xl font-medium mb-2">Studio Ganda</h2>
          <p></p>
          <p className="mt-2">Email: hello@studioganda.co</p>
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
  