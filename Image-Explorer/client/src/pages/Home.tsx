import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { X, Search, Sparkles } from "lucide-react";

import img1 from '@assets/image_1771947633971.png';
import img2 from '@assets/image_1771947787090.png';
import img3 from '@assets/image_1771947794539.png';
import img4 from '@assets/image_1771947801882.png';
import img5 from '@assets/image_1771947812170.png';
import img6 from '@assets/image_1771947828025.png';
import img7 from '@assets/image_1771947844474.png';
import img8 from '@assets/image_1771947851554.png';

const NEWS_ITEMS = [
  {
    id: 1,
    image: img1,
    title: 'News About Nepal',
    description: 'This is a newspaper story about Nepal, a beautiful country with huge mountains like Mount Everest! The article talks about how people there are working together to make their country even better. It mentions that leaders are trying to fix problems like fairness and helping everyone have a good life. Learning about other countries helps us understand how big and diverse our world really is!',
    color: 'bg-primary',
    textColor: 'text-primary'
  },
  {
    id: 2,
    image: img2,
    title: 'The Daily Newspaper',
    description: 'Look at all these stories! This is the front page of the "Hindustan Times," which is a very popular newspaper in India. Every single day, reporters write about sports, weather, science, and important events happening in cities far away. A newspaper is like a daily history book that tells us what happened yesterday so we can be ready for tomorrow. It is amazing how much news fits on just one page!',
    color: 'bg-accent',
    textColor: 'text-accent'
  },
  {
    id: 3,
    image: img3,
    title: 'Wildfires in Nature',
    description: 'These bright orange glows are big fires in the forest called wildfires. When the weather gets very hot and dry, sometimes trees can catch fire. This news report shows how brave firefighters use big trucks and even airplanes to drop water and put the flames out. They work day and night to protect the animals living in the woods and the people living nearby. It reminds us to always be careful with fire when we are camping!',
    color: 'bg-secondary',
    textColor: 'text-secondary'
  },
  {
    id: 4,
    image: img4,
    title: 'A Famous Day in History',
    description: 'This old, dusty newspaper is from a very special day called "Victory in Europe Day" in 1945. For a long time, there was a huge war happening all over the world, and on this day, the fighting finally stopped in Europe. People ran into the streets to dance, cheer, and hug each other because they were so happy to have peace again. Keeping old newspapers like this helps us remember the brave people from the past and the lessons they learned.',
    color: 'bg-destructive',
    textColor: 'text-destructive'
  },
  {
    id: 5,
    image: img5,
    title: 'The News Anchor',
    description: 'Meet a News Anchor! This friendly person works in a television studio with bright lights and big cameras. Their job is to read the most important stories of the day so that families watching at home know what is going on in the world. They have to practice speaking very clearly and sometimes they even talk to reporters who are standing outside in the rain or snow to get the latest information for us!',
    color: 'bg-primary',
    textColor: 'text-primary'
  },
  {
    id: 6,
    image: img6,
    title: 'Important Meetings',
    description: 'This page from "The Guardian" newspaper shows world leaders sitting together at a big table. Just like when you have a meeting with your teachers or parents, these leaders meet to talk about big things like protecting the ocean, helping people find jobs, and keeping different countries at peace. It takes a lot of talking and listening to make decisions that help millions of people live together happily!',
    color: 'bg-accent',
    textColor: 'text-accent'
  },
  {
    id: 7,
    image: img7,
    title: 'A Crowded Event',
    description: 'This is a news story from many years ago about a time when a huge crowd of people got a bit too squished at a festival. It is a serious story that teaches us why safety is so important. When we go to big events like concerts or sports games, there are always special helpers like police and guards who make sure everyone has enough space and knows where to go. Learning from the past helps us stay safe at fun events today!',
    color: 'bg-secondary',
    textColor: 'text-secondary'
  },
  {
    id: 8,
    image: img8,
    title: 'A Big Storm',
    description: 'Whirr! This newspaper is reporting on a massive, spinning storm called a typhoon. These storms bring lots of rain and very strong winds that can knock over trees. Scientists called meteorologists use satellites high up in space to watch these storms move across the ocean. By writing about it in the news, they can tell everyone to stay inside their sturdy houses until the sun comes out again and the wind stays quiet.',
    color: 'bg-destructive',
    textColor: 'text-destructive'
  }
];

