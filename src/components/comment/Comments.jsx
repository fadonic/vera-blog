import Link from 'next/link';
import styles from './comments.module.css';
import Image from 'next/image';

export default function Comment() {
	const status = 'authenticated';
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Comments</h1>
			{status ? (
				<div className={styles.write}>
					<textarea
						placeholder="Write your comment"
						className={styles.input}
					></textarea>
					<button className={styles.button}>Send</button>
				</div>
			) : (
				<Link>Login to write comment</Link>
			)}
			<div className={styles.comments}>
				<div className={styles.comment}>
					<div className={styles.user}>
						<Image
							src="/bg2.jpg"
							alt=""
							width={50}
							height={50}
							className={styles.image}
						/>
						<div className={styles.userInfo}>
							<span className={styles.username}>Don Mark</span>
							<span className={styles.date}>11/12/2022</span>
						</div>
					</div>
					<div className={styles.description}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
						libero natus officiis explicabo. Quis iure aut eos quaerat expedita
						reiciendis aliquam, iusto debitis. Rem quis nam harum. Eum, illum
						odio praesentium, dolorem molestiae velit quas maiores non, ab quia
						culpa?
					</div>
				</div>
				<div className={styles.comment}>
					<div className={styles.user}>
						<Image
							src="/bg2.jpg"
							alt=""
							width={50}
							height={50}
							className={styles.image}
						/>
						<div className={styles.userInfo}>
							<span className={styles.username}>Don Mark</span>
							<span className={styles.date}>11/12/2022</span>
						</div>
					</div>
					<div className={styles.description}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
						libero natus officiis explicabo. Quis iure aut eos quaerat expedita
						reiciendis aliquam, iusto debitis. Rem quis nam harum. Eum, illum
						odio praesentium, dolorem molestiae velit quas maiores non, ab quia
						culpa?
					</div>
				</div>
				<div className={styles.comment}>
					<div className={styles.user}>
						<Image
							src="/bg2.jpg"
							alt=""
							width={50}
							height={50}
							className={styles.image}
						/>
						<div className={styles.userInfo}>
							<span className={styles.username}>Don Mark</span>
							<span className={styles.date}>11/12/2022</span>
						</div>
					</div>
					<div className={styles.description}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
						libero natus officiis explicabo. Quis iure aut eos quaerat expedita
						reiciendis aliquam, iusto debitis. Rem quis nam harum. Eum, illum
						odio praesentium, dolorem molestiae velit quas maiores non, ab quia
						culpa?
					</div>
				</div>
				<div className={styles.comment}>
					<div className={styles.user}>
						<Image
							src="/bg2.jpg"
							alt=""
							width={50}
							height={50}
							className={styles.image}
						/>
						<div className={styles.userInfo}>
							<span className={styles.username}>Don Mark</span>
							<span className={styles.date}>11/12/2022</span>
						</div>
					</div>
					<div className={styles.description}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
						libero natus officiis explicabo. Quis iure aut eos quaerat expedita
						reiciendis aliquam, iusto debitis. Rem quis nam harum. Eum, illum
						odio praesentium, dolorem molestiae velit quas maiores non, ab quia
						culpa?
					</div>
				</div>
			</div>
		</div>
	);
}
