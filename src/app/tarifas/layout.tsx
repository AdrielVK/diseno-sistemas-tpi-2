import AtencionGuard from "../guards/atencionGuard";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AtencionGuard>

      <>
          {children}
      
      </>
    </AtencionGuard>
    
  );
}
