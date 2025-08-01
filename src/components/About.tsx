import { MapPin, Phone, Mail, Building } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="text-primary">Bhanu Shankar Safety Nets</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Bhanu Shankar safety nets</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Protecting Lives and Property — One Net at a Time
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We specialize in high-quality safety nets for construction, residential, and industrial use. 
                Our products include bird nets, fall protection nets, and sports nets. Safety, durability, 
                and customer satisfaction are our top priorities.
              </p>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We offer expert installation with customized solutions for every need. Our team of skilled 
                technicians ensures that every installation meets the highest safety standards while 
                maintaining aesthetic appeal.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Building className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Expert Installation</h4>
                  <p className="text-sm text-muted-foreground">Professional installation with customized solutions</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <Phone className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">24/7 Support</h4>
                  <p className="text-sm text-muted-foreground">Always available for emergency installations</p>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-foreground mb-6">Service Areas</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Primary Location</p>
                      <p className="text-sm text-muted-foreground">
                        Golap Resort, Flat-2751, Plot No-810, Behera Sahi Rd, 
                        Near The World Mall, Nuasahi, Nayapalli, Bhubaneswar, Odisha 751012
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Additional Areas</p>
                      <p className="text-sm text-muted-foreground">
                        Bhubaneswar Railway Station, Kurda Road, Cuttack City
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-3 mb-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">6281051109</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-sm">bhanugosala97@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;