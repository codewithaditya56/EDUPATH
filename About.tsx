import { Target, Users, Award, Heart, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">EduPath</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Empowering students and their families to make informed decisions about education and careers 
              through personalized guidance and comprehensive resources.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                To bridge the gap between students' aspirations and their educational choices by providing 
                comprehensive, localized, and accessible career guidance. We believe every student deserves 
                to make informed decisions about their future, regardless of their background or location.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our platform specifically focuses on students in Madhya Pradesh, understanding the unique 
                challenges and opportunities in the region, and connecting them with local government 
                colleges and career pathways.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Student-Centric Approach</h3>
                    <p className="text-gray-600 dark:text-gray-300">Every feature is designed with students' needs in mind.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-2 rounded-lg flex-shrink-0">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Quality Education Access</h3>
                    <p className="text-gray-600 dark:text-gray-300">Connecting students with quality government institutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-2 rounded-lg flex-shrink-0">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Inclusive & Accessible</h3>
                    <p className="text-gray-600 dark:text-gray-300">Designed for rural and urban students alike.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              EduPath was born from the recognition that many talented students in India, particularly 
              in rural areas, lack access to comprehensive career guidance and information about 
              educational opportunities.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">The Challenge</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                After Class 10 and 12, students and their families often struggle with crucial decisions 
                about stream selection, college choices, and career paths. Limited access to counselors, 
                scattered information about government colleges, and lack of awareness about career 
                opportunities create significant barriers to informed decision-making.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Solution</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                EduPath consolidates all the information students need in one accessible platform. 
                From aptitude assessments and stream recommendations to detailed college directories 
                and career mapping, we provide a comprehensive toolkit for educational and career planning. 
                Our focus on government colleges ensures that quality education remains affordable and accessible.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Looking Forward</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We envision a future where every student in India has access to personalized career 
                guidance and educational resources. By leveraging technology and local insights, 
                EduPath aims to democratize career counseling and help build a more informed and 
                skilled workforce for the nation.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Developed by <span className="font-semibold text-blue-600 dark:text-blue-400">Code Crushers</span> - 
                  Passionate developers committed to empowering education through technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve our students and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Making quality career guidance available to every student, regardless of location or background.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Providing accurate, up-to-date, and comprehensive information to help students make the best decisions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Empathy</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Understanding the unique challenges faced by students and families in their educational journey.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Impact</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Measuring our success by the positive impact we create in students' lives and career outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already discovered their ideal career path with EduPath.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/quiz"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Take Career Quiz</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a 
              href="/colleges"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Explore Colleges</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
