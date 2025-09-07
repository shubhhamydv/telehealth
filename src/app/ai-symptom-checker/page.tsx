'use client';
import { useState } from 'react';

export default function AISymptomCheckerPage() {
  const [step, setStep] = useState(1);
  const [symptoms, setSymptoms] = useState({
    fever: false,
    cough: false,
    fatigue: false,
    headache: false,
  });
  const [recommendation, setRecommendation] = useState('');

  const handleSymptomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSymptoms({
      ...symptoms,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmitSymptoms = () => {
    // Simple logic for demonstration
    if (symptoms.fever && symptoms.cough) {
      setRecommendation('You might have a common cold or flu. Consider resting and staying hydrated. If symptoms worsen, please consult a doctor.');
    } else if (symptoms.headache && symptoms.fatigue) {
      setRecommendation('You might be experiencing stress or lack of sleep. Ensure you get enough rest. If symptoms persist, consider a consultation.');
    } else {
      setRecommendation('Your symptoms are non-specific. For a proper diagnosis, it is recommended to consult a doctor.');
    }
    setStep(2);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">AI-Powered Symptom Checker</h1>

      {step === 1 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Step 1: Select your symptoms</h2>
          <div className="space-y-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="fever"
                checked={symptoms.fever}
                onChange={handleSymptomChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Fever</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="checkbox"
                name="cough"
                checked={symptoms.cough}
                onChange={handleSymptomChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Cough</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="checkbox"
                name="fatigue"
                checked={symptoms.fatigue}
                onChange={handleSymptomChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Fatigue</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="checkbox"
                name="headache"
                checked={symptoms.headache}
                onChange={handleSymptomChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Headache</span>
            </label>
          </div>
          <button
            onClick={handleSubmitSymptoms}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
          >
            Get Recommendations
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Step 2: Recommendations</h2>
          <p className="text-gray-800 mb-4">{recommendation}</p>
          <button
            onClick={() => setStep(1)}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Go Back
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Book Teleconsultation
          </button>
        </div>
      )}
    </div>
  );
}