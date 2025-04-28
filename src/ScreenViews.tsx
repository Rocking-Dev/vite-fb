import React from "react";
import { useMediaQuery } from "react-responsive";

interface ScreenProps {
  children: React.ReactNode;
}

export const Desktop: React.FC<ScreenProps> = ({ children }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1600px)" });
  return isDesktop ? children : null;
};

export const DefaultScreen: React.FC<ScreenProps> = ({ children }) => {
  const isDefault = useMediaQuery({
    query: "(min-width: 640px) and (max-width: 1599px)",
  });
  return isDefault ? children : null;
};

export const Mobile: React.FC<ScreenProps> = ({ children }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 639px)" });
  return isMobile ? children : null;
};
