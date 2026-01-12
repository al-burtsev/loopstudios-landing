'use client';
import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Reveal({ children, from, to, className = "", duration = "duration-1000", delay = 0 }: { children: ReactNode, from: string, to: string, className?: string, duration?:string, delay?: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const animationClasses = inView
    ? to
    : from;

  return (
    <div
      ref={ref}
      className={`transition-all ${duration} ease-out ${delay} ${animationClasses} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
