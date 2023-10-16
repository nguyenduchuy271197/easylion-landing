import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="relative flex items-center">
      <Image
        src="/logo.png"
        alt="EASYLION"
        width={160}
        height={24}
        className="object-contain"
      />
    </Link>
  );
}
