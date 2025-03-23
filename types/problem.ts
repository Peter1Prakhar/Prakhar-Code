export interface Problem {
    id: string;
    title: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    description: string;
    examples: {
      input: string;
      output: string;
      explanation?: string;
    }[];
    constraints: string[];
    starterCode: {
      javascript: string;
      typescript: string;
      python: string;
    };
    testCases: {
      input: string[];
      output: string;
    }[];
  }