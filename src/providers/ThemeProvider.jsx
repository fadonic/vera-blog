'use client';
import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react';

export default function ThemeProvider({ children }) {
	const { theme } = useContext(ThemeContext);
	return <div className={theme}>{children}</div>;
}
