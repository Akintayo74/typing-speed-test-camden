import React from 'react';
import '../src/index.css';

console.log('🔥 Ladle Provider loaded!');

export const Provider = ({ children }: { children: React.ReactNode }) => {
  console.log('🎨 Rendering with Provider');
  return <>{children}</>;
};