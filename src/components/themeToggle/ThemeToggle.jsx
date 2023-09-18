'use client';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';

export default function ThemeToggle() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	console.log(theme);

	return <div onClick={toggleTheme}>ThemeToggle</div>;
}
