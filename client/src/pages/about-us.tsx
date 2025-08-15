import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Users, 
  Clock, 
  Shield, 
  CheckCircle,
  Star,
  MapPin,
  Calendar,
  TrendingUp,
  Phone,
  Mail,
  UserCheck,
  Award,
  Stethoscope,
  Building2,
  Target,
  Globe,
  HeartHandshake
} from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Medical Blue Header Navigation */}
      <nav style={{ backgroundColor: '#1e2563' }} className="shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/">
                <div className="text-white font-bold text-2xl flex items-center">
                  <HeartHandshake className="h-8 w-8 mr-3 text-white" />
                  JoyJoy Locums
                </div>
              </Link>
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
          </div>
        </div>
      </nav>

      {/* Hero Section - Professional Blue Gradient */}
      <section className="relative h-[70vh] overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl text-white">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge className="bg-blue-100 text-blue-900 px-4 py-2 text-sm font-medium">
                    Established 2008
                  </Badge>
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    About<br />
                    <span className="text-blue-200">JoyJoy Locums</span>
                  </h1>
                  <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
                    17 years of connecting exceptional medical professionals with practices across the UK.
                  </p>
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">2008</div>
                    <div className="text-sm text-blue-200">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">17+</div>
                    <div className="text-sm text-blue-200">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">1000+</div>
                    <div className="text-sm text-blue-200">Successful Placements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-blue-900">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2008, JoyJoy Locums began with a simple mission: to bridge the gap between
                exceptional medical professionals and the practices that need them most. What started as
                a small venture has grown into one of the UK's most trusted locum agencies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Over 17 years, we've built lasting relationships with both locums and practices,
                understanding the unique challenges each faces. Our commitment to quality, reliability,
                and professional excellence has made us the preferred partner for medical staffing solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we proudly serve over 150 partner practices across the UK, with a network
                of 500+ vetted medical professionals ready to provide exceptional patient care when and where it's needed most.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">
                Our Milestones
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">2008</h4>
                    <p className="text-gray-600">JoyJoy Locums founded with 5 partner practices</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">2015</h4>
                    <p className="text-gray-600">Expanded to serve 50+ practices nationwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">2020</h4>
                    <p className="text-gray-600">Achieved 98% client satisfaction rating</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">2025</h4>
                    <p className="text-gray-600">150+ partner practices, 500+ active locums</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartHandshake className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-blue-900">
                  Patient Care First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every placement is made with patient welfare as our top priority.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-blue-900">
                  Professional Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rigorous vetting ensures only the highest caliber professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-blue-900">
                  Trust & Reliability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  17 years of consistent, dependable service to our partners.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-blue-900">
                  Partnership Approach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Building long-term relationships, not just filling positions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to healthcare excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">
                  Sarah Johnson
                </h3>
                <p className="text-blue-600 font-medium mb-4">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  15+ years in healthcare recruitment, former NHS manager with deep understanding
                  of practice operations and staffing challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Stethoscope className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">
                  Dr. Michael Thompson
                </h3>
                <p className="text-blue-600 font-medium mb-4">Medical Director</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Practicing GP with 20+ years experience, ensures all placements meet
                  the highest clinical and professional standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">
                  Emma Davies
                </h3>
                <p className="text-blue-600 font-medium mb-4">Operations Director</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Expert in healthcare logistics and compliance, ensures seamless
                  placements and maintains our 98% satisfaction rating.
                </p>
              </CardContent>
            </Card>
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
          </div>
        </div>
      </footer>
    </div>
  );
}
