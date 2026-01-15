import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { CheckCircle, AlertCircle } from "lucide-react";

export default function Submission() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Submission Guidelines" />
        
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">1</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prepare Your Manuscript</h3>
              <p className="text-gray-600 mb-4">
                Prospective authors are invited to submit full papers of 4-6 pages (including all figures, tables, and references). Extra pages will be charged.
              </p>
              <Button variant="outline" size="sm" className="gap-2">
                Download Template (Word)
              </Button>
              <Button variant="outline" size="sm" className="ml-4 gap-2">
                Download Template (LaTeX)
              </Button>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">2</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Submit via System</h3>
              <p className="text-gray-600 mb-4">
                All papers must be submitted electronically through the Microsoft CMT submission system. First-time users need to register an account.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3 mb-4">
                <AlertCircle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                <p className="text-sm text-yellow-800">
                  Please ensure your paper follows the IEEE format and does not contain any plagiarism. All papers will be checked using CrossCheck.
                </p>
              </div>
              <Button>Go to Submission System</Button>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">3</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Review Process</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  All submissions will be peer-reviewed by at least 2-3 independent reviewers.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  Evaluation criteria include originality, technical quality, relevance, and presentation.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  Notification of acceptance will be sent by April 20, 2026.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Conference Awards</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Best Paper Award", prize: "$500 + Certificate" },
              { title: "Best Student Paper", prize: "$300 + Certificate" },
              { title: "Best Presentation", prize: "Certificate" }
            ].map((award, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-[hsl(var(--accent))] mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🏆</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{award.title}</h4>
                <p className="text-primary font-medium">{award.prize}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
