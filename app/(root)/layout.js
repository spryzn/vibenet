import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { Inter } from "next/font/google";

import LeftSideBar from "@/components/layout/LeftSideBar";
import RightSideBar from "@/components/layout/RightSideBar";
import Topbar from "@/components/layout/Topbar";
import MainContainer from "@/components/layout/MainContainer";
import BottomBar from "@/components/layout/BottomBar";

export const metadata = {
  title: "Vibe Net",
  description: "Next social media app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-(--color-purple-2)`}>
          <main className="flex flex-row">
            <LeftSideBar />
            <MainContainer>
              <Topbar />
              {children}
            </MainContainer>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
