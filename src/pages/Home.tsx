import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {Globe, Building2, ShoppingCart, ArrowRight, Star, Zap, Users, Award, ChevronRight, Play} from "lucide-react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {useState, useEffect} from "react";
import heroImage from "@/assets/hero-image.png";

const Home = () => {
    const [stats, setStats] = useState({projects: 0, satisfaction: 0, experience: 0, support: 0});
    const [isVisible, setIsVisible] = useState(false);

    // Animated counter effect
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isVisible) {
            const animateValue = (start: number, end: number, setter: (val: number) => void) => {
                const duration = 2000;
                const increment = (end - start) / (duration / 16);
                let current = start;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= end) {
                        current = end;
                        clearInterval(timer);
                    }
                    setter(Math.floor(current));
                }, 16);
            };

            animateValue(0, 50, (val) => setStats(prev => ({...prev, projects: val})));
            animateValue(0, 100, (val) => setStats(prev => ({...prev, satisfaction: val})));
            animateValue(0, 2, (val) => setStats(prev => ({...prev, experience: val})));
            animateValue(0, 24, (val) => setStats(prev => ({...prev, support: val})));
        }
    }, [isVisible]);

    const serviceCards = [
        {
            icon: <Globe className="h-10 w-10 text-supporting"/>,
            title: "Landing Page",
            description: "Convert visitors with high-performing landing pages designed for results.",
            features: ["Conversion Optimized", "Mobile First", "A/B Testing"],
            color: "from-blue-500/10 to-purple-500/10"
        },
        {
            icon: <Building2 className="h-10 w-10 text-supporting"/>,
            title: "Corporate",
            description: "Professional websites that establish credibility and showcase your brand.",
            features: ["Professional Design", "Brand Identity", "SEO Ready"],
            color: "from-green-500/10 to-blue-500/10"
        },
        {
            icon: <ShoppingCart className="h-10 w-10 text-supporting"/>,
            title: "E-commerce",
            description: "Complete online stores that drive sales and grow your business.",
            features: ["Payment Gateway", "Inventory Management", "Analytics"],
            color: "from-purple-500/10 to-pink-500/10"
        },
    ];

    // const testimonials = [
    //   {
    //     name: "Sarah Johnson",
    //     company: "TechStart Inc.",
    //     testimonial: "Cypheron delivered exactly what we needed. Professional, responsive, and exceeded our expectations. Our conversion rate increased by 150%!",
    //     rating: 5,
    //     avatar: "🧑‍💼"
    //   },
    //   {
    //     name: "Michael Chen",
    //     company: "GrowthCorp",
    //     testimonial: "The team's attention to detail and innovative approach helped us achieve our digital goals. Best investment we've made!",
    //     rating: 5,
    //     avatar: "👨‍💻"
    //   },
    //   {
    //     name: "Emily Davis",
    //     company: "LocalBiz",
    //     testimonial: "Outstanding service from start to finish. Our new website has significantly improved our business and customer engagement.",
    //     rating: 5,
    //     avatar: "👩‍💼"
    //   },
    //   {
    //     name: "David Rodriguez",
    //     company: "InnovateTech",
    //     testimonial: "Incredible results! Our online presence transformed completely. The team understood our vision perfectly.",
    //     rating: 5,
    //     avatar: "🧑‍🔬"
    //   }
    // ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section
                className="relative bg-gradient-hero min-h-screen sm:h-screen flex items-center overflow-hidden py-12 sm:py-0">
                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-10 sm:top-20 left-4 sm:left-10 w-8 sm:w-16 h-8 sm:h-16 rounded-full bg-supporting/20 blur-sm"
                    />
                    <motion.div
                        animate={{
                            y: [0, 25, 0],
                            x: [0, 10, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                        className="absolute bottom-20 sm:bottom-32 right-4 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 rounded-full bg-accent/15 blur-sm"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        className="absolute top-1/2 right-4 sm:right-10 w-6 sm:w-12 h-6 sm:h-12 rounded-full bg-primary/10 blur-sm"
                    />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        <motion.div
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, ease: "easeOut"}}
                            className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
                        >
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.2}}
                                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-supporting/20 text-xs sm:text-sm font-medium text-primary mx-auto lg:mx-0"
                            >
                                <Zap className="h-3 sm:h-4 w-3 sm:w-4"/>
                                Premium Web Solutions
                            </motion.div>

                            <motion.h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary mb-4 sm:mb-6 leading-tight"
                            >
                                We Design. <br/>
                                <span className="text-hero-accent">We Build.</span> <br/>
                                We Scale.
                            </motion.h1>

                            <motion.p
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.5}}
                                className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0"
                            >
                                Transform your digital presence with high-end web solutions that drive real business
                                growth.
                            </motion.p>

                            <motion.div
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.7}}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                            >
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-primary text-primary-foreground hover:opacity-90 hover-scale group relative overflow-hidden w-full sm:w-auto"
                                >
                                    <Link to="/contact">
                                        <motion.span
                                            whileHover={{scale: 1.05}}
                                            className="flex items-center justify-center"
                                        >
                                            Start Your Project
                                            <ArrowRight
                                                className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"/>
                                        </motion.span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group w-full sm:w-auto"
                                >
                                    <Link to="/portfolio" className="flex items-center justify-center">
                                        <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform"/>
                                        View Our Work
                                    </Link>
                                </Button>
                            </motion.div>

                            {/* Trust Indicators */}
                            {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex items-center gap-6 pt-4"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">5.0 Client Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-supporting" />
                  <span className="text-sm text-muted-foreground">50+ Happy Clients</span>
                </div>
              </motion.div> */}
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: 0.4}}
                            className="relative order-1 lg:order-2"
                        >
                            <motion.div
                                whileHover={{scale: 1.02}}
                                transition={{duration: 0.3}}
                                className="relative z-10 w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto"
                            >
                                <img
                                    src={heroImage}
                                    alt="Modern web design visualization showcasing premium digital solutions"
                                    className="w-full h-auto max-h-[220px] sm:max-h-[300px] lg:max-h-[400px] object-contain"
                                />
                            </motion.div>

                            {/* Floating Badge */}
                            {/*<motion.div*/}
                            {/*  animate={{*/}
                            {/*    y: [0, -10, 0],*/}
                            {/*    rotate: [0, 2, 0]*/}
                            {/*  }}*/}
                            {/*  transition={{*/}
                            {/*    duration: 4,*/}
                            {/*    repeat: Infinity,*/}
                            {/*    ease: "easeInOut"*/}
                            {/*  }}*/}
                            {/*  className="absolute -top-4 -right-4 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg z-20"*/}
                            {/*>*/}
                            {/*  <div className="flex items-center gap-2">*/}
                            {/*    <Award className="h-5 w-5" />*/}
                            {/*    <span className="font-semibold">Premium Quality</span>*/}
                            {/*  </div>*/}
                            {/*</motion.div>*/}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Scrolling Text Section */}
            {/*<section className="relative py-8 bg-gradient-section-1 overflow-hidden">*/}
            {/*    <motion.div*/}
            {/*        animate={{x: [0, -100]}}*/}
            {/*        transition={{*/}
            {/*            duration: 20,*/}
            {/*            repeat: Infinity,*/}
            {/*            ease: "linear"*/}
            {/*        }}*/}
            {/*        className="flex whitespace-nowrap text-8xl sm:text-9xl lg:text-[12rem] font-bold text-primary/10 select-none pointer-events-none"*/}
            {/*    >*/}
            {/*        {Array.from({length: 10}, (_, i) => (*/}
            {/*            <span key={i} className="mr-20">*/}
            {/*  CYPHERON*/}
            {/*</span>*/}
            {/*        ))}*/}
            {/*    </motion.div>*/}
            {/*</section>*/}

            {/* Services Cards */}
            <section className="py-20 bg-gradient-section-1 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                            Website Types We Specialize In
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Choose the perfect solution for your business needs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {serviceCards.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: index * 0.2}}
                                viewport={{once: true}}
                                whileHover={{y: -10}}
                            >
                                <Card
                                    className={`bg-gradient-card border-border transition-all duration-300 relative overflow-hidden group hover:shadow-glow h-full`}>
                                    {/* Gradient Overlay */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}/>

                                    <CardHeader className="text-center relative z-10">
                                        <motion.div
                                            whileHover={{scale: 1.1, rotate: 5}}
                                            transition={{duration: 0.3}}
                                            className="flex justify-center mb-4"
                                        >
                                            <div
                                                className="p-3 rounded-full bg-supporting/20 group-hover:bg-supporting/30 transition-colors">
                                                {service.icon}
                                            </div>
                                        </motion.div>
                                        <CardTitle
                                            className="text-xl font-semibold text-primary group-hover:text-primary/90">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center relative z-10">
                                        <CardDescription className="text-muted-foreground mb-6">
                                            {service.description}
                                        </CardDescription>

                                        {/* Feature List */}
                                        <div className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx}
                                                     className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                                    <ChevronRight className="h-3 w-3 text-supporting"/>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>

                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="mt-4 group-hover:bg-supporting/20 transition-colors"
                                        >
                                            Learn More
                                            <ArrowRight
                                                className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform"/>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-section-2">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                            Why Choose Cypheron?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We deliver exceptional web solutions with a focus on results
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Modern Design",
                                description: "Cutting-edge aesthetics that captivate your audience",
                                icon: "🎨"
                            },
                            {
                                title: "Mobile First",
                                description: "Responsive designs that work perfectly on all devices",
                                icon: "📱"
                            },
                            {
                                title: "Fast Loading",
                                description: "Optimized performance for better user experience",
                                icon: "⚡"
                            },
                            {
                                title: "SEO Ready",
                                description: "Built with search engine optimization in mind",
                                icon: "🚀"
                            }
                        ].map((feature, index) => (
                            <div
                                key={feature.title}
                                className="text-center fade-in"
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-20 bg-gradient-section-3 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-primary mb-4">Proven Results</h2>
                        <p className="text-muted-foreground">Numbers that speak for themselves</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            {
                                number: stats.projects,
                                suffix: "+",
                                label: "Projects Completed",
                                icon: <Globe className="h-6 w-6"/>
                            },
                            {
                                number: stats.satisfaction,
                                suffix: "%",
                                label: "Client Satisfaction",
                                icon: <Star className="h-6 w-6"/>
                            },
                            {
                                number: stats.experience,
                                suffix: "+",
                                label: "Years Experience",
                                icon: <Award className="h-6 w-6"/>
                            },
                            {
                                number: stats.support,
                                suffix: "/7",
                                label: "Support Available",
                                icon: <Users className="h-6 w-6"/>
                            }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{opacity: 0, scale: 0.5}}
                                whileInView={{opacity: 1, scale: 1}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                                viewport={{once: true}}
                                className="group"
                            >
                                <Card
                                    className="p-6 bg-background/50 border-border hover:bg-background transition-all duration-300 hover:shadow-glow">
                                    <div
                                        className="flex justify-center mb-3 text-supporting group-hover:text-primary transition-colors">
                                        {stat.icon}
                                    </div>
                                    <motion.div
                                        className="text-3xl sm:text-4xl font-bold text-primary mb-2"
                                        whileHover={{scale: 1.1}}
                                    >
                                        {stat.number}{stat.suffix}
                                    </motion.div>
                                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gradient-card">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                            Our Process
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            From concept to launch, we guide you through every step
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Discovery & Planning",
                                description: "We understand your goals, target audience, and requirements to create the perfect strategy."
                            },
                            {
                                step: "02",
                                title: "Design & Development",
                                description: "Our team crafts beautiful, functional websites using the latest technologies and best practices."
                            },
                            {
                                step: "03",
                                title: "Launch & Support",
                                description: "We launch your website and provide ongoing support to ensure optimal performance."
                            }
                        ].map((process, index) => (
                            <Card
                                key={process.step}
                                className="text-center bg-background border-border hover-scale"
                                style={{animationDelay: `${index * 0.2}s`}}
                            >
                                <CardHeader>
                                    <div className="text-3xl font-bold text-supporting mb-4">{process.step}</div>
                                    <CardTitle className="text-xl text-primary">{process.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-muted-foreground">
                                        {process.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            {/*<section className="py-20 bg-gradient-section-1">*/}
            {/*  <div className="container mx-auto px-4 sm:px-6 lg:px-8">*/}
            {/*    <motion.div */}
            {/*      initial={{ opacity: 0, y: 30 }}*/}
            {/*      whileInView={{ opacity: 1, y: 0 }}*/}
            {/*      transition={{ duration: 0.6 }}*/}
            {/*      viewport={{ once: true }}*/}
            {/*      className="text-center mb-16"*/}
            {/*    >*/}
            {/*      <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">*/}
            {/*        What Our Clients Say*/}
            {/*      </h2>*/}
            {/*      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">*/}
            {/*        Don't just take our word for it - hear from our satisfied clients*/}
            {/*      </p>*/}
            {/*    </motion.div>*/}
            {/*    */}
            {/*    /!* Interactive Carousel *!/*/}
            {/*    <div className="max-w-5xl mx-auto">*/}
            {/*      <Carousel className="w-full">*/}
            {/*        <CarouselContent className="-ml-4">*/}
            {/*          {testimonials.map((testimonial, index) => (*/}
            {/*            <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2 lg:basis-1/3">*/}
            {/*              <motion.div*/}
            {/*                initial={{ opacity: 0, y: 50 }}*/}
            {/*                whileInView={{ opacity: 1, y: 0 }}*/}
            {/*                transition={{ duration: 0.6, delay: index * 0.1 }}*/}
            {/*                viewport={{ once: true }}*/}
            {/*                whileHover={{ y: -5 }}*/}
            {/*              >*/}
            {/*                <Card className="bg-gradient-card border-border hover-glow transition-all duration-300 h-full">*/}
            {/*                  <CardHeader className="pb-4">*/}
            {/*                    <div className="flex items-center gap-4 mb-4">*/}
            {/*                      <div className="text-3xl">{testimonial.avatar}</div>*/}
            {/*                      <div>*/}
            {/*                        <div className="font-semibold text-primary">{testimonial.name}</div>*/}
            {/*                        <div className="text-sm text-muted-foreground">{testimonial.company}</div>*/}
            {/*                      </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="flex gap-1 mb-3">*/}
            {/*                      {[...Array(testimonial.rating)].map((_, i) => (*/}
            {/*                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />*/}
            {/*                      ))}*/}
            {/*                    </div>*/}
            {/*                  </CardHeader>*/}
            {/*                  <CardContent>*/}
            {/*                    <CardDescription className="text-muted-foreground italic leading-relaxed">*/}
            {/*                      "{testimonial.testimonial}"*/}
            {/*                    </CardDescription>*/}
            {/*                  </CardContent>*/}
            {/*                </Card>*/}
            {/*              </motion.div>*/}
            {/*            </CarouselItem>*/}
            {/*          ))}*/}
            {/*        </CarouselContent>*/}
            {/*        <div className="flex justify-center gap-4 mt-8">*/}
            {/*          <CarouselPrevious className="relative inset-0 translate-y-0 hover:bg-primary hover:text-primary-foreground" />*/}
            {/*          <CarouselNext className="relative inset-0 translate-y-0 hover:bg-primary hover:text-primary-foreground" />*/}
            {/*        </div>*/}
            {/*      </Carousel>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</section>*/}

            {/* FAQ Section */}
            <section className="py-20 bg-gradient-section-2">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Get answers to common questions about our services
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-6">
                            {[
                                {
                                    question: "How long does it take to build a website?",
                                    answer: "Typically 2-6 weeks depending on complexity. We provide detailed timelines during our initial consultation."
                                },
                                {
                                    question: "Do you provide ongoing maintenance?",
                                    answer: "Yes, we offer comprehensive maintenance packages to keep your website secure, updated, and performing optimally."
                                },
                                {
                                    question: "Can you help with digital marketing?",
                                    answer: "Absolutely! We offer Google Ads, Facebook Ads, SEO services, and e-commerce marketing solutions."
                                },
                                {
                                    question: "What's included in your e-commerce solutions?",
                                    answer: "Complete online stores with payment processing, inventory management, analytics, and marketing tools integration."
                                }
                            ].map((faq, index) => (
                                <Card
                                    key={index}
                                    className="bg-background border-border slide-up"
                                    style={{animationDelay: `${index * 0.1}s`}}
                                >
                                    <CardHeader>
                                        <CardTitle className="text-lg text-primary">{faq.question}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-muted-foreground">
                                            {faq.answer}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-accent text-accent-foreground relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-background blur-xl"/>
                    <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-primary blur-xl"/>
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-supporting blur-2xl"/>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Ready to Transform Your Digital Presence?
                        </h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                            Let's discuss your project and create something amazing together. Get a free consultation
                            today!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-background text-foreground hover:bg-background/90 shadow-lg group"
                                >
                                    <Link to="/contact" className="flex items-center">
                                        Get Started Today
                                        <ArrowRight
                                            className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"/>
                                    </Link>
                                </Button>
                            </motion.div>

                            <div className="flex items-center gap-4 text-sm opacity-80">
                                <div className="flex items-center gap-1">
                                    <Zap className="h-4 w-4"/>
                                    <span>Free Consultation</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Award className="h-4 w-4"/>
                                    <span>Guaranteed Quality</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
