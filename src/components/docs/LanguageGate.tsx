'use client';

import React from 'react';
import { useLanguage } from '@/components/providers/LanguageProvider';

interface LanguageGateProps {
  en: React.ReactNode;
  ar: React.ReactNode;
}

export default function LanguageGate({ en, ar }: LanguageGateProps) {
  const { language } = useLanguage();
  return <>{language === 'ar' ? ar : en}</>;
}