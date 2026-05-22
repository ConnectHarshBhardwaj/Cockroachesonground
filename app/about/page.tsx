import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Shield, Users, Globe, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'About | Cockroach Janata Party (CJP)',
  description: 'Learn about the Cockroach Janata Party (CJP), our origins, and our commitment to peaceful democratic values.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="mb-12">
            <span className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-black mb-6">
              About Cockroach Janata Party
            </h1>
            <div className="w-24 h-1 bg-brand-red rounded-full"></div>
          </div>

          <div className="prose prose-lg prose-gray max-w-none text-gray-700 space-y-6">
            <p className="text-xl font-medium text-brand-black">
              Cockroach Janata Party (CJP) is a youth-driven social and political movement created for citizens who believe India deserves accountable leadership, real public participation, and fearless voices for change.
            </p>
            <p>
              Born from viral social media activism, the movement represents young Indians who are tired of corruption, false promises, political silence, and disconnected leadership. What started as a digital public voice is now rapidly expanding into a ground-level volunteer network across communities.
            </p>
            <p>
              Our organization follows all constitutional and legal frameworks of India and promotes peaceful democratic participation only. We firmly believe that the answers to our national challenges lie in constructive engagement, transparency, and empowering the next generation of citizens to take active responsibility for their communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-brand-lightgray p-8 rounded-xl border border-gray-100">
              <Users className="text-brand-red mb-4" size={32} />
              <h3 className="font-montserrat font-bold text-xl mb-3">Youth Engagement</h3>
              <p className="text-gray-600 text-sm">Empowering the younger demographic to move beyond digital commentary and engage in meaningful, on-ground civic activities and community building.</p>
            </div>
            <div className="bg-brand-lightgray p-8 rounded-xl border border-gray-100">
              <Shield className="text-brand-red mb-4" size={32} />
              <h3 className="font-montserrat font-bold text-xl mb-3">Peaceful Values</h3>
              <p className="text-gray-600 text-sm">Strict adherence to peaceful, constitutional methods of public participation. We organize, educate, and advocate within the legal democratic framework of India.</p>
            </div>
            <div className="bg-brand-lightgray p-8 rounded-xl border border-gray-100">
              <Globe className="text-brand-red mb-4" size={32} />
              <h3 className="font-montserrat font-bold text-xl mb-3">Ground Expansion</h3>
              <p className="text-gray-600 text-sm">Actively building a robust volunteer network traversing villages and urban centers to ensure local issues receive organized representation.</p>
            </div>
            <div className="bg-brand-lightgray p-8 rounded-xl border border-gray-100">
              <BookOpen className="text-brand-red mb-4" size={32} />
              <h3 className="font-montserrat font-bold text-xl mb-3">Social Awareness</h3>
              <p className="text-gray-600 text-sm">Running continuous campaigns to educate citizens on their rights, duties, and the mechanisms of holding administrative bodies accountable.</p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
