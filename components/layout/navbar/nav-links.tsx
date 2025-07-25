import Link from 'next/link';


export default function MainMenu() {
  return (
    <nav className="w-full bg-white text-sm font-bold py-2 max-h-12 border-b border-gray-200 justify-center hidden md:flex">
      <div className="flex gap-10">
        <Link href="/products" className="hover:underline">All Jewelry</Link>
        <Link href="/products" className="hover:underline">New In</Link>
        <Link href="/products" className="hover:underline">Earrings</Link>
        <Link href="/products" className="hover:underline">Rings</Link>
        <Link href="/products" className="hover:underline">Necklaces</Link>
        <Link href="/products" className="hover:underline">Gifts</Link>
        {/* <Link href="/login" className="hover:underline">Login</Link> */}
      </div>
    </nav>
  );
}
