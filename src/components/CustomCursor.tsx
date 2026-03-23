import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { applyRouteCursorTheme } from '../lib/cursorTheme';

const INTERACTIVE_SELECTOR = [
  'a',
  'button',
  '[role="button"]',
  'input',
  'select',
  'textarea',
  'label',
  'summary'
].join(', ');

const CustomCursor = () => {
  const location = useLocation();
  const cursorRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const auraRefPosition = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const updateEnabledState = () => {
      const enabled = mediaQuery.matches;
      setIsEnabled(enabled);
      document.body.classList.toggle('has-ninja-cursor', enabled);
    };

    updateEnabledState();
    mediaQuery.addEventListener('change', updateEnabledState);

    return () => {
      document.body.classList.remove('has-ninja-cursor');
      mediaQuery.removeEventListener('change', updateEnabledState);
    };
  }, []);

  useEffect(() => {
    applyRouteCursorTheme(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const setInteractiveState = (target: EventTarget | null) => {
      if (!(target instanceof Element)) {
        setIsInteractive(false);
        return;
      }

      const closestInteractive = target.closest(INTERACTIVE_SELECTOR);
      const computedCursor = window.getComputedStyle(target).cursor;
      setIsInteractive(Boolean(closestInteractive) || computedCursor === 'pointer');
    };

    const updatePositions = () => {
      auraRefPosition.current.x += (pointerRef.current.x - auraRefPosition.current.x) * 0.12;
      auraRefPosition.current.y += (pointerRef.current.y - auraRefPosition.current.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pointerRef.current.x}px, ${pointerRef.current.y}px, 0)`;
      }

      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${auraRefPosition.current.x}px, ${auraRefPosition.current.y}px, 0)`;
      }

      animationFrameRef.current = window.requestAnimationFrame(updatePositions);
    };

    const handleMouseMove = (event: MouseEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      setIsVisible(true);
      setInteractiveState(event.target);
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleFocusIn = (event: FocusEvent) => setInteractiveState(event.target);
    const handleFocusOut = () => setIsInteractive(false);

    animationFrameRef.current = window.requestAnimationFrame(updatePositions);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className={`ninja-cursor ${isVisible ? 'is-visible' : ''} ${isInteractive ? 'is-interactive' : ''} ${isPressed ? 'is-pressed' : ''}`}
        aria-hidden="true"
      >
        <div className="ninja-cursor-ring" />
        <svg className="ninja-cursor-shuriken" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main Shuriken Body */}
          <path 
            d="M50 5 L62 38 L95 50 L62 62 L50 95 L38 62 L5 50 L38 38 L50 5Z" 
            fill="var(--cursor-accent)" 
            stroke="var(--cursor-ink)" 
            strokeWidth="2" 
            strokeLinejoin="round" 
          />
          {/* Inner Blades */}
          <path 
            d="M50 20 L55 45 L80 50 L55 55 L50 80 L45 55 L20 50 L45 45 L50 20Z" 
            fill="var(--cursor-ink)" 
            opacity="0.4"
          />
          {/* Decorative Holes */}
          <circle cx="50" cy="50" r="8" fill="var(--cursor-ink)" stroke="var(--cursor-accent)" strokeWidth="1" />
          <circle cx="50" cy="50" r="4" fill="var(--cursor-core)" />
          
          {/* Glow points on tips */}
          <circle cx="50" cy="12" r="2" fill="var(--cursor-core)" />
          <circle cx="88" cy="50" r="2" fill="var(--cursor-core)" />
          <circle cx="50" cy="88" r="2" fill="var(--cursor-core)" />
          <circle cx="12" cy="50" r="2" fill="var(--cursor-core)" />
        </svg>
      </div>
    </>
  );
};

export default CustomCursor;