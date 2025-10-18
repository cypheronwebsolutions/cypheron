import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  const founders = [
    {
      name: "Stacey Tang",
      role: "Co-Founder & Creative Director",
      bio: "Specializes in company management and UI/UX design, creating intuitive experiences that drive business growth.",
    },
    {
      name: "Vincci Chye", 
      role: "Co-Founder & Lead Developer",
      bio: "Technical expert focused on development and innovative technology solutions that power modern web applications.",
    },
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6 text-supporting" />,
      title: "Results-Driven",
      description: "Every project is designed with clear business objectives in mind.",
    },
    {
      icon: <Award className="h-6 w-6 text-supporting" />,
      title: "Quality First",
      description: "We never compromise on code quality, design standards, or user experience.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-supporting" />,
      title: "Innovation",
      description: "We stay ahead of trends and implement the latest technologies.",
    },
    {
      icon: <Users className="h-6 w-6 text-supporting" />,
      title: "Partnership",
      description: "We build long-term relationships and grow together with our clients.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gradient-black">About Cypheron </span> <span className="text-hero-accent">Web Solution</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a passionate team dedicated to creating high-end web solutions 
              that help businesses grow and succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-section-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="slide-up">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Story</h2>
              <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded with a vision to bridge the gap between innovative design and powerful 
                  functionality, Cypheron Web Solution emerged from a simple belief: every business 
                  deserves a digital presence that truly represents their values and drives growth.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our journey began when we recognized that many businesses were struggling with 
                  websites that looked good but didn't perform, or performed well but lacked visual 
                  appeal. We set out to create a different approach—one that combines stunning design 
                  with robust functionality and measurable results.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we're proud to work with businesses of all sizes, from startups to 
                  established enterprises, helping them transform their digital presence and 
                  achieve their business goals through thoughtful, strategic web solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gradient-section-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Founders</h2>
            <p className="text-lg text-muted-foreground">
              The passionate minds behind Cypheron Web Solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <Card 
                key={founder.name}
                className="bg-gradient-card hover-scale transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {founder.name}
                  </CardTitle>
                  <CardDescription className="text-supporting font-medium">
                    {founder.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    {founder.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-section-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="text-center hover-scale transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-primary">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
