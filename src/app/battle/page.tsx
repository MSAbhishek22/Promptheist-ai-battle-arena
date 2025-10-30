"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Clock, Zap, Trophy, Users } from "lucide-react";
import { challenges, opponents, aiFeedback } from "@/lib/mockData";
import confetti from "canvas-confetti";
import Link from "next/link";

type BattleState = "idle" | "ready" | "battle" | "judging" | "results";

export default function BattlePage() {
  const [battleState, setBattleState] = useState<BattleState>("idle");
  const [timeLeft, setTimeLeft] = useState(60);
  const [userInput, setUserInput] = useState("");
  const [currentChallenge, setCurrentChallenge] = useState(challenges[0]);
  const [currentOpponent, setCurrentOpponent] = useState(opponents[0]);
  const [opponentProgress, setOpponentProgress] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [didWin, setDidWin] = useState(false);

  const startBattle = useCallback(() => {
    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
    const randomOpponent = opponents[Math.floor(Math.random() * opponents.length)];
    
    setCurrentChallenge(randomChallenge);
    setCurrentOpponent(randomOpponent);
    setUserInput("");
    setTimeLeft(60);
    setOpponentProgress(0);
    setBattleState("ready");
    
    setTimeout(() => {
      setBattleState("battle");
    }, 2000);
  }, []);

  useEffect(() => {
    if (battleState !== "battle") return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const opponentTimer = setInterval(() => {
      setOpponentProgress((prev) => {
        const increment = Math.random() * 3 + 1;
        return Math.min(prev + increment, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(opponentTimer);
    };
  }, [battleState]);

  const handleSubmit = () => {
    if (battleState !== "battle") return;
    
    setBattleState("judging");
    
    setTimeout(() => {
      const wordCount = userInput.trim().split(/\s+/).length;
      const lengthScore = Math.min(wordCount * 2, 40);
      const randomBonus = Math.floor(Math.random() * 40) + 20;
      const pScore = Math.min(lengthScore + randomBonus, 100);
      
      const oScore = Math.floor(Math.random() * 30) + 60;
      
      const matchingFeedback = aiFeedback.find(f => 
        pScore >= f.score - 5 && pScore <= f.score + 5
      ) || aiFeedback[Math.floor(aiFeedback.length / 2)];
      
      setPlayerScore(pScore);
      setOpponentScore(oScore);
      setFeedback(matchingFeedback.feedback);
      
      const won = pScore > oScore;
      setDidWin(won);
      
      setBattleState("results");
      
      if (won) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#8B5CF6", "#EC4899", "#06B6D4"],
        });
        
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
          });
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
          });
        }, 250);
      }
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-gray-900 dark:via-purple-900 dark:to-cyan-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {battleState === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-20"
            >
              <Zap className="w-24 h-24 text-purple-600 dark:text-cyan-400 mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent">
                Battle Arena
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-200 mb-8">
                Ready to test your creative skills?
              </p>
              <Button
                size="lg"
                onClick={startBattle}
                className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-cyan-500 dark:to-purple-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl"
              >
                <Zap className="w-6 h-6 mr-2" />
                Find Match
              </Button>
            </motion.div>
          )}

          {battleState === "ready" && (
            <motion.div
              key="ready"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-20"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: 2 }}
                className="text-8xl font-black mb-8 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent"
              >
                GET READY!
              </motion.div>
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="text-4xl">{currentOpponent.avatar}</div>
                <div className="text-2xl font-bold text-gray-700 dark:text-gray-200">
                  vs
                </div>
                <div className="text-4xl">👤</div>
              </div>
              <p className="text-xl text-gray-700 dark:text-gray-200">
                Facing <span className="font-bold text-purple-600 dark:text-cyan-400">{currentOpponent.name}</span>
              </p>
            </motion.div>
          )}

          {battleState === "battle" && (
            <motion.div
              key="battle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Timer */}
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-purple-500/30 dark:border-cyan-500/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-6 h-6 text-purple-600 dark:text-cyan-400" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {timeLeft}s
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Time Remaining
                  </span>
                </div>
                <Progress value={(timeLeft / 60) * 100} className="h-3" />
              </div>

              {/* Challenge */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 dark:from-cyan-500 dark:to-purple-600 rounded-2xl p-8 shadow-2xl text-white">
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="w-6 h-6" />
                  <span className="text-sm font-bold uppercase tracking-wider">
                    Your Challenge
                  </span>
                </div>
                <p className="text-2xl font-bold leading-relaxed">
                  {currentChallenge.prompt}
                </p>
              </div>

              {/* Grid Layout */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Player Section */}
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-green-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="text-3xl">👤</div>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">You</span>
                    </div>
                    <span className="text-sm px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-medium">
                      Active
                    </span>
                  </div>
                  <Textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your creative response here..."
                    className="min-h-[200px] text-lg resize-none"
                    autoFocus
                  />
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {userInput.length} characters
                    </span>
                    <Button
                      onClick={handleSubmit}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                    >
                      Submit
                    </Button>
                  </div>
                </div>

                {/* Opponent Section */}
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-red-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="text-3xl">{currentOpponent.avatar}</div>
                      <div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {currentOpponent.name}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          Level {currentOpponent.level} {currentOpponent.country}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full font-medium">
                      Writing...
                    </span>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 min-h-[200px] relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="w-16 h-16 text-gray-300 dark:text-gray-600" />
                    </div>
                    <div className="relative z-10 space-y-2">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ width: 0 }}
                          animate={{ width: opponentProgress > i * 12.5 ? "100%" : "0%" }}
                          className="h-3 bg-gray-300 dark:bg-gray-600 rounded"
                          style={{ maxWidth: `${60 + Math.random() * 40}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">
                        {Math.round(opponentProgress)}%
                      </span>
                    </div>
                    <Progress value={opponentProgress} className="h-2" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {battleState === "judging" && (
            <motion.div
              key="judging"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 mx-auto mb-6"
              >
                <Sparkles className="w-24 h-24 text-purple-600 dark:text-cyan-400" />
              </motion.div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                AI Judges Scoring...
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-200">
                Analyzing creativity, originality, and execution
              </p>
            </motion.div>
          )}

          {battleState === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              {/* Result Banner */}
              <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                className={`rounded-2xl p-8 shadow-2xl text-center ${
                  didWin
                    ? "bg-gradient-to-br from-green-500 to-emerald-600"
                    : "bg-gradient-to-br from-red-500 to-pink-600"
                }`}
              >
                <Trophy className="w-20 h-20 text-white mx-auto mb-4" />
                <h2 className="text-5xl font-black text-white mb-2">
                  {didWin ? "VICTORY!" : "DEFEAT"}
                </h2>
                <p className="text-xl text-white/90">
                  {didWin ? "You've proven your creativity!" : "Keep practicing, challenger!"}
                </p>
              </motion.div>

              {/* Scores */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-4 ${
                    didWin ? "border-green-500" : "border-gray-300 dark:border-gray-600"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-5xl mb-3">👤</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">You</div>
                    <div className="text-6xl font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                      {playerScore}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Your Score</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-4 ${
                    !didWin ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-5xl mb-3">{currentOpponent.avatar}</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {currentOpponent.name}
                    </div>
                    <div className="text-6xl font-black bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                      {opponentScore}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Opponent Score</div>
                  </div>
                </motion.div>
              </div>

              {/* Feedback */}
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-purple-500/30 dark:border-cyan-500/30">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AI Judge Feedback</h3>
                <p className="text-lg text-gray-700 dark:text-gray-200">{feedback}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={startBattle}
                  className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-cyan-500 dark:to-purple-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Battle Again
                </Button>
                <Link href="/leaderboard">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-2 border-purple-600 dark:border-cyan-500 text-purple-600 dark:text-cyan-400"
                  >
                    <Trophy className="w-5 h-5 mr-2" />
                    View Leaderboard
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
