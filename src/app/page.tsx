"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Trophy, Clock, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HowItWorksModal } from "@/components/HowItWorksModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-gray-900 dark:via-purple-900 dark:to-cyan-900">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Hero Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-lg border border-purple-200 dark:border-cyan-500/30"
          >
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-cyan-400" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              The Ultimate AI Creativity Arena
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500 bg-clip-text text-transparent">
              PromptHeist
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-700 dark:text-gray-200 mb-12 max-w-3xl mx-auto font-medium"
          >
            Battle AI opponents in creative prompt challenges. 60 seconds. One winner. 
            <span className="text-purple-600 dark:text-cyan-400 font-bold"> Infinite possibilities.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="/battle">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-cyan-500 dark:to-purple-600 hover:from-purple-700 hover:to-pink-700 dark:hover:from-cyan-600 dark:hover:to-purple-700 text-white shadow-2xl shadow-purple-500/50 dark:shadow-cyan-500/50 border-0 group"
              >
                <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Start Battle
              </Button>
            </Link>
            <Link href="/leaderboard">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-purple-600 dark:border-cyan-500 text-purple-600 dark:text-cyan-400 hover:bg-purple-50 dark:hover:bg-cyan-500/10 group"
              >
                <Trophy className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Leaderboard
              </Button>
            </Link>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => setShowModal(true)}
              className="text-lg px-8 py-6 text-gray-700 dark:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-800/50"
            >
              How It Works
            </Button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: Clock, label: "60 Second Battles", value: "Fast-Paced" },
              { icon: Users, label: "Global Players", value: "10,000+" },
              { icon: Sparkles, label: "Daily Challenges", value: "Unlimited" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-purple-200 dark:border-cyan-500/30"
              >
                <stat.icon className="w-8 h-8 text-purple-600 dark:text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <HowItWorksModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}