import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  let { productId } = useParams();

  return (
    <div>
      <h3>ID: {productId}</h3>
    </div>
  );
}
