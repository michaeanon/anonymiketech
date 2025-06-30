import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Copy,
  MessageCircle,
  CreditCard,
  Building2,
  Phone,
} from "lucide-react";
import { useState } from "react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageTitle: string;
  price: string;
  period: string;
}

export default function PaymentModal({
  isOpen,
  onClose,
  packageTitle,
  price,
  period,
}: PaymentModalProps) {
  const [copiedField, setCopiedField] = useState("");

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 2000);
  };

  const paymentMethods = [
    {
      title: "Send Money",
      icon: <Phone className="w-6 h-6" />,
      details: "0113313240",
      description: "Direct M-Pesa Transfer",
      fieldKey: "sendmoney",
    },
    {
      title: "Till Number",
      icon: <CreditCard className="w-6 h-6" />,
      details: "4930086",
      description: "Lipa na M-Pesa",
      fieldKey: "till",
    },
    {
      title: "Paybill",
      icon: <Building2 className="w-6 h-6" />,
      details: "Business No: 247247\nAccount No: 0790181410905",
      description: "M-Pesa Paybill",
      fieldKey: "paybill",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="relative w-full max-w-2xl bg-hacker-terminal glow-border rounded-lg overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-hacker-green/20 to-hacker-terminal p-6 border-b border-hacker-green">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-tech font-bold text-hacker-green-bright glow-text">
                    PAYMENT DETAILS
                  </h2>
                  <p className="text-hacker-green-dim font-tech">
                    {packageTitle} - {price}/{period}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-hacker-green/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-hacker-green" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="text-hacker-green-bright font-tech text-lg mb-2">
                  🔃🔃🔃🔃🔃🔃
                </div>
                <p className="text-hacker-green-dim">
                  Choose your payment method:
                </p>
              </motion.div>

              {/* Payment Methods */}
              <div className="space-y-4">
                {paymentMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glow-border rounded-lg p-4 bg-hacker-bg/50 hover:bg-hacker-green/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-hacker-green flex-shrink-0 mt-1">
                        {method.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-tech font-bold text-hacker-green-bright mb-1">
                          {method.title}
                        </h3>
                        <p className="text-sm text-hacker-green-dim mb-2">
                          {method.description}
                        </p>
                        <div className="bg-hacker-terminal rounded p-3 font-tech text-hacker-green-bright whitespace-pre-line">
                          {method.details}
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            method.details.replace("\n", " "),
                            method.fieldKey,
                          )
                        }
                        className="flex-shrink-0 p-2 glow-border rounded hover:bg-hacker-green hover:text-hacker-bg transition-all duration-300"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    {copiedField === method.fieldKey && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-hacker-green text-center mt-2"
                      >
                        ✅ Copied!
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glow-border rounded-lg p-6 bg-gradient-to-r from-hacker-green/10 to-hacker-terminal"
              >
                <div className="text-center space-y-4">
                  <div className="border-t border-hacker-green/30 pt-4">
                    <h4 className="font-tech font-bold text-hacker-green-bright mb-3">
                      📸 NEXT STEPS:
                    </h4>
                    <div className="space-y-2 text-hacker-green-bright">
                      <p className="font-tech">
                        🔶 Send screenshot of your payment to WhatsApp
                      </p>
                      <a
                        href="https://wa.me/+254113313240"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-hacker-green text-hacker-bg px-4 py-2 rounded-lg font-tech font-bold hover:bg-hacker-green-bright transition-all duration-300 hover:animate-glow-pulse"
                      >
                        <MessageCircle className="w-4 h-4" />
                        +254113313240
                      </a>
                    </div>
                  </div>
                  <div className="border-t border-hacker-green/30 pt-4">
                    <p className="text-hacker-green-bright font-tech">
                      🔷 <strong>DEVICE ID HTTP INJECTOR</strong> ✅
                    </p>
                    <p className="text-sm text-hacker-green-dim mt-1">
                      You'll receive setup instructions after payment
                      confirmation
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
