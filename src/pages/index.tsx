import Products from "@/components/Products";
import { ProductProps } from "../../type";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAllProducts } from "@/store/nextSlice";
import Banner from "@/components/BannerCarousel";


interface Props {
  productData: ProductProps;   // <== type.d.ts
}


export default function Home({ productData }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllProducts({ allProducts: productData }));
  }, [dispatch, productData]);


  return (
    <main>
      <Banner />
      <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
        <Products productData={productData} />
      </div>
    </main>
  );
}


// SSR for data fetching
export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData } };
};
