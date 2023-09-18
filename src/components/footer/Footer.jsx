import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
export default function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.logo}>
					<Image
						className={styles.image}
						src="/bg2.jpg"
						width={35}
						height={35}
						alt="Vera Blog"
					/>
					<h2 className={styles.logoText}>Vera Blog</h2>
				</div>
				<p className={styles.description}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus nostrum blanditiis ullam repellendus temporibus quam
					reiciendis illo, exercitationem at neque suscipit accusamus ut
					laudantium corporis tempore dolor perferendis maxime aperiam?
				</p>
				<div className={styles.icons}>
					<Image
						src="/bg.jpg"
						width={18}
						height={18}
						alt="icon"
						className={styles.icon}
					/>
					<Image
						src="/bg.jpg"
						width={18}
						height={18}
						alt="icon"
						className={styles.icon}
					/>
					<Image
						src="/bg.jpg"
						width={18}
						height={18}
						alt="icon"
						className={styles.icon}
					/>
					<Image
						src="/bg.jpg"
						width={18}
						height={18}
						alt="icon"
						className={styles.icon}
					/>
				</div>
			</div>
			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Links</span>
					<Link href="/">Home</Link>
					<Link href="/">Blog</Link>
					<Link href="/">About</Link>
					<Link href="/">Contact</Link>
				</div>
				<div className={styles.list}>
					<span className={styles.listTitle}>Tags</span>
					<Link href="/">Home</Link>
					<Link href="/">Blog</Link>
					<Link href="/">About</Link>
					<Link href="/">Contact</Link>
				</div>
				<div className={styles.list}>
					<span className={styles.listTitle}>Social</span>
					<Link href="/">Home</Link>
					<Link href="/">Blog</Link>
					<Link href="/">About</Link>
					<Link href="/">Contact</Link>
				</div>
			</div>
		</div>
	);
}
