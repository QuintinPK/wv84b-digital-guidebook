
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuidebookSection from "@/components/GuidebookSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  PhoneCall, 
  Mail, 
  MessageCircle, 
  MapPin, 
  ArrowLeft, 
  ShieldAlert
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Contact = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  
  // Initialize map with the coordinates
  useEffect(() => {
    if (!mapContainer.current) return;

    // Convert coordinates from DMS to decimal degrees
    // 12°08'05.4"N 68°16'15.5"W
    // 12.134833, -68.270972
    const lat = 12.134833;
    const lng = -68.270972;
    
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: 15
    });
    
    // Add marker at the location
    new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map.current);
      
    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    
    // Cleanup on unmount
    return () => {
      map.current?.remove();
    };
  }, []);

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
                <PhoneCall size={24} className="text-vacation-600 mr-3" />
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
                icon={<PhoneCall size={20} />}
              >
                <div className="space-y-4 mt-2">
                  <div className="flex items-start p-4 rounded-lg border border-gray-100">
                    <PhoneCall size={20} className="text-vacation-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800">Phone Number</h3>
                      <p className="text-gray-600 mt-1">+599 795 1826</p>
                      <p className="text-sm text-gray-500 mt-1">Available 24/7 for urgent matters</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 rounded-lg border border-gray-100">
                    <Mail size={20} className="text-vacation-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800">Email</h3>
                      <p className="text-gray-600 mt-1">contact@seasideserenitybonaire.com</p>
                      <p className="text-sm text-gray-500 mt-1">Typically responds within 2 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 rounded-lg border border-gray-100">
                    <MessageCircle size={20} className="text-vacation-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800">Text Message/WhatsApp</h3>
                      <p className="text-gray-600 mt-1">+599 795 1826</p>
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
                    <span className="font-medium text-gray-900">Police (Non-Emergency)</span>
                    <span className="text-gray-700">717-8000</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-white rounded border border-red-100">
                    <span className="font-medium text-gray-900">Ambulance (direct)</span>
                    <span className="text-gray-700">912</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-white rounded border border-red-100">
                    <span className="font-medium text-gray-900">Coast guard</span>
                    <span className="text-gray-700">913</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-red-100 rounded text-red-800 text-sm">
                  <p className="font-medium mb-1">Important Note:</p>
                  <p>In case of a medical emergency, fire, or crime, call 911 immediately before contacting the host.</p>
                </div>
              </GuidebookSection>
            </div>
            
            <div className="space-y-6">
              <GuidebookSection
                title="Property Address"
                description="Location and directions"
                icon={<MapPin size={20} />}
              >
                <div className="mt-2">
                  <div className="bg-gray-100 rounded-lg h-52 mb-4 overflow-hidden" ref={mapContainer}>
                    {/* Map will be rendered here */}
                  </div>
                  
                  <div className="p-4 border border-gray-100 rounded-lg">
                    <p className="font-medium text-gray-800">Seaside Serenity Bonaire</p>
                    <p className="text-gray-600 mt-1">
                      Watervillas 84<br />
                      Bonaire
                    </p>
                    <p className="text-gray-600 mt-1 font-medium">
                      12°08'05.4"N 68°16'15.5"W
                    </p>
                    
                    <div className="mt-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-vacation-600 border-vacation-200"
                        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=12.134833,-68.270972`, '_blank')}
                      >
                        Get Directions
                      </Button>
                    </div>
                  </div>
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
