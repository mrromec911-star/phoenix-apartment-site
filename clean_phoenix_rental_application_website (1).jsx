export default function PhoenixRentalApplication() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] text-neutral-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"
          alt="Phoenix Apartment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl text-white">
          <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-6">
            Modern Phoenix Apartment
          </h1>
          <p className="text-lg md:text-2xl font-light mb-8 leading-relaxed">
            Modern 2-bedroom apartment featuring elegant white & beige interiors, bright daytime lighting, spacious open-concept living, stainless steel appliances, and contemporary finishes designed for comfortable everyday living.
          </p>

          <a
            href="#apply"
            className="inline-block bg-white text-neutral-900 px-8 py-4 rounded-2xl text-lg font-medium shadow-xl hover:scale-105 transition"
          >
            Apply Now — $50 Fee
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            '2 Bedrooms',
            '2 Bathrooms',
            'In-Unit Laundry',
            'Private Balcony',
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl p-8 text-center shadow-sm border border-neutral-100"
            >
              <h3 className="text-xl font-medium">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop',
          ].map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={src}
                alt="Apartment"
                className="w-full h-[280px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Details */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-light mb-6">Apartment Details</h2>
            <p className="text-lg leading-relaxed text-neutral-600 mb-8">
              This modern 2-bedroom apartment offers a clean contemporary layout with oversized windows, natural sunlight, stylish beige and white finishes, open kitchen design, and comfortable living spaces perfect for professionals, couples, or small families in Phoenix.
            </p>

            <ul className="space-y-4 text-lg">
              <li>✔ Stainless Steel Appliances</li>
              <li>✔ Quartz Countertops</li>
              <li>✔ Walk-In Closets</li>
              <li>✔ Central Air Conditioning</li>
              <li>✔ Pet Friendly</li>
              <li>✔ Covered Parking</li>
            </ul>
          </div>

          <div className="bg-[#f7f2ea] rounded-3xl p-10 shadow-sm">
            <h3 className="text-3xl font-light mb-6">Rental Information</h3>

            <div className="space-y-5 text-lg">
              <div className="flex justify-between border-b pb-3">
                <span>Monthly Rent</span>
                <span className="font-semibold">$1,250</span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span>Security Deposit</span>
                <span className="font-semibold">$800</span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span>Application Fee</span>
                <span className="font-semibold">$50</span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span>Lease Term</span>
                <span className="font-semibold">12 Months</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section
        id="apply"
        className="py-20 px-6 max-w-4xl mx-auto"
      >
        <div className="bg-white rounded-[32px] shadow-xl p-10 md:p-14 border border-neutral-100">
          <h2 className="text-4xl font-light mb-4 text-center">
            Rental Application
          </h2>

          <p className="text-center text-neutral-500 mb-10 text-lg">
            Complete the form below and submit your $50 application fee.
          </p>

          <form className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-2xl p-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-2xl p-4"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="border rounded-2xl p-4"
            />

            <input
              type="text"
              placeholder="Current Employer"
              className="border rounded-2xl p-4"
            />

            <input
              type="number"
              placeholder="Monthly Income"
              className="border rounded-2xl p-4"
            />

            <input
              type="date"
              className="border rounded-2xl p-4"
            />

            <textarea
              placeholder="Rental History"
              className="border rounded-2xl p-4 md:col-span-2 min-h-[140px]"
            ></textarea>

            <div className="md:col-span-2">
              <label className="block mb-3 text-neutral-600">
                Upload ID / Proof of Income
              </label>

              <input
                type="file"
                className="w-full border rounded-2xl p-4"
              />
            </div>

            <div className="md:col-span-2 mt-4">
              <a
                href="https://cash.app/$coolJ911/50"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-neutral-900 text-white text-center py-5 rounded-2xl text-lg font-medium hover:opacity-90 transition"
              >
                Pay $50 Application Fee
              </a>
            </div>

            <button
              type="submit"
              className="md:col-span-2 bg-[#d8c3a5] hover:bg-[#cbb090] text-neutral-900 py-5 rounded-2xl text-lg font-medium transition mt-2"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-10 px-6 text-center">
        <h3 className="text-2xl font-light mb-3">Phoenix Apartment Leasing</h3>
        <p className="text-neutral-400">
          Professional rental applications • Secure processing • Fast approval
        </p>
      </footer>
    </div>
  )
}
