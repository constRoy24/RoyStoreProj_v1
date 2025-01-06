
// export const metadata = {
//   title: 'Home'
// }
import ProductList from "@/components/ui/shared/product/product-list";
import sampleData from "@/db/sample-data";

const Home = () => {
  console.log(sampleData)
  return ( <>
    <ProductList data={sampleData.products} title="Newest Arrivals" limit={4}/>
  </> );
}
 
export default Home;