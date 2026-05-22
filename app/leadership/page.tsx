import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'Leadership | Cockroach Janata Party (CJP)',
  description: 'Learn about Shri Ravish Bhardwaj, Founding President of CJP, and his journey to connect youth for public participation.',
};

export default function LeadershipPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-white">
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          
          <div className="mb-16 text-center">
            <span className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-2 block">Our Leadership</span>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-brand-black mb-6">
              Founding President
            </h1>
            <div className="w-24 h-1 bg-brand-red mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              
              <div className="md:col-span-2 relative min-h-[400px] bg-brand-lightgray">
                <Image 
                  src="https://i.ibb.co/N6kvPCQ8/ravish-bhai-image.jpg" 
                  alt="Shri Ravish Bhardwaj"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>

              <div className="md:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="inline-block bg-red-50 text-brand-red font-semibold px-3 py-1 rounded text-xs uppercase tracking-wider mb-4 border border-red-100">
                    Social Activist
                  </span>
                </div>
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-brand-black mb-4">
                  Shri Ravish Bhardwaj
                </h2>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  A social activist from Delhi Dehat working to connect youth, volunteers, and citizens who want constructive public participation and positive social change.
                </p>

                <div className="space-y-6 text-gray-600 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-lightgray flex items-center justify-center shrink-0 mt-1 shadow-sm border border-gray-200">
                      <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-brand-black mb-1">Grassroots Beginnings</h4>
                      <p>Started his journey in social activism from the villages of Delhi, understanding the core issues of rural and semi-urban communities.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-lightgray flex items-center justify-center shrink-0 mt-1 shadow-sm border border-gray-200">
                      <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-brand-black mb-1">Digital Voice to Ground Action</h4>
                      <p>Successfully transitioned a viral online awareness campaign into a structured, ground-level volunteer organization.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-lightgray flex items-center justify-center shrink-0 mt-1 shadow-sm border border-gray-200">
                      <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-brand-black mb-1">Constitutional Commitment</h4>
                      <p>Advocates strictly for peaceful, democratic, and constitutionally valid methods of demanding accountability and driving policy changes.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-brand-lightgray rounded-xl border border-gray-200 border-l-4 border-l-brand-red">
                  <p className="font-montserrat italic font-medium text-brand-black text-lg">
                    "Youth cannot remain silent observers to the nation's future. It is time to step onto the ground with constructive, peaceful participation."
                  </p>
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
