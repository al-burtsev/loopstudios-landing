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
          className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-2 after:left-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:outline-1 focus-visible:outline-fuchsia-300 focus-visible:outline-offset-4"
        >
          <social.icon className="w-6 h-6 text-white" />
        </Link>
      ))}
    </div>
  );
};
