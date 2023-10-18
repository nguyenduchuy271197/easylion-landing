import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ReactQueryProvider from "@/components/react-query-provider";

import { Toaster } from "sonner";
import Chat from "@/components/chat";
import StickyButtonProvider from "@/providers/stick-button-provider";

const quicksandFont = Quicksand({
  subsets: ["vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "이지라이언 | 쉽다 빠르다",
  description:
    "EASYLION은 쉽고 빠르게 여러분들의 비지니스 여정을 함께합니다. 보다 빠르고 정확한 프로젝트 성공을 지향합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksandFont.className} suppressHydrationWarning={true}>
        <ReactQueryProvider>
          <StickyButtonProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Toaster position="top-center" />
            <Chat />
          </StickyButtonProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
