// src/components/LogoIcon.tsx
const LogoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 500 500"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Left bracket: C-shape opening rightward */}
    <path d="M 95 158 L 200 75 L 265 140 L 198 250 L 265 360 L 200 425 L 95 342 Z" />
    {/* Right bracket: C-shape opening leftward */}
    <path d="M 405 158 L 300 75 L 235 140 L 302 250 L 235 360 L 300 425 L 405 342 Z" />
  </svg>
);

export default LogoIcon;
