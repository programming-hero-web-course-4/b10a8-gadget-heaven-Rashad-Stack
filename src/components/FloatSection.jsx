export default function FloatSection() {
  return (
    <section className="relative -top-60">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-base-100/25 mx-auto max-w-[80%] overflow-hidden rounded-xl border border-white p-5 backdrop-blur-xl xl:max-w-[90%]">
          <figure className="h-full w-full">
            <img
              src="/assets/banner.jpg"
              alt="banner"
              className="h-full max-h-[580px] w-full rounded-xl object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
