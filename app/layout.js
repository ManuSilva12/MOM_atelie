import './globals.css'; 

export const metadata = {
  title: 'MOM Ateliê',
  description: 'Design, afeto e exclusividade',
  icons: {
    icon: '/mini_logo.png',
    shortcut: '/mini_logo.png',
    apple: '/mini_logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        {}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, boxSizing: 'border-box' }}>
        {children}
      </body>
    </html>
  );
}