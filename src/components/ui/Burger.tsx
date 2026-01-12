interface BurgerProps {
  isOpen: boolean;
  onClick: () => void;
}

export const BurgerButton = ({ isOpen, onClick }: BurgerProps) => {
  return (
    <button
      onClick={onClick}
      className="relative z-50 w-6.5 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out
        ${isOpen ? "rotate-45 translate-y-2" : ""}`}
      />

      <span className={`block w-6 h-0.5 bg-white transition-all duration-300
        ${isOpen ? "opacity-0" : "opacity-100"}`}
      />

      <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out
        ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
      />
    </button>
  );
};


export default BurgerButton