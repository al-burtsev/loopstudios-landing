import Link from 'next/link';

interface LinkItem {
  id: string;
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  links: LinkItem[];
  onClose: () => void;
}

const MobileMenu = ({ isOpen, links, onClose }: MobileMenuProps) => {
  return (
    <>

      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-40
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      <nav className={`fixed top-0 right-0 bottom-0 w-full max-w-sm grid items-center bg-black dark:bg-zinc-900 shadow-2xl z-40 
        transition-transform duration-500 ease-in-out transform
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col p-8 pt-24 gap-6">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={onClose}
              className="text-2xl font-medium text-white dark:text-white hover:text-orange-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default MobileMenu
