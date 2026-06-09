"use client";

import {
  RigidBoxIllustration,
  MailerBoxIllustration,
  PouchIllustration,
  GiftBoxIllustration,
  LabelIllustration,
  ShippingContainerIllustration,
  WindowBoxIllustration,
  KraftBoxIllustration,
  CosmeticBoxIllustration,
  CorrugatedBoxIllustration,
} from "./ProductIllustrations";

interface ProductImageDisplayProps {
  productId: string;
  alt: string;
  className?: string;
}

const illustrationMap: Record<string, React.ReactNode> = {
  "1": <RigidBoxIllustration />,
  "2": <MailerBoxIllustration />,
  "3": <PouchIllustration />,
  "4": <GiftBoxIllustration />,
  "5": <LabelIllustration />,
  "6": <ShippingContainerIllustration />,
  "7": <WindowBoxIllustration />,
  "8": <KraftBoxIllustration />,
  "9": <CosmeticBoxIllustration />,
  "10": <CorrugatedBoxIllustration />,
};

export default function ProductImageDisplay({
  productId,
  alt,
  className = "",
}: ProductImageDisplayProps) {
  const illustration = illustrationMap[productId];

  if (!illustration) {
    return (
      <div className={`flex items-center justify-center bg-slate-100 ${className}`}>
        <span className="text-slate-400 text-sm">Image not found</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {illustration}
    </div>
  );
}
