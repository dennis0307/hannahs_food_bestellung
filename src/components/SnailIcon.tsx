const SnailIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Shell spiral */}
    <path d="M12 10a4 4 0 1 0 4 4" />
    <path d="M12 10a2 2 0 1 1 2 2" />
    {/* Body */}
    <path d="M2 18c0-1.5 1-3 3-3h11a4 4 0 0 0 0-8c-2 0-3.5 1.5-3.5 3.5" />
    {/* Antennae */}
    <path d="M5 15l-1-3" />
    <path d="M7 15l1-3" />
    {/* Ground line */}
    <path d="M2 18h20" />
  </svg>
);

export default SnailIcon;
