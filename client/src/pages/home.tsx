import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Users, 
  Building2, 
  Clock, 
  Shield, 
  Phone, 
  Star,
  CheckCircle,
  Award,
  MapPin,
  Smartphone,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Handshake,
  UserCheck,
  Calendar,
  TrendingUp,
  Search,
  HeartHandshake
} from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "GP Locum",
      quote: "JoyJoy Locums has transformed how I find quality locum positions. The platform is incredibly easy to use.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Nurse Practitioner",
      quote: "Professional service with excellent support. I've found consistent work that fits my schedule perfectly.",
      rating: 5
    },
    {
      name: "Dr. James Wilson",
      role: "GP Partner",
      quote: "Finding reliable locums has never been easier. JoyJoy Locums delivers quality professionals every time.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Medical Blue Header Navigation */}
      <nav style={{ backgroundColor: '#1e2563' }} className="shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="text-white font-bold text-2xl flex items-center">
                <HeartHandshake className="h-8 w-8 mr-3 text-white" />
                JoyJoy Locums
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/gp-locums" className="text-white hover:text-blue-200 transition-colors">
                For GPs
              </Link>
              <Link href="/nurse-practitioner-locums" className="text-white hover:text-blue-200 transition-colors">
                For ANPs
              </Link>
              <Link href="/pcn-locums" className="text-white hover:text-blue-200 transition-colors">
                PCN Roles
              </Link>
              <Link href="/clinical-pharmacist-locums" className="text-white hover:text-blue-200 transition-colors">
                Clinical Pharmacists
              </Link>
              <Link href="/gp-practices" className="text-white hover:text-blue-200 transition-colors">
                For GP Practices
              </Link>
              <Link href="/compliance" className="text-white hover:text-blue-200 transition-colors">
                Compliance
              </Link>
              <Link href="/auth">
                <Button variant="outline" className="bg-white text-blue-900 hover:bg-blue-50 border-white">
                  Sign In
                </Button>
              </Link>
            </div>
            <div className="md:hidden">
              <button className="text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Medical Blue Background instead of image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge className="bg-blue-100 text-blue-900 px-4 py-2 text-sm font-medium">
                    Professional Medical Staffing
                  </Badge>
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                    Quality Medical Locums for UK Healthcare
                  </h1>
                  <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                    Connecting skilled medical professionals with GP practices across the UK. 
                    Find your perfect locum position or hire qualified healthcare staff today.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/gp-locums">
                    <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg">
                      Find Locum Work
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/gp-practices">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold">
                      Hire Medical Staff
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Medical Staffing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive locum services for healthcare professionals and medical practices across the UK
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">GP Locums</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Find experienced GP locums for your practice
                </p>
                <Link href="/gp-locums">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <UserCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Nurse Practitioners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced Nurse Practitioners for primary care
                </p>
                <Link href="/nurse-practitioner-locums">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">PCN Roles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Primary Care Network specialized positions
                </p>
                <Link href="/pcn-locums">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Clinical Pharmacists</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Qualified clinical pharmacists for practices
                </p>
                <Link href="/clinical-pharmacist-locums">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Medical Professionals Say
            </h2>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <CardContent>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 mb-6">
                  "{testimonials[currentSlide].quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[currentSlide].name}</p>
                  <p className="text-gray-600">{testimonials[currentSlide].role}</p>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of medical professionals who trust JoyJoy Locums for their staffing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/staff-registration">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                Register as Medical Professional
              </Button>
            </Link>
            <Link href="/gp-practice-enquiry">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold">
                Post a Medical Position
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <HeartHandshake className="h-8 w-8 mr-3" />
                <span className="text-xl font-bold">JoyJoy Locums</span>
              </div>
              <p className="text-gray-400">
                Professional medical staffing solutions for UK healthcare
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Medical Professionals</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/gp-locums" className="hover:text-white">GP Locums</Link></li>
                <li><Link href="/nurse-practitioner-locums" className="hover:text-white">Nurse Practitioners</Link></li>
                <li><Link href="/pcn-locums" className="hover:text-white">PCN Roles</Link></li>
                <li><Link href="/clinical-pharmacist-locums" className="hover:text-white">Clinical Pharmacists</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Practices</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/gp-practices" className="hover:text-white">Find Medical Staff</Link></li>
                <li><Link href="/gp-practice-enquiry" className="hover:text-white">Post Requirements</Link></li>
                <li><Link href="/compliance" className="hover:text-white">Compliance</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about-us" className="hover:text-white">About Us</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 JoyJoy Locums. All rights reserved.</p>
            <p className="mt-2 text-sm">✓ Medical Platform Successfully Loaded</p>
          </div>
        </div>
      </footer>
    </div>
  );
}