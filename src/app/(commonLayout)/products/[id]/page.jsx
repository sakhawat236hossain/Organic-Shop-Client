"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/items/${id}`)
      .then(res => res.json())
      .then(data => setItem(data));
  }, [id]);

  if (!item) return <p className="pt-32 text-center">Loading details...</p>;

  return (
    <div className="max-w-4xl mx-auto pt-32 p-6">
      <div className="grid md:grid-cols-2 gap-10">
        <img src={item.image} className="rounded-3xl shadow-lg" alt={item.name} />
        <div>
          <h1 className="text-4xl font-bold">{item.name}</h1>
          <p className="text-2xl text-green-600 font-bold mt-4">৳{item.price}</p>
          <p className="text-gray-600 mt-6 leading-relaxed">{item.description}</p>
          <button className="mt-8 bg-[#064e3b] text-white px-8 py-3 rounded-xl font-bold">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}