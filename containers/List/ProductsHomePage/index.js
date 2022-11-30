import Products from "../../../components/Lists/Products";

 import styles from "../../../styles/Main.module.css";
 
const ProductsHomePage = () => {

    const PRODUCTS = [
        {
            id: 1,
            foto: ["/images/fone-canva.png"],
            title: "Fone",
            price: 35,
            Promotion: 25
        },
        {
            id: 4,
            foto: ["/images/fone-canva.png"],
            title: "Fone",
            price: 35,
            Promotion: 25
        },
        {
            id: 2,
            foto: ["/images/fone-canva.png"],
            title: "Fone",
            price: 35,
            Promotion: 25
        },
        {
            id: 3,
            foto: ["/images/fone-canva.png"],
            title: "Fone",
            price: 35,
            Promotion: 25
        },
        {
            id: 5,
            foto: ["/images/fone-canva.png"],
            title: "Fone",
            price: 35,
            Promotion: 25
        },

    ]

    return (
        <div className={`${styles.container} ${styles["Products-Home-Page"]} ${styles.flex} ${styles.vertical}`}>
            <h2>Lançamentos</h2>
            <br />
            <Products 
                product={PRODUCTS}
                quantityItens={4}
            />
        </div>
    )
}

export default ProductsHomePage;