import logo from "./logo.svg";
import "./App.css";
import Card from "./card";

const items = [
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/41NeM8nmFBL._AC_SR290,290_.jpg",
    name: "laptop",
    price: "50000",
    stock: "available",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SR290,290_.jpg",
    name: "smartphone",
    price: "30000",
    stock: "available",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_SR290,290_.jpg",
    name: "headphones",
    price: "5000",
    stock: "available",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SR290,290_.jpg",
    name: "smartwatch",
    price: "15000",
    stock: "available",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/61L1ItFgFHL._AC_SR290,290_.jpg",
    name: "tablet",
    price: "25000",
    stock: "available",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/71RiQZ0J2SL._AC_SR290,290_.jpg",
    name: "keyboard",
    price: "3000",
    stock: "available",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SR290,290_.jpg",
    name: "mouse",
    price: "1500",
    stock: "available",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/81QpkIctqPL._AC_SR290,290_.jpg",
    name: "monitor",
    price: "20000",
    stock: "out of stock",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/71E+oh38ZqL._AC_SR290,290_.jpg",
    name: "webcam",
    price: "4000",
    stock: "available",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SR290,290_.jpg",
    name: "speakers",
    price: "8000",
    stock: "available",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_SR290,290_.jpg",
    name: "printer",
    price: "12000",
    stock: "available",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/71vhpk3aq9L._AC_SR290,290_.jpg",
    name: "external hard drive",
    price: "6000",
    stock: "available",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/71c+W7AKBDL._AC_SR290,290_.jpg",
    name: "usb flash drive",
    price: "800",
    stock: "available",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/71xb2AkGbSL._AC_SR290,290_.jpg",
    name: "router",
    price: "3500",
    stock: "available",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/81wY+5J9e4L._AC_SR290,290_.jpg",
    name: "gaming console",
    price: "45000",
    stock: "out of stock",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/61RnXCWx-0L._AC_SR290,290_.jpg",
    name: "earbuds",
    price: "2500",
    stock: "available",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/71kzT4IKPEL._AC_SR290,290_.jpg",
    name: "power bank",
    price: "2000",
    stock: "available",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/51PnSWvLn2L._AC_SR290,290_.jpg",
    name: "laptop bag",
    price: "1500",
    stock: "available",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/71aQ0s9PWRL._AC_SR290,290_.jpg",
    name: "microphone",
    price: "5500",
    stock: "available",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/81Sf3nDkFjL._AC_SR290,290_.jpg",
    name: "graphics card",
    price: "35000",
    stock: "out of stock",
  },
  {
    imageUrl:
      "https://m.media-amazon.com/images/I/71GlzjlDgIL._AC_SR290,290_.jpg",
    name: "ssd",
    price: "7000",
    stock: "available",
  },
];

function App() {
  return (
    <div className="container">
      {items.map((item) => (
        <Card
          imageUrl={item.imageUrl}
          name={item.name}
          price={item.price}
          stock={item.stock}
        />
      ))}
    </div>
  );
}

export default App;
