
import Link from 'next/link';

export default function Cancelled() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Cancelled</h1>
        <p className="text-gray-700 mb-6">
          Your payment was cancelled. If this was a mistake, please try again.
        </p>
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-700 underline">Return to Home</a>
        </Link>
      </div>
    </div>
  );
}
