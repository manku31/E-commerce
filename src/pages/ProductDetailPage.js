import NavBar from "../features/navbar/Navbar";
import ProductDetail from "../features/product/components/ProductDetail";

function ProductDetailPage() {
  return (
    <div>
      <NavBar>
        <ProductDetail />
      </NavBar>
    </div>
  );
}

export default ProductDetailPage;
