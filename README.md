

# ⚔️ PromptHeist — The Ultimate AI Battle Arena

> *“Where creativity meets competition — and every word counts.”*

---

## 🚀 About the Project

**PromptHeist** is a real-time **AI Battle Arena** where players compete to craft the most powerful prompts.
Two users enter, both receive the same challenge — and their prompts face off. The AI judges both responses and crowns a winner based on creativity, clarity, and context relevance.

We built PromptHeist to make **learning prompt engineering fun, social, and competitive** — because why should learning AI feel boring?

---

## 🧠 Why We Built It

AI tools are everywhere — but few people know how to *talk* to them effectively.
PromptHeist bridges that gap by turning the art of prompting into a **gameified learning experience**.
Instead of reading tutorials, users learn through battles, feedback, and laughter.

It’s not just a game. It’s a **playground for AI literacy** — built for hackers, creators, and learners who want to get better at using AI.

---

## ✨ Core Features

* ⚔️ **1v1 Live Battles:** Compete against real users in timed AI prompt duels.
* 🤖 **AI Judges:** AI evaluates and scores prompts instantly.
* 🧩 **Dynamic Challenges:** Endless fun with auto-generated battle topics.
* 🏆 **Leaderboard:** Real-time ranking of top prompt masters.
* 🌗 **Day/Night Mode UI:** Smooth, aesthetic design with React + TailwindCSS.
* ⏱️ **Timer & Instant Results:** Feel the adrenaline of live competition.

> Honest note: the AI-judge and live-multiplayer features above describe the product's design — the dependencies installed in this repo (`package.json`) do not yet include an AI-provider SDK or a realtime engine, so those integrations are still to be wired in.

---

## 🧩 Tech Stack

* **Frontend:** Next.js 15 (Turbopack) + React + TypeScript + Tailwind CSS
* **UI:** shadcn/ui (Radix UI), Framer Motion, Recharts, Three.js (`@react-three/fiber` / `drei`)
* **Data:** Drizzle ORM + libSQL
* **Auth:** better-auth
* **Billing:** Stripe (via autumn-js)

---

## 🚀 How to Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Other scripts:

```bash
npm run build  # production build
npm run start  # serve the production build
npm run lint   # lint
```

---

## 🧠 How AI Powers PromptHeist

* **AI Judges:** Automatically score players’ prompts based on creativity, tone, and relevance.
* **AI Challenges:** Dynamically generate unique battle topics each round.
* **AI Feedback:** Explain why one prompt outperformed the other, encouraging learning through play.

---

## 👨‍💻 Team & Contributions

Built by passionate AI hackers who believe that **fun + learning = mastery**.
Each feature was designed with one goal in mind — to make AI mastery accessible, exciting, and unforgettable.

---

## 🌍 The Vision

We envision **PromptHeist** evolving into a **global AI esports platform**, where creators, learners, and professionals sharpen their prompting skills through play.
Think of it as the **Duolingo of AI prompting** — fast, competitive, and community-driven.

---

## 🧪 Try It Out

1. Join a live battle or play against AI.
2. Craft your prompt before the timer ends.
3. Watch AI judges score both outputs live.
4. Climb the leaderboard, earn badges, and master the art of prompting!

---

## 🏁 Closing Note

PromptHeist isn’t just a project — it’s a glimpse into the **future of AI learning**.
It turns curiosity into competition, and creativity into skill.
So get ready to **steal the spotlight, one prompt at a time.**
