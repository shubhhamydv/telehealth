export default function RecordsPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Patient Profile & Digital Health Records</h1>

      {/* Editable Profile Information */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Patient Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patient-name">Name:</label>
            <input type="text" id="patient-name" defaultValue="John Doe" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patient-age">Age:</label>
            <input type="number" id="patient-age" defaultValue="45" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patient-language">Language:</label>
            <select id="patient-language" defaultValue="English" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option>English</option>
              <option>Punjabi</option>
              <option>Hindi</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patient-village">Village:</label>
            <input type="text" id="patient-village" defaultValue="Example Village" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">Save Changes</button>
      </div>

      {/* Medical History Timeline */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Medical History Timeline</h2>
        <ul className="list-disc list-inside">
          <li>2023-05-10: Diagnosed with Hypertension</li>
          <li>2022-11-15: Annual Check-up</li>
          <li>2021-08-20: COVID-19 Vaccination (Dose 2)</li>
        </ul>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">Add New Entry</button>
      </div>

      {/* Vaccination Records */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Vaccination Records</h2>
        <ul className="list-disc list-inside">
          <li>COVID-19: Dose 1 (2021-07-20), Dose 2 (2021-08-20)</li>
          <li>Tetanus: 2020-03-12</li>
        </ul>
      </div>

      {/* Upload Scanned Documents */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Upload Scanned Documents</h2>
        <input type="file" className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100
        "/>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Upload Document</button>
      </div>
    </div>
  );
}