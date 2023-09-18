'use client';
import Image from 'next/image';
import styles from './writePage.module.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { useState } from 'react';

export default function WritePage() {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');
	return (
		<div className={styles.container}>
			<input type="text" placeholder="Title" className={styles.input} />
			<div className={styles.editor}>
				<button className={styles.button}>
					<Image
						src="/plus.png"
						alt=""
						width={16}
						height={16}
						onClick={() => setOpen(!open)}
					/>
				</button>
				{open && (
					<div className={styles.add}>
						<button className={styles.Addbutton}>
							<Image src="/bg3.jpg" alt="" width={16} height={16} />
						</button>
						<button className={styles.Addbutton}>
							<Image src="/bg3.jpg" alt="" width={16} height={16} />
						</button>
						<button className={styles.Addbutton}>
							<Image src="/bg3.jpg" alt="" width={16} height={16} />
						</button>
					</div>
				)}
				<ReactQuill
					className={styles.textArea}
					theme="bubble"
					value={value}
					onChange={setValue}
					placeholder="Tell your story..."
				/>
			</div>
			<button className={styles.publish}>Publish</button>
		</div>
	);
}
