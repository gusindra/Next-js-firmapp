import React, { useState, useEffect, ReactNode } from 'react';

import { ThemeProvider } from 'next-themes';

type Props = {
  children: ReactNode;
};

const Provider = ({ children }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Provider;
