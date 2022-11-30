import { useRouter } from "next/router";


import Layout from '../../components/Layout';
import Cabecalho from "../../containers/Cabecalho";
import ProductsCategory from "../../containers/List/ProductsCategory";
import Rodape from "../../containers/Rodape";

const ProductItem = () => {
    const router = useRouter();
    const { product } = router.query;
    
    return (
        <Layout title="ACESSORIOS | Loja King">
            <Cabecalho />
            <ProductsCategory />
            <Rodape />
      </Layout>
    )
}

export default ProductItem;