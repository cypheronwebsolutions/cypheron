import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Building2, 
  ShoppingCart, 
  BarChart3, 
  Users, 
  TrendingUp,
  Search,
  Facebook,
  Target,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const websiteTypes = [
    {
      icon: <Globe className="h-8 w-8 text-supporting" />,
      title: "Landing Page",
      description: "High-converting single-page websites designed to capture leads and drive specific actions.",
      features: ["Conversion-optimized design", "A/B testing ready", "Mobile responsive", "Fast loading"],
    },
    {
      icon: <Building2 className="h-8 w-8 text-supporting" />,
      title: "Corporate Website",
      description: "Professional multi-page websites that establish credibility and showcase your brand.",
      features: ["Professional design", "Content management", "SEO optimized", "Brand consistency"],
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-supporting" />,
      title: "E-commerce Site",
      description: "Complete online stores with payment processing, inventory management, and more.",
      features: ["Payment integration", "Inventory management", "Order tracking", "Customer accounts"],
    },
  ];

  const analyticsServices = [
    {
      icon: <TrendingUp className="h-6 w-6 text-supporting" />,
      title: "Custom Event Tracking",
      description: "Track specific user actions and behaviors to understand your audience better.",
    },
    {
      icon: <Users className="h-6 w-6 text-supporting" />,
      title: "Audience List",
      description: "Detailed audience segmentation and analysis for targeted marketing campaigns.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-supporting" />,
      title: "E-commerce Report",
      description: "Comprehensive sales analytics, conversion tracking, and revenue optimization.",
    },
  ];

  const marketingServices = [
    {
      icon: <Search className="h-6 w-6 text-supporting" />,
      title: "Google Ads",
      description: "Strategic Google Ads campaigns to drive qualified traffic and conversions.",
    },
    {
      icon: <Facebook className="h-6 w-6 text-supporting" />,
      title: "Facebook Ads",
      description: "Targeted social media advertising to reach your ideal customers on Facebook and Instagram.",
    },
    {
      icon: <Target className="h-6 w-6 text-supporting" />,
      title: "SEO",
      description: "Search engine optimization to improve your website's visibility and organic traffic.",
    },
    {
      icon: <MapPin className="h-6 w-6 text-supporting" />,
      title: "GMC for E-commerce",
      description: "Google Merchant Center setup and optimization for e-commerce product visibility.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gradient-black">Our</span> <span className="text-hero-accent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive web solutions designed to grow your business and 
              maximize your digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="py-20 bg-gradient-section-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Website Types</h2>
            <p className="text-lg text-muted-foreground">
              Choose the perfect solution for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {websiteTypes.map((service, index) => (
              <Card 
                key={service.title}
                className="bg-gradient-card hover-scale hover-glow transition-all duration-300 h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-supporting rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild
                    className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
                  >
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Reports */}
      <section className="py-20 bg-gradient-section-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Analytics Report</h2>
            <p className="text-lg text-muted-foreground">
              Data-driven insights to optimize your business performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {analyticsServices.map((service, index) => (
              <Card 
                key={service.title}
                className="hover-scale transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {service.icon}
                    <CardTitle className="text-lg font-semibold text-primary">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Website Marketing */}
      <section className="py-20 bg-gradient-section-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Website Marketing</h2>
            <p className="text-lg text-muted-foreground">
              Drive traffic, increase visibility, and grow your online presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingServices.map((service, index) => (
              <Card 
                key={service.title}
                className="hover-scale transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent text-accent-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss which services are right for your business and create a 
            custom solution that drives results.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 hover-scale"
          >
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;