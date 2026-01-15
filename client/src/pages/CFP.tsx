import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Link } from "wouter";
import { FileText, Download } from "lucide-react";

export default function CFP() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Call for Papers" subtitle="Submission Deadline: February 20, 2026" />
        
        <div className="prose prose-lg text-gray-600 mb-12">
          <p>
            The 2026 2nd International Power and Electrical Engineering Conference (IPEE 2026) invites high-quality original research papers in all areas of power and electrical engineering.
          </p>
          <p>
            Accepted and presented papers will be published in the Conference Proceedings, which will be submitted for indexing by IEEE Xplore, Ei Compendex, Scopus, and other major databases.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg mb-12">
          <h3 className="text-xl font-bold text-primary mb-4">Topics of Interest</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="list-disc pl-5 space-y-2">
              <li>Power Generation, Transmission and Distribution</li>
              <li>Power Electronics and Applications</li>
              <li>Smart Grids and Microgrids</li>
              <li>Renewable Energy Technologies</li>
              <li>Energy Storage Systems</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2">
              <li>High Voltage Engineering</li>
              <li>Electrical Machines and Drives</li>
              <li>Power System Protection and Control</li>
              <li>Electric Vehicles and Traction Systems</li>
              <li>AI Applications in Power Systems</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-16">
          <Link href="/submission">
            <Button size="lg" className="w-full md:w-auto">Submit Your Paper</Button>
          </Link>
          <Button variant="outline" size="lg" className="w-full md:w-auto flex items-center gap-2">
            <Download className="w-4 h-4" /> Download CFP Flyer
          </Button>
        </div>

        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Special Sessions</h3>
          <p className="mb-6 text-gray-600">
            Prospective organizers are invited to submit proposals for Special Sessions. Special Sessions should focus on emerging topics or specific areas of interest that are not fully covered by the regular tracks.
          </p>
          <Button variant="secondary">Propose a Special Session</Button>
        </div>
      </div>
    </div>
  );
}
