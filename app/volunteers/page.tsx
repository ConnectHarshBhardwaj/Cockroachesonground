import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MapPin, Building2, GraduationCap, Users2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Volunteers | Cockroach Janata Party (CJP)',
  description: 'Join the CJP volunteer network. Help build the movement in your village, city, or college.',
};

export default function VolunteersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-2 block">Take Action</span>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-black mb-6">
              Become A Volunteer
            </h1>
            <div className="w-24 h-1 bg-brand-red mx-auto rounded-full mb-8"></div>
            <p className="text-gray-600 text-lg">
              The movement is actively building dedicated teams across states. Whether you are from a rural village, an urban center, or a university campus, your voice and time are needed to create real structural change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { title: 'Delhi Dehat & Villages', desc: 'Working on rural infrastructure and agricultural awareness.', icon: MapPin },
              { title: 'Urban Areas', desc: 'Focusing on civic amenities, corruption, and transparency.', icon: Building2 },
              { title: 'Colleges & Universities', desc: 'Mobilizing youth for policy discussions and campus awareness.', icon: GraduationCap },
              { title: 'Social Organizations', desc: 'Partnering with existing NGOs for wider public impact.', icon: Users2 },
            ].map((area, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4 border border-red-100">
                  <area.icon size={24} className="text-brand-red" />
                </div>
                <h3 className="font-montserrat font-bold text-brand-black text-lg mb-2">{area.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-lightgray rounded-2xl p-8 md:p-12 border border-gray-200 text-center max-w-4xl mx-auto">
            <h2 className="font-montserrat font-bold text-3xl text-brand-black mb-4">Ready To Take Responsibility?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Register as a volunteer or area coordinator. We are looking for dedicated individuals who want to work peacefully on the ground for constitutional awareness and public welfare.
            </p>
            <a
              href="https://forms.gle/ukc43h4upr7PhN2d6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-brand-red hover:bg-brand-red/90 text-white font-montserrat font-bold text-lg rounded uppercase tracking-wider transition-all shadow-md group"
            >
              JOIN CJP TODAY
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
