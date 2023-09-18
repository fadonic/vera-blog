import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

export default function Card() {
	return (
		<div className={styles.container}>
			<div className={styles.ImageContainer}>
				<Image src="/bg3.jpg" fill alt="" className={styles.image} />
			</div>
			<div className={styles.textContainer}>
				<div className={styles.details}>
					<span className={styles.date}>11-12-2022 - </span>
					<span className={styles.category}>Culture</span>
				</div>
				<h1 className={styles.title}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Voluptatibus, deleniti.
				</h1>
				<p className={styles.description}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
					repellendus, aspernatur magni tempora accusantium repudiandae dolor,
					cumque corrupti sequi architecto id nesciunt sunt quo nemo quia
				</p>
				<Link href="/" className={styles.link}>
					Read More
				</Link>
			</div>
		</div>
	);
}
