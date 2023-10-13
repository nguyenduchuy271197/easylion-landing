import { deepStrictEqual } from "assert";
import { findSourceMap } from "module";
import Image from "next/image";
import Link from "next/link";

export default function Chat() {
  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-12 sm:right-12">
      <Link href="http://pf.kakao.com/_GjbjG" target="_blank">
        <Image src="/chat.gif" alt="Chat" width={80} height={80} />
      </Link>
    </div>
  );
}
