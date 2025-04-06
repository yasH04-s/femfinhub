
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, DollarSign, GraduationCap, TrendingUp, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 hero-gradient">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Financial Empowerment for Women Entrepreneurs
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                Unlock your financial potential with AI-driven insights, mentorship, and tools specifically designed for women.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Comprehensive Financial Tools
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Everything you need to take control of your financial future in one place.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card className="card-hover">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2">
                    <GraduationCap className="h-12 w-12 text-primary" />
                    <h3 className="text-xl font-bold">Financial Education</h3>
                    <p className="text-center text-muted-foreground">
                      Learn at your own pace with courses designed specifically for women entrepreneurs.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2">
                    <DollarSign className="h-12 w-12 text-primary" />
                    <h3 className="text-xl font-bold">Expense Tracking</h3>
                    <p className="text-center text-muted-foreground">
                      Monitor your spending with AI-powered analysis and personalized recommendations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2">
                    <TrendingUp className="h-12 w-12 text-primary" />
                    <h3 className="text-xl font-bold">Investment Planning</h3>
                    <p className="text-center text-muted-foreground">
                      Explore traditional and alternative investment options tailored to your goals.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2">
                    <Users className="h-12 w-12 text-primary" />
                    <h3 className="text-xl font-bold">Community Support</h3>
                    <p className="text-center text-muted-foreground">
                      Connect with mentors and peers in our women-only entrepreneurs network.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2">
                    <Shield className="h-12 w-12 text-primary" />
                    <h3 className="text-xl font-bold">Emergency Assistance</h3>
                    <p className="text-center text-muted-foreground">
                      Access emergency financial resources with AI-driven credit scoring.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-primary">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9 9l.013 11.241 2.39-11.24a2 2 0 0 1 1.36-1.243L15 7a2 2 0 0 0 1-3.6 2 2 0 0 0-2 0L9 7z" />
                    </svg>
                    <h3 className="text-xl font-bold">AI Financial Advisor</h3>
                    <p className="text-center text-muted-foreground">
                      Get personalized financial advice and answers from our AI chatbot anytime.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center md:text-4xl mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <p className="italic text-muted-foreground">
                    "FemFinHub helped me secure funding for my startup through their alternative financing models. The mentorship program was invaluable."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-primary/20 w-12 h-12 flex items-center justify-center">
                      <span className="text-primary font-bold">SM</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Sarah Miller</h4>
                      <p className="text-sm text-muted-foreground">Tech Startup Founder</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <p className="italic text-muted-foreground">
                    "The financial education courses changed how I approach my business finances. I'm now more confident making investment decisions."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-primary/20 w-12 h-12 flex items-center justify-center">
                      <span className="text-primary font-bold">RP</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Rachel Patel</h4>
                      <p className="text-sm text-muted-foreground">Retail Business Owner</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <p className="italic text-muted-foreground">
                    "During an unexpected financial crisis, the emergency assistance feature helped me stay afloat. The AI credit scoring gave me options I didn't know existed."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-primary/20 w-12 h-12 flex items-center justify-center">
                      <span className="text-primary font-bold">JD</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Jennifer Davis</h4>
                      <p className="text-sm text-muted-foreground">Service Business Entrepreneur</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 hero-gradient">
        <div className="container px-4 md:px-6 text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">
                Ready to Transform Your Financial Future?
              </h2>
              <p className="mx-auto max-w-[600px] text-white/90 md:text-xl">
                Join thousands of women entrepreneurs empowering themselves financially.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/signup">Sign Up Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/login">Log In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 md:py-12 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">FemFinHub</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link>
                <Link to="/team" className="text-sm text-muted-foreground hover:text-foreground">Our Team</Link>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
              </nav>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Features</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/features/learning" className="text-sm text-muted-foreground hover:text-foreground">Learning</Link>
                <Link to="/features/expenses" className="text-sm text-muted-foreground hover:text-foreground">Expense Tracking</Link>
                <Link to="/features/investments" className="text-sm text-muted-foreground hover:text-foreground">Investment Planning</Link>
                <Link to="/features/community" className="text-sm text-muted-foreground hover:text-foreground">Community</Link>
              </nav>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Resources</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link>
                <Link to="/guides" className="text-sm text-muted-foreground hover:text-foreground">Guides</Link>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link>
                <Link to="/support" className="text-sm text-muted-foreground hover:text-foreground">Support</Link>
              </nav>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Legal</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link>
                <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground">Cookies</Link>
                <Link to="/licenses" className="text-sm text-muted-foreground hover:text-foreground">Licenses</Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2023 FemFinHub. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
