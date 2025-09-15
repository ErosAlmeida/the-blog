

export default function RootLayout({
    children,
}:{
   children: React.ReactNode;

} ){

  return (
   <>
   <h1>Aqui vai o layout</h1>
   {children}
   </>
   
  );
}
