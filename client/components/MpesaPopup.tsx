import { motion, AnimatePresence } from "framer-motion";
import { X, Smartphone, CreditCard } from "lucide-react";
import { useState } from "react";

interface MpesaPopupProps {
  isOpen: boolean;
  onClose: () => void;
  packageTitle: string;
  price: string;
  period: string;
}

export default function MpesaPopup({
  isOpen,
  onClose,
  packageTitle,
  price,
  period,
}: MpesaPopupProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("send_money");

  const handlePayment = () => {
    if (!phoneNumber) {
      alert("Please enter your phone number");
      return;
    }

    setIsProcessing(true);

    // Simulate M-Pesa STK push
    setTimeout(() => {
      setIsProcessing(false);
      alert(
        `M-Pesa payment request sent to ${phoneNumber}. Check your phone to complete payment for ${packageTitle} (${price}/${period})`,
      );
      onClose();
      setPhoneNumber("");
    }, 2000);
  };

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

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="relative w-full max-w-md bg-hacker-terminal glow-border rounded-lg overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-hacker-green/20 to-hacker-terminal p-6 border-b border-hacker-green">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-6 h-6 text-hacker-green" />
                  <div>
                    <h2 className="text-xl font-tech font-bold text-hacker-green-bright glow-text">
                      M-PESA PAYMENT
                    </h2>
                    <p className="text-sm text-hacker-green-dim font-tech">
                      {packageTitle} - {price}/{period}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-hacker-green/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-hacker-green" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Payment Method Selection */}
              <div>
                <h3 className="text-lg font-tech font-bold text-hacker-green-bright mb-4">
                  Select Payment Method:
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-3 glow-border rounded-lg cursor-pointer hover:bg-hacker-green/10 transition-all">
                    <input
                      type="radio"
                      name="payment_method"
                      value="send_money"
                      checked={paymentMethod === "send_money"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-hacker-green"
                    />
                    <Smartphone className="w-5 h-5 text-hacker-green" />
                    <div>
                      <div className="font-tech text-hacker-green-bright">
                        Send Money
                      </div>
                      <div className="text-sm text-hacker-green-dim">
                        0113313240
                      </div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 glow-border rounded-lg cursor-pointer hover:bg-hacker-green/10 transition-all">
                    <input
                      type="radio"
                      name="payment_method"
                      value="till"
                      checked={paymentMethod === "till"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-hacker-green"
                    />
                    <CreditCard className="w-5 h-5 text-hacker-green" />
                    <div>
                      <div className="font-tech text-hacker-green-bright">
                        Till Number
                      </div>
                      <div className="text-sm text-hacker-green-dim">
                        4930086
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Phone Number Input */}
              <div>
                <label className="block text-sm font-tech font-bold text-hacker-green-bright mb-2">
                  Your Phone Number:
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="254XXXXXXXXX"
                  className="w-full p-3 bg-hacker-bg glow-border rounded-lg font-tech text-hacker-green-bright placeholder-hacker-green-dim focus:outline-none focus:ring-2 focus:ring-hacker-green"
                />
                <p className="text-xs text-hacker-green-dim mt-1">
                  Enter your M-Pesa registered phone number
                </p>
              </div>

              {/* Amount Display */}
              <div className="glow-border rounded-lg p-4 bg-hacker-bg/50 text-center">
                <div className="text-sm text-hacker-green-dim mb-1">
                  Amount to Pay:
                </div>
                <div className="text-2xl font-tech font-bold text-hacker-green">
                  {price}
                </div>
              </div>

              {/* Pay Button */}
              <button
                onClick={handlePayment}
                disabled={isProcessing || !phoneNumber}
                className={`w-full py-4 px-6 rounded-lg font-tech font-bold transition-all duration-300 ${
                  isProcessing || !phoneNumber
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-hacker-green text-hacker-bg hover:bg-hacker-green-bright hover:animate-glow-pulse"
                }`}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-hacker-bg border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </span>
                ) : (
                  "🚀 Pay with M-Pesa"
                )}
              </button>

              <p className="text-xs text-hacker-green-dim text-center">
                You'll receive an STK push notification to complete payment
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
