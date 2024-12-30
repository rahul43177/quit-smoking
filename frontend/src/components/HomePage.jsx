import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  DollarSign, 
  Heart, 
  Trophy, 
  Star, 
  Users, 
  Target,
  ArrowRight,
  Activity
} from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Smoke Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 top-10 left-10 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute w-96 h-96 top-10 right-10 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute w-96 h-96 bottom-10 left-1/2 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 animate-fade-in">
              Break Free From
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"> Smoking</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-oswald">
              Join thousands who have successfully quit smoking with our <span className="text-purple-400 font-bold"> scientifically-proven </span> approach and supportive community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/register')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Your Journey
              </button>
              <button
                onClick={() => navigate('/login')}
                className="px-8 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-semibold hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Calendar className="w-8 h-8 text-purple-400" />,
              title: "Track Smoke-Free Days",
              description: "Watch your progress grow day by day with our intuitive tracking system."
            },
            {
              icon: <DollarSign className="w-8 h-8 text-green-400" />,
              title: "Money Saved Calculator",
              description: "See how much money you're saving by not buying cigarettes."
            },
            {
              icon: <Activity className="w-8 h-8 text-blue-400" />,
              title: "Health Timeline",
              description: "Visualize your body's recovery journey as you stay smoke-free."
            },
            {
              icon: <Star className="w-8 h-8 text-yellow-400" />,
              title: "Daily Motivation",
              description: "Get personalized tips and motivation to keep you on track."
            },
            {
              icon: <Trophy className="w-8 h-8 text-orange-400" />,
              title: "Milestone Celebrations",
              description: "Celebrate your achievements and track your progress."
            },
            {
              icon: <Users className="w-8 h-8 text-indigo-400" />,
              title: "Community Support",
              description: "Connect with others on the same journey to quit smoking."
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Smoke-Free Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our community today and get access to all features that will help you quit smoking for good.
            </p>
            <button
              onClick={() => navigate('/register')}
              className="group px-8 py-4 bg-white text-purple-600 rounded-full text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;