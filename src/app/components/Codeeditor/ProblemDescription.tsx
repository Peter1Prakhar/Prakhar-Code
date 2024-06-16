import { Problem, problems } from "@/mockProblems/problems"
import { Navbar2 } from "./Navbar2";

export const ProblemDescription = ({ problemId }: { problemId: string}) => {
    const problem = problems.find((p: Problem) => p.id === problemId);

    if (!problem) {
        return <div>Problem not found</div>;
    }

    // Rest of the code
    return (
        <div className="h-screen bg-gray-700 text-white" >
            <Navbar2/>
            {/* probelem className */}
            <div className="flex">
                <h1 style={{ fontSize: "30px", color:"white" }}>{problem.title}</h1>
                {/* this image will appear if question is solved */}
                {problem.isSolved && 
                <svg className="h-8 w-8 text-blue-500 mt-2 ml-auto mr-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <path d="M9 12l2 2l4 -4" /></svg>
                }
                </div>
            <div className="flex">
                <div className="bg-green-400 mr-5 border rounded-xl">{problem.difficulty}</div>
                <svg className="h-8 w-8 text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                </svg>
                <svg className="h-8 w-8 text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"/>
                </svg>
            </div>
            <div>
            {problem.description}
            <br></br>
            </div>
            <b>Example 1:</b>
            <br></br>
            Input: {problem.Example1?.Input} 
            <br></br>
            Output: {problem.Example1?.Output}
            <br></br>
            Explanation: {problem.Example1?.Explanation}
            <br></br>
            <b>Example 2:</b>
            <br></br>
            Input: {problem.Example2?.Input}
            <br></br>
            Output:  {problem.Example2?.Output}
            <br></br>
            Explanation: {problem.Example2?.Explanation}
            <br></br>
            <b>Example 3:</b>
            <br></br>

            Input: {problem.Example3?.Input}
            <br></br>
            Output: {problem.Example3?.Output}
            <br></br>
            Explanation: {problem.Example3?.Explanation}
            <br></br>
            <div className="mt-10">
            <b>Constraints:</b>
            <br></br>
            {problem.Constraints}
            <br></br>
            </div>
        </div>
    )
}

