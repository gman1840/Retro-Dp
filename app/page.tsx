'use client';

import { Section, H2, Card, ButtonLink, SunWave, DiscoBall, Daisy, RetroVan } from '../components/ui';
import { Headphones, MapPin, Music, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Home / Hero */}
      <section id="home" className="relative bg-cream">
        <div className="max-w-6xl mx-auto px-6 pt-10 md:pt-20 pb-6 md:pb-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              className="font-display text-5xl md:text-6xl text-ink mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Silent Disco Rentals in Orange County & North SD
            </motion.h1>
            <p className="text-lg md:text-xl text-ink/80 max-w-xl mb-6">
              Retro surf vibes, three music channels, and a dance floor that won’t upset the neighbors.
            </p>
            <div className="flex items-center gap-4">
              <ButtonLink href="#quote">Get a Free Quote</ButtonLink>
              <a href="#packages" className="text-ruby font-semibold no-underline">See Packages ↓</a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <DiscoBall />
              <Daisy className="w-16 h-16 absolute -right-6 -top-6 rotate-12" />
              <Daisy className="w-12 h-12 absolute -left-5 bottom-2 -rotate-12" />
            </div>
          </div>
        </div>
        <SunWave />
      </section>

      {/* Packages */}
      <Section id="packages">
        <H2>Our Packages</H2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <Headphones className="w-12 h-12 text-sunset mx-auto mb-4" />
            <h3 className="font-display text-2xl text-ink mb-2">Pickup (DIY)</h3>
            <p className="text-ink/80">Grab the full kit, quick 10-min demo, run the party yourself.</p>
          </Card>
          <Card>
            <MapPin className="w-12 h-12 text-sunset mx-auto mb-4" />
            <h3 className="font-display text-2xl text-ink mb-2">Delivery</h3>
            <p className="text-ink/80">We deliver, set up, and pick up next day. Easy & stress-free.</p>
          </Card>
          <Card>
            <Music className="w-12 h-12 text-sunset mx-auto mb-4" />
            <h3 className="font-display text-2xl text-ink mb-2">DJ Helper</h3>
            <p className="text-ink/80">Delivery + live walkthrough for your guests, on-site assistance for your event.</p>
          </Card>
          <Card>
            <Mic className="w-12 h-12 text-sunset mx-auto mb-4" />
            <h3 className="font-display text-2xl text-ink mb-2">DJ Pro</h3>
            <p className="text-ink/80">Full DJ/MC service, live requests, announcements, and crowd hype.</p>
          </Card>
        </div>
      </Section>

      {/* What’s a Silent Disco */}
      <Section id="whats" className="bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <H2>What’s a Silent Disco?</H2>
          <div className="space-y-5 text-lg text-ink/85 leading-relaxed text-left md:text-center">
            <p>
              A silent disco is a party where everyone wears wireless LED headphones tuned into up to three channels.
              Guests choose their vibe — pop, hip-hop, EDM, or throwbacks — while the room stays quiet. It’s perfect for
              schools, weddings, corporate events, and backyard parties without upsetting the neighbors.
            </p>
            <p>
              Each headset has its own volume control and lets you switch between <span className="font-semibold">three color-coded channels</span> filled with custom tunes.
              The earcups glow with the channel you’re on, so the whole party can see what everyone’s jamming to — and switch together for sing-alongs,
              battles, or throwback moments.
            </p>
          </div>
          <div className="mt-10">
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-sand shadow-dpd">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/7A68HHodW5o"
                title="What is a Silent Disco?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Section>

      <div className="stripes h-3" />

      {/* Perfect For */}
      <Section>
        <H2>Perfect For…</H2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {['School Dances & Proms','Weddings & Receptions','Backyard & Birthday Parties','Corporate Events','Church & Youth Nights','Fundraisers & Festivals'].map((event) => (
            <div key={event} className="bg-white border border-sand rounded-2xl shadow-dpd p-6">
              <p className="text-lg font-medium text-ink">{event}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Us */}
      <Section id="contact" className="bg-white">
        <div className="max-w-3xl mx-auto">
          <H2>Contact Us</H2>
          <p className="text-center text-ink/80 mb-8">Questions or ready to book? Send us a message and we’ll get right back.</p>
          <form action={process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/your_form_id'} method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="name" placeholder="Full Name" required className="bg-white border border-sand rounded-xl p-4 text-ink" />
            <input name="email" type="email" placeholder="Email" required className="bg-white border border-sand rounded-xl p-4 text-ink" />
            <input name="phone" type="tel" placeholder="Phone (optional)" className="bg-white border border-sand rounded-xl p-4 text-ink md:col-span-2" />
            <textarea name="message" placeholder="How can we help?" rows={5} className="bg-white border border-sand rounded-xl p-4 text-ink md:col-span-2" />
            <div className="md:col-span-2 flex items-center justify-center">
              <button type="submit" className="bg-sunset hover:bg-coral rounded-2xl px-8 py-4 text-lg font-semibold text-white shadow-dpd">Send Message</button>
            </div>
          </form>
        </div>
      </Section>

      {/* About Us */}
      <Section id="about" className="bg-cream">
        <H2>About Us</H2>
        <div className="max-w-3xl mx-auto text-ink/85 text-lg leading-relaxed text-center space-y-4">
          <p>
            Hey there! I’m Garrett, and I started Dana Point Disco because I love this community and the way it celebrates connection.
            The first time I experienced a silent disco was at my Senior Grad Night at Disneyland. I wandered into Cars Land, slipped on a headset,
            and suddenly I was transported — dancing with friends and total strangers, carefree and completely immersed in the music. That feeling stuck with me,
            and I thought: <span className="italic">what better place than here in Dana Point to bring that magic to life?</span>
          </p>
          <p>
            Today I get to share that joy through Dana Point Disco. I’m married to my wonderful wife, Jenna, and when I’m not helping people throw unforgettable parties,
            I’m at home with our two cats. For me, silent disco isn’t just about music — it’s about creating moments of connection, laughter, and memories you’ll never forget.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <RetroVan className="w-56 h-auto" />
            <Daisy className="w-20 h-20" />
            <Daisy className="w-14 h-14 -rotate-12" />
          </div>
        </div>
      </Section>

      <div className="stripes h-3" />

      {/* Quote Form */}
      <Section id="quote" className="bg-white">
        <H2>Request a Quote</H2>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-ink/80 mb-8">Fill this out and we’ll confirm availability and send pricing fast.</p>
          <form action={process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/your_form_id'} method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="name" placeholder="Full Name" required className="bg-white border border-sand rounded-xl p-4 text-ink" />
            <input name="email" type="email" placeholder="Email" required className="bg-white border border-sand rounded-xl p-4 text-ink" />
            <input name="phone" type="tel" placeholder="Phone (optional)" className="bg-white border border-sand rounded-xl p-4 text-ink md:col-span-2" />
            <input name="date" type="date" placeholder="Event Date" required className="bg-white border border-sand rounded-xl p-4 text-ink" />
            <input name="location" placeholder="Event City / Venue" required className="bg-white border border-sand rounded-xl p-4 text-ink" />
            <input name="headsets" type="number" min={10} step={5} placeholder="# of Headsets" required className="bg-white border border-sand rounded-xl p-4 text-ink" />
            <select name="package" required className="bg-white border border-sand rounded-xl p-4 text-ink">
              <option value="" disabled>Choose Package</option>
              <option>Pickup (DIY)</option>
              <option>Delivery</option>
              <option>DJ Helper</option>
              <option>DJ Pro</option>
            </select>
            <textarea name="message" placeholder="Tell us about your event (timeline, vibe, age group, extras)" rows={5} className="bg-white border border-sand rounded-xl p-4 text-ink md:col-span-2" />
            <input type="text" name="_gotcha" className="hidden" />
            <input type="hidden" name="_subject" value="New Quote Request — Dana Point Disco" />
            <div className="md:col-span-2 flex items-center justify-center">
              <button type="submit" className="bg-sunset hover:bg-coral rounded-2xl px-8 py-4 text-lg font-semibold text-white shadow-dpd">Send Request</button>
            </div>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-sand/70 py-10 text-center text-sm text-ink/70 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Dana Point Disco — Silent Disco Rentals in Orange County & North San Diego</p>
        </div>
      </footer>
    </div>
  );
}
