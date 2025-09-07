export default function AdminPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      {/* User Management */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">User Management</h2>
        <p className="text-gray-700 mb-4">Manage patients, doctors, and pharmacists.</p>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Name</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Role</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200">John Doe</td>
              <td className="py-2 px-4 border-b border-gray-200">Patient</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded mr-2">Edit</button>
                <button className="bg-red-600 hover:bg-red-700 text-white text-sm py-1 px-3 rounded">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200">Dr. Smith</td>
              <td className="py-2 px-4 border-b border-gray-200">Doctor</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded mr-2">Edit</button>
                <button className="bg-red-600 hover:bg-red-700 text-white text-sm py-1 px-3 rounded">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Role and Permission Assignment */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Role and Permission Assignment</h2>
        <p className="text-gray-700">Placeholder for assigning roles and permissions to users.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Manage Roles</button>
      </div>

      {/* System Monitoring and Real-time Alerts */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">System Monitoring and Real-time Alerts</h2>
        <p className="text-gray-700">Placeholder for system health, logs, and alerts.</p>
        <div className="mt-4 p-4 border border-gray-200 rounded-md bg-gray-50">
          <p className="font-semibold">Recent Alerts:</p>
          <ul className="list-disc list-inside text-red-600">
            <li>High server load detected (2025-09-07 10:30 AM)</li>
            <li>Database connection error (2025-09-07 09:15 AM)</li>
          </ul>
        </div>
      </div>

      {/* Configuration */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Configuration</h2>
        <p className="text-gray-700">Placeholder for offline sync intervals and language pack settings.</p>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sync-interval">Offline Sync Interval (minutes):</label>
          <input type="number" id="sync-interval" defaultValue="60" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="language-pack">Default Language Pack:</label>
          <select id="language-pack" defaultValue="English" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option>English</option>
            <option>Punjabi</option>
            <option>Hindi</option>
          </select>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">Save Configuration</button>
      </div>
    </div>
  );
}