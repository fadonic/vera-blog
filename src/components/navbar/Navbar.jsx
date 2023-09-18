import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import AuthLink from '../authLink/AuthLink';
import ThemeToggle from '../themeToggle/ThemeToggle';
export default function Navbar() {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>Vera Blog</div>
			<div className={styles.links}>
				<ThemeToggle />
				<Link href="/" className={styles.link}>
					Home
				</Link>
				<Link href="/" className={styles.link}>
					Social
				</Link>
				<Link href="/" className={styles.link}>
					Contact
				</Link>
				<Link href="/" className={styles.link}>
					About
				</Link>
				<AuthLink />
			</div>
		</div>
	);
}
