import Link from 'next/link';
import ContentSection from '../components/about/ContentSection';

export default function FormsPage() {
  return (
    <main className="min-h-screen pt-24 py-4">
      <ContentSection title="Forms" subtitle="TPI CNC Forms">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/forms/pre-installation"
                className="block rounded-lg border border-gray-200 p-6 hover:border-blue-400 hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold text-black">
                  Pre-Installation Form
                </h3>
                <p className="text-gray-600">
                  Complete the installation checklist to prepare for delivery and setup.
                </p>
                <p className="mt-4 text-sm font-semibold text-black">
                  Open Form →
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                  href="/forms/machine-acceptance"
                  className="block rounded-lg border border-gray-200 p-6 hover:border-blue-400 hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold text-black">
                  Machine Installation Acceptance Form
                </h3>
                <p className="text-gray-600">
                  Complete the Machine Installation Acceptance checklist when you machine is delivered and installed.
                </p>
                <p className="mt-4 text-sm font-semibold text-black">
                  Open Form →
                </p>
              </Link>
            </div>
          </div>
        </div>
      </ContentSection>
    </main>
  );
}