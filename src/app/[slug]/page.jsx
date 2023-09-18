import React from 'react';
import styles from './singlePage.module.css';
import Menu from '@/components/menu/Menu';
import Image from 'next/image';
import Comment from '@/components/comment/Comments';

export default function SinglePage() {
	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.textContainer}>
					<h1 className={styles.title}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
						deserunt.
					</h1>
					<div className={styles.user}>
						<div className={styles.userImageContainer}>
							<Image src="/bg2.jpg" alt="" fill className={styles.avatar} />
						</div>
						<div className={styles.userTextContainer}>
							<span className={styles.username}>Rose Daniel</span>
							<span className={styles.date}>10/12/2022</span>
						</div>
					</div>
				</div>

				<div className={styles.imageContainer}>
					<Image src="/bg.jpg" alt="" fill className={styles.image} />
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.post}>
					<div className={styles.description}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
							aperiam accusantium iusto consequuntur porro asperiores ipsum
							minus, eveniet hic alias.
						</p>
						<h3>Lorem ipsum dolor sit amet.</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
							aperiam accusantium iusto consequuntur porro asperiores ipsum
							minus, eveniet hic alias.
						</p>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
							aperiam accusantium iusto consequuntur porro asperiores ipsum
							minus, eveniet hic alias.
						</p>
					</div>
					<div className={styles.comment}>
						<Comment />
					</div>
				</div>
				<Menu />
			</div>
		</div>
	);
}