export default function Home() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedItem = NEWS_ITEMS.find(item => item.id === selectedId);

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 overflow-x-hidden selection:bg-primary/20">
      
      {/* Header */}
      <header className="max-w-6xl mx-auto flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_4px_0_0_hsl(var(--primary)/0.2)] rotate-[-10deg]">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-foreground">
              News Explorer
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-semibold mt-1">
              Tap a picture to discover its story!
            </p>
          </div>
        </div>
        
        <ThemeToggle />
      </header>

      {/* Grid */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-20">
        {NEWS_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              bounce: 0.4
            }}
            onClick={() => setSelectedId(item.id)}
            className="group relative cursor-pointer"
            data-testid={`card-news-${item.id}`}
          >
            {/* Playful Card Background */}
            <div className={`absolute inset-0 rounded-[2rem] translate-y-3 ${item.color} opacity-40 transition-transform group-hover:translate-y-4`} />
            
            <motion.div 
              className="relative bg-card rounded-[2rem] border-4 border-foreground/10 p-4 shadow-sm transition-all group-hover:-translate-y-1 h-full flex flex-col"
              whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 2 : -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Image Container */}
              <motion.div layoutId={`image-${item.id}`} className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-muted border-2 border-border mb-4">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Search icon overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <div className="bg-white rounded-full p-4 transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <Search className="w-8 h-8 text-black" />
                  </div>
                </div>
              </motion.div>
              
              <motion.h3 layoutId={`title-${item.id}`} className="text-xl font-bold text-foreground text-center px-2 mt-auto">
                {item.title}
              </motion.h3>
            </motion.div>
          </motion.div>
        ))}
      </main>

      {/* Modal / Dialog */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-50"
            />
            
            {/* Modal Content */}
            <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center p-4 md:p-8">
              <motion.div
                layoutId={`card-${selectedItem.id}`}
                className="pointer-events-auto w-full max-w-4xl bg-card rounded-[2.5rem] border-4 border-foreground/10 shadow-[0_12px_0_0_hsl(var(--foreground)/0.1)] overflow-hidden flex flex-col md:flex-row relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 bg-muted hover:bg-destructive hover:text-destructive-foreground rounded-full flex items-center justify-center transition-colors z-10 border-2 border-transparent hover:border-foreground/10"
                  data-testid="button-close-modal"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Left Side: Image */}
                <motion.div layoutId={`image-${selectedItem.id}`} className="w-full md:w-1/2 bg-muted relative border-b-4 md:border-b-0 md:border-r-4 border-foreground/10">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title}
                    className="w-full h-full object-contain p-6 md:p-12 min-h-[300px]"
                  />
                  {/* Playful decoration */}
                  <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full ${selectedItem.color} opacity-20 blur-xl`} />
                  <div className={`absolute -top-6 -left-6 w-32 h-32 rounded-full ${selectedItem.color} opacity-20 blur-xl`} />
                </motion.div>

                {/* Right Side: Content */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-card relative overflow-hidden">
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative z-10"
                  >
                    <motion.h2 layoutId={`title-${selectedItem.id}`} className={`text-4xl md:text-5xl font-black mb-6 ${selectedItem.textColor}`}>
                      {selectedItem.title}
                    </motion.h2>
                    
                    <div className="bg-muted/50 border-2 border-border rounded-3xl p-6 relative">
                      <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                        {selectedItem.description}
                      </p>
                      
                      <div className="absolute -top-4 -left-4 w-8 h-8 bg-card border-2 border-border rounded-full flex items-center justify-center transform -rotate-12">
                        <span className="text-xl text-primary font-bold">!</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedId(null)}
                      className={`mt-10 px-8 py-4 ${selectedItem.color} text-white font-bold text-xl rounded-full w-full border-4 border-transparent hover:border-foreground/20 active:translate-y-1 transition-all shadow-[0_4px_0_0_hsl(var(--foreground)/0.1)]`}
                    >
                      Got it!
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}