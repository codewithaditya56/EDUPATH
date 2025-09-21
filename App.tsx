import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ThemeProvider } from "@/react-app/context/ThemeContext";
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";
import HomePage from "@/react-app/pages/Home";
import QuizPage from "@/react-app/pages/Quiz";
import CollegesPage from "@/react-app/pages/Colleges";
import CareersPage from "@/react-app/pages/Careers";
import AboutPage from "@/react-app/pages/About";
import ContactPage from "@/react-app/pages/Contact";
import LoginPage from "@/react-app/pages/Login";
import SignupPage from "@/react-app/pages/Signup";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/colleges" element={<CollegesPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
