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
      <nav style={{ backgroundColor: 'var(--header-blue)' }} className="shadow-lg">
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

      {/* Hero Section - Full Width with Background Image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-cover bg-center bg-no-repeat" 
               style={{ 
                 backgroundImage: `url('/src/assets/shutterstock_98521178_1753236105261.jpg')`,
                 backgroundPosition: 'center center',
                 backgroundSize: 'cover',
                 transform: 'scaleX(-1)'
               }}>
        <div className="absolute inset-0 flex items-center" style={{ transform: 'scaleX(-1)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge className="bg-blue-100 text-blue-900 px-4 py-2 text-sm font-medium">
                    Professional Medical Staffing
                  </Badge>
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#1e2563] drop-shadow-lg">
                    Welcome to<br />
                    <span className="text-[#1e2563]">JoyJoy Locums</span>
                  </h1>

                </div>
                
                {/* Call-to-Action Buttons - Stacked Vertically */}
                <div className="flex flex-col gap-4 w-full max-w-md">
                  <Link href="/gp-locums" className="w-full" onClick={() => window.scrollTo(0, 0)}>
                    <Button 
                      size="lg" 
                      className="w-full px-8 py-4 text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:shadow-lg border-0 button-joyjoy"
                      style={{ 
                        backgroundColor: '#2563eb',
                        color: '#ffffff',
                        borderColor: 'transparent'
                      }}
                    >
                      <span className="text-white font-semibold">GP Locum Opportunities</span>
                      <HeartHandshake className="ml-2 h-5 w-5 text-white" />
                    </Button>
                  </Link>
                  
                  <Link href="/nurse-practitioner-locums" className="w-full" onClick={() => window.scrollTo(0, 0)}>
                    <Button 
                      size="lg" 
                      className="w-full px-8 py-4 text-lg font-semibold bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 hover:shadow-lg border-0 button-joyjoy"
                      style={{ 
                        backgroundColor: '#9333ea',
                        color: '#ffffff',
                        borderColor: 'transparent'
                      }}
                    >
                      <span className="text-white font-semibold">Advanced Nurse Practitioner Roles</span>
                      <UserCheck className="ml-2 h-5 w-5 text-white" />
                    </Button>
                  </Link>
                  
                  <Link href="/pcn-locums" className="w-full" onClick={() => window.scrollTo(0, 0)}>
                    <Button 
                      size="lg" 
                      className="w-full px-8 py-4 text-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition-all duration-300 hover:shadow-lg border-0 button-joyjoy"
                      style={{ 
                        backgroundColor: '#16a34a',
                        color: '#ffffff',
                        borderColor: 'transparent'
                      }}
                    >
                      <span className="text-white font-semibold">PCN Opportunities</span>
                      <HeartHandshake className="ml-2 h-5 w-5 text-white" />
                    </Button>
                  </Link>
                  
                  <Link href="/clinical-pharmacist-locums" className="w-full" onClick={() => window.scrollTo(0, 0)}>
                    <Button 
                      size="lg" 
                      className="w-full px-8 py-4 text-lg font-semibold bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300 hover:shadow-lg border-0 button-joyjoy"
                      style={{ 
                        backgroundColor: '#ea580c',
                        color: '#ffffff',
                        borderColor: 'transparent'
                      }}
                    >
                      <span className="text-white font-semibold">Clinical Pharmacist Roles</span>
                      <UserCheck className="ml-2 h-5 w-5 text-white" />
                    </Button>
                  </Link>
                  
                  <Link href="/allied-healthcare-professionals" className="w-full" onClick={() => window.scrollTo(0, 0)}>
                    <Button 
                      size="lg" 
                      className="w-full px-8 py-4 text-lg font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300 hover:shadow-lg border-0 button-joyjoy"
                      style={{ 
                        backgroundColor: '#0d9488',
                        color: '#ffffff',
                        borderColor: 'transparent'
                      }}
                    >
                      <span className="text-white font-semibold">Allied Healthcare Professionals</span>
                      <UserCheck className="ml-2 h-5 w-5 text-white" />
                    </Button>
                  </Link>
                  
                  <Link href="/gp-practices" className="w-full" onClick={() => window.scrollTo(0, 0)}>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full px-8 py-4 text-lg font-semibold bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-lg border-2 button-joyjoy"
                      style={{ 
                        backgroundColor: '#ffffff',
                        color: '#1e3a8a',
                        borderColor: '#ffffff'
                      }}
                    >
                      <span className="text-blue-900 font-semibold">For GP Practices - Hire Locums</span>
                      <ArrowRight className="ml-2 h-5 w-5 text-blue-900" />
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#1e2563] drop-shadow-lg">500+</div>
                    <div className="text-sm text-[#1e2563] drop-shadow-md">Active Locums</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#1e2563] drop-shadow-lg">150+</div>
                    <div className="text-sm text-[#1e2563] drop-shadow-md">Partner Practices</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#1e2563] drop-shadow-lg">98%</div>
                    <div className="text-sm text-[#1e2563] drop-shadow-md">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--header-blue)' }}>
              Why Choose JoyJoy Locums?
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Connect with premium locum opportunities across all medical specialties. 
              Professional, reliable, and designed for healthcare excellence.
            </p>
            <p className="text-xl text-gray-600">
              The professional platform for GPs, ANPs, Clinical Pharmacists, PCN roles, and Allied Healthcare Professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--medical-blue-100)' }}>
                  <Search className="h-8 w-8" style={{ color: 'var(--medical-blue-600)' }} />
                </div>
                <CardTitle style={{ color: 'var(--header-blue)' }}>Smart Matching</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  AI-powered matching connects you with the perfect locum opportunities based on your skills, location, and preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--medical-blue-100)' }}>
                  <Shield className="h-8 w-8" style={{ color: 'var(--medical-blue-600)' }} />
                </div>
                <CardTitle style={{ color: 'var(--header-blue)' }}>Secure Platform</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Professional-grade security with comprehensive verification processes for all medical professionals and practices.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--medical-blue-100)' }}>
                  <TrendingUp className="h-8 w-8" style={{ color: 'var(--medical-blue-600)' }} />
                </div>
                <CardTitle style={{ color: 'var(--header-blue)' }}>Career Growth</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Build your medical career with diverse opportunities, professional development, and ongoing support from our team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--header-blue)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-16">
            What Our Medical Professionals Say
          </h2>
          
          <div className="relative">
            <Card className="bg-white shadow-xl">
              <CardContent className="p-12">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-2xl text-gray-700 italic mb-8 leading-relaxed">
                  "{testimonials[currentSlide].quote}"
                </p>
                <div>
                  <div className="font-semibold text-xl" style={{ color: 'var(--header-blue)' }}>
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-gray-500 text-lg">{testimonials[currentSlide].role}</div>
                </div>
              </CardContent>
            </Card>
            
            {/* Pagination dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-blue-400'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-200 transition-colors"
              onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-200 transition-colors"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16" style={{ backgroundColor: 'var(--header-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-white font-bold text-2xl mb-6 flex items-center">
                <HeartHandshake className="h-8 w-8 mr-3" />
                JoyJoy Locums
              </div>
              <p className="text-blue-200 mb-6">
                Professional medical staffing solutions connecting healthcare professionals with quality opportunities across the UK.
              </p>
              <div className="flex space-x-4">
                <button className="text-blue-200 hover:text-white transition-colors">
                  <Phone className="h-6 w-6" />
                </button>
                <button className="text-blue-200 hover:text-white transition-colors">
                  <MapPin className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">For Medical Professionals</h4>
              <ul className="space-y-2 text-blue-200">
                <li><Link href="/gp-locums" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>GP Locum Opportunities</Link></li>
                <li><Link href="/nurse-practitioner-locums" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Nurse Practitioner Roles</Link></li>
                <li><Link href="/pcn-locums" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>PCN Opportunities</Link></li>
                <li><Link href="/clinical-pharmacist-locums" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Clinical Pharmacist Roles</Link></li>
                <li><Link href="/staff-registration" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Register as Professional</Link></li>
                <li><Link href="/auth" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Sign In</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">For GP Practices</h4>
              <ul className="space-y-2 text-blue-200">
                <li><Link href="/gp-practice-enquiry" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Join Our Network</Link></li>
                <li><Link href="/auth" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Practice Portal</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <div className="text-blue-200 text-sm">
                © 2025 JoyJoy Locums. All rights reserved.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy-policy" className="text-blue-200 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-blue-200 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="text-center text-blue-200 text-sm space-y-1">
              <div>VAT Registration No: GB494539249</div>
              <div>ICO Registration No: 00010487221</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
