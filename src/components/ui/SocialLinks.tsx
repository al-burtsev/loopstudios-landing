import Link from 'next/link';
import { SOCIAL_LINKS } from '@/src/constants/socials';

export const SocialLinks = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map((social) => (
        <Link
          key={social.id}
          href={social.href}
          aria-label={`Go to ${social.name}`}
          className="relative focus-visible:outline-1 focus-visible:outline-white focus-visible:outline-offset-4"
        >
          <social.icon className="w-6 h-6 text-white transition-colors duration-300 hover:text-white/80" />
        </Link>
      ))}
    </div>
  );
};
