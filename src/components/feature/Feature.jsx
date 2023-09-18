import React from 'react';
import styles from './feature.module.css';
import Image from 'next/image';
export default function Feature() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<b>Hey, DaveDev here!</b> Decover my stories and creative ideas.
			</h1>
			<div className={styles.post}>
				<div className={styles.imageContainer}>
					<Image src="/bg.jpg" alt="" fill className={styles.image} />
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.postTitle}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consectetur, magnam.
					</h1>
					<p className={styles.postDescription}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
						voluptatibus laboriosam laudantium error ipsum nulla pariatur
						repellendus distinctio tempore magni ad temporibus sapiente impedit
						voluptate consectetur, nemo, sequi dicta omnis.
					</p>
					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</div>
	);
}
