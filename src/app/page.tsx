export default function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to TeleHealth Dashboard</h1>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for patient or doctor..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Dashboard Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Total Registered Patients</h2>
          <p className="text-4xl font-bold text-blue-600">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Active Consultations</h2>
          <p className="text-4xl font-bold text-green-600">42</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Medicine Stock Alerts</h2>
          <p className="text-4xl font-bold text-red-600">5</p>
        </div>
      </div>

      {/* Placeholder for other dashboard content */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Links</h2>
        <ul className="list-disc list-inside text-blue-600">
          <li><a href="/consultations" className="hover:underline">View All Consultations</a></li>
          <li><a href="/records" className="hover:underline">Manage Patient Records</a></li>
          <li><a href="/pharmacies" className="hover:underline">Check Medicine Availability</a></li>
        </ul>
      </div>
    </div>
  );
}