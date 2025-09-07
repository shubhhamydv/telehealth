export default function ReportsPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Reports and Analytics</h1>

      {/* Usage Metrics */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Usage Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-lg font-medium text-gray-600">Total Consultations:</p>
            <p className="text-3xl font-bold text-blue-600">5,678</p>
          </div>
          <div>
            <p className="text-lg font-medium text-gray-600">App Engagement (Daily Active Users):</p>
            <p className="text-3xl font-bold text-green-600">850</p>
          </div>
          <div>
            <p className="text-lg font-medium text-gray-600">Medicine Stock Trends (Avg. Availability):</p>
            <p className="text-3xl font-bold text-yellow-600">75%</p>
          </div>
        </div>
      </div>

      {/* Health Outcomes Tracking */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Health Outcomes Tracking</h2>
        <p className="text-gray-700">Placeholder for graphs and data on reduced travel time, improved access, etc.</p>
        <div className="mt-4 p-4 border border-gray-200 rounded-md bg-gray-50">
          <p className="font-semibold">Example:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Reduced patient travel time by 30%</li>
            <li>Increased access to specialists by 20%</li>
          </ul>
        </div>
      </div>

      {/* Export Reports */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Export Reports</h2>
        <p className="text-gray-700 mb-4">Generate and export reports for the Punjab Health Department.</p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Export to PDF
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ml-2">
          Export to CSV
        </button>
      </div>
    </div>
  );
}