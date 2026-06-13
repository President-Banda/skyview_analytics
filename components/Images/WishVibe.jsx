const WishVibeLogo = () => (
  <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="w-24 h-24" aria-label="WishVibe Platforms logo">

    {/* Outer green ring */}
    <circle cx="110" cy="110" r="104" stroke="#6BBF4A" strokeWidth="10" fill="white"/>

    {/* Inner purple ring */}
    <circle cx="110" cy="110" r="79"  stroke="#8C2FC0" strokeWidth="6"  fill="white"/>

    {/* Stylised W — green strokes */}
    <path
      d="M68 82 L82 128 L97 96 L112 128 L126 82"
      stroke="#6BBF4A" strokeWidth="10"
      fill="none" strokeLinecap="round" strokeLinejoin="round"
    />

    {/* Vertical bar — purple (the "i" of WishVibe) */}
    <rect x="132" y="78" width="9" height="52" rx="4" fill="#8C2FC0"/>
    {/* Dot above the bar */}
    <circle cx="136.5" cy="68" r="5.5" fill="#8C2FC0"/>

    {/* hVibe label */}
    <text
      x="110" y="168"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="700"
      fontSize="19"
      fill="#8C2FC0"
    >
      hVibe
    </text>
  </svg>
);

export default WishVibeLogo;
