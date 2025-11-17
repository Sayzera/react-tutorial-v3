import { useState } from "react";
import { ProductItem } from "./productItem";

const stocks = [
  { id: 1, name: "Laptop", price: 15000, instock: true },
  { id: 2, name: "Mouse", price: 250, instock: false },
  { id: 3, name: "Klavye", price: 500, instock: true },
  { id: 4, name: "Monitör", price: 3000, instock: true },
  { id: 5, name: "Kulaklık", price: 800, instock: false },
  { id: 6, name: "Webcam", price: 1200, instock: true },
  { id: 7, name: "Hoparlör", price: 1500, instock: false },
  { id: 8, name: "Tablet", price: 5000, instock: true },
  { id: 9, name: "Telefon", price: 8000, instock: true },
  { id: 10, name: "Powerbank", price: 400, instock: false },
  { id: 11, name: "USB Bellek", price: 300, instock: true },
  { id: 12, name: "Hard Disk", price: 2000, instock: true },
  { id: 13, name: "SSD", price: 1800, instock: false },
  { id: 14, name: "RAM", price: 1200, instock: true },
  { id: 15, name: "İşlemci", price: 4000, instock: true },
  { id: 16, name: "Anakart", price: 2500, instock: false },
  { id: 17, name: "Ekran Kartı", price: 6000, instock: true },
  { id: 18, name: "Güç Kaynağı", price: 1000, instock: true },
  { id: 19, name: "Kasa", price: 800, instock: false },
  { id: 20, name: "Soğutucu", price: 600, instock: true },
  { id: 21, name: "Mikrofon", price: 900, instock: true },
  { id: 22, name: "Yazıcı", price: 2500, instock: false },
  { id: 23, name: "Taramalı", price: 1500, instock: true },
  { id: 24, name: "Router", price: 700, instock: true },
  { id: 25, name: "Switch", price: 500, instock: false },
  { id: 26, name: "Kamera", price: 3500, instock: true },
  { id: 27, name: "Tripod", price: 450, instock: true },
  { id: 28, name: "Işık", price: 600, instock: false },
  { id: 29, name: "Yeşil Perde", price: 800, instock: true },
  { id: 30, name: "Mikser", price: 1200, instock: true },
];

export default function StockApp() {
  const [products, ] = useState(stocks);

  const productCount = products.filter((product) => product.instock).length;

  return (
    <div>
      <div>Product Count : {productCount}</div>
      {products
        .filter((product) => product.instock)
        .map((product) => (
          <ProductItem product={product} />
        ))}
    </div>
  );
}
