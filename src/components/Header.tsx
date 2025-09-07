import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">TeleHealth</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/consultations">Consultations</Link></li>
            <li><Link href="/records">Records</Link></li>
            <li><Link href="/pharmacies">Pharmacies</Link></li>
            <li><Link href="/ai-symptom-checker">AI Symptom Checker</Link></li>
            <li><Link href="/reports">Reports</Link></li>
            <li><Link href="/admin">Admin</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
          </ul>
        </nav>
        {/* Language Selector Placeholder */}
        <div className="text-sm">
          <select className="bg-blue-700 text-white p-1 rounded">
            <option>English</option>
            <option>Punjabi</option>
            <option>Hindi</option>
          </select>
        </div>
      </div>
    </header>
  );
}