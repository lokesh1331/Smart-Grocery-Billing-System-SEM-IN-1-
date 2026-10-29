
import React, { useState } from 'react';

export default function App() {
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(1);

  return (
    <div>
      <h2>Grocery Billing</h2>

      Price:
      <input type="number"
        onChange={e => setPrice(+e.target.value)} />

      Quantity:
      <input type="number"
        onChange={e => setQty(+e.target.value)} />

      <h3>Total: ₹{price * qty}</h3>
    </div>
  );
}
