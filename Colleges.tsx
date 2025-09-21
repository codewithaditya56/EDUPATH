import { useState } from 'react';
import { MapPin, Phone, Mail, Users, BookOpen, Wifi, Building, Search, Filter } from 'lucide-react';

interface College {
  id: number;
  name: string;
  location: string;
  district: string;
  programs: string[];
  eligibility: string;
  cutoffs: string;
  facilities: string[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  hostel: boolean;
  library: boolean;
  labs: boolean;
  internet: boolean;
}

const colleges: College[] = [
  {
    id: 1,
    name: "Government College Guna",
    location: "Guna",
    district: "Guna",
    programs: ["BA", "BSc", "BCom", "MA", "MSc"],
    eligibility: "12th pass with minimum 50% marks",
    cutoffs: "General: 65%, OBC: 60%, SC/ST: 55%",
    facilities: ["Hostel", "Library", "Computer Lab", "Sports Ground", "Internet"],
    contact: {
      phone: "+91-7542-234567",
      email: "info@gcguna.edu.in",
      address: "College Road, Guna, Madhya Pradesh - 473001"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 2,
    name: "Government College Raghogarh",
    location: "Raghogarh",
    district: "Guna",
    programs: ["BA", "BCom", "BSc (Agriculture)"],
    eligibility: "12th pass with minimum 45% marks",
    cutoffs: "General: 60%, OBC: 55%, SC/ST: 50%",
    facilities: ["Library", "Computer Lab", "Internet", "Playground"],
    contact: {
      phone: "+91-7542-345678",
      email: "contact@gcraghogarh.edu.in",
      address: "Main Road, Raghogarh, Madhya Pradesh - 473226"
    },
    hostel: false,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 3,
    name: "Government Science College Gwalior",
    location: "Gwalior",
    district: "Gwalior",
    programs: ["BSc (Physics)", "BSc (Chemistry)", "BSc (Biology)", "BSc (Mathematics)", "MSc"],
    eligibility: "12th Science with minimum 60% marks",
    cutoffs: "General: 75%, OBC: 70%, SC/ST: 65%",
    facilities: ["Hostel", "Advanced Labs", "Library", "Research Center", "Internet", "Cafeteria"],
    contact: {
      phone: "+91-751-2345678",
      email: "admissions@gscgwalior.edu.in",
      address: "University Road, Gwalior, Madhya Pradesh - 474011"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 4,
    name: "Government Commerce College Indore",
    location: "Indore",
    district: "Indore",
    programs: ["BCom", "BBA", "MCom", "MBA"],
    eligibility: "12th Commerce/Any with minimum 50% marks",
    cutoffs: "General: 70%, OBC: 65%, SC/ST: 60%",
    facilities: ["Hostel", "Library", "Computer Lab", "Placement Cell", "Internet", "Auditorium"],
    contact: {
      phone: "+91-731-2567890",
      email: "info@gccindore.edu.in",
      address: "MG Road, Indore, Madhya Pradesh - 452001"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 5,
    name: "Government Arts College Bhopal",
    location: "Bhopal",
    district: "Bhopal",
    programs: ["BA (Hindi)", "BA (English)", "BA (History)", "BA (Political Science)", "MA"],
    eligibility: "12th Arts/Any with minimum 45% marks",
    cutoffs: "General: 65%, OBC: 60%, SC/ST: 55%",
    facilities: ["Library", "Seminar Hall", "Computer Lab", "Internet", "Cultural Center"],
    contact: {
      phone: "+91-755-2678901",
      email: "contact@gacbhopal.edu.in",
      address: "Shivaji Nagar, Bhopal, Madhya Pradesh - 462016"
    },
    hostel: false,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 6,
    name: "Government Polytechnic College Ujjain",
    location: "Ujjain",
    district: "Ujjain",
    programs: ["Diploma in Engineering", "Diploma in Computer Science", "Diploma in Agriculture"],
    eligibility: "10th pass with minimum 50% marks",
    cutoffs: "General: 60%, OBC: 55%, SC/ST: 50%",
    facilities: ["Workshop", "Computer Lab", "Library", "Internet", "Training Center"],
    contact: {
      phone: "+91-734-2789012",
      email: "admissions@gpcujjain.edu.in",
      address: "Industrial Area, Ujjain, Madhya Pradesh - 456010"
    },
    hostel: false,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 7,
    name: "Jaypee University of Information Technology",
    location: "Waknaghat",
    district: "Solan",
    programs: ["B.Tech", "BBA", "B.Com", "MBA", "M.Tech", "MCA"],
    eligibility: "12th Science with minimum 60% marks for B.Tech",
    cutoffs: "JEE Main: 70000-80000 rank, Direct: 85%",
    facilities: ["Modern Hostel", "Digital Library", "Advanced Labs", "Sports Complex", "High-Speed Internet", "Industry Partnerships"],
    contact: {
      phone: "+91-1792-239999",
      email: "admissions@juit.ac.in",
      address: "Waknaghat, Teh-Kandaghat, Distt-Solan, Himachal Pradesh - 173234"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 8,
    name: "Jaypee Institute of Information Technology",
    location: "Noida",
    district: "Gautam Budh Nagar",
    programs: ["B.Tech", "MBA", "M.Tech", "BCA", "MCA", "B.Com"],
    eligibility: "12th with minimum 60% marks",
    cutoffs: "JEE Main: 50000-60000 rank, Management: 80%",
    facilities: ["AC Hostels", "Central Library", "Research Labs", "Placement Cell", "WiFi Campus", "Innovation Center"],
    contact: {
      phone: "+91-120-2594200",
      email: "admissions@jiit.ac.in",
      address: "A-10, Sector-62, Noida, Uttar Pradesh - 201309"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 9,
    name: "Government College of Engineering Bhopal",
    location: "Bhopal",
    district: "Bhopal",
    programs: ["B.E. (Civil)", "B.E. (Mechanical)", "B.E. (Electrical)", "B.E. (Computer Science)", "M.Tech"],
    eligibility: "12th Science with JEE Main qualification",
    cutoffs: "JEE Main: 80000-120000 rank, MPSE: Merit based",
    facilities: ["Boys/Girls Hostel", "Central Library", "Engineering Labs", "Workshop", "Internet", "Placement Cell"],
    contact: {
      phone: "+91-755-2674920",
      email: "principal@gcebhopal.ac.in",
      address: "Airport Road, Near Habibganj Railway Station, Bhopal, MP - 462066"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 10,
    name: "Delhi Technological University",
    location: "Delhi",
    district: "Delhi",
    programs: ["B.Tech", "M.Tech", "MBA", "MCA", "PhD"],
    eligibility: "12th Science with JEE Main qualification",
    cutoffs: "JEE Main: 1000-15000 rank (varies by branch)",
    facilities: ["Hostel Complex", "Central Library", "Research Centers", "Sports Facilities", "High-Speed Internet", "Industry Collaborations"],
    contact: {
      phone: "+91-11-27871023",
      email: "registrar@dtu.ac.in",
      address: "Shahbad Daulatpur, Main Bawana Road, Delhi - 110042"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 11,
    name: "Indian Institute of Technology Delhi",
    location: "Delhi",
    district: "Delhi",
    programs: ["B.Tech", "Dual Degree", "M.Tech", "MBA", "MSc", "PhD"],
    eligibility: "12th Science with JEE Advanced qualification",
    cutoffs: "JEE Advanced: Top 20,000 rank",
    facilities: ["Multiple Hostels", "Central Library", "World-class Labs", "Sports Complex", "WiFi Campus", "Innovation Hub"],
    contact: {
      phone: "+91-11-26591785",
      email: "registrar@admin.iitd.ac.in",
      address: "Hauz Khas, New Delhi - 110016"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 12,
    name: "University of Rajasthan",
    location: "Jaipur",
    district: "Jaipur",
    programs: ["BA", "BSc", "BCom", "MA", "MSc", "MCom", "PhD"],
    eligibility: "12th pass with minimum 45% marks",
    cutoffs: "Merit based admission, General: 60%, OBC: 55%, SC/ST: 45%",
    facilities: ["Hostels", "Maharaja Sawai Man Singh Library", "Computer Centers", "Sports Ground", "Internet", "Research Centers"],
    contact: {
      phone: "+91-141-2711101",
      email: "registrar@uniraj.ac.in",
      address: "JLN Marg, Jaipur, Rajasthan - 302004"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 13,
    name: "Rajasthan Technical University",
    location: "Kota",
    district: "Kota",
    programs: ["B.Tech", "M.Tech", "MBA", "MCA", "Diploma"],
    eligibility: "12th Science with minimum 45% marks, JEE Main for B.Tech",
    cutoffs: "JEE Main: 80000-150000 rank, REAP: Merit based",
    facilities: ["Hostels", "Digital Library", "Labs", "Training & Placement", "Internet", "Innovation Centers"],
    contact: {
      phone: "+91-744-2473861",
      email: "registrar@rtu.ac.in",
      address: "Rawatbhata Road, Kota, Rajasthan - 324010"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 14,
    name: "Maulana Azad National Institute of Technology",
    location: "Bhopal",
    district: "Bhopal",
    programs: ["B.Tech", "B.Arch", "B.Planning", "M.Tech", "MBA", "MSc", "PhD"],
    eligibility: "12th Science with JEE Main qualification",
    cutoffs: "JEE Main: 8000-25000 rank (varies by branch)",
    facilities: ["AC Hostels", "Central Library", "Research Labs", "Sports Complex", "WiFi Campus", "Incubation Center"],
    contact: {
      phone: "+91-755-4051000",
      email: "registrar@manit.ac.in",
      address: "Link Road No. 3, Near Habibganj Railway Station, Bhopal, MP - 462003"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 15,
    name: "Devi Ahilya Vishwavidyalaya",
    location: "Indore",
    district: "Indore",
    programs: ["BA", "BSc", "BCom", "BBA", "B.Tech", "MA", "MSc", "MCom", "MBA", "M.Tech"],
    eligibility: "12th pass with minimum 50% marks",
    cutoffs: "Merit based, General: 65%, OBC: 60%, SC/ST: 55%",
    facilities: ["Multiple Hostels", "University Library", "Computer Labs", "Sports Facilities", "Internet", "Research Centers"],
    contact: {
      phone: "+91-731-2527532",
      email: "registrar@dauniv.ac.in",
      address: "R.N.T. Marg, Indore, Madhya Pradesh - 452001"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 16,
    name: "Jaypee Institute of Information Technology",
    location: "Noida",
    district: "Gautam Budh Nagar",
    programs: ["B.Tech", "MBA", "M.Tech", "BCA", "MCA", "B.Com", "PhD"],
    eligibility: "12th Science with minimum 60% marks for B.Tech",
    cutoffs: "JEE Main: 50000-60000 rank, Management: 80%",
    facilities: ["AC Hostels", "Central Library", "Research Labs", "Placement Cell", "WiFi Campus", "Innovation Center", "Sports Complex"],
    contact: {
      phone: "+91-120-2594200",
      email: "admissions@jiit.ac.in",
      address: "A-10, Sector-62, Noida, Uttar Pradesh - 201309"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 17,
    name: "Jaypee University of Information Technology",
    location: "Waknaghat",
    district: "Solan",
    programs: ["B.Tech", "BBA", "B.Com", "MBA", "M.Tech", "MCA", "PhD"],
    eligibility: "12th Science with minimum 60% marks for B.Tech",
    cutoffs: "JEE Main: 70000-80000 rank, Direct: 85%",
    facilities: ["Modern Hostel", "Digital Library", "Advanced Labs", "Sports Complex", "High-Speed Internet", "Industry Partnerships"],
    contact: {
      phone: "+91-1792-239999",
      email: "admissions@juit.ac.in",
      address: "Waknaghat, Teh-Kandaghat, Distt-Solan, Himachal Pradesh - 173234"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 18,
    name: "Jaypee University of Engineering & Technology",
    location: "Raghogarh",
    district: "Guna",
    programs: ["B.Tech", "M.Tech", "MBA", "BBA", "B.Com", "MCA", "PhD"],
    eligibility: "12th Science with minimum 60% marks for B.Tech",
    cutoffs: "JEE Main: 80000-120000 rank, MP State: Merit based",
    facilities: ["Boys/Girls Hostel", "Central Library", "Engineering Labs", "Workshop", "Internet", "Placement Cell", "Sports Ground"],
    contact: {
      phone: "+91-7542-267051",
      email: "admissions@juet.ac.in",
      address: "A.B. Road, Raghogarh, Guna, Madhya Pradesh - 473226"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 19,
    name: "Jaypee University",
    location: "Anoopshahr",
    district: "Bulandshahr",
    programs: ["B.Tech", "MBA", "M.Tech", "BBA", "B.Com", "MCA", "B.Ed"],
    eligibility: "12th Science with minimum 60% marks for B.Tech",
    cutoffs: "JEE Main: 90000-130000 rank, Direct: 75%",
    facilities: ["Hostels", "Library", "Labs", "Sports Facilities", "Internet", "Training & Placement"],
    contact: {
      phone: "+91-5731-248001",
      email: "admissions@ju.edu.in",
      address: "Anoopshahr, Bulandshahr, Uttar Pradesh - 203390"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 20,
    name: "Jamia Millia Islamia",
    location: "Delhi",
    district: "Delhi",
    programs: ["B.Tech", "BA", "BSc", "BCom", "BBA", "BCA", "M.Tech", "MBA", "MA"],
    eligibility: "12th pass with minimum 50% marks",
    cutoffs: "JEE Main for B.Tech: 25000-40000 rank, Merit based for others",
    facilities: ["Hostels", "Central Library", "Computer Labs", "Sports Complex", "WiFi Campus", "Cultural Center"],
    contact: {
      phone: "+91-11-26981717",
      email: "registrar@jmi.ac.in",
      address: "Jamia Nagar, Okhla, New Delhi - 110025"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 21,
    name: "Government Engineering College Ajmer",
    location: "Ajmer",
    district: "Ajmer",
    programs: ["B.Tech", "M.Tech"],
    eligibility: "12th Science with JEE Main qualification",
    cutoffs: "JEE Main: 60000-100000 rank",
    facilities: ["Hostels", "Library", "Engineering Labs", "Workshop", "Internet", "Placement Cell"],
    contact: {
      phone: "+91-145-2787181",
      email: "principal@gecajmer.ac.in",
      address: "Goth Mangalam, Near Pushkar Road, Ajmer, Rajasthan - 305002"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 22,
    name: "Government Medical College Bhopal",
    location: "Bhopal",
    district: "Bhopal",
    programs: ["MBBS", "MD", "MS", "B.Sc Nursing", "BSW"],
    eligibility: "12th Science with NEET qualification",
    cutoffs: "NEET: 550-600 marks for General category",
    facilities: ["Hospital", "Medical Labs", "Library", "Hostels", "Internet", "Research Center"],
    contact: {
      phone: "+91-755-2670820",
      email: "principal@gmcbhopal.edu.in",
      address: "1, Sultania Road, Bhopal, Madhya Pradesh - 462001"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 23,
    name: "University of Delhi",
    location: "Delhi",
    district: "Delhi",
    programs: ["BA", "BSc", "BCom", "BBA", "BCA", "B.Ed", "MA", "MSc", "MCom", "MBA"],
    eligibility: "12th pass with minimum 45% marks",
    cutoffs: "CUET based admission, varies by college and course",
    facilities: ["Multiple Hostels", "Central Library", "Computer Centers", "Sports Complex", "WiFi Campus", "Cultural Centers"],
    contact: {
      phone: "+91-11-27666700",
      email: "registrar@du.ac.in",
      address: "Delhi University, Delhi - 110007"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  },
  {
    id: 24,
    name: "Maharaja Sayajirao University",
    location: "Vadodara",
    district: "Vadodara",
    programs: ["BA", "BSc", "BCom", "B.Tech", "BBA", "BCA", "MA", "MSc", "M.Tech", "MBA"],
    eligibility: "12th pass with minimum 50% marks",
    cutoffs: "Merit based, General: 70%, OBC: 65%, SC/ST: 60%",
    facilities: ["University Hostels", "Central Library", "Research Labs", "Sports Ground", "Internet", "Cultural Center"],
    contact: {
      phone: "+91-265-2795594",
      email: "registrar@msubaroda.ac.in",
      address: "Pratapgunj, Vadodara, Gujarat - 390002"
    },
    hostel: true,
    library: true,
    labs: true,
    internet: true
  }
];

export default function Colleges() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const districts = [...new Set(colleges.map(college => college.district))];
  const allPrograms = [...new Set(colleges.flatMap(college => college.programs))];

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict = !selectedDistrict || college.district === selectedDistrict;
    const matchesProgram = !selectedProgram || college.programs.includes(selectedProgram);
    
    return matchesSearch && matchesDistrict && matchesProgram;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Government College Directory
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore government colleges across Madhya Pradesh with detailed information about programs, 
            eligibility, facilities, and contact details.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search colleges by name or location..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors lg:hidden"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex gap-4">
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Districts</option>
                {districts.map(district => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>

              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Programs</option>
                {allPrograms.map(program => (
                  <option key={program} value={program}>{program}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Districts</option>
                {districts.map(district => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>

              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Programs</option>
                {allPrograms.map(program => (
                  <option key={program} value={program}>{program}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            Showing {filteredColleges.length} of {colleges.length} colleges
          </p>
        </div>

        {/* College Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredColleges.map(college => (
            <div key={college.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{college.name}</h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{college.location}, {college.district}</span>
                    </div>
                  </div>
                </div>

                {/* Programs */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Programs Offered</h4>
                  <div className="flex flex-wrap gap-1">
                    {college.programs.map((program, index) => (
                      <span 
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Eligibility & Cutoffs */}
                <div className="mb-4 space-y-2">
                  <div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Eligibility: </span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{college.eligibility}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Cutoffs: </span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{college.cutoffs}</span>
                  </div>
                </div>

                {/* Facilities */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Facilities</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className={`flex items-center space-x-2 ${college.hostel ? 'text-green-600' : 'text-gray-400'}`}>
                      <Building className="h-4 w-4" />
                      <span className="text-sm">Hostel</span>
                    </div>
                    <div className={`flex items-center space-x-2 ${college.library ? 'text-green-600' : 'text-gray-400'}`}>
                      <BookOpen className="h-4 w-4" />
                      <span className="text-sm">Library</span>
                    </div>
                    <div className={`flex items-center space-x-2 ${college.labs ? 'text-green-600' : 'text-gray-400'}`}>
                      <Users className="h-4 w-4" />
                      <span className="text-sm">Labs</span>
                    </div>
                    <div className={`flex items-center space-x-2 ${college.internet ? 'text-green-600' : 'text-gray-400'}`}>
                      <Wifi className="h-4 w-4" />
                      <span className="text-sm">Internet</span>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Contact Information</h4>
                  <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{college.contact.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>{college.contact.email}</span>
                    </div>
                    <div className="flex items-start space-x-2 mt-2">
                      <MapPin className="h-4 w-4 mt-0.5" />
                      <span>{college.contact.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No colleges found</h3>
            <p className="text-gray-600 dark:text-gray-300">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
