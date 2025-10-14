import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";

export const metadata = {
  title: "Auth",
  description: "Next social media App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: undefined, // <-- Add this line
        elements: {
          formButtonPrimary: "cl-formButtonPrimary",
          footerActionLink: "cl-footerActionLink",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.className} bg-(--color-purple-2)`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
