// export const metadata = {
//   title: 'Home'
// }
import ProductList from "@/components/ui/shared/product/product-list";

import { getLatestProduct } from "@/lib/actions/product.actions";

const Home = async () => {
  const latestProduct = await getLatestProduct();

  return (
    <>
      <ProductList data={latestProduct} title="Newest Arrivals" />
    </>
  );
};

export default Home;
