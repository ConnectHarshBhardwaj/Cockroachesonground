import Link from 'next/link';

export function HomeAbout() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-4 block">Who We Are</span>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-brand-black mb-8">
            A Digital Voice Reaching the Ground
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 font-medium">
            The Cockroach Janata Party (CJP) is progressively transitioning from widespread social media awareness into a massive ground-level youth organization. We believe in constructive public participation, demanding transparent policies, and upholding constitutional values above all.
          </p>
          <Link href="/about" className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-lightgray hover:bg-gray-200 text-brand-black font-semibold rounded border border-gray-200 transition-colors shadow-sm">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
