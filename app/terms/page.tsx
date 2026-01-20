import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Sistemix',
  description: 'Terms of Service for Sistemix. Read our terms and conditions for using our services.',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-[#303030] via-[#404040] to-[#505050] text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Terms of Service
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
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">1. Acceptance of Terms</h2>
                  <p className="mb-4">
                    By accessing and using the services provided by Blaga Razvan Antonio PFA ("we", "us", or "our"), you accept and agree to be bound by these Terms of Service ("Terms"). These Terms constitute a legally binding agreement between you and Blaga Razvan Antonio PFA, governed by Romanian law and European Union regulations.
                  </p>
                  <p>
                    If you do not agree to these Terms, you must not use our services. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting on our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">2. Company Information</h2>
                  <div className="bg-gray-50 p-4 rounded-lg border border-[#505050] mb-4">
                    <p className="font-semibold text-[#303030]">Blaga Razvan Antonio PFA</p>
                    <p>CUI: RO12345678</p>
                    <p>Romania, European Union</p>
                    <p>Email: razvanblaga10@gmail.com</p>
                    <p>Phone: +40 772 169 637</p>
                  </div>
                  <p>
                    Blaga Razvan Antonio PFA is a Romanian sole proprietorship (PFA) registered and operating under Romanian law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">3. Services Description</h2>
                  <p className="mb-4">
                    Blaga Razvan Antonio PFA provides the following services:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Web development and website creation</li>
                    <li>AI agent development and implementation</li>
                    <li>Business process automation</li>
                    <li>Technology consulting services</li>
                  </ul>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">4. User Obligations</h2>
                  <p className="mb-4">
                    By using our services, you agree to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Not interfere with or disrupt our services or servers</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                    <li>Not use our services to transmit harmful code or malicious software</li>
                    <li>Respect intellectual property rights</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">5. Booking and Consultations</h2>
                  <p className="mb-4">
                    When booking a consultation or appointment:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>You must provide accurate contact information</li>
                    <li>Appointments are subject to availability</li>
                    <li>We reserve the right to reschedule or cancel appointments with reasonable notice</li>
                    <li>Cancellation policies will be communicated at the time of booking</li>
                    <li>No-show appointments may result in restrictions on future bookings</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">6. Payment Terms</h2>
                  <p className="mb-4">
                    Payment terms are as follows:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>All prices are in Romanian Lei (RON) or Euro (EUR) unless otherwise stated</li>
                    <li>Payment terms will be specified in individual service agreements</li>
                    <li>Invoices will be issued in accordance with Romanian tax law</li>
                    <li>Payment is due according to the terms specified in each agreement</li>
                    <li>Late payments may incur interest charges as permitted by Romanian law</li>
                    <li>All payments are processed securely through authorized payment processors</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">7. Intellectual Property Rights</h2>
                  <p className="mb-4">
                    <strong>Our Intellectual Property:</strong> All content, designs, code, and materials created by Blaga Razvan Antonio PFA remain our intellectual property unless otherwise agreed in writing. You may not copy, modify, distribute, or create derivative works without our written permission.
                  </p>
                  <p className="mb-4">
                    <strong>Client Intellectual Property:</strong> Any pre-existing intellectual property you provide remains yours. Upon full payment, custom-developed solutions will be transferred to you as specified in the service agreement.
                  </p>
                  <p>
                    <strong>Third-Party Materials:</strong> We may use third-party materials, frameworks, or libraries. Their use is subject to their respective licenses, which we will disclose when applicable.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">8. Service Agreements and Contracts</h2>
                  <p className="mb-4">
                    For specific projects, we will enter into detailed service agreements that:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Define project scope, deliverables, and timelines</li>
                    <li>Specify payment terms and schedules</li>
                    <li>Outline ownership and licensing terms</li>
                    <li>Include warranties and support terms</li>
                    <li>Define dispute resolution procedures</li>
                  </ul>
                  <p>
                    These agreements will supplement these Terms and take precedence in case of conflict.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">9. Warranties and Disclaimers</h2>
                  <p className="mb-4">
                    <strong>Service Warranties:</strong> We warrant that our services will be performed with reasonable skill and care. Specific warranties will be detailed in individual service agreements.
                  </p>
                  <p className="mb-4">
                    <strong>Disclaimers:</strong> To the extent permitted by Romanian law:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>We provide services "as is" without warranties of any kind, express or implied</li>
                    <li>We do not guarantee that our services will be uninterrupted, error-free, or completely secure</li>
                    <li>We are not liable for third-party services, software, or platforms we may integrate</li>
                    <li>Results may vary based on individual circumstances</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">10. Limitation of Liability</h2>
                  <p className="mb-4">
                    In accordance with Romanian Law No. 365/2002 on electronic commerce and consumer protection:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Our liability is limited to the total amount paid for the specific service in question</li>
                    <li>We are not liable for indirect, incidental, consequential, or punitive damages</li>
                    <li>We are not liable for loss of data, profits, or business opportunities</li>
                    <li>These limitations do not apply to damages caused by gross negligence or willful misconduct</li>
                    <li>Consumer rights under Romanian law are not affected by these limitations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">11. Indemnification</h2>
                  <p className="mb-4">
                    You agree to indemnify and hold harmless Blaga Razvan Antonio PFA, its employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Your use of our services</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any third-party rights</li>
                    <li>Content or materials you provide to us</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">12. Termination</h2>
                  <p className="mb-4">
                    Either party may terminate service agreements as specified in individual contracts. We reserve the right to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Suspend or terminate your access to our services for violation of these Terms</li>
                    <li>Terminate services with reasonable notice as specified in service agreements</li>
                    <li>Refuse service to anyone at any time</li>
                  </ul>
                  <p>
                    Upon termination, your right to use our services will immediately cease. Provisions that by their nature should survive termination will remain in effect.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">13. Consumer Rights (EU/RO)</h2>
                  <p className="mb-4">
                    If you are a consumer in the European Union or Romania, you have the following rights under Romanian Law No. 129/2018 on consumer protection:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Right of Withdrawal:</strong> For distance contracts, you have 14 days to withdraw without giving any reason (subject to exceptions for custom services)</li>
                    <li><strong>Right to Information:</strong> You have the right to clear information about services, prices, and terms</li>
                    <li><strong>Right to Redress:</strong> You have the right to remedies for non-conforming services</li>
                    <li><strong>Right to Fair Treatment:</strong> You are protected against unfair commercial practices</li>
                  </ul>
                  <p>
                    For more information on your consumer rights, contact the Romanian National Authority for Consumer Protection (ANPC).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">14. Dispute Resolution</h2>
                  <p className="mb-4">
                    <strong>Negotiation:</strong> We encourage resolving disputes through good faith negotiation.
                  </p>
                  <p className="mb-4">
                    <strong>Mediation:</strong> If negotiation fails, parties may agree to mediation through a recognized mediation service.
                  </p>
                  <p className="mb-4">
                    <strong>Arbitration/Litigation:</strong> Disputes will be resolved in accordance with Romanian law. For consumers, disputes may be resolved through:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Romanian courts with jurisdiction</li>
                    <li>Alternative dispute resolution (ADR) mechanisms</li>
                    <li>Online dispute resolution (ODR) platform for EU consumers</li>
                  </ul>
                  <p>
                    <strong>Governing Law:</strong> These Terms are governed by Romanian law and EU regulations applicable in Romania.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">15. Force Majeure</h2>
                  <p className="mb-4">
                    We are not liable for delays or failures in performance resulting from circumstances beyond our reasonable control, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Natural disasters</li>
                    <li>War, terrorism, or civil unrest</li>
                    <li>Government actions or regulations</li>
                    <li>Internet or telecommunications failures</li>
                    <li>Pandemics or health emergencies</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">16. Privacy and Data Protection</h2>
                  <p className="mb-4">
                    Your use of our services is also governed by our Privacy Policy, which complies with GDPR and Romanian data protection laws. Please review our Privacy Policy to understand how we collect, use, and protect your personal data.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">17. Modifications to Terms</h2>
                  <p className="mb-4">
                    We reserve the right to modify these Terms at any time. Material changes will be notified through:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Email notification (if you have provided your email)</li>
                    <li>Notice on our website</li>
                    <li>Updated "Last updated" date</li>
                  </ul>
                  <p>
                    Continued use of our services after changes constitutes acceptance of the modified Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">18. Severability</h2>
                  <p className="mb-4">
                    If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions will continue in full force and effect. The invalid provision will be replaced with a valid provision that most closely reflects the intent of the original.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">19. Entire Agreement</h2>
                  <p className="mb-4">
                    These Terms, together with our Privacy Policy and any specific service agreements, constitute the entire agreement between you and Blaga Razvan Antonio PFA regarding the use of our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#303030] mb-4">20. Contact Information</h2>
                  <p className="mb-4">
                    For questions, concerns, or to exercise your rights under these Terms, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-[#505050]">
                    <p className="font-semibold text-[#303030]">Blaga Razvan Antonio PFA</p>
                    <p>Email: <a href="mailto:razvanblaga10@gmail.com" className="text-[#303030] hover:underline">razvanblaga10@gmail.com</a></p>
                    <p>Phone: <a href="tel:+40772169637" className="text-[#303030] hover:underline">+40 772 169 637</a></p>
                    <p className="mt-4">
                      <strong>Consumer Protection Authority (ANPC):</strong><br />
                      Calea Vitan 55-59<br />
                      Sector 3, Bucharest, Romania<br />
                      Website: <a href="https://www.anpc.ro" target="_blank" rel="noopener noreferrer" className="text-[#303030] hover:underline">www.anpc.ro</a>
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
