"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Zap, Users, Trophy, Sparkles } from "lucide-react";

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HowItWorksModal({ isOpen, onClose }: HowItWorksModalProps) {
  const steps = [
    {
      icon: Zap,
      title: "Get Your Challenge",
      description: "Receive a creative AI prompt challenge to complete in 60 seconds"
    },
    {
      icon: Users,
      title: "Battle Opponents",
      description: "Compete against AI-generated opponents who are also crafting their responses"
    },
    {
      icon: Sparkles,
      title: "AI Judges Score",
      description: "Our advanced AI judges evaluate creativity, originality, and execution"
    },
    {
      icon: Trophy,
      title: "Climb the Leaderboard",
      description: "Win battles to earn points and rise through the global rankings"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white dark:bg-gray-900 border-2 border-purple-500/20 dark:border-cyan-500/30">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent">
            How PromptHeist Works
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-6 py-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 border border-purple-200 dark:border-cyan-500/20"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 dark:from-cyan-500 dark:to-purple-500 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
          Ready to start your creative heist? Jump into a battle now! 🚀
        </div>
      </DialogContent>
    </Dialog>
  );
}
