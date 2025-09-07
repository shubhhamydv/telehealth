export default function PharmaciesPage() {
  const medicines = [
    { name: 'Paracetamol', availability: 'In Stock', color: 'bg-green-200 text-green-800' },
    { name: 'Amoxicillin', availability: 'Low Stock', color: 'bg-yellow-200 text-yellow-800' },
    { name: 'Omeprazole', availability: 'Out of Stock', color: 'bg-red-200 text-red-800' },
    { name: 'Cetirizine', availability: 'In Stock', color: 'bg-green-200 text-green-800' },
    { name: 'Ibuprofen', availability: 'In Stock', color: 'bg-green-200 text-green-800' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Medicine Availability</h1>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for medicine..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Medicine List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Available Medicines</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Medicine Name</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Availability</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">{medicine.name}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${medicine.color}`}>
                    {medicine.availability}
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded">Request Refill/Delivery</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}