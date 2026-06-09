// Product SVG Illustrations Component - High Detail Version

export const RigidBoxIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="rigidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#8B5CF6", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#6366F1", stopOpacity: 1 }} />
      </linearGradient>
      <filter id="shadowRigid">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3" />
      </filter>
    </defs>
    {/* Box 3D effect */}
    <polygon points="40,70 50,55 170,55 160,70" fill="#4F46E5" opacity="0.8" />
    <rect x="40" y="70" width="120" height="80" fill="url(#rigidGrad)" filter="url(#shadowRigid)" />
    <polygon points="160,70 170,55 170,135 160,150" fill="#5B21B6" opacity="0.9" />
    {/* Details */}
    <rect x="50" y="85" width="100" height="50" fill="none" stroke="#fff" strokeWidth="2" rx="4" opacity="0.6" />
    <text x="100" y="118" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">RIGID BOX</text>
  </svg>
);

export const MailerBoxIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="mailerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#F59E0B", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#D97706", stopOpacity: 1 }} />
      </linearGradient>
      <filter id="shadowMailer">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3" />
      </filter>
    </defs>
    <path d="M 50 80 L 100 50 L 150 80 L 150 140 Q 150 150 140 150 L 60 150 Q 50 150 50 140 Z" fill="url(#mailerGrad)" filter="url(#shadowMailer)" />
    <path d="M 50 80 L 100 50 L 150 80" stroke="#fff" strokeWidth="2.5" fill="none" opacity="0.7" />
    <line x1="55" y1="95" x2="145" y2="95" stroke="#fff" strokeWidth="2" opacity="0.6" />
    <line x1="55" y1="110" x2="145" y2="110" stroke="#fff" strokeWidth="2" opacity="0.5" />
    <line x1="55" y1="125" x2="145" y2="125" stroke="#fff" strokeWidth="2" opacity="0.4" />
    <text x="100" y="138" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">MAILER</text>
  </svg>
);

export const PouchIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="pouchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#10B981", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#059669", stopOpacity: 1 }} />
      </linearGradient>
      <filter id="shadowPouch">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3" />
      </filter>
    </defs>
    {/* Two pouches */}
    <path d="M 60 50 L 75 50 Q 80 50 80 60 L 80 140 Q 80 150 70 150 L 65 150 Q 55 150 55 140 L 55 60 Q 55 50 60 50 Z" fill="url(#pouchGrad)" filter="url(#shadowPouch)" />
    <path d="M 120 50 L 135 50 Q 140 50 140 60 L 140 140 Q 140 150 130 150 L 125 150 Q 115 150 115 140 L 115 60 Q 115 50 120 50 Z" fill="url(#pouchGrad)" opacity="0.8" filter="url(#shadowPouch)" />
    {/* Sealing lines */}
    <line x1="70" y1="55" x2="70" y2="80" stroke="#fff" strokeWidth="2" opacity="0.5" />
    <line x1="130" y1="55" x2="130" y2="80" stroke="#fff" strokeWidth="2" opacity="0.5" />
    {/* Shine effect */}
    <ellipse cx="70" cy="90" rx="8" ry="20" fill="#fff" opacity="0.3" />
    <ellipse cx="130" cy="90" rx="8" ry="20" fill="#fff" opacity="0.2" />
    <text x="100" y="165" textAnchor="middle" fontSize="10" fill="#059669" fontWeight="bold">ECO POUCHES</text>
  </svg>
);

export const GiftBoxIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="giftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#EC4899", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#DB2777", stopOpacity: 1 }} />
      </linearGradient>
      <filter id="shadowGift">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect x="45" y="70" width="110" height="80" fill="url(#giftGrad)" rx="6" filter="url(#shadowGift)" />
    {/* Ribbon */}
    <rect x="97" y="45" width="6" height="50" fill="#FFD700" filter="url(#shadowGift)" />
    <path d="M 80 52 Q 100 48 120 52" stroke="#FFD700" strokeWidth="6" fill="none" filter="url(#shadowGift)" />
    <circle cx="100" cy="48" r="10" fill="#FFD700" filter="url(#shadowGift)" />
    {/* Box details */}
    <rect x="55" y="80" width="90" height="60" fill="none" stroke="#fff" strokeWidth="2" rx="4" opacity="0.4" />
    <text x="100" y="120" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold">GIFT BOX</text>
  </svg>
);

export const LabelIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="labelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#3B82F6", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#1E40AF", stopOpacity: 1 }} />
      </linearGradient>
      <filter id="shadowLabel">
        <feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect x="35" y="55" width="130" height="30" fill="url(#labelGrad)" rx="4" filter="url(#shadowLabel)" />
    <rect x="35" y="95" width="130" height="30" fill="url(#labelGrad)" rx="4" opacity="0.85" filter="url(#shadowLabel)" />
    <rect x="35" y="135" width="130" height="30" fill="url(#labelGrad)" rx="4" opacity="0.7" filter="url(#shadowLabel)" />
    {/* Label lines */}
    <line x1="50" y1="70" x2="180" y2="70" stroke="#fff" strokeWidth="1.5" opacity="0.5" />
    <circle cx="190" cy="70" r="4" fill="#FFD700" />
    <line x1="50" y1="110" x2="180" y2="110" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
    <line x1="50" y1="150" x2="180" y2="150" stroke="#fff" strokeWidth="1.5" opacity="0.3" />
    <text x="100" y="88" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">LABELS</text>
  </svg>
);

