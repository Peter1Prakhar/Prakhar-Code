import { Problem, problems } from "@/mockProblems/problems";
import { Navbar2 } from "./Navbar2";

interface ProblemDescriptionProps {
  problemId: string;
}

export const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problemId }) => {
  const problem: Problem | undefined = problems.find((p: Problem) => p.id === problemId);

  if (!problem) {
    return <div>Problem not found</div>;
  }

  return (
    <div className="h-screen bg-gray-500 text-black overflow-hidden">
      <div className="container mx-auto px-4 py-8 bg-gray-500 overflow-auto max-h-screen">
        <div className="p-6 rounded shadow-md bg-gray-100  ">
          <div className="flex items-center mb-4 ">
            <h1 className="text-3xl font-semibold text-gray-900">{problem.title}</h1>
            {problem.isSolved && (
              <svg
                className="h-8 w-8 text-blue-500 ml-auto"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            )}
          </div>
          <div className="flex items-center mb-4">
            <div
              className={`px-2 py-1 text-sm font-medium rounded-full ${
                problem.difficulty === "Easy"
                  ? "bg-green-500 text-white"
                  : problem.difficulty === "Medium"
                  ? "bg-yellow-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {problem.difficulty}
            </div>
            <div className="ml-4 flex space-x-2">
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                />
              </svg>
            </div>
          </div>
          <div className="text-gray-800">
            <p>{problem.description}</p>
          </div>
          <div className="mt-6">
            <b>Example 1:</b>
            <p>Input: {problem.Example1?.Input}</p>
            <p>Output: {problem.Example1?.Output}</p>
            <p>Explanation: {problem.Example1?.Explanation}</p>
          </div>
          <div className="mt-6">
            <b>Example 2:</b>
            <p>Input: {problem.Example2?.Input}</p>
            <p>Output: {problem.Example2?.Output}</p>
            <p>Explanation: {problem.Example2?.Explanation}</p>
          </div>
          <div className="mt-6">
            <b>Example 3:</b>
            <p>Input: {problem.Example3?.Input}</p>
            <p>Output: {problem.Example3?.Output}</p>
            <p>Explanation: {problem.Example3?.Explanation}</p>
          </div>
          <div className="mt-6">
            <b>Constraints:</b>
            <p>{problem.Constraints}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// export ProblemDescription;
