import Hero from "../components/Hero";
import WishlistCartProducts from "../components/WishlistCartProducts";

export default function Dashboard() {
  return (
    <>
      <Hero
        title="Dashboard"
        description="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      />

      <WishlistCartProducts />
    </>
  );
}
