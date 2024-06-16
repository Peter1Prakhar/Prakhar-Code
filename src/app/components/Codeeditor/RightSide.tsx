import Split from 'react-split';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { problems, Problem } from "@/mockProblems/problems";
import { useCallback, useState } from 'react';
import { Editor } from '@monaco-editor/react';
import { makeSubmission } from './services';

export const RightSide = ({ problemId }: { problemId: string }) => {
    const [output, setOutput] = useState<string>('');
    const [selectedButton, setSelectedButton] = useState('');
    const [code, setCode] = useState('');
    const [input, setInput] = useState('');

    const problem = problems.find((p: Problem) => p.id === problemId);
    if (!problem) {
        return <div>Problem not found</div>;
    }

    const callBack = useCallback((response: any) => {
        console.log('Callback invoked');
        const { apiStatus, data, message } = response;

        if (apiStatus === 'loading') {
            setOutput("Loading...");
            console.log('Callback loading...');
        } else if (apiStatus === 'error') {
            setOutput(`Error: ${message}`);
            console.log('Callback error...');
        } else if (data && data.status && data.status.id !== undefined) {
            console.log('Received Data:', data);
            if (data.status.id === 3) {
                setOutput(atob(data.stdout));
                console.log(`Output: ${atob(data.stdout)}`);
            } else {
                setOutput(atob(data.stderr));
            }
        } else {
            setOutput("Invalid response from server");
            console.log('Invalid response structure:', data);
        }
    }, []);

    const handleClick = (language: string) => {
        setSelectedButton(language);
    };

    const runCode = useCallback(() => {
        if (!selectedButton) {
            setOutput("Please select a language.");
            return;
        }
        makeSubmission(code, selectedButton, callBack, input);
        console.log(`Input: ${input}`);
        console.log(`Code: ${code}`);
        console.log(`Selected Language: ${selectedButton}`);
    }, [code, selectedButton, input, callBack]);

    return (
        <div className='h-screen bg-gray-700 text-white'>
            <div className="pl-20 text-black">
                <button onClick={() => handleClick('cpp')} style={{ backgroundColor: selectedButton === 'cpp' ? 'red' : 'initial' }}>CPP</button>
                <button onClick={() => handleClick('java')} style={{ backgroundColor: selectedButton === 'java' ? 'red' : 'initial' }}>Java</button>
                <button onClick={() => handleClick('javascript')} style={{ backgroundColor: selectedButton === 'javascript' ? 'red' : 'initial' }}>Javascript</button>
            </div>
            <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={0}>
                <div className='w-full overflow-auto'>
                    <Editor
                        theme='vs-dark'
                        defaultLanguage='cpp'
                        defaultValue="// write your code here"
                        onChange={(value) => setCode(value ?? '')}
                    />
                </div>
                <div className='w-full px-5 overflow-auto'>
                    <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        setInput((e.target as HTMLFormElement).input.value);
                        console.log(input);
                    }}>
                        <input className='text-black' type="text" name="input" />
                        <button type="submit">Submit</button>
                    </form>
                    <SyntaxHighlighter language="cpp" style={dark}>
                        {output}
                    </SyntaxHighlighter>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                        onClick={runCode}
                    >
                        Submit
                    </button>
                </div>
            </Split>
        </div>
    );
};
