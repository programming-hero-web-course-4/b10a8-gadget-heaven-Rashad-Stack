import Button from "./Button";

export default function ProductCard() {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="p-4">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Dell XPS 13</h2>
        <p className="text-gray-600">Price: 99.99k</p>
        <div className="card-actions">
          <Button type="outline">View Details</Button>
        </div>
      </div>
    </div>
  );
}
