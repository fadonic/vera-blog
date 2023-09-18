'use client';
import Link from 'next/link';
import styles from './authLink.module.css';
import { useState } from 'react';

export default function AuthLink() {
	const status = 'notauthenticated';
	const [open, setOpen] = useState(false);
	return (
		<>
			<div onClick={() => setOpen(!open)} className={styles.burger}>
				open
			</div>
			<div>
				{open && (
					<div className={styles.responsiveMenu}>
						<Link href="/" className={styles.link}>
							Home
						</Link>
						<Link href="/" className={styles.link}>
							Contact
						</Link>
						<Link href="/" className={styles.link}>
							About
						</Link>
						{status === 'notauthenticated' ? (
							<Link href="/login">Login</Link>
						) : (
							<>
								<Link href="/">Write</Link>
								<span className={styles.link}>Logout</span>
							</>
						)}
					</div>
				)}
			</div>
		</>
	);
}
