"use client";
import Navbar from "@/components/Codeeditor/Navbar"
import { Navbar2 } from "@/components/Codeeditor/Navbar2";
import { ProblemDescription } from "@/components/Codeeditor/ProblemDescription";
import Split from 'react-split'
import { Problem, problems } from "@/mockProblems/problems";
import { RightSide } from "@/components/Codeeditor/RightSide";

const ProblemPage = ({params} : {
    params: {
        pid: string
    }

}) => {
    return (
        <div>
            <div className="top-0 left-0 right-0">
                <Navbar problemPage={true} />
            </div>
            <div>
            </div>
            <Split className="split minSize-{0}" minSize={0}>
                <div>
                    <ProblemDescription problemId={params.pid} />
                </div>
                <div>
                    <RightSide problemId={params.pid}/>
                </div>
            </Split>
        </div>
    );
};
export default ProblemPage