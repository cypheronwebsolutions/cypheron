import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  // Placeholder portfolio items - in a real application, these would come from a CMS or API
  const portfolioItems = [
    {
      id: 1,
      title: "TechStart Landing Page",
      description: "A high-converting landing page for a SaaS startup that increased conversions by 340%.",
      category: "Landing Page",
      technologies: ["React", "Tailwind CSS", "Analytics"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      results: "340% increase in conversions",
    },
    {
      id: 2,
      title: "Elite Consulting Corporate Site",
      description: "Professional corporate website with custom CMS and client portal integration.",
      category: "Corporate",
      technologies: ["WordPress", "Custom Theme", "SEO"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6ad4a?w=800&h=600&fit=crop",
      results: "50% increase in qualified leads",
    },
    {
      id: 3,
      title: "Fashion Forward E-commerce",
      description: "Complete e-commerce solution with inventory management and payment processing.",
      category: "E-commerce",
      technologies: ["Shopify", "Custom Apps", "Analytics"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      results: "2x online sales growth",
    },
    {
      id: 4,
      title: "Local Restaurant Chain",
      description: "Multi-location restaurant website with online ordering and table reservations.",
      category: "Corporate",
      technologies: ["React", "Node.js", "Payment API"],
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      results: "30% increase in online orders",
    },
    {
      id: 5,
      title: "Fitness Studio Landing",
      description: "Conversion-optimized landing page for a premium fitness studio.",
      category: "Landing Page",
      technologies: ["Next.js", "Framer Motion", "CRM Integration"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      results: "250% increase in memberships",
    },
    {
      id: 6,
      title: "Artisan Marketplace",
      description: "Multi-vendor e-commerce platform for local artisans and creators.",
      category: "E-commerce",
      technologies: ["WooCommerce", "Multi-vendor", "Payment Gateway"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      results: "100+ active vendors",
    },
  ];

  const categories = ["All", "Landing Page", "Corporate", "E-commerce"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gradient-black">Our</span> <span className="text-hero-accent">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our latest projects and see how we've helped businesses 
              transform their digital presence and achieve remarkable results.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gradient-section-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" 
                  ? "bg-gradient-primary text-primary-foreground hover:opacity-90" 
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card 
                key={item.id}
                className="group hover-scale hover-glow transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {item.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary group-hover:text-supporting transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-primary mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm font-medium text-supporting">
                        Result: {item.results}
                      </p>
                    </div>
                  </div>
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
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's create something amazing together. Your next project could be 
            featured in our portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 hover-scale group"
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;