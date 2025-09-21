import { useState } from 'react';
import { TrendingUp, ArrowRight, BookOpen, Briefcase, Users, Target } from 'lucide-react';

interface CareerPath {
  degree: string;
  stream: 'arts' | 'science' | 'commerce' | 'vocational';
  description: string;
  duration: string;
  jobs: string[];
  governmentExams: string[];
  entrepreneurship: string[];
  higherEducation: string[];
  averageSalary: string;
  growthRate: string;
}

const careerPaths: CareerPath[] = [
  {
    degree: "Bachelor of Arts (BA)",
    stream: 'arts',
    description: "A versatile degree focusing on humanities, languages, and social sciences.",
    duration: "3 years",
    jobs: ["Teacher", "Journalist", "Content Writer", "Social Worker", "Translator", "Museum Curator"],
    governmentExams: ["UPSC Civil Services", "State PSC", "SSC CGL", "Railway Group D", "Banking PO"],
    entrepreneurship: ["Content Agency", "Translation Services", "Online Tutoring", "Cultural Tours", "Publishing"],
    higherEducation: ["MA", "B.Ed", "LLB", "MBA", "Mass Communication"],
    averageSalary: "₹3-8 Lakhs",
    growthRate: "6-8%"
  },
  {
    degree: "Bachelor of Science (BSc)",
    stream: 'science',
    description: "Scientific education with specialization in physics, chemistry, biology, or mathematics.",
    duration: "3 years",
    jobs: ["Lab Technician", "Research Assistant", "Quality Analyst", "Data Analyst", "Science Teacher", "Pharmaceutical Sales"],
    governmentExams: ["UPSC Civil Services", "State PSC", "SSC Scientific Assistant", "DRDO", "ISRO", "Railway Group B"],
    entrepreneurship: ["Biotech Startup", "Testing Lab", "Agricultural Services", "Environmental Consulting", "Food Processing"],
    higherEducation: ["MSc", "B.Tech", "MBBS", "Pharmacy", "Biotechnology", "Environmental Science"],
    averageSalary: "₹4-12 Lakhs",
    growthRate: "8-12%"
  },
  {
    degree: "Bachelor of Commerce (BCom)",
    stream: 'commerce',
    description: "Business and commerce education focusing on accounting, economics, and business studies.",
    duration: "3 years",
    jobs: ["Accountant", "Banking Officer", "Financial Analyst", "Tax Consultant", "Auditor", "Business Analyst"],
    governmentExams: ["Banking PO/Clerk", "SSC CGL", "Income Tax Inspector", "Company Secretary", "Cost Accountant"],
    entrepreneurship: ["Accounting Firm", "Financial Consulting", "E-commerce Business", "Trading Company", "Investment Advisory"],
    higherEducation: ["MCom", "MBA", "CA", "CS", "CMA", "LLB"],
    averageSalary: "₹3-15 Lakhs",
    growthRate: "10-15%"
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    stream: 'commerce',
    description: "Management education focusing on business administration and entrepreneurship.",
    duration: "3 years",
    jobs: ["Business Executive", "Marketing Manager", "HR Executive", "Operations Manager", "Sales Manager", "Project Coordinator"],
    governmentExams: ["Banking PO", "Management Trainee", "Assistant Manager", "Commercial Officer"],
    entrepreneurship: ["Startup Venture", "Consulting Firm", "Digital Marketing Agency", "Event Management", "Retail Business"],
    higherEducation: ["MBA", "PGDM", "International Business", "Digital Marketing", "Supply Chain Management"],
    averageSalary: "₹4-20 Lakhs",
    growthRate: "12-18%"
  },
  {
    degree: "Diploma in Engineering",
    stream: 'vocational',
    description: "Technical education with hands-on training in various engineering fields.",
    duration: "3 years",
    jobs: ["Junior Engineer", "Technician", "CAD Operator", "Production Supervisor", "Quality Inspector", "Technical Assistant"],
    governmentExams: ["Railway Junior Engineer", "SSC Junior Engineer", "State PWD", "DRDO Technician", "HAL Technician"],
    entrepreneurship: ["Technical Services", "Manufacturing Unit", "Repair & Maintenance", "Fabrication Workshop", "Training Institute"],
    higherEducation: ["B.Tech (Lateral Entry)", "Advanced Diploma", "Specialized Certifications", "Management Courses"],
    averageSalary: "₹3-10 Lakhs",
    growthRate: "8-12%"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    stream: 'science',
    description: "Computer science education focusing on programming, software development, and IT.",
    duration: "3 years",
    jobs: ["Software Developer", "Web Developer", "System Analyst", "Database Administrator", "IT Support", "Mobile App Developer"],
    governmentExams: ["SSC Scientific Assistant", "Railway Technical Posts", "DRDO Scientist", "NIC Technical Officer"],
    entrepreneurship: ["Software Company", "Web Development Agency", "Mobile App Startup", "IT Consulting", "E-learning Platform"],
    higherEducation: ["MCA", "M.Tech", "MBA (IT)", "Data Science", "Cybersecurity", "AI/ML Specialization"],
    averageSalary: "₹4-25 Lakhs",
    growthRate: "15-25%"
  },
  {
    degree: "Bachelor of Technology (B.Tech)",
    stream: 'science',
    description: "Professional engineering education with specialization in various technical fields.",
    duration: "4 years",
    jobs: ["Software Engineer", "Mechanical Engineer", "Civil Engineer", "Electrical Engineer", "Data Scientist", "Product Manager"],
    governmentExams: ["UPSC Engineering Services", "SSC Junior Engineer", "Railway Engineer", "DRDO Scientist", "ISRO Scientist", "PSU Recruitment"],
    entrepreneurship: ["Tech Startup", "Engineering Consultancy", "Manufacturing Business", "Software Company", "Hardware Solutions", "Green Technology"],
    higherEducation: ["M.Tech", "MS", "MBA", "PhD", "Management Programs", "Specialized Certifications"],
    averageSalary: "₹6-40 Lakhs",
    growthRate: "18-30%"
  },
  {
    degree: "Bachelor of Education (B.Ed)",
    stream: 'arts',
    description: "Professional teacher training program to develop teaching skills and pedagogy.",
    duration: "2 years",
    jobs: ["Primary Teacher", "Secondary Teacher", "Education Coordinator", "Academic Counselor", "Curriculum Developer", "Education Administrator"],
    governmentExams: ["TET (Teacher Eligibility Test)", "CTET", "State Teacher Recruitment", "DSSSB", "KVS Recruitment", "NVS Recruitment"],
    entrepreneurship: ["Private School", "Coaching Institute", "Online Education Platform", "Educational Content", "Training Academy"],
    higherEducation: ["M.Ed", "PhD in Education", "Educational Leadership", "Special Education", "Educational Technology"],
    averageSalary: "₹3-12 Lakhs",
    growthRate: "8-15%"
  },
  {
    degree: "Bachelor of Social Work (BSW)",
    stream: 'arts',
    description: "Professional social work education focusing on community development and social welfare.",
    duration: "3 years",
    jobs: ["Social Worker", "Community Developer", "NGO Coordinator", "Welfare Officer", "Counselor", "Project Manager"],
    governmentExams: ["State Social Welfare Dept", "Rural Development Jobs", "UPSC Civil Services", "State PSC", "Municipal Corporation"],
    entrepreneurship: ["NGO Foundation", "Social Enterprise", "Community Services", "Counseling Center", "Development Consultancy"],
    higherEducation: ["MSW", "MA Sociology", "Public Administration", "Development Studies", "Psychology"],
    averageSalary: "₹3-10 Lakhs",
    growthRate: "10-18%"
  }
];

