import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Pill, HandHeart, Microscope } from "lucide-react";

const pillars = [
  {
    icon: Pill,
    title: "Non-Pharmacological First",
    desc: "Drug-free digital therapeutics for pain, stress, and sleep — even Dry Eye Syndrome, by stimulating the eye's protective lipid layer.",
  },
  {
    icon: HandHeart,
    title: "Clinician-Guided",
    desc: "Human-in-the-loop by design: therapists control every trigger in real time — no automated sensor black boxes.",
  },
  {
    icon: Microscope,
    title: "Research-Backed",
    desc: "Grounded in Harvard brain-wiring research, ACT frameworks from Hanyang University, and rehabilitation findings from the Journal of Orthopaedic Surgery and Research (2025).",
  },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" ref={ref} data-testid="about-section" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-mono-gu text-xs uppercase tracking-[0.25em] text-cyan-400"
      >
        06 — About Us
      </motion.p>

      <div className="mt-12 grid items-center gap-14 lg:grid-cols-2">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            Shaping the future of <span className="text-gradient-cv">medicine, without pills.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 text-sm leading-relaxed text-slate-400 sm:text-base"
          >
            GUniverse Healthcare Technologies is a MedTech & EdTech startup pioneering non-pharmacological
            healthcare through immersive Extended Reality. Our platform is architected directly by our
            Founder & CTO — a multi-planetary VR ecosystem for
            mental well-being and physical rehabilitation, headquartered in New Delhi, India.
          </motion.p>

          <div className="mt-10 space-y-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-300">
                  <p.icon size={20} />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-white sm:text-lg">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div style={{ y: imgY }} className="relative">
          <div className="absolute -inset-5 rounded-3xl bg-gradient-to-tr from-cyan-500/15 via-transparent to-violet-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-slate-700/60">
            <img
              src="https://images.pexels.com/photos/12969280/pexels-photo-12969280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Futuristic spatial computing lab"
              loading="lazy"
              className="h-[26rem] w-full object-cover lg:h-[32rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#050714]/70 via-transparent to-violet-900/20" />
            <div className="absolute bottom-5 left-5 right-5 rounded-xl glass-card p-4">
              <p className="font-mono-gu text-[10px] uppercase tracking-[0.2em] text-cyan-300">Our Mission</p>
              <p className="mt-1.5 text-sm text-slate-200">
                Make non-pharmacological, immersive therapy as accessible as putting on a headset.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
