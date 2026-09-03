import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export default function Logo({ className = "h-10 sm:h-12", onClick }: LogoProps) {
  return (
    <Link href="/" onClick={onClick} className="shrink-0">
      <Image
        src="/logo.png"
        alt="Êxito em Imóveis"
        width={837}
        height={270}
        priority
        className={`w-auto ${className}`}
      />
    </Link>
  );
}
