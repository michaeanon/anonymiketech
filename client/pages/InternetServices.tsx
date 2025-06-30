import { Shield, Lock, Globe, Zap, Server, Eye } from "lucide-react";
import { motion } from "framer-motion";
import MatrixRain from "../components/MatrixRain";
import ServiceHero from "../components/ServiceHero";
import PricingCard from "../components/PricingCard";
import ContactButtons from "../components/ContactButtons";

export default function InternetServices() {
  const features = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Military-Grade Encryption",
      description: "AES-256 encryption protecting your data from prying eyes.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Server Network",
      description: "Access content worldwide with servers in 50+ countries.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Speeds",
      description: "Premium bandwidth with no throttling or speed limits.",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Dedicated Servers",
      description: "Exclusive server access for maximum performance.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Zero Logs Policy",
      description: "Complete anonymity with no activity logging.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "DDoS Protection",
      description: "Advanced protection against cyber attacks.",
    },
  ];

  const vpnPlans = [
    {
      title: "Basic VPN",
      price: "KSH 500",
      period: "week",
      features: [
        "5 Device Connections",
        "Basic Server Access",
        "Standard Encryption",
        "Email Support",
        "Kill Switch Protection",
      ],
    },
    {
      title: "Pro VPN",
      price: "KSH 1,500",
      period: "month",
      popular: true,
      features: [
        "Unlimited Devices",
        "Premium Server Access",
        "Military-Grade Encryption",
        "24/7 Priority Support",
        "Advanced Kill Switch",
        "Split Tunneling",
        "Ad & Malware Blocking",
      ],
    },
    {
      title: "Elite VPN",
      price: "KSH 4,000",
      period: "3 months",
      features: [
        "Everything in Pro",
        "Dedicated IP Address",
        "Personal Server Setup",
        "Custom Configuration",
        "VIP Support Channel",
        "Advanced Analytics",
      ],
    },
  ];

  const bundlePlans = [
    {
      title: "Weekly Bundle",
      price: "KSH 200",
      period: "week",
      features: [
        "10GB High-Speed Data",
        "Social Media Access",
        "Video Streaming",
        "Basic VPN Included",
        "WhatsApp Support",
      ],
    },
    {
      title: "Monthly Bundle",
      price: "KSH 700",
      period: "month",
      popular: true,
      features: [
        "50GB High-Speed Data",
        "Unlimited Social Media",
        "HD Video Streaming",
        "Pro VPN Included",
        "Priority Support",
        "Hotspot Sharing",
      ],
    },
    {
      title: "Unlimited Bundle",
      price: "KSH 2,000",
      period: "month",
      features: [
        "Unlimited High-Speed Data",
        "Premium Content Access",
        "4K Video Streaming",
        "Elite VPN Included",
        "24/7 VIP Support",
        "Advanced Analytics",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-hacker-bg text-hacker-green relative">
      <MatrixRain />

      <div className="relative z-10">
        <ServiceHero
          title="INTERNET SERVICES"
          subtitle="// Secure & Anonymous Connectivity"
          description="Access the internet with complete anonymity and security. Our VPN services and data bundles provide military-grade protection while ensuring lightning-fast speeds for all your online activities."
          icon={<Shield />}
          backgroundPattern="VPN"
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
              // SECURITY FEATURES
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

        {/* VPN Pricing Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-tech font-bold text-center mb-16 glow-text"
            >
              // VPN PACKAGES
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {vpnPlans.map((plan, index) => (
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

        {/* Data Bundles Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-tech font-bold text-center mb-16 glow-text"
            >
              // BINGWA BUNDLES
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {bundlePlans.map((plan, index) => (
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
                Ready to Go Anonymous?
              </h3>
              <p className="text-xl text-hacker-green-dim mb-8 max-w-2xl mx-auto">
                Join thousands of users who trust ANONYMIKETECH for secure and
                private internet access.
              </p>
              <ContactButtons />
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
