import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Target, Eye, Users, FileText, Scale, Megaphone, Flag } from 'lucide-react';

export const metadata = {
  title: 'Mission & Vision | Cockroach Janata Party (CJP)',
  description: 'The core mission and long-term vision of the Cockroach Janata Party for a better, accountable India.',
};

export default function MissionVisionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          
          <div className="text-center mb-16">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-black mb-6">
              Our Vision & Mission
            </h1>
            <div className="w-24 h-1 bg-brand-red mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-24">
            {/* Vision */}
            <div className="bg-brand-lightgray p-8 md:p-12 rounded-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Eye size={120} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-red">
                    <Eye size={24} />
                  </div>
                  <h2 className="font-montserrat font-bold text-3xl text-brand-black">Our Vision</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  To create a strong ground-level public movement driven by youth, volunteers, and citizens who believe in responsible leadership and constitutional values.
                </p>
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Focus Areas</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700 border border-gray-200 shadow-sm">Policy Reform</span>
                    <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700 border border-gray-200 shadow-sm">Youth Representation</span>
                    <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700 border border-gray-200 shadow-sm">Systemic Transparency</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-brand-black p-8 md:p-12 rounded-2xl border border-gray-800 relative overflow-hidden text-white">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                <Target size={120} />
              </div>
               <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white">
                    <Target size={24} />
                  </div>
                  <h2 className="font-montserrat font-bold text-3xl text-white">Our Mission</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed font-light mb-8">
                  Empowering communities through direct action and structured awareness.
                </p>

                <ul className="space-y-4">
                  {[
                    { text: 'Youth participation in civic structures', icon: Users },
                    { text: 'Social awareness on critical national issues', icon: Megaphone },
                    { text: 'Peaceful democratic involvement', icon: Scale },
                    { text: 'Ensuring absolute public accountability', icon: FileText },
                    { text: 'Nation-first thinking above all associations', icon: Flag },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-sm font-medium text-gray-200">
                      <item.icon size={18} className="text-brand-red opacity-80" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
