import {
  // FaDev,
  // FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  // FaMedium,
  // FaProductHunt,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

import type { MotionLinkProps } from './types';

export const socialLinks: Array<MotionLinkProps> = [
  {
    platformName: 'GitHub',
    url: 'https://github.com/novinbukannopin',
    icon: FaGithub,
  },
  {
    platformName: 'LinkedIn',
    url: 'https://www.linkedin.com/in/novin-ardian-yulianto/',
    icon: FaLinkedin,
  },
  {
    platformName: 'Twitter',
    url: 'https://twitter.com/nityasa__',
    icon: FaTwitter,
  },
  {
    platformName: 'Instagram',
    url: 'https://www.instagram.com/novinbukannopin/',
    icon: FaInstagram,
  },
  {
    platformName: 'YouTube',
    url: 'https://www.youtube.com/channel/UCTx7mbx2p_Br5_CvSpGfXAQ',
    icon: FaYoutube,
  },
];
