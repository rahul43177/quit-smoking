import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  DollarSign,
  Heart,
  Trophy,
  Star,
  Users,
  Target,
  Activity,
  TrendingUp,
  Clock,
  ChevronRight,
} from 'lucide-react';

// Timer Component
const LiveTimer = ({ startDate }) => {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const start = new Date(startDate);
      const now = new Date();
      const difference = now - start;

      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      const milliseconds = difference % 1000;

      setTimeElapsed({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        milliseconds
      });
    }, 10);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-7 gap-4 text-center">
      {[
        { label: 'Years', value: timeElapsed.years },
        { label: 'Months', value: timeElapsed.months },
        { label: 'Days', value: timeElapsed.days },
        { label: 'Hours', value: timeElapsed.hours },
        { label: 'Minutes', value: timeElapsed.minutes },
        { label: 'Seconds', value: timeElapsed.seconds },
        { label: 'MS', value: timeElapsed.milliseconds }
      ].map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/20 backdrop-blur-lg rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105"
        >
          <div className="text-3xl md:text-4xl font-bold font-mono text-gray-800">
            {String(unit.value).padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base text-gray-600">{unit.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

const Dashboard = () => {
    const userData = {
      firstName: "Rahul",
      startDate: "2024-12-25T00:00:00",
      smokeFreedays: 10,
      moneySaved: 300,
      nextMilestone: 30,
      dailyTip: "Every second smoke-free is a victory for your health!",
      progress: 25
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        {/* Enhanced Welcome Banner with Live Timer */}
        <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 relative overflow-hidden">
          {/* Animated background effects */}
          <div className="absolute inset-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              className="absolute w-96 h-96 -top-20 -left-20 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
              className="absolute w-96 h-96 -bottom-20 -right-20 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"
            />
          </div>
  
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white relative z-10"
            >
              <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100">
                Welcome back, {userData.firstName}! ✨
              </h1>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8 shadow-2xl border border-white/20">
                <h2 className="text-2xl font-bold mb-6 text-white">Your Smoke-Free Journey:</h2>
                <LiveTimer startDate={userData.startDate} />
              </div>
              <p className="text-xl text-blue-100 font-medium text-center">
                Every moment counts in your journey to a healthier life! 🌟
              </p>
            </motion.div>
          </div>
        </div>
  
        {/* Enhanced Main Dashboard Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Smoke Free Days Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-white to-green-50 p-6 rounded-3xl shadow-xl border border-green-100/20 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-4 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl shadow-lg">
                  <Calendar className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-gray-800 font-bold text-lg">Smoke-Free Days</h3>
              </div>
              <p className="text-5xl font-bold text-gray-800 mb-3">{userData.smokeFreedays}</p>
              <div className="flex items-center text-emerald-500 text-sm font-medium">
                <TrendingUp className="h-5 w-5 mr-1" />
                <span>Strong progress!</span>
              </div>
            </motion.div>
  
            {/* Money Saved Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-3xl shadow-xl border border-blue-100/20 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-4 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl shadow-lg">
                  <span className="text-white text-2xl font-bold">₹</span>
                </div>
                <h3 className="text-gray-800 font-bold text-lg">Money Saved</h3>
              </div>
              <p className="text-5xl font-bold text-gray-800 mb-3">₹{userData.moneySaved}</p>
              <div className="text-blue-500 text-sm font-medium">
                Keep saving, keep growing!
              </div>
            </motion.div>
  
            {/* Next Milestone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-3xl shadow-xl border border-purple-100/20 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-4 bg-gradient-to-br from-purple-400 to-violet-600 rounded-2xl shadow-lg">
                  <Trophy className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-gray-800 font-bold text-lg">Next Milestone</h3>
              </div>
              <p className="text-5xl font-bold text-gray-800 mb-3">{userData.nextMilestone}</p>
              <div className="text-purple-sm font-medium">
                {userData.nextMilestone - userData.smokeFreedays} days remaining
              </div>
            </motion.div>
  
            {/* Health Progress Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-white to-pink-50 p-6 rounded-3xl shadow-xl border border-pink-100/20 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-4 bg-gradient-to-br from-pink-400 to-rose-600 rounded-2xl shadow-lg">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-gray-800 font-bold text-lg">Health Progress</h3>
              </div>
              <div className="relative pt-1 mb-3">
                <div className="overflow-hidden h-4 text-xs flex rounded-full bg-pink-100">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: `${userData.progress}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"
                  />
                </div>
              </div>
              <div className="text-pink-500 text-sm font-medium">
                Health improving daily!
              </div>
            </motion.div>
          </div>
  
          {/* Enhanced Daily Motivation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 rounded-3xl p-10 text-white mb-12 shadow-2xl relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-400 rounded-full filter blur-3xl"></div>
            </div>
            
            <div className="flex items-start space-x-6 relative z-10">
              <div className="p-5 bg-white/10 rounded-2xl backdrop-blur-sm shadow-inner">
                <Star className="h-12 w-12" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
                  Daily Motivation
                </h3>
                <p className="text-xl text-blue-100">{userData.dailyTip}</p>
              </div>
            </div>
          </motion.div>
  
          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="h-7 w-7 text-white" />,
                title: "Health Timeline",
                description: "Track your health improvements",
                gradient: "from-orange-400 to-amber-600"
              },
              {
                icon: <Users className="h-7 w-7 text-white" />,
                title: "Community Support",
                description: "Connect with others on the same journey",
                gradient: "from-emerald-400 to-green-600"
              },
              {
                icon: <Target className="h-7 w-7 text-white" />,
                title: "Set New Goals",
                description: "Define and achieve your targets",
                gradient: "from-blue-400 to-indigo-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg mb-1">{feature.title}</h3>
                      <p className="text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;