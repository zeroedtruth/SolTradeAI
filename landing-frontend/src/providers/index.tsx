"use client";

import { ComponentProps } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const Providers = ({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
