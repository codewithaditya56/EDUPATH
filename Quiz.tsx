import { useState } from 'react';
import { Brain, ChevronRight, CheckCircle, BarChart3 } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: { text: string; stream: 'arts' | 'science' | 'commerce' | 'vocational' }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Which activity interests you the most?",
    options: [
      { text: "Reading literature and writing essays", stream: 'arts' },
      { text: "Conducting experiments and solving problems", stream: 'science' },
      { text: "Managing finances and understanding markets", stream: 'commerce' },
      { text: "Working with hands-on practical skills", stream: 'vocational' }
    ]
  },
  {
    id: 2,
    question: "What type of subjects do you enjoy the most?",
    options: [
      { text: "History, Geography, Political Science", stream: 'arts' },
      { text: "Physics, Chemistry, Mathematics", stream: 'science' },
      { text: "Economics, Accountancy, Business Studies", stream: 'commerce' },
      { text: "Computer Applications, Hospitality, Agriculture", stream: 'vocational' }
    ]
  },
  {
    id: 3,
    question: "Which career path excites you?",
    options: [
      { text: "Teacher, Journalist, Civil Servant, Lawyer", stream: 'arts' },
      { text: "Doctor, Engineer, Scientist, Researcher", stream: 'science' },
      { text: "CA, Manager, Entrepreneur, Banker", stream: 'commerce' },
      { text: "Technician, Chef, Designer, Farmer", stream: 'vocational' }
    ]
  },
  {
    id: 4,
    question: "How do you prefer to learn?",
    options: [
      { text: "Reading, discussing, and analyzing concepts", stream: 'arts' },
      { text: "Experimenting and understanding how things work", stream: 'science' },
      { text: "Analyzing data and understanding business cases", stream: 'commerce' },
      { text: "Hands-on practice and real-world application", stream: 'vocational' }
    ]
  },
  {
    id: 5,
    question: "What motivates you most?",
    options: [
      { text: "Making a difference in society and culture", stream: 'arts' },
      { text: "Discovering new things and solving complex problems", stream: 'science' },
      { text: "Building wealth and managing resources", stream: 'commerce' },
      { text: "Creating something useful with your hands", stream: 'vocational' }
    ]
  },
  {
    id: 6,
    question: "In your free time, you prefer to:",
    options: [
      { text: "Read books, write stories, or visit museums", stream: 'arts' },
      { text: "Watch science documentaries or work on experiments", stream: 'science' },
      { text: "Follow stock markets or business news", stream: 'commerce' },
      { text: "Build things, cook, or work with tools", stream: 'vocational' }
    ]
  },
  {
    id: 7,
    question: "Which skill do you think is your strongest?",
    options: [
      { text: "Communication and creative expression", stream: 'arts' },
      { text: "Logical reasoning and problem-solving", stream: 'science' },
      { text: "Leadership and financial planning", stream: 'commerce' },
      { text: "Practical skills and hands-on work", stream: 'vocational' }
    ]
  },
  {
    id: 8,
    question: "What kind of work environment appeals to you?",
    options: [
      { text: "Libraries, schools, media houses, cultural centers", stream: 'arts' },
      { text: "Laboratories, research centers, hospitals, tech companies", stream: 'science' },
      { text: "Offices, banks, business centers, corporate environments", stream: 'commerce' },
      { text: "Workshops, fields, kitchens, manufacturing units", stream: 'vocational' }
    ]
  },
  {
    id: 9,
    question: "Which type of problem-solving do you enjoy most?",
    options: [
      { text: "Analyzing social issues and cultural problems", stream: 'arts' },
      { text: "Solving mathematical equations and scientific puzzles", stream: 'science' },
      { text: "Finding business solutions and financial strategies", stream: 'commerce' },
      { text: "Fixing practical problems with immediate solutions", stream: 'vocational' }
    ]
  },
  {
    id: 10,
    question: "What impact do you want to make in your career?",
    options: [
      { text: "Inspire and educate people, preserve culture", stream: 'arts' },
      { text: "Innovate and discover new knowledge for humanity", stream: 'science' },
      { text: "Build successful businesses and create economic value", stream: 'commerce' },
      { text: "Create practical solutions that improve daily life", stream: 'vocational' }
    ]
  }
];

const streamInfo = {
  arts: {
    name: "Arts/Humanities",
    description: "Perfect for creative minds who love literature, history, and social sciences.",
    subjects: ["History", "Geography", "Political Science", "Psychology", "English Literature"],
    careers: ["Teacher", "Journalist", "Civil Servant", "Lawyer", "Social Worker"]
  },
  science: {
    name: "Science",
    description: "Ideal for analytical minds interested in research and problem-solving.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science"],
    careers: ["Doctor", "Engineer", "Scientist", "Researcher", "Data Analyst"]
  },
  commerce: {
    name: "Commerce",
    description: "Great for business-minded individuals interested in economics and finance.",
    subjects: ["Economics", "Accountancy", "Business Studies", "Mathematics", "Statistics"],
    careers: ["Chartered Accountant", "Manager", "Entrepreneur", "Banker", "Financial Analyst"]
  },
  vocational: {
    name: "Vocational",
    description: "Perfect for practical learners who want industry-ready skills.",
    subjects: ["Computer Applications", "Hospitality", "Agriculture", "Fashion Design", "Automotive"],
    careers: ["Technician", "Chef", "Designer", "Farmer", "IT Support"]
  }
};

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [scores, setScores] = useState({ arts: 0, science: 0, commerce: 0, vocational: 0 });

  const handleAnswer = (stream: string) => {
    const newAnswers = [...answers, stream];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate scores
      const newScores = { arts: 0, science: 0, commerce: 0, vocational: 0 };
      newAnswers.forEach(answer => {
        newScores[answer as keyof typeof newScores]++;
      });
      setScores(newScores);
      setShowResults(true);
    }
  };

  const getRecommendedStream = () => {
    return Object.entries(scores).reduce((a, b) => scores[a[0] as keyof typeof scores] > scores[b[0] as keyof typeof scores] ? a : b)[0] as keyof typeof streamInfo;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setScores({ arts: 0, science: 0, commerce: 0, vocational: 0 });
  };

  if (showResults) {
    const recommendedStream = getRecommendedStream();
    const streamData = streamInfo[recommendedStream];

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quiz Complete!
            </h1>
            <p className="text-xl text-gray-600">
              Based on your answers, here's your personalized recommendation:
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Recommended Stream: {streamData.name}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">{streamData.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                  Your Score Breakdown
                </h3>
                <div className="space-y-3">
                  {Object.entries(scores).map(([stream, score]) => (
                    <div key={stream} className="flex items-center justify-between">
                      <span className="capitalize font-medium">{stream}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${stream === recommendedStream ? 'bg-green-500' : 'bg-blue-500'}`}
                            style={{ width: `${(score / questions.length) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{score}/{questions.length}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Suggested Subjects
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {streamData.subjects.map((subject, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Career Opportunities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {streamData.careers.map((career, index) => (
                    <span 
                      key={index}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center space-y-4">
              <button
                onClick={resetQuiz}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors mr-4"
              >
                Retake Quiz
              </button>
              <a 
                href="/colleges"
                className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-green-600 transition-all inline-block"
              >
                Find Colleges for {streamData.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Brain className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Career Aptitude Quiz
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Discover your ideal stream based on your interests and strengths
          </p>
          <div className="flex justify-center">
            <div className="bg-white rounded-full px-4 py-2 shadow-sm">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-600 to-green-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.stream)}
                  className="w-full text-left p-6 border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-900 dark:group-hover:text-blue-300">
                      {option.text}
                    </span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
