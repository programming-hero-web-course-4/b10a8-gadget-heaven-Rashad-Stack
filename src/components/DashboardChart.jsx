import PropTypes from "prop-types";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Small Steel Keyboard",
    price: 494,
    total: 372,
    rating: 3.7,
  },
  {
    name: "Practical Steel Salad",
    price: 251,
    total: 667,
    rating: 4.6,
  },
  {
    name: "Incredible Frozen Towels",
    price: 61,
    total: 514,
    rating: 2.9,
  },
  {
    name: "Handcrafted Cotton Shoes",
    price: 434,
    total: 903,
    rating: 5,
  },
  {
    name: "Ergonomic Granite Fish",
    price: 390,
    total: 518,
    rating: 4.1,
  },
  {
    name: "Rustic Steel Keyboard",
    price: 242,
    total: 843,
    rating: 1.4,
  },
  {
    name: "Generic Cotton Bacon",
    price: 89,
    total: 445,
    rating: 4.1,
  },
  {
    name: "Tasty Metal Gloves",
    price: 235,
    total: 737,
    rating: 2.2,
  },
  {
    name: "Licensed Steel Fish",
    price: 183,
    total: 230,
    rating: 4.9,
  },
  {
    name: "Licensed Granite Bike",
    price: 423,
    total: 622,
    rating: 3.2,
  },
  {
    name: "Handmade Fresh Hat",
    price: 100,
    total: 221,
    rating: 1.3,
  },
  {
    name: "Refined Fresh Cheese",
    price: 356,
    total: 301,
    rating: 3.7,
  },
  {
    name: "Practical Concrete Pizza",
    price: 493,
    total: 661,
    rating: 1.7,
  },
  {
    name: "Handcrafted Steel Car",
    price: 287,
    total: 206,
    rating: 2.3,
  },
  {
    name: "Incredible Cotton Mouse",
    price: 212,
    total: 710,
    rating: 3.8,
  },
  {
    name: "Small Soft Chair",
    price: 494,
    total: 422,
    rating: 2.8,
  },
  {
    name: "Refined Granite Keyboard",
    price: 280,
    total: 512,
    rating: 3.3,
  },
];

export default function DashboardChart() {
  return (
    <ResponsiveContainer
      className="mt-10 w-full rounded-xl bg-base-100"
      height={500}
    >
      <ComposedChart
        className="w-full"
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend content={CustomLegend} />
        <Area type="linear" dataKey="total" fill="#BF87EE" stroke="#BF87EE" />
        <Bar dataKey="price" barSize={40} fill="#9538E2" />
        <Line type="bump" dataKey="rating" stroke="#FF0000" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

function CustomLegend({ payload = [] }) {
  return (
    <div className="mt-5 flex items-center justify-center gap-5">
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="flex items-center gap-1">
          <span
            className="h-4 w-4"
            style={{
              backgroundColor: entry.color,
              borderRadius: "30%",
            }}
          />
          <span className="text-sm capitalize">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

CustomLegend.propTypes = { payload: PropTypes.array };
