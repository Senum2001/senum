'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28"
    >
      {/* Available for work banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'tween', duration: 0.2 }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-3 rounded border px-3 py-1"
        >
          <span className="relative flex size-2">
            <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative flex size-2 rounded-full bg-green-400" />
          </span>
          <span className="font-mono text-sm">Available for work!</span>
        </Link>
      </motion.div>

      {/* Main headline */}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl"
      >
        Hi, I’m{' '}
        <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
          Senum
        </span>
        <br />
        Machine Learning & AI Engineer
      </motion.h1>

      {/* Subheading / summary */}
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground max-w-xl"
      >
        Based in Kalutara, Sri Lanka. I build scalable AI & ML solutions in
        Python, TensorFlow, PySpark, and cloud platforms (Azure, AWS).
        Passionate about Generative AI, Computer Vision, TinyML, and IoT
        innovations.
      </motion.p>

      {/* Call-to-action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-row gap-2"
      >
        <Button asChild size="lg">
          <Link href="#contact">
            Get in touch <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="hidden sm:flex" asChild>
          <a href="/cv.pdf" download>
            Download CV <Icons.download className="ml-2 size-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://www.linkedin.com/in/senum-dodangoda/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.linkedin className="size-5" />
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://github.com/Senum2001"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.github className="size-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};
