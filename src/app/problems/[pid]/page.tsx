'use client';

import { useState, useEffect } from 'react';
import { problems } from '../../../../data/problems';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlayIcon } from 'lucide-react';
import Editor from '@monaco-editor/react';

export default function ProblemPage({ params }: { params: { pid: string } }) {
  const problem = problems.find(p => p.id === params.pid);
  const [language, setLanguage] = useState<'typescript' | 'javascript' | 'python'>('typescript');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (problem) {
      setCode(problem.starterCode[language] || '');
    }
  }, [language, problem]);

  if (!problem) {
    return <div className="p-6 text-red-500">Problem not found</div>;
  }

  const languageIds = {
    javascript: 63,
    typescript: 74,
    python: 71
  };

  const handleRunCode = async () => {
    setLoading(true);
    setOutput(null);

    try {
      const response = await fetch('https://judge0-ce.p.rapidapi.com/submissions', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'f64f3f33eamsh72b02d505e00792p15f3fajsnf02c5db7fbb8',
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        },
        body: JSON.stringify({
          source_code: code,
          language_id: languageIds[language],
          stdin: problem.testCases[0].input.join('\n'),
          expected_output: problem.testCases[0].output
        })
      });

      const data = await response.json();

      if (data.token) {
        checkSubmissionResult(data.token);
      } else {
        setOutput('Error: Submission failed');
        setLoading(false);
      }
    } catch (error) {
      setOutput('Error running code');
      console.error('Error:', error);
      setLoading(false);
    }
  };

  const checkSubmissionResult = async (token: string) => {
    try {
      const response = await fetch(`https://judge0-ce.p.rapidapi.com/submissions/${token}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'f64f3f33eamsh72b02d505e00792p15f3fajsnf02c5db7fbb8',
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        }
      });

      const result = await response.json();

      if (result.status?.id <= 2) {
        setTimeout(() => checkSubmissionResult(token), 1000);
      } else {
        setOutput(result.stdout || result.stderr || 'No output');
        setLoading(false);
      }
    } catch (error) {
      setOutput('Error fetching results');
      console.error('Error:', error);
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Problem Description */}
      <div className="w-[45%] p-6 border-r">
        <h1 className="text-2xl font-bold mb-4">{problem.title}</h1>
        <Badge 
          variant="secondary"
          className={
            problem.difficulty === 'Easy' ? 'bg-green-500/10 text-green-500' :
            problem.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-500' :
            'bg-red-500/10 text-red-500'
          }
        >
          {problem.difficulty}
        </Badge>
        
        <ScrollArea className="h-[calc(100vh-200px)] pr-4 mt-6">
          <div className="prose dark:prose-invert max-w-none">
            <p>{problem.description}</p>
            
            <h3>Examples:</h3>
            {problem.examples.map((example, index) => (
              <div key={index} className="my-4">
                <p><strong>Input:</strong> {example.input}</p>
                <p><strong>Output:</strong> {example.output}</p>
                {example.explanation && (
                  <p><strong>Explanation:</strong> {example.explanation}</p>
                )}
              </div>
            ))}

            <h3>Constraints:</h3>
            <ul>
              {problem.constraints.map((constraint, index) => (
                <li key={index}>{constraint}</li>
              ))}
            </ul>
          </div>
        </ScrollArea>
      </div>

      {/* Code Editor */}
      <div className="flex-1 flex flex-col">
        <div className="border-b p-4 flex justify-between items-center">
          <Tabs value={language} onValueChange={(v: any) => setLanguage(v)}>
            <TabsList>
              <TabsTrigger value="typescript">TypeScript</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button onClick={handleRunCode} disabled={loading}>
            <PlayIcon className="w-4 h-4 mr-2" />
            {loading ? 'Running...' : 'Run'}
          </Button>
        </div>
        
        <Editor
          height="calc(100vh - 130px)"
          defaultLanguage={language}
          value={code}
          onChange={(value) => setCode(value || '')}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            automaticLayout: true,
          }}
        />

        <div className="p-4 border-t">
          <h2 className="text-lg font-semibold">Output:</h2>
          <div className="p-3 bg-gray-800 text-white rounded-md mt-2">
            {output !== null ? <pre>{output}</pre> : 'No output yet'}
          </div>
        </div>
      </div>
    </div>
  );
}
