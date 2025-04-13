"use client";

import { Button } from "@/components/ui/button";
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";
import { Calendar, Video, Users, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const LandingPage = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black text-gray-100">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-gray-950/50 backdrop-blur-lg border-b border-gray-800/50">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <Image src="/icons/intellimeet-logo.png" width={40} height={40} alt="MeetHub" className="relative rounded-full" />
          </div>
          <p className="text-[26px] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Intelimeet
          </p>
        </Link>
        <nav className="hidden md:flex space-x-8 text-gray-300">
          <a href="#hero-section" className="hover:text-blue-400 transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </a>
          <a href="#features" className="hover:text-blue-400 transition-colors relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </a>
          <a href="#about" className="hover:text-blue-400 transition-colors relative group">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
          </a>
        </nav>
        <div>
          {isSignedIn ? (
            <SignOutButton>
              <Button variant="outline" className="border-gray-700 text-gray-200 hover:bg-gray-800">
                Logout
              </Button>
            </SignOutButton>
          ) : (
            <SignInButton>
              <Button className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition-all bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 active:scale-95">
                <span className="flex items-center gap-2">
                  Login <Sparkles className="w-4 h-4" />
                </span>
              </Button>
            </SignInButton>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <motion.section 
        initial="initial"
        animate="animate"
        variants={stagger}
        className="relative pt-32 text-center py-24 px-6"
      >
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        <motion.h2 
          variants={fadeInUp}
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
        >
          Boost Your Productivity with <br />AI-Powered Meetings
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Schedule, collaborate, and meet effortlessly with smart automation.
        </motion.p>
        <motion.div 
          variants={fadeInUp}
          className="mt-8 flex justify-center space-x-4"
        >
          {isSignedIn ? (
            <Button className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition-all bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 active:scale-95">
              <Link href="/dashboard" className="flex items-center gap-2">
                Go to Dashboard
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          ) : (
            <SignInButton>
              <Button className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition-all bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 active:scale-95">
                <span className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </SignInButton>
          )}
        </motion.div>
        <motion.div 
          variants={fadeInUp}
          className="mt-16"
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30"></div>
            <div className="relative">
              <Image
                src="/images/landing1.webp"
                width={1000}
                height={500}
                alt="MeetHub Dashboard"
                className="rounded-2xl shadow-2xl border border-gray-800/50"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
        id="features" 
        className="py-24 px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 relative">
          <motion.div 
            variants={fadeInUp}
            className="group p-8 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-blue-500/50 shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="size-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Calendar className="size-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-100">
              Effortless Scheduling
            </h3>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Automated calendar integration for seamless meeting setups.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="group p-8 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-purple-500/50 shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="size-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Video className="size-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-100">
              HD Video Calls
            </h3>
            <p className="mt-4 text-gray-400 leading-relaxed">
              High-quality video calls with real-time transcription.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="group p-8 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-indigo-500/50 shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="size-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="size-8 text-indigo-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-100">
              Smart Collaboration
            </h3>
            <p className="mt-4 text-gray-400 leading-relaxed">
              AI-powered note-taking and task automation.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section id="about" className="py-16 px-6 bg-gray-950/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            About Intelimeet
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Empowering teams with seamless scheduling, collaboration, and smart automation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-12">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row items-center bg-gray-900/50 shadow-xl rounded-xl p-6 border border-gray-800">
            <div className="md:w-1/2">
              <Image
                src="/images/landing4.jpeg"
                width={400}
                height={300}
                alt="Effortless Scheduling"
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-0">
              <h3 className="text-xl font-semibold text-gray-100">
                Seamless Calendar Management
              </h3>
              <p className="text-gray-400 mt-2">
                Effortlessly schedule meetings with an intuitive calendar view, helping you plan efficiently.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row items-center bg-gray-900/50 shadow-xl rounded-xl p-6 border border-gray-800">
            <div className="md:w-1/2">
              <Image
                src="/images/landing2.jpeg"
                width={400}
                height={300}
                alt="Team Collaboration"
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-0">
              <h3 className="text-xl font-semibold text-gray-100">
                Tailor Your Team Connections
              </h3>
              <p className="text-gray-400 mt-2">
                Enhance collaboration by managing meeting schedules and keeping everyone in sync.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col md:flex-row items-center bg-gray-900/50 shadow-xl rounded-xl p-6 border border-gray-800">
            <div className="md:w-1/2">
              <Image
                src="/images/landing3.jpg"
                width={400}
                height={300}
                alt="Video Calls"
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-0">
              <h3 className="text-xl font-semibold text-gray-100">
                Video Calls Made Simple
              </h3>
              <p className="text-gray-400 mt-2">
                Connect face-to-face with easy-to-use video calls, fostering effective communication.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-gray-900/50 shadow-xl rounded-xl p-6 border border-gray-800">
            <div className="md:w-1/2">
              <Image
                src="/images/landing5.png"
                width={400}
                height={300}
                alt="Team Collaboration"
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-0">
              <h3 className="text-xl font-semibold text-gray-100">
                🤖 AI-Powered Conversations
              </h3>
              <p className="text-gray-400 mt-2">
                Seamlessly interact with our intelligent chatbot, designed to assist with scheduling, meeting summaries, and instant responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-900/30 text-center">
        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Unlocking Productivity Peaks
        </h3>
        <div className="mt-8 flex justify-center gap-12 text-gray-300">
          <div>
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">75%</p>
            <p className="text-gray-400">Time Saved on Scheduling</p>
          </div>
          <div>
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">95%</p>
            <p className="text-gray-400">Task Automation Rate</p>
          </div>
          <div>
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">88%</p>
            <p className="text-gray-400">Improved Meeting Efficiency</p>
          </div>
        </div>
      </section>
      
      <section className="py-6 px-6 bg-gray-900/50 text-center">
        <div className="flex justify-center space-x-6">
          <Link href="https://instagram.com" target="_blank">
            <FaInstagram className="w-8 h-8 text-gray-400 hover:text-blue-400 transition-colors" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <FaTwitter className="w-8 h-8 text-gray-400 hover:text-blue-400 transition-colors" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <FaLinkedin className="w-8 h-8 text-gray-400 hover:text-blue-400 transition-colors" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-950 text-gray-400 text-center border-t border-gray-800">
        <p>
          Copyright © 2025 Intelimeet | All rights reserved. Terms | Privacy |
          Trust Center | Acceptable Use Guidelines | Legal & Compliance
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
