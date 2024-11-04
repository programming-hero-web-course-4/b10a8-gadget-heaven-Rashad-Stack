import Banner from "../components/Banner";
import FloatSection from "../components/FloatSection";
import Products from "../components/Products";

export default function Home() {
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
