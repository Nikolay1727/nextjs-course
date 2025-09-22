import { Footer, Header } from "@/components";
import { GlobalStyles } from "@/styled";
import { PageContentBox } from "@/ui";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <PageContentBox>{children}</PageContentBox>
        <Footer />
        <GlobalStyles />
      </body>
    </html>
  );
};

export default RootLayout;
