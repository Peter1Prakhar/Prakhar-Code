// ProblemPage.tsx
"use client"
import React from "react";
import Navbar from "@/components/Codeeditor/Navbar";
import { Navbar2 } from "@/components/Codeeditor/Navbar2";
import { ProblemDescription } from "@/components/Codeeditor/ProblemDescription";
import Split from 'react-split';
import { Problem, problems } from "@/mockProblems/problems";
import { RightSide } from "@/components/Codeeditor/RightSide";

const ProblemPage = ({ params }: { params: { pid: string } }) => {
    return (
        <div>
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar problemPage={true} />
            </div>
            <div className="fixed top-16 left-0 right-0 z-50"> {/* Adjust top-16 based on your Navbar height */}
                <Navbar2 />
            </div>
            <div className="relative top-24"> {/* Adjust top-24 based on your Navbar2 and Navbar heights */}
                <Split className="split minSize-{0}" minSize={0}>
                    <div>
                        <ProblemDescription problemId={params.pid} />
                    </div>
                    <div>
                        <RightSide problemId={params.pid} />
                    </div>
                </Split>
            </div>
        </div>
    );
};

export default ProblemPage;
