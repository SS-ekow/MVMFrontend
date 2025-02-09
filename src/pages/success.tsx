import Link from 'next/link';

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase. Your payment has been processed successfully.
        </p>
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-700 underline">Return to Home</a>
        </Link>
      </div>
    </div>
  );
}
