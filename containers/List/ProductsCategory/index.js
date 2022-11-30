import { useState } from "react";
import Products from "../../../components/Lists/Products";
// import Pagination from "../../../components/Pagination";


import styles from "../../../styles/Main.module.css";

const ProductsCategory = () => {

    const PRODUCTS = [
        {
            id: 1,
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
            id: 4,
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
        {
            id: 1,
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
            id: 4,
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
        {
            id: 1,
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
            id: 4,
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
        {
            id: 5,
            foto: ["/images/fone-canva.png"],
            title: "Fone",
            price: 35,
            Promotion: 25
        }

    ]

    return (
        <div className={`${styles.container} ${styles["Category-Products"]}`}>
            {/* ${styles["Products-Home-Page"]} ${styles.flex} ${styles.vertical} */}
            <div className={`${styles["flex-center"]} ${styles.flex}`}>
                <h1>Acessorios</h1>
            </div>
            <br />

            <Products
                product={PRODUCTS}
                quantityItens={4}
            />

            {/* //Contruir Pagina de PAGINAÇÃO */}
            {/* <Pagination />*/}
        </div>
    )
}

export default ProductsCategory;