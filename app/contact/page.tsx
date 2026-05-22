import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Phone, Mail, MapPin, Instagram, Globe } from 'lucide-react';

export const metadata = {
  title: 'Contact | Cockroach Janata Party (CJP)',
  description: 'Contact CJP for inquiries, office details, or to learn more about our ground-level movement.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          
          <div className="text-center mb-16">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-black mb-6">
              Contact CJP
            </h1>
            <div className="w-24 h-1 bg-brand-red mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="font-montserrat font-bold text-2xl text-brand-black mb-6">Official Inquiries</h2>
              <p className="text-gray-600 mb-8">
                For general inquiries, press information, or to discuss coordinating the movement in your local district, please reach out to our team using the contact details below.
              </p>

              <div className="space-y-6 mb-10">
                <a href="tel:+919899868777" className="flex items-center gap-4 p-4 bg-brand-lightgray rounded-xl border border-gray-200 hover:border-brand-red hover:shadow-sm transition-all group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Phone Support</div>
                    <div className="font-montserrat font-semibold text-brand-black text-lg">+91 98998 68777</div>
                  </div>
                </a>

                <a href="https://wa.me/919899868777" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100 hover:border-green-500 hover:shadow-sm transition-all group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <MessageCircleIcon size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-green-700 font-medium">WhatsApp Us</div>
                    <div className="font-montserrat font-semibold text-green-900 text-lg">Send a Message</div>
                  </div>
                </a>

                <a href="https://instagram.com/cockroachjanataparty.2026" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-pink-50 rounded-xl border border-pink-100 hover:border-pink-500 hover:shadow-sm transition-all group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-pink-700 font-medium">Instagram Profile</div>
                    <div className="font-montserrat font-semibold text-pink-900 text-lg">@cockroachjanataparty.2026</div>
                  </div>
                </a>
              </div>

              <div className="bg-brand-lightgray p-6 rounded-xl border border-gray-200">
                <h3 className="font-montserrat font-bold text-brand-black mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-brand-red" />
                  Office Section
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Headquarters: Delhi Dehat, National Capital Region, India.
                  <br />
                  <span className="italic mt-2 block text-gray-500">Note: Please contact via phone or email to schedule an in-person meeting for official assignments.</span>
                </p>
              </div>

            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h2 className="font-montserrat font-bold text-2xl text-brand-black mb-6">Send an Inquiry</h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-brand-lightgray border border-gray-200 rounded px-4 py-3 text-brand-black focus:outline-none focus:border-brand-red focus:bg-white transition-colors" placeholder="e.g. Ramesh Kumar" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-brand-lightgray border border-gray-200 rounded px-4 py-3 text-brand-black focus:outline-none focus:border-brand-red focus:bg-white transition-colors" placeholder="+91" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">City/District</label>
                    <input type="text" className="w-full bg-brand-lightgray border border-gray-200 rounded px-4 py-3 text-brand-black focus:outline-none focus:border-brand-red focus:bg-white transition-colors" placeholder="Your Location" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message or Requirement</label>
                  <textarea rows={5} className="w-full bg-brand-lightgray border border-gray-200 rounded px-4 py-3 text-brand-black focus:outline-none focus:border-brand-red focus:bg-white transition-colors resize-none" placeholder="How would you like to contribute or what is your inquiry?"></textarea>
                </div>

                <p className="text-xs text-gray-500 font-medium">
                  By submitting this form, you agree to connecting with our administrative volunteers for follow-ups.
                </p>

                <button type="button" className="w-full bg-brand-black text-white hover:bg-brand-red font-montserrat font-semibold text-lg py-4 rounded transition-colors mt-2">
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

// Simple WhatsApp Icon SVG component
function MessageCircleIcon({ size, className }: { size: number, className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}
