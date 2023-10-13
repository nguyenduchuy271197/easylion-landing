import Link from "next/link";
import { Button } from "./ui/button";

export default function StickyButton() {
  return (
    <div className="fixed left-1/2 bottom-4 -translate-x-1/2 max-w-[300px] sm:max-w-xs w-full z-50 px-8">
      <Button size="lg" className="w-full" asChild>
        <Link href="/apply">사업 성공하기</Link>
      </Button>
    </div>
  );
}
