"use client";

import { ReactNode, createContext, useState } from "react";

interface IStickyButtonContext {
  visible: boolean;
  onHeroBtnVisible: (inView: boolean) => void;
  onCtaBtnVisible: (inView: boolean) => void;
}

export const StickyButtonContext = createContext<IStickyButtonContext>({
  visible: false,
  onHeroBtnVisible: () => {},
  onCtaBtnVisible: () => {},
});

export default function StickyButtonProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [heroBtnVisible, setHeroBtnVisible] = useState(true);
  const [ctaBtnVisible, setCtaBtnVisible] = useState(false);
  const visible = !(heroBtnVisible || ctaBtnVisible);

  function handleHeroBtnVisible(inView: boolean) {
    setHeroBtnVisible(inView);
  }

  function handleCtaBtnVisible(inView: boolean) {
    setCtaBtnVisible(inView);
  }

  return (
    <StickyButtonContext.Provider
      value={{
        visible,
        onHeroBtnVisible: handleHeroBtnVisible,
        onCtaBtnVisible: handleCtaBtnVisible,
      }}
    >
      {children}
    </StickyButtonContext.Provider>
  );
}
