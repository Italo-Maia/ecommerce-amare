import Link from 'next/link';
import styles from '../../styles/Main.module.css'

const Categories = () => {

    const state = {
        categories: [
            {
                id: 1,
                name: "Acessorios"
            },
            {
                id: 2,
                name: "Teclado"
            },
            {
                id: 3,
                name: "Mouse"
            },
            {
                id: 4,
                name: "Mousepad"
            },
            {
                id: 5,
                name: "Webcam"
            }
        ]

    }

    const { categories } = state;
    // console.log(categories)

    return (
        <div className={`${styles.categories} ${styles.flex} ${styles.horizontal}`}>
            {
                categories.map(category => (
                    <Link href={`/category/${category.name}?id=${category.id}`}>
                        <div className={`${styles["category-item"]} ${styles["flex-1"]} ${styles.flex} ${styles.center}`}> 
                             <span>{category.name}</span>
                        </div>
                    </Link>
                ))
            }
        </div>
    )

}

export default Categories;