const streamColors = {
  arts: 'bg-purple-100 text-purple-800 border-purple-200',
  science: 'bg-blue-100 text-blue-800 border-blue-200',
  commerce: 'bg-green-100 text-green-800 border-green-200',
  vocational: 'bg-orange-100 text-orange-800 border-orange-200'
};

export default function Careers() {
  const [selectedStream, setSelectedStream] = useState<string>('all');

  const filteredPaths = selectedStream === 'all' 
    ? careerPaths 
    : careerPaths.filter(path => path.stream === selectedStream);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Course-to-Career Mapping
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how different degrees connect to jobs, government exams, entrepreneurship opportunities, 
            and higher education paths.
          </p>
        </div>

        {/* Stream Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedStream('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedStream === 'all' 
                ? 'bg-gray-900 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            All Streams
          </button>
          <button
            onClick={() => setSelectedStream('arts')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedStream === 'arts' 
                ? 'bg-purple-600 text-white' 
                : 'bg-white text-purple-600 hover:bg-purple-50'
            }`}
          >
            Arts/Humanities
          </button>
          <button
            onClick={() => setSelectedStream('science')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedStream === 'science' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-blue-600 hover:bg-blue-50'
            }`}
          >
            Science
          </button>
          <button
            onClick={() => setSelectedStream('commerce')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedStream === 'commerce' 
                ? 'bg-green-600 text-white' 
                : 'bg-white text-green-600 hover:bg-green-50'
            }`}
          >
            Commerce
          </button>
          <button
            onClick={() => setSelectedStream('vocational')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedStream === 'vocational' 
                ? 'bg-orange-600 text-white' 
                : 'bg-white text-orange-600 hover:bg-orange-50'
            }`}
          >
            Vocational
          </button>
        </div>

        {/* Career Paths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPaths.map((path, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{path.degree}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${streamColors[path.stream]}`}>
                        {path.stream.charAt(0).toUpperCase() + path.stream.slice(1)}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{path.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Duration: {path.duration}</span>
                      <span>Avg. Salary: {path.averageSalary}</span>
                      <span>Growth: {path.growthRate}</span>
                    </div>
                  </div>
                </div>

                {/* Career Opportunities */}
                <div className="space-y-6">
                  {/* Jobs */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Briefcase className="h-5 w-5 text-blue-600" />
                      <h4 className="font-semibold text-gray-900">Career Opportunities</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {path.jobs.map((job, jobIndex) => (
                        <span 
                          key={jobIndex}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {job}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Government Exams */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Target className="h-5 w-5 text-green-600" />
                      <h4 className="font-semibold text-gray-900">Government Exams</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {path.governmentExams.map((exam, examIndex) => (
                        <span 
                          key={examIndex}
                          className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {exam}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Entrepreneurship */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <TrendingUp className="h-5 w-5 text-purple-600" />
                      <h4 className="font-semibold text-gray-900">Entrepreneurship Ideas</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {path.entrepreneurship.map((idea, ideaIndex) => (
                        <span 
                          key={ideaIndex}
                          className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {idea}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Higher Education */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <BookOpen className="h-5 w-5 text-orange-600" />
                      <h4 className="font-semibold text-gray-900">Higher Education Options</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {path.higherEducation.map((education, eduIndex) => (
                        <span 
                          key={eduIndex}
                          className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {education}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <a 
                    href="/colleges"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-green-600 transition-all font-semibold"
                  >
                    <span>Find Colleges for {path.degree}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Still Confused About Your Career Path?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take our comprehensive career quiz to get personalized recommendations based on your interests and strengths.
          </p>
          <a 
            href="/quiz"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <Users className="h-5 w-5" />
            <span>Take Career Quiz</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
