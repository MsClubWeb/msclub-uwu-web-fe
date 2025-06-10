import { NextResponse } from 'next/server';

// Mock data for upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "Azure Cloud Workshop",
    description: "Learn the fundamentals of Microsoft Azure cloud computing platform with hands-on exercises and real-world scenarios.",
    date: "June 15, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Computer Lab 1, Faculty of Technology",
    category: "Cloud",
    image: "/events/azure-workshop.jpg"
  },
  {
    id: 2,
    title: "AI & Machine Learning Seminar",
    description: "Explore the latest trends in AI and ML with Microsoft technologies including Azure AI services and Cognitive Services.",
    date: "June 25, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Auditorium A",
    category: "Data",
    image: "/events/ai-ml-seminar.jpg"
  },
  {
    id: 3,
    title: "Microsoft 365 Productivity Workshop",
    description: "Master Microsoft 365 tools to boost your productivity with advanced features in Teams, SharePoint, and Power Platform.",
    date: "July 5, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Training Room B",
    category: "Productivity",
    image: "/events/m365-workshop.jpg"
  },
  {
    id: 4,
    title: "HackMS 2025",
    description: "48-hour hackathon focusing on Microsoft technologies. Build innovative solutions and compete for amazing prizes.",
    date: "July 18-20, 2025",
    time: "9:00 AM Friday - 6:00 PM Sunday",
    location: "Innovation Hub",
    category: "Hackathon",
    image: "/HackMs.png"
  }
];

export async function GET() {
  try {
    return NextResponse.json(upcomingEvents);
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch upcoming events' },
      { status: 500 }
    );
  }
}
