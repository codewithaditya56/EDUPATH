import { Link } from 'react-router';
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  MapPin, 
  Brain, 
  Calendar,
  ArrowRight,
  Star,
  Award,
  Target
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Your Future Starts with the{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Right Choice
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              One-stop personalized career and education advisor for students after Class 10 & 12. 
              Make informed decisions about your higher education and career path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/quiz" 
                className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <Brain className="h-5 w-5" />
                <span>Start Career Quiz</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/colleges" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all flex items-center space-x-2"
              >
                <MapPin className="h-5 w-5" />
                <span>Explore Colleges</span>
              </Link>
              <Link 
                to="/careers" 
                className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-500 hover:text-white transition-all flex items-center space-x-2"
              >
                <TrendingUp className="h-5 w-5" />
                <span>View Career Paths</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Plan Your Future
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive tools and resources to help you make the best decisions for your education and career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Career Aptitude Quiz */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Career Aptitude Quiz</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Discover your strengths and interests with our comprehensive quiz. Get personalized stream recommendations for Arts, Science, Commerce, or Vocational.
              </p>
              <Link to="/quiz" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center space-x-1">
                <span>Take Quiz</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* College Directory */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">College Directory</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Explore top colleges across India including government institutions and prestigious universities with detailed information about programs, eligibility, cut-offs, and facilities.
              </p>
              <Link to="/colleges" className="text-green-600 font-semibold hover:text-green-700 flex items-center space-x-1">
                <span>Browse Colleges</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Course-to-Career Mapping */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Course-to-Career Mapping</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Interactive flowcharts showing how each degree connects to jobs, government exams, entrepreneurship, and higher education.
              </p>
              <Link to="/careers" className="text-purple-600 font-semibold hover:text-purple-700 flex items-center space-x-1">
                <span>Explore Paths</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Timeline Tracker */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Timeline Tracker</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Never miss important dates! Track admission deadlines, scholarship applications, and entrance exam dates with reminders.
              </p>
              <Link to="/timeline" className="text-orange-600 font-semibold hover:text-orange-700 flex items-center space-x-1">
                <span>View Timeline</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Personalized Dashboard */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Personalized Dashboard</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Get personalized recommendations for courses, nearby colleges, career paths, and study materials based on your profile.
              </p>
              <Link to="/login" className="text-teal-600 font-semibold hover:text-teal-700 flex items-center space-x-1">
                <span>Create Account</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Study Resources */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="bg-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Study Resources</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Access curated study materials, preparation guides, and resources to help you succeed in your chosen path.
              </p>
              <Link to="/resources" className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center space-x-1">
                <span>Browse Resources</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="flex justify-center mb-4">
                <Target className="h-12 w-12" />
              </div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Students Guided</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12" />
              </div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Government Colleges</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Star className="h-12 w-12" />
              </div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Shape Your Future?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of students who have already started their journey with EduPath.
          </p>
          <Link 
            to="/quiz" 
            className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
          >
            <Brain className="h-5 w-5" />
            <span>Start Your Journey Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
