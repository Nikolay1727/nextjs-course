import { Footer, Header } from "@/components";
import { GlobalStyles } from "@/styled";
import { PageContentBox } from "@/ui";
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Tennis shop",
  description: "shared metadata",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <NextTopLoader />
        <Header />
        <PageContentBox>{children}</PageContentBox>
        <Footer />
        <GlobalStyles />
      </body>
    </html>
  );
};

export default RootLayout;
