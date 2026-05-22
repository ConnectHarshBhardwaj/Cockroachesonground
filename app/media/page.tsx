import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Media & Updates | Cockroach Janata Party (CJP)',
  description: 'Latest news, ground activities, and public awareness campaigns from CJP.',
};

const UPDATES = [
  {
    id: 1,
    title: 'Volunteer Network Expands in Delhi Dehat',
    category: 'Ground Activities',
    date: 'May 20, 2026',
    excerpt: 'Over 500 new youth leaders have officially registered as area coordinators to strengthen the movement at the village level.',
    image: 'https://picsum.photos/seed/political1/600/400'
  },
  {
    id: 2,
    title: 'Public Accountability Awareness Campaign Launched',
    category: 'Public Awareness Campaigns',
    date: 'May 15, 2026',
    excerpt: 'A new initiative aimed at educating rural citizens on RTI and constitutional methods to demand local transparency.',
    image: 'https://picsum.photos/seed/political2/600/400'
  },
  {
    id: 3,
    title: 'Core Committee Meeting on Urban Expansion Strategy',
    category: 'Volunteer Meetings',
    date: 'May 10, 2026',
    excerpt: 'Senior social activists and founding members convened to draft the blueprint for engaging urban youth in constructive civic duties.',
    image: 'https://picsum.photos/seed/political3/600/400'
  },
  {
    id: 4,
    title: 'Transition from Social Media to Ground Force',
    category: 'Movement Updates',
    date: 'May 02, 2026',
    excerpt: 'The official announcement regarding the formalization of our digital presence into a registered, active public ground movement.',
    image: 'https://picsum.photos/seed/political4/600/400'
  }
];

export default function MediaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          
          <div className="text-center mb-16">
            <span className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-2 block">Stay Informed</span>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-black mb-6">
              Media & Updates
            </h1>
            <div className="w-24 h-1 bg-brand-red mx-auto rounded-full mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow our latest developments, volunteer efforts, and official communications from the ground.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
             {['All Updates', 'Movement Updates', 'Ground Activities', 'Volunteer Meetings', 'Public Awareness'].map((cat, i) => (
                <button key={i} className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors border ${i === 0 ? 'bg-brand-black text-white border-brand-black' : 'bg-white text-gray-600 border-gray-200 hover:border-brand-red hover:text-brand-red'}`}>
                  {cat}
                </button>
             ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {UPDATES.map((item) => (
              <article key={item.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col sm:flex-row">
                <div className="w-full sm:w-2/5 aspect-video sm:aspect-auto relative overflow-hidden bg-brand-lightgray shrink-0">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply opacity-90"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red bg-red-50 px-2 py-1 rounded">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">{item.date}</span>
                    </div>
                    <h3 className="font-montserrat font-bold text-brand-black text-xl mb-3 leading-tight group-hover:text-brand-red transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="text-xs font-bold text-brand-black hover:text-brand-red uppercase tracking-widest flex items-center gap-1 transition-colors">
                      Read Full Report →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
