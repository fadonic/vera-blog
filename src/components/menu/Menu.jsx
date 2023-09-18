import React from 'react';
import styles from './menu.module.css';
import Image from 'next/image';
import Link from 'next/link';
export default function Menu() {
	return (
		<div className={styles.container}>
			<div className={styles.post}>
				<h2 className={styles.subtitle}>{"What's is new"}</h2>
				<h1 className={styles.title}>Most popular</h1>
				<div className={styles.items}>
					<Link href="/" className={styles.item}>
						<div className={styles.textContainer}>
							<span className={`${styles.category} ${styles.travel}`}>
								Travel
							</span>
							<p className={styles.description}>
								Lorem ipsum, dolor sit amet consectetur
							</p>
							<div className={styles.details}>
								<span className={styles.username}>John Kennedy</span>
								<span className={styles.date}> - 11-12-2022</span>
							</div>
						</div>
					</Link>
					<Link href="/" className={styles.item}>
						<div className={styles.textContainer}>
							<span className={`${styles.category} ${styles.culture}`}>
								Culture
							</span>
							<p className={styles.description}>
								Lorem ipsum, dolor sit amet consectetur
							</p>
							<div className={styles.details}>
								<span className={styles.username}>John Kennedy</span>
								<span className={styles.date}> - 11-12-2022</span>
							</div>
						</div>
					</Link>
				</div>
			</div>
			<div className={styles.categories}>
				<h2 className={styles.subtitle}>{'Choosen by editor'}</h2>
				<h1 className={styles.title}>Editors pick</h1>
				<div className={styles.items}>
					<Link href="/" className={styles.item}>
						<div className={styles.imageContainer}>
							<Image src="/bg.jpg" alt="" fill className={styles.image} />
						</div>
						<div className={styles.textContainer}>
							<span className={`${styles.category} ${styles.travel}`}>
								Travel
							</span>
							<p className={styles.description}>
								Lorem ipsum, dolor sit amet consectetur
							</p>
							<div className={styles.details}>
								<span className={styles.username}>John Kennedy</span>
								<span className={styles.date}> - 11-12-2022</span>
							</div>
						</div>
					</Link>
					<Link href="/" className={styles.item}>
						<div className={styles.imageContainer}>
							<Image src="/bg.jpg" alt="" fill className={styles.image} />
						</div>
						<div className={styles.textContainer}>
							<span className={`${styles.category} ${styles.culture}`}>
								Culture
							</span>
							<p className={styles.description}>
								Lorem ipsum, dolor sit amet consectetur
							</p>
							<div className={styles.details}>
								<span className={styles.username}>John Kennedy</span>
								<span className={styles.date}> - 11-12-2022</span>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
