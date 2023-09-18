import styles from './homepage.module.css';
import CardList from '@/components/cardList/CardList';
import CategoryList from '@/components/categoryList/CategoryList';
import Feature from '@/components/feature/Feature';
import Menu from '@/components/menu/Menu';

export default function Home() {
	return (
		<div>
			<Feature />
			<CategoryList />
			<div className={styles.content}>
				<CardList />
				<Menu />
			</div>
		</div>
	);
}
