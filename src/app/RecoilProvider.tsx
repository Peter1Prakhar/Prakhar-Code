// src/app/RecoilProvider.tsx

"use client";

import React, { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

type RecoilProviderProps = {
  children: ReactNode;
};

const RecoilProvider: React.FC<RecoilProviderProps> = ({ children }) => {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  );
};

export default RecoilProvider;
