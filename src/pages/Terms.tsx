
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-8">Terms & Conditions of Your Stay</h1>
          
          <div className="prose prose-vacation max-w-none space-y-8">
            <p className="text-gray-600 text-lg">
              We want you to have a relaxing and worry-free stay. To help everything go smoothly, please take note of the following conditions during your stay:
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">1. Check-in & Check-out</h2>
              <p>Check-in: from 3:00 PM</p>
              <p>Check-out: by 11:00 AM</p>
              <p>If you'd like to check in earlier or check out later, let us know — we'll do our best to accommodate!</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">2. Cancellation Policy</h2>
              <p>The cancellation policy follows the terms stated on your booking platform (Airbnb/Vrbo). If you have any questions, feel free to contact us.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">3. House Rules</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>No smoking inside the house.</li>
                <li>No pets allowed, unless agreed upon in advance.</li>
                <li>No parties or events, unless previously discussed.</li>
                <li>Please respect the neighbors, especially between 10:00 PM and 7:00 AM.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">4. Liability</h2>
              <p>We are not responsible for any loss, theft, or damage to guests' personal belongings. Use of the property and its facilities is at your own risk.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">5. Cleaning & Waste</h2>
              <p>Final cleaning is included. We kindly ask that you leave the house in a reasonably tidy condition.</p>
              <p>Please dispose of trash in the designated bins.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">6. Use of Amenities</h2>
              <p>All amenities are available for normal use.</p>
              <p>Please report any damages or malfunctions as soon as possible so we can fix them.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">7. Safety</h2>
              <p>Always lock doors and windows when leaving the property.</p>
              <p>Follow the instructions when using the BBQ, pool, or any appliances.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">8. Damage & Security Deposit</h2>
              <p>If any damage occurs during your stay, please report it immediately. In some cases, a security deposit may apply as stated on the booking platform.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">9. Visitors</h2>
              <p>Only registered guests are allowed to stay overnight, unless otherwise agreed in advance.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">10. Access for Maintenance</h2>
              <p>In rare cases (emergency or essential maintenance), we reserve the right to request access to the property — of course, we'll always notify you in advance.</p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
