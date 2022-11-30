
import Layout from '../components/Layout';

import Cabecalho from '../containers/Cabecalho';
import Banners from '../containers/Banners';
import Benefits from '../containers/Benefits';
import ProductsHomePage from '../containers/List/ProductsHomePage';
import Rodape from '../containers/Rodape';

const Home = () => {
  return (
    <div >
      <Layout title="Loja King">
        <Cabecalho simple />
        <Banners />
        <Benefits />
        <ProductsHomePage />
        <Rodape />
      </Layout>
    </div>
  )
}

export default Home;
