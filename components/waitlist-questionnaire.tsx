"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"

const questions = [
  {
    id: 1,
    question: "What is your level of knowledge in Web3?",
    options: ["Beginner", "Amateur", "Expert"],
  },
  {
    id: 2,
    question: "What do you want to learn in Web3?",
    options: ["Gaming", "DeFi", "NFTs", "DAOs", "Smart Contracts"],
  },
  {
    id: 3,
    question: "Which blockchain are you most interested in?",
    options: ["Ethereum", "Solana", "Sui", "Polkadot", "Other"],
  },
  {
    id: 4,
    question: "How often do you engage with Web3 applications?",
    options: ["Daily", "Weekly", "Monthly", "Rarely", "Never"],
  },
  {
    id: 5,
    question: "What's your primary motivation for learning Web3?",
    options: ["Career opportunities", "Investment", "Curiosity", "Building projects", "Other"],
  },
  {
    id: 6,
    question: "Have you ever owned cryptocurrency?",
    options: ["Yes", "No"],
  },
  {
    id: 7,
    question: "Which area of Web3 do you find most challenging?",
    options: ["Technical concepts", "User experience", "Security", "Regulatory aspects", "None"],
  },
  {
    id: 8,
    question: "How do you prefer to learn?",
    options: [
      "Video tutorials",
      "Interactive coding",
      "Reading documentation",
      "Hands-on projects",
      "Community forums",
    ],
  },
  {
    id: 9,
    question: "What's your background?",
    options: ["Developer", "Designer", "Business/Finance", "Student", "Other"],
  },
  {
    id: 10,
    question: "How did you hear about 4dummies?",
    options: ["Social media", "Friend/Colleague", "Search engine", "Advertisement", "Other"],
  },
]

export function WaitlistQuestionnaire({ onClose }: { onClose: () => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""))
  const [submitted, setSubmitted] = useState(false)

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answer
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setSubmitted(true)
      // Here you would typically send the answers to your backend
      console.log("Answers submitted:", answers)
    }
  }

  const handleSubmit = () => {
    setSubmitted(true)
    // Here you would typically send the answers to your backend
    console.log("Answers submitted:", answers)
    // Simulate API call
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4"
      >
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{questions[currentQuestion].question}</h2>
              <RadioGroup onValueChange={handleAnswer} value={answers[currentQuestion]} className="space-y-2">
                {questions[currentQuestion].options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
              <div className="mt-6 flex justify-between items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mr-4">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
                <Button
                  onClick={currentQuestion === questions.length - 1 ? handleSubmit : handleNext}
                  disabled={!answers[currentQuestion]}
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Form Successfully Submitted</h2>
              <p className="text-gray-600">Thank you for joining our waitlist!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

