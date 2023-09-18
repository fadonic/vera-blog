import React from 'react';
import styles from './categoryList.module.css';
import Image from 'next/image';
import Link from 'next/link';
export default function CategoryList() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Popular Categories</h1>
			<div className={styles.categories}>
				<Link
					href="/blog?cat=style"
					className={`${styles.category} ${styles.style}`}
				>
					<Image
						src="/bg2.jpg"
						alt=""
						width={32}
						height={32}
						className={styles.image}
					/>
					style
				</Link>
				<Link
					href="/blog?cat=style"
					className={`${styles.category} ${styles.culture}`}
				>
					<Image
						src="/bg2.jpg"
						alt=""
						width={32}
						height={32}
						className={styles.image}
					/>
					Culture
				</Link>

				<Link
					href="/blog?cat=style"
					className={`${styles.category} ${styles.travel}`}
				>
					<Image
						src="/bg2.jpg"
						alt=""
						width={32}
						height={32}
						className={styles.image}
					/>
					Travel
				</Link>

				<Link
					href="/blog?cat=style"
					className={`${styles.category} ${styles.fashion}`}
				>
					<Image
						src="/bg2.jpg"
						alt=""
						width={32}
						height={32}
						className={styles.image}
					/>
					Fashion
				</Link>

				<Link
					href="/blog?cat=style"
					className={`${styles.category} ${styles.food}`}
				>
					<Image
						src="/bg2.jpg"
						alt=""
						width={32}
						height={32}
						className={styles.image}
					/>
					Food
				</Link>

				<Link
					href="/blog?cat=style"
					className={`${styles.category} ${styles.coding}`}
				>
					<Image
						src="/bg2.jpg"
						alt=""
						width={32}
						height={32}
						className={styles.image}
					/>
					Coding
				</Link>
			</div>
		</div>
	);
}
