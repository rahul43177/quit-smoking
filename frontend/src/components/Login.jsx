import React, { useState } from 'react';
import { Heart, Award, Clock, Users } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login/register logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-500 to-green-400">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-20 -left-20 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute w-96 h-96 -bottom-20 -right-20 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 top-1/2 left-1/2 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative flex flex-col md:flex-row w-full max-w-5xl mx-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
        {/* Left side - Motivation Section */}
        <div className="w-full md:w-1/2 p-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <h1 className="text-4xl font-bold mb-6">Begin Your Journey</h1>
          <p className="text-lg mb-8">Every journey starts with a single step. Join thousands who have successfully quit smoking.</p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Heart className="w-8 h-8 text-pink-400" />
              <div>
                <h3 className="font-semibold">Improved Health</h3>
                <p className="text-sm opacity-90">Feel better within days of quitting</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Clock className="w-8 h-8 text-yellow-400" />
              <div>
                <h3 className="font-semibold">Track Progress</h3>
                <p className="text-sm opacity-90">Monitor your smoke-free journey</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Users className="w-8 h-8 text-green-400" />
              <div>
                <h3 className="font-semibold">Community Support</h3>
                <p className="text-sm opacity-90">Connect with others on the same path</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Award className="w-8 h-8 text-orange-400" />
              <div>
                <h3 className="font-semibold">Achievement System</h3>
                <p className="text-sm opacity-90">Earn rewards for your progress</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Auth Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {isLogin ? 'Welcome Back' : 'Join Our Community'}
            </h2>
            <p className="text-gray-600 mb-8">
              {isLogin ? 'Continue your journey to a smoke-free life' : 'Start your journey to a healthier lifestyle'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300"
              >
                {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
              </button>
              {isLogin && (
                <div className="mt-4">
                  <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300">
                    Forgot your password?
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;