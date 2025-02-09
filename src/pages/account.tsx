import Layout from "@/components/home/layout";

export default function Account() {
  return (
    <Layout>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
        <div className="grid gap-6">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">First Name</label>
                <input type="text" placeholder="first name" className="w-full p-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-gray-700">Last Name</label>
                <input type="text" placeholder="last name" className="w-full p-2 border rounded-md" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" placeholder="your email" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input type="text" placeholder="your phone number" className="w-full p-2 border rounded-md" />
            </div>
            <button  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" >Save Changes</button>
          </form>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Billing Address</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Street Address</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">City</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700">Country</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">State</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">Zip Code</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
          </div>
          <button  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save Changes</button>
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Current Password</label>
            <input type="password" className="w-full p-2 border rounded-md" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">New Password</label>
              <input type="password" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700">Confirm Password</label>
              <input type="password" className="w-full p-2 border rounded-md" />
            </div>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" >Save Changes</button>
        </form>
      </div>
    </div>

    </Layout>
  );
}