"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { leaderboardData } from "@/lib/mockData";

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-gray-900 dark:via-purple-900 dark:to-cyan-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Trophy className="w-20 h-20 text-purple-600 dark:text-cyan-400 mx-auto mb-4" />
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent">
            Global Leaderboard
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200">
            The world's top creative minds battle here
          </p>
        </motion.div>

        {/* Top 3 Podium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto"
        >
          {/* 2nd Place */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-4 border-gray-400 dark:border-gray-500 mt-8"
          >
            <div className="text-center">
              <Medal className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <div className="text-6xl mb-2">{leaderboardData[1].avatar}</div>
              <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                {leaderboardData[1].player}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                {leaderboardData[1].country}
              </div>
              <div className="text-3xl font-black text-gray-700 dark:text-gray-300">
                {leaderboardData[1].score.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">points</div>
            </div>
          </motion.div>

          {/* 1st Place */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-6 shadow-2xl border-4 border-yellow-500 relative"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                👑 CHAMPION
              </div>
            </div>
            <div className="text-center mt-2">
              <Trophy className="w-16 h-16 text-white mx-auto mb-2" />
              <div className="text-7xl mb-2">{leaderboardData[0].avatar}</div>
              <div className="text-lg font-black text-white mb-1">
                {leaderboardData[0].player}
              </div>
              <div className="text-sm text-yellow-100 mb-2">
                {leaderboardData[0].country}
              </div>
              <div className="text-4xl font-black text-white">
                {leaderboardData[0].score.toLocaleString()}
              </div>
              <div className="text-sm text-yellow-100">points</div>
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-4 border-orange-600 dark:border-orange-700 mt-8"
          >
            <div className="text-center">
              <Award className="w-12 h-12 text-orange-600 mx-auto mb-2" />
              <div className="text-6xl mb-2">{leaderboardData[2].avatar}</div>
              <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                {leaderboardData[2].player}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                {leaderboardData[2].country}
              </div>
              <div className="text-3xl font-black text-orange-600">
                {leaderboardData[2].score.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">points</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Full Leaderboard Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-2 border-purple-500/30 dark:border-cyan-500/30"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-cyan-600 dark:to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                    Player
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                    Wins
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                    Country
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {leaderboardData.map((player, index) => (
                  <motion.tr
                    key={player.rank}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.1)" }}
                    className="transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`text-2xl font-black ${
                          player.rank === 1 ? "text-yellow-500" :
                          player.rank === 2 ? "text-gray-400" :
                          player.rank === 3 ? "text-orange-600" :
                          "text-gray-600 dark:text-gray-400"
                        }`}>
                          #{player.rank}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{player.avatar}</div>
                        <div className="font-bold text-gray-900 dark:text-white">
                          {player.player}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                          {player.score.toLocaleString()}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                        {player.wins} wins
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-2xl">{player.country}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Battle History Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-purple-500/30 dark:border-cyan-500/30"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <Zap className="w-8 h-8 mr-3 text-purple-600 dark:text-cyan-400" />
            Recent Battle History
          </h2>
          <div className="space-y-4">
            {[
              { winner: "PromptMaster3000", loser: "AIWhisperer", score: "95-88", time: "2 min ago" },
              { winner: "CreativeGenius", loser: "CodePoet", score: "92-85", time: "5 min ago" },
              { winner: "ThinkTankPro", loser: "PixelPuncher", score: "89-82", time: "8 min ago" },
              { winner: "WordSmith99", loser: "NeuralNinja", score: "91-87", time: "12 min ago" },
            ].map((battle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-700 border border-purple-200 dark:border-cyan-500/20"
              >
                <div className="flex items-center space-x-4">
                  <Trophy className="w-6 h-6 text-green-500" />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {battle.winner} <span className="text-green-600 dark:text-green-400">defeated</span> {battle.loser}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Score: {battle.score}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {battle.time}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/battle">
            <Button
              size="lg"
              className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-cyan-500 dark:to-purple-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl"
            >
              <Zap className="w-6 h-6 mr-2" />
              Start Your Battle
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
