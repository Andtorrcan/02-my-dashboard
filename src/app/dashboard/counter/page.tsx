import { CartCounter } from "@/app/shopping-cart";


export const metadata = {
  title: "Shopping Cart",
  description: "A counter"
}

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Product</span>
      <CartCounter value={0}/>
    </div>
  );
}