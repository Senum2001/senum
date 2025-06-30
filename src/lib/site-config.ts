// src/lib/siteConfig.ts

import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Senum Dodangoda',
  description:
    'I’m Senum Dodangoda, an AI & ML Engineer in Kalutara, Sri Lanka. I build scalable ML and Computer Vision systems using Python, TensorFlow, PySpark, and cloud platforms (Azure, AWS). Passionate about Deep Learning, TinyML, Explainable AI, and IoT innovations.',
  keywords: [
    'Senum Dodangoda',
    'AI Engineer',
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'TinyML',
    'Explainable AI',
    'Signal Processing',
    'Generative AI',
    'IoT Engineer',
    'Python',
    'TensorFlow',
    'PySpark',
    'Azure ML',
    'AWS',
    'Sri Lanka',
    'Kalutara',
    'Tech Innovator',
    'Portfolio',
    'Projects',
    'Open Source',
  ],
  // Uses env.SITE_URL at build time (Next.js env docs) :contentReference[oaicite:2]{index=2}
  url: env.SITE_URL || 'https://example.com',
  // Injected into metadata / <meta name="google-site-verification" /> :contentReference[oaicite:3]{index=3}
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