export const ShippingContainerIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="shippingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#8B4513", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#654321", stopOpacity: 1 }} />
      </linearGradient>
      <filter id="shadowShipping">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3" />
      </filter>
    </defs>
    {/* 3D box */}
    <polygon points="35,75 60,55 180,55 165,75" fill="#5A2D0C" opacity="0.9" />
    <rect x="35" y="75" width="130" height="75" fill="url(#shippingGrad)" filter="url(#shadowShipping)" />
    <polygon points="165,75 180,55 180,130 165,150" fill="#6B3410" opacity="0.95" />
    {/* Handles */}
    <rect x="50" y="50" width="10" height="25" fill="#8B4513" rx="5" opacity="0.8" />
    <rect x="140" y="50" width="10" height="25" fill="#8B4513" rx="5" opacity="0.8" />
    <line x1="55" y1="50" x2="145" y2="50" stroke="#8B4513" strokeWidth="3" opacity="0.6" />
    {/* Details */}
    <line x1="50" y1="100" x2="165" y2="100" stroke="#fff" strokeWidth="1" opacity="0.3" />
    <text x="100" y="128" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">SHIPPING</text>
  </svg>
);

export const WindowBoxIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="windowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#EF4444", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#DC2626", stopOpacity: 1 }} />
      </linearGradient>
      <filter id="shadowWindow">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect x="35" y="60" width="130" height="95" fill="url(#windowGrad)" rx="6" filter="url(#shadowWindow)" />
    {/* Window panes */}
    <rect x="50" y="75" width="50" height="65" fill="#B3E5FC" rx="3" />
    <rect x="100" y="75" width="50" height="65" fill="#B3E5FC" rx="3" opacity="0.9" />
    <line x1="75" y1="75" x2="75" y2="140" stroke="#0277BD" strokeWidth="1.5" />
    <line x1="125" y1="75" x2="125" y2="140" stroke="#0277BD" strokeWidth="1.5" />
    <line x1="50" y1="107" x2="150" y2="107" stroke="#0277BD" strokeWidth="1.5" />
    {/* Highlights in window */}
    <circle cx="65" cy="95" r="5" fill="#fff" opacity="0.4" />
    <circle cx="115" cy="95" r="5" fill="#fff" opacity="0.3" />
    <text x="100" y="160" textAnchor="middle" fontSize="11" fill="#DC2626" fontWeight="bold">WINDOW BOX</text>
  </svg>
);

export const KraftBoxIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="kraftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#D2691E", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#8B4513", stopOpacity: 1 }} />
      </linearGradient>
      <filter id="shadowKraft">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3" />
      </filter>
      <pattern id="kraft" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="8" y2="8" stroke="#000" strokeWidth="0.5" opacity="0.08" />
        <line x1="8" y1="0" x2="0" y2="8" stroke="#000" strokeWidth="0.5" opacity="0.08" />
      </pattern>
    </defs>
    <rect x="35" y="50" width="130" height="100" fill="url(#kraftGrad)" rx="8" filter="url(#shadowKraft)" />
    <rect x="35" y="50" width="130" height="100" fill="url(#kraft)" rx="8" />
    {/* Tape */}
    <rect x="95" y="45" width="10" height="110" fill="#D4A574" opacity="0.7" rx="2" />
    {/* Box details */}
    <rect x="50" y="65" width="100" height="70" fill="none" stroke="#fff" strokeWidth="1.5" rx="4" opacity="0.3" />
    <text x="100" y="115" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">KRAFT BOX</text>
  </svg>
);

export const CosmeticBoxIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="cosmeticGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#A78BFA", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#7C3AED", stopOpacity: 1 }} />
      </linearGradient>
      <filter id="shadowCosmetic">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect x="40" y="55" width="120" height="100" fill="url(#cosmeticGrad)" rx="6" filter="url(#shadowCosmetic)" />
    {/* Product circles inside */}
    <circle cx="65" cy="85" r="14" fill="#FFD700" opacity="0.8" />
    <circle cx="135" cy="85" r="14" fill="#FF69B4" opacity="0.8" />
    <circle cx="65" cy="130" r="14" fill="#FF1493" opacity="0.7" />
    <circle cx="135" cy="130" r="14" fill="#FFD700" opacity="0.7" />
    {/* Shine */}
    <circle cx="65" cy="80" r="5" fill="#fff" opacity="0.4" />
    <circle cx="135" cy="80" r="5" fill="#fff" opacity="0.4" />
    <text x="100" y="165" textAnchor="middle" fontSize="10" fill="#7C3AED" fontWeight="bold">COSMETICS</text>
  </svg>
);

export const CorrugatedBoxIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="corrugatedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#92400E", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#78350F", stopOpacity: 1 }} />
      </linearGradient>
      <pattern id="corrugated" x="0" y="0" width="16" height="6" patternUnits="userSpaceOnUse">
        <path d="M 0 3 Q 4 0 8 3 T 16 3" stroke="#000" strokeWidth="0.8" fill="none" opacity="0.15" />
      </pattern>
      <filter id="shadowCorrugated">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect x="30" y="45" width="140" height="110" fill="url(#corrugatedGrad)" rx="8" filter="url(#shadowCorrugated)" />
    <rect x="30" y="45" width="140" height="110" fill="url(#corrugated)" rx="8" />
    {/* Flute lines */}
    <line x1="45" y1="75" x2="155" y2="75" stroke="#fff" strokeWidth="1" opacity="0.2" />
    <line x1="45" y1="95" x2="155" y2="95" stroke="#fff" strokeWidth="1" opacity="0.2" />
    <line x1="45" y1="115" x2="155" y2="115" stroke="#fff" strokeWidth="1" opacity="0.2" />
    {/* Box edges */}
    <rect x="40" y="55" width="120" height="90" fill="none" stroke="#fff" strokeWidth="2" opacity="0.3" />
    <text x="100" y="135" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">CORRUGATED</text>
  </svg>
);
