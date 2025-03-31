
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuidebookSection from "@/components/GuidebookSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  ArrowLeft, 
  ShieldAlert,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message Sent",
      description: "We've received your message and will respond shortly.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-vacation-600 hover:text-vacation-700">
              <ArrowLeft size={16} className="mr-2" />
              Back to Guidebook
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
            <div className="p-6 sm:p-8">
              <div className="flex items-center mb-4">
                <Phone size={24} className="text-vacation-600 mr-3" />
                <h1 className="text-3xl font-semibold text-gray-900">Contact Information</h1>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Need assistance during your stay? We're here to help! Below you'll find all the 
                contact information you might need during your vacation.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <GuidebookSection
                title="Host Contact"
                description="Reach out anytime for assistance"
                icon={<Phone size={20} />}
              >
                <div className="space-y-4 mt-2">
                  <div className="flex items-start p-4 rounded-lg border border-gray-100">
                    <Phone size={20} className="text-vacation-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800">Phone Number</h3>
                      <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500 mt-1">Available 24/7 for urgent matters</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 rounded-lg border border-gray-100">
                    <Mail size={20} className="text-vacation-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800">Email</h3>
                      <p className="text-gray-600 mt-1">host@vacationguide.com</p>
                      <p className="text-sm text-gray-500 mt-1">Typically responds within 2 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 rounded-lg border border-gray-100">
                    <MessageCircle size={20} className="text-vacation-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800">Text Message</h3>
                      <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500 mt-1">Quickest way to reach us for non-emergencies</p>
                    </div>
                  </div>
                </div>
              </GuidebookSection>
              
              <GuidebookSection
                title="Emergency Information"
                description="Important contacts for urgent situations"
                icon={<ShieldAlert size={20} />}
                className="bg-red-50"
              >
                <div className="space-y-3 mt-2">
                  <div className="flex justify-between items-center p-3 bg-white rounded border border-red-100">
                    <span className="font-medium text-gray-900">Emergency Services</span>
                    <span className="text-red-600 font-semibold">911</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-white rounded border border-red-100">
                    <span className="font-medium text-gray-900">Local Police (Non-Emergency)</span>
                    <span className="text-gray-700">(555) 234-5678</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-white rounded border border-red-100">
                    <span className="font-medium text-gray-900">Nearest Hospital</span>
                    <span className="text-gray-700">Malibu Urgent Care</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-white rounded border border-red-100">
                    <span className="font-medium text-gray-900">Property Manager</span>
                    <span className="text-gray-700">(555) 345-6789</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-red-100 rounded text-red-800 text-sm">
                  <p className="font-medium mb-1">Important Note:</p>
                  <p>In case of a medical emergency, fire, or crime, call 911 immediately before contacting the host.</p>
                </div>
              </GuidebookSection>
            </div>
            
            <div className="space-y-6">
              <Card className="border-0 shadow-sm">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-vacation-600 hover:bg-vacation-700 text-white"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </Card>
              
              <GuidebookSection
                title="Property Address"
                description="Location and directions"
                icon={<MapPin size={20} />}
              >
                <div className="mt-2">
                  <div className="bg-gray-100 rounded-lg h-52 mb-4 flex items-center justify-center text-gray-500">
                    Interactive Map Would Appear Here
                  </div>
                  
                  <div className="p-4 border border-gray-100 rounded-lg">
                    <p className="font-medium text-gray-800">Ocean View Villa</p>
                    <p className="text-gray-600 mt-1">
                      1234 Ocean View Dr<br />
                      Malibu, CA 90265<br />
                      United States
                    </p>
                    
                    <div className="mt-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-vacation-600 border-vacation-200"
                      >
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>
              </GuidebookSection>
              
              <GuidebookSection
                title="Office Hours"
                description="When we're available"
                icon={<Clock size={20} />}
              >
                <div className="space-y-2 mt-2">
                  <div className="flex justify-between items-center p-2">
                    <span className="text-gray-800">Monday - Friday</span>
                    <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-800">Saturday</span>
                    <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-2">
                    <span className="text-gray-800">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
                
                <div className="mt-4 bg-vacation-50 p-3 rounded-lg text-vacation-800 text-sm">
                  <p>For after-hours emergencies, please use the emergency contact number.</p>
                </div>
              </GuidebookSection>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
