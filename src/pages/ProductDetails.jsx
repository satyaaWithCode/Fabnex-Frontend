import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${slug}`)
      .then(res => setProduct(res.data))
      .catch(() => setProduct(null));
  }, [slug]);

  if (!product) return <p className="text-center mt-20">Loading product...</p>;

  return (
    <div className="px-6 py-12 md:px-20">
      <div className="grid md:grid-cols-2 gap-10">
        <img src={product.images[0]} className="w-full rounded-xl" />

        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="text-xl font-semibold mt-2 text-red-600">
            ₹{product.price}{" "}
            <span className="text-gray-500 line-through text-lg">₹{product.comparePrice}</span>
          </p>

          <p className="mt-4 text-gray-700">{product.shortDesc}</p>

          <h3 className="mt-6 font-semibold">Size</h3>
          <div className="flex gap-2 mt-2 flex-wrap">
            {product.sizes.map((s) => (
              <button key={s} className="border px-3 py-1 rounded-md hover:bg-black hover:text-white">
                {s}
              </button>
            ))}
          </div>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full">
            ADD TO CART
          </button>

          <h3 className="mt-10 font-semibold">Description</h3>
          <p className="text-gray-700 whitespace-pre-line">{product.longDesc}</p>
        </div>
      </div>
    </div>
  );
}
