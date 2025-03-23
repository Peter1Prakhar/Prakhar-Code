"use client";
import Link from 'next/link';
import { problems } from '../../../data/problems';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

export default function ProblemsPage() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-500/10 text-green-500 hover:bg-green-500/20';
      case 'Medium':
        return 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20';
      case 'Hard':
        return 'bg-red-500/10 text-red-500 hover:bg-red-500/20';
      default:
        return '';
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Problems</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-4 px-6 text-left">Status</th>
              <th className="py-4 px-6 text-left">Title</th>
              <th className="py-4 px-6 text-left">Difficulty</th>
              <th className="py-4 px-6 text-left">Acceptance</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem) => (
              <tr 
                key={problem.id} 
                className="border-b hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => window.location.href = `/problems/${problem.id}`}
              >
                <td className="py-4 px-6">⭕</td>
                <td className="py-4 px-6">
                  <span className="text-primary hover:text-primary/80 font-medium">
                    {problem.title}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <Badge 
                    variant="secondary" 
                    className={getDifficultyColor(problem.difficulty)}
                  >
                    {problem.difficulty}
                  </Badge>
                </td>
                <td className="py-4 px-6">75.6%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}