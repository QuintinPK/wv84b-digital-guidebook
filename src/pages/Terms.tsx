
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-vacation max-w-none">
            <h2>1. Booking and Payment</h2>
            <p>Please contact us directly for booking information and payment terms.</p>
            
            <h2>2. Cancellation Policy</h2>
            <p>Cancellation policies vary depending on the booking platform and season. Please refer to your booking confirmation for specific details.</p>
            
            <h2>3. Check-in and Check-out</h2>
            <p>Check-in time is from 3:00 PM, and check-out time is before 11:00 AM. Late check-out may result in additional charges.</p>
            
            <h2>4. House Rules</h2>
            <p>All guests must comply with our house rules, which are designed to ensure a comfortable stay for everyone.</p>
            
            <h2>5. Liability</h2>
            <p>The property owner and management are not liable for any loss, damage, or injury to guests or their belongings during their stay.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
