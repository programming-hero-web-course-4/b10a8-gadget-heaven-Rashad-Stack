import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import FloatSection from "../components/FloatSection";
import Products from "../components/Products";
import { SET_PRODUCTS } from "../context/actionType";
import useGlobalState from "../hooks/useGlobalState";

export default function Home() {
  const { dispatch } = useGlobalState();
  const products = useLoaderData();

  useEffect(() => {
    dispatch({ type: SET_PRODUCTS, payload: products });
  }, [dispatch, products]);

  return (
    <>
      <Banner />
      <FloatSection>
        <figure className="h-full w-full">
          <img
            src="/assets/banner.jpg"
            alt="banner"
            className="h-full max-h-[580px] w-full rounded-xl object-cover"
          />
        </figure>
      </FloatSection>
      <Products />
    </>
  );
}
