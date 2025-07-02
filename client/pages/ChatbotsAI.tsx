import { Bot, MessageSquare, Brain, Zap, Users, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import MatrixRain from "../components/MatrixRain";
import ServiceHero from "../components/ServiceHero";
import PricingCard from "../components/PricingCard";
import ContactButtons from "../components/ContactButtons";
import MobileMenu from "../components/MobileMenu";

export default function ChatbotsAI() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Advanced AI",
      description: "GPT-powered intelligent conversations and responses.",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Multi-Platform",
      description: "WhatsApp, Telegram, Discord, and web integration.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Responses",
      description: "Lightning-fast automated replies 24/7.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Support",
      description: "Handle unlimited customer inquiries simultaneously.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics",
      description: "Detailed insights and conversation analytics.",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Custom Training",
      description: "Trained specifically for your business needs.",
    },
  ];

  const useCases = [
    {
      title: "E-Commerce Support",
      description:
        "Automate order tracking, product recommendations, and customer service",
      features: [
        "Order Status Updates",
        "Product Recommendations",
        "Payment Assistance",
        "Returns & Refunds",
      ],
    },
    {
      title: "Lead Generation",
      description:
        "Capture and qualify leads automatically through intelligent conversations",
      features: [
        "Lead Qualification",
        "Contact Collection",
        "Appointment Booking",
        "Follow-up Automation",
      ],
    },
    {
      title: "Educational Assistant",
      description: "Provide instant answers and learning support for students",
      features: [
        "Course Information",
        "Assignment Help",
        "Study Schedules",
        "Progress Tracking",
      ],
    },
    {
      title: "Business Operations",
      description: "Streamline internal processes and employee assistance",
      features: [
        "HR Inquiries",
        "IT Support",
        "Policy Information",
        "Meeting Scheduling",
      ],
    },
  ];

  const botPlans = [
    {
      title: "🔶 BOT PANEL HOSTING",
      price: "KES 100",
      period: "setup",
      features: [
        "💾 Secure Panel Hosting",
        "🔒 24/7 Uptime Monitoring",
        "⚡ Fast Server Performance",
        "🛡️ DDoS Protection",
        "📊 Basic Analytics",
        "💬 Email Support",
      ],
    },
    {
      title: "🔷 BOT PANEL DEPLOYMENT",
      price: "KES 150",
      period: "service",
      features: [
        "🚀 Complete Bot Deployment",
        "⚙️ Configuration Setup",
        "🔧 Custom Integration",
        "📱 WhatsApp Connection",
        "✅ Testing & Validation",
        "📋 Documentation Provided",
      ],
    },
    {
      title: "🔷 PANEL SERVER",
      price: "KES 150",
      period: "monthly",
      popular: true,
      features: [
        "🖥️ Dedicated Panel Server",
        "🔄 Auto-scaling Resources",
        "📈 Performance Monitoring",
        "🔐 Enhanced Security",
        "⚡ Priority Support",
        "📊 Advanced Analytics",
        "🔧 Custom Configurations",
      ],
    },
    {
      title: "Basic Bot",
      price: "KSH 5,000",
      period: "month",
      features: [
        "WhatsApp Integration",
        "Basic AI Responses",
        "Up to 1,000 Messages",
        "Simple Commands",
        "Email Support",
        "Basic Analytics",
      ],
    },
    {
      title: "Smart Bot",
      price: "KSH 15,000",
      period: "month",
      popular: true,
      features: [
        "Multi-Platform Support",
        "Advanced AI (GPT-4)",
        "Up to 10,000 Messages",
        "Custom Training",
        "Priority Support",
        "Advanced Analytics",
        "Integration APIs",
        "Voice Messages",
      ],
    },
    {
      title: "Enterprise AI",
      price: "KSH 40,000",
      period: "month",
      features: [
        "Unlimited Messages",
        "Custom AI Training",
        "Multiple Bot Instances",
        "CRM Integration",
        "24/7 Support",
        "Custom Features",
        "White-label Solution",
        "Dedicated Account Manager",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-hacker-bg text-hacker-green relative">
      <MobileMenu />
      <MatrixRain />

      <div className="relative z-10">
        <ServiceHero
          title="AI CHATBOTS"
          subtitle="// Intelligent Automation"
          description="Transform your customer service and business operations with AI-powered chatbots. Automate conversations, generate leads, and provide 24/7 support across multiple platforms."
          icon={<Bot />}
          backgroundPattern="AI"
        />

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-tech font-bold text-center mb-16 glow-text"
            >
              // AI CAPABILITIES
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glow-border rounded-lg p-6 bg-hacker-terminal/50 backdrop-blur-sm text-center group hover:animate-glow-pulse"
                >
                  <div className="text-hacker-green mb-4 flex justify-center group-hover:animate-pulse">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-tech font-bold text-hacker-green-bright mb-3 glow-text">
                    {feature.title}
                  </h3>
                  <p className="text-hacker-green-dim leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-tech font-bold text-center mb-16 glow-text"
            >
              // USE CASES
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="glow-border rounded-lg p-8 bg-hacker-terminal/50 backdrop-blur-sm group"
                >
                  <h3 className="text-2xl font-tech font-bold text-hacker-green-bright mb-4 glow-text group-hover:animate-flicker">
                    {useCase.title}
                  </h3>
                  <p className="text-hacker-green-dim mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-hacker-green-bright"
                      >
                        <span className="text-hacker-green">●</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-tech font-bold text-center mb-16 glow-text"
            >
              // LIVE DEMO
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="max-w-2xl mx-auto glow-border rounded-lg p-8 bg-hacker-terminal/50 backdrop-blur-sm"
            >
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-hacker-green/20 rounded-lg p-3 max-w-xs">
                    <p className="text-hacker-green-bright font-tech">
                      Hi, I need help with my order
                    </p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-hacker-terminal rounded-lg p-3 max-w-xs border border-hacker-green">
                    <p className="text-hacker-green-bright font-tech">
                      Hello! I'd be happy to help you with your order. Could you
                      please provide your order number?
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-hacker-green/20 rounded-lg p-3 max-w-xs">
                    <p className="text-hacker-green-bright font-tech">
                      #ORD12345
                    </p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-hacker-terminal rounded-lg p-3 max-w-xs border border-hacker-green">
                    <p className="text-hacker-green-bright font-tech">
                      Great! Order #ORD12345 was shipped yesterday and should
                      arrive by tomorrow. Tracking: TRK789456123. Is there
                      anything else I can help you with?
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-6">
                <p className="text-hacker-green-dim font-tech">
                  // This is how our AI responds in real-time
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-tech font-bold text-center mb-16 glow-text"
            >
              // CHATBOT PACKAGES
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {botPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  period={plan.period}
                  features={plan.features}
                  popular={plan.popular}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="py-16"
        >
          <div className="container mx-auto px-4">
            <div className="glow-border rounded-lg p-12 bg-hacker-terminal/30 backdrop-blur-sm text-center">
              <h3 className="text-3xl md:text-4xl font-tech font-bold text-hacker-green-bright mb-6 glow-text">
                Ready to Automate Your Business?
              </h3>
              <p className="text-xl text-hacker-green-dim mb-8 max-w-2xl mx-auto">
                Start your AI chatbot journey today and revolutionize how you
                interact with customers.
              </p>
              <ContactButtons />
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
