import Split from 'react-split';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { problems, Problem } from "@/mockProblems/problems";
import { useCallback, useState } from 'react';
import { Editor } from '@monaco-editor/react';
import { makeSubmission } from './services';

export const RightSide = ({ problemId }: { problemId: string }) => {
    const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault(); // Prevents the default Enter action (submitting the form)
          setInputValue((prev) => prev + '\n'); // Appends a newline character
      }
  };
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





     <div className='w-full px-5 py-5 bg-gray-800 text-white rounded-lg shadow-md'>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setInput((e.target as HTMLFormElement).input.value);
          console.log(input);
        }}
        className='flex flex-col space-y-4'
      >
        <label htmlFor="input" className='text-lg font-semibold'>
          Test Case Input:
        </label>
        <textarea
      className='p-2 rounded text-black'
      name="input"
      id="input"
      placeholder="Enter your test case here..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyPress}
      rows={5} // Adjust the number of rows as needed
    />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Test Case
        </button>
      </form>
      <div className='mt-5'>
        <SyntaxHighlighter language="cpp" style={dark} className='rounded-lg'>
          {output}
        </SyntaxHighlighter>
      </div>
      <button
        className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={runCode}
      >
        Run Code
      </button>
      <div className='mt-10'>
        <h2 className='text-lg font-semibold mb-4'>Test Cases</h2>
        {problem.Testcase1 && (
          <div className='mb-5 p-4 bg-gray-700 rounded-lg'>
            <p className='text-sm'>
              <span className='font-bold'>Input:</span> {problem.Testcase1.Input}
            </p>
            <p className='text-sm'>
              <span className='font-bold'>Expected Output:</span> {problem.Testcase1.Output}
            </p>
          </div>
        )}
        {problem.TestCase2 && (
          <div className='mb-5 p-4 bg-gray-700 rounded-lg'>
            <p className='text-sm'>
              <span className='font-bold'>Input:</span> {problem.TestCase2.Input}
            </p>
            <p className='text-sm'>
              <span className='font-bold'>Expected Output:</span> {problem.TestCase2.Output}
            </p>
          </div>
        )}
        {problem.TestCase3 && (
          <div className='mb-5 p-4 bg-gray-700 rounded-lg'>
            <p className='text-sm'>
              <span className='font-bold'>Input:</span> {problem.TestCase3.Input}
            </p>
            <p className='text-sm'>
              <span className='font-bold'>Expected Output:</span> {problem.TestCase3.Output}
            </p>
          </div>
        )}
      </div>
    </div>
            </Split>
        </div>
    );
};
