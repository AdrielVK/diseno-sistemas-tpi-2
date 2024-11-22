import MecanicoGuard from "../guards/mecanicoGuard";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MecanicoGuard>

      <>
          {children}
      
      </>
    </MecanicoGuard>
    
  );
}
