import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Sistemix',
  description: 'Privacy Policy for Sistemix. Learn how we collect, use, and protect your personal data in accordance with GDPR and Romanian law.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-gray-700">
                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">1. Introduction</h2>
                  <p className="mb-4">
                    Blaga Razvan Antonio PFA ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services, in compliance with the General Data Protection Regulation (GDPR) (EU) 2016/679 and Romanian Law No. 506/2004 regarding the processing of personal data.
                  </p>
                  <p>
                    By using our services, you consent to the data practices described in this policy. If you do not agree with the data practices described in this policy, you should not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">2. Data Controller</h2>
                  <p className="mb-4">
                    The data controller for your personal data is:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-black">
                    <p className="font-semibold text-black">Blaga Razvan Antonio PFA</p>
                    <p>CUI: RO12345678</p>
                    <p>Romania, European Union</p>
                    <p>Email: razvanblaga10@gmail.com</p>
                    <p>Phone: +40 772 169 637</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">3. Information We Collect</h2>
                  <h3 className="text-xl font-semibold text-black mb-3">3.1 Personal Information</h3>
                  <p className="mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Register for our services or create an account</li>
                    <li>Book a consultation or appointment</li>
                    <li>Contact us via email, phone, or contact forms</li>
                    <li>Subscribe to our newsletter or marketing communications</li>
                    <li>Use our services</li>
                  </ul>
                  <p className="mb-4">
                    This information may include:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Company information (if applicable)</li>
                    <li>Project descriptions and requirements</li>
                    <li>Payment information (processed securely through third-party payment processors)</li>
                    <li>Any other information you choose to provide</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-black mb-3 mt-6">3.2 Automatically Collected Information</h3>
                  <p className="mb-4">
                    When you visit our website, we may automatically collect certain information about your device, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages you visit and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Date and time of access</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">4. How We Use Your Information</h2>
                  <p className="mb-4">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Service Delivery:</strong> To provide, maintain, and improve our services</li>
                    <li><strong>Communication:</strong> To respond to your inquiries, send you service-related information, and provide customer support</li>
                    <li><strong>Appointments:</strong> To schedule and manage consultations and appointments</li>
                    <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our legal rights</li>
                    <li><strong>Marketing:</strong> To send you promotional materials and newsletters (only with your consent)</li>
                    <li><strong>Analytics:</strong> To analyze website usage and improve user experience</li>
                    <li><strong>Security:</strong> To detect, prevent, and address technical issues and security threats</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">5. Legal Basis for Processing</h2>
                  <p className="mb-4">
                    We process your personal data based on the following legal grounds under GDPR:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Consent:</strong> When you have given clear consent for us to process your data for specific purposes</li>
                    <li><strong>Contract Performance:</strong> When processing is necessary for the performance of a contract with you</li>
                    <li><strong>Legal Obligation:</strong> When processing is necessary to comply with legal obligations</li>
                    <li><strong>Legitimate Interests:</strong> When processing is necessary for our legitimate business interests, provided they do not override your rights and freedoms</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">6. Data Sharing and Disclosure</h2>
                  <p className="mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting our business (e.g., hosting providers, payment processors)</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our users or others</li>
                  </ul>
                  <p className="mb-4">
                    All third-party service providers are contractually obligated to protect your data and use it only for the purposes we specify.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">7. Data Retention</h2>
                  <p className="mb-4">
                    We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your data, we will securely delete or anonymize it.
                  </p>
                  <p>
                    Specific retention periods:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Contact information: Until you request deletion or withdraw consent</li>
                    <li>Booking information: 3 years after the last interaction</li>
                    <li>Financial records: 10 years as required by Romanian tax law</li>
                    <li>Website analytics: 26 months (Google Analytics default)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">8. Your Rights Under GDPR</h2>
                  <p className="mb-4">
                    As a data subject, you have the following rights:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Right of Access:</strong> You can request access to your personal data and receive a copy</li>
                    <li><strong>Right to Rectification:</strong> You can request correction of inaccurate or incomplete data</li>
                    <li><strong>Right to Erasure:</strong> You can request deletion of your personal data ("right to be forgotten")</li>
                    <li><strong>Right to Restrict Processing:</strong> You can request restriction of processing in certain circumstances</li>
                    <li><strong>Right to Data Portability:</strong> You can request transfer of your data to another service provider</li>
                    <li><strong>Right to Object:</strong> You can object to processing based on legitimate interests</li>
                    <li><strong>Right to Withdraw Consent:</strong> You can withdraw consent at any time where processing is based on consent</li>
                    <li><strong>Right to Lodge a Complaint:</strong> You can file a complaint with the Romanian Data Protection Authority (ANSPDCP)</li>
                  </ul>
                  <p className="mb-4">
                    To exercise these rights, please contact us at: <a href="mailto:razvanblaga10@gmail.com" className="text-black hover:underline">razvanblaga10@gmail.com</a>
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">9. Data Security</h2>
                  <p className="mb-4">
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Encryption of data in transit (SSL/TLS)</li>
                    <li>Secure data storage and access controls</li>
                    <li>Regular security assessments and updates</li>
                    <li>Employee training on data protection</li>
                    <li>Limited access to personal data on a need-to-know basis</li>
                  </ul>
                  <p>
                    However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">10. Cookies and Tracking Technologies</h2>
                  <p className="mb-4">
                    Our website uses cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings. For more information, please see our Cookie Policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">11. International Data Transfers</h2>
                  <p className="mb-4">
                    Your data is primarily processed within the European Economic Area (EEA). If we transfer data outside the EEA, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">12. Children's Privacy</h2>
                  <p className="mb-4">
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">13. Changes to This Privacy Policy</h2>
                  <p className="mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-black mb-4">14. Contact Information</h2>
                  <p className="mb-4">
                    If you have questions, concerns, or wish to exercise your rights regarding this Privacy Policy, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-black">
                    <p className="font-semibold text-black">Blaga Razvan Antonio PFA</p>
                    <p>Email: <a href="mailto:razvanblaga10@gmail.com" className="text-black hover:underline">razvanblaga10@gmail.com</a></p>
                    <p>Phone: <a href="tel:+40772169637" className="text-black hover:underline">+40 772 169 637</a></p>
                    <p className="mt-4">
                      <strong>Data Protection Authority (ANSPDCP):</strong><br />
                      B-dul G-ral. Gheorghe Magheru 28-30<br />
                      Sector 1, Bucharest, Romania<br />
                      Website: <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">www.dataprotection.ro</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
