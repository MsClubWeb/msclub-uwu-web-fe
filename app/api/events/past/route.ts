import { NextResponse } from 'next/server';

// Mock data for past events
const pastEvents = [
  {
    id: 5,
    title: "Introduction to Power BI",
    description: "Data visualization workshop covering Power BI fundamentals, dashboard creation, and business intelligence concepts.",
    date: "May 15, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Computer Lab 2",
    category: "Data",
    image: "/events/powerbi-workshop.jpg"
  },
  {
    id: 6,
    title: "DevOps with Azure DevOps",
    description: "Learn continuous integration and deployment using Azure DevOps, Git, and automation pipelines.",
    date: "May 8, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Lab 3",
    category: "Development",
    image: "/events/devops-workshop.jpg"
  },
  {
    id: 7,
    title: "Microsoft Student Partner Meetup",
    description: "Networking event for Microsoft Student Partners and aspiring technology leaders in the university.",
    date: "April 22, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Conference Hall",
    category: "Networking",
    image: "/events/msp-meetup.jpg"
  },
  {
    id: 8,
    title: "Azure Fundamentals Certification Prep",
    description: "Comprehensive preparation session for AZ-900 Azure Fundamentals certification exam.",
    date: "April 10, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Training Center",
    category: "Cloud",
    image: "/events/azure-cert-prep.jpg"
  },
  {
    id: 9,
    title: "Web Development with .NET",
    description: "Full-stack web development using ASP.NET Core, Entity Framework, and modern web technologies.",
    date: "March 28, 2025",
    time: "1:00 PM - 6:00 PM",
    location: "Computer Lab 1",
    category: "Development",
    image: "/events/dotnet-web-dev.jpg"
  }
];

export async function GET() {
  try {
    return NextResponse.json(pastEvents);
  } catch (error) {
    console.error('Error fetching past events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch past events' },
      { status: 500 }
    );
  }
}
