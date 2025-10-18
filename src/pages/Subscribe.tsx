import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Lock, LogOut, User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { AuthForms } from "@/components/AuthForms";

const Subscribe = () => {
  const { user, loading, signOut } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: ""
  });

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "$29",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 websites",
        "Basic templates",
        "Email support",
        "SSL certificate",
        "Mobile responsive"
      ]
    },
    {
      id: "pro",
      name: "Professional",
      price: "$79",
      period: "month",
      description: "Best for growing businesses",
      popular: true,
      features: [
        "Up to 25 websites",
        "Premium templates",
        "Priority support",
        "Advanced SEO tools",
        "Custom domain",
        "E-commerce integration",
        "Analytics dashboard"
      ]
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$199",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited websites",
        "Custom development",
        "24/7 phone support",
        "White-label solutions",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security"
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Demo only - No actual payment will be processed!");
  };

  const selectedPlanData = plans.find(plan => plan.id === selectedPlan);

  const handleLogout = async () => {
    await signOut();
  };

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Show auth forms if user is not authenticated
  if (!user) {
    return <AuthForms />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              Welcome back, {user.email}
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
          <Badge variant="secondary" className="mb-4">
            DEMO MODE - No Real Payments
          </Badge>
          <h1 className="text-4xl font-bold text-gradient-primary mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Plans Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Available Plans</h2>
            {plans.map((plan) => (
              <Card 
                key={plan.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedPlan === plan.id 
                    ? 'ring-2 ring-primary shadow-lg' 
                    : ''
                } ${plan.popular ? 'border-primary' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {plan.name}
                        {plan.popular && (
                          <Badge variant="default">Most Popular</Badge>
                        )}
                      </CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">
                        {plan.price}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        per {plan.period}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Checkout Section */}
          <div className="lg:sticky lg:top-8">
            <Card className="shadow-xl border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Checkout
                </CardTitle>
                <CardDescription>
                  Complete your subscription to {selectedPlanData?.name} plan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Selected Plan Summary */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{selectedPlanData?.name} Plan</span>
                    <span className="font-bold text-primary">
                      {selectedPlanData?.price}/{selectedPlanData?.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {selectedPlanData?.description}
                  </p>
                </div>

                {/* Checkout Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        name="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3"
                    size="lg"
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Subscribe to {selectedPlanData?.name} - {selectedPlanData?.price}/{selectedPlanData?.period}
                  </Button>

                  <div className="text-xs text-muted-foreground text-center space-y-1">
                    <p>🔒 Secure checkout powered by Stripe</p>
                    <p>Cancel anytime. No setup fees.</p>
                    <p className="font-medium text-orange-600">
                      ⚠️ DEMO MODE: No actual payment will be processed
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;