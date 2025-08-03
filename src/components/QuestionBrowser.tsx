import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code2, TestTube } from "lucide-react";

export interface Question {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  test_cases: Array<{
    input: string;
    expected_output: string;
  }>;
}

interface QuestionBrowserProps {
  questions: Question[];
  selectedQuestion: Question | null;
  onQuestionSelect: (question: Question) => void;
  onBack: () => void;
  difficulty: string;
}

export function QuestionBrowser({ 
  questions, 
  selectedQuestion, 
  onQuestionSelect, 
  onBack, 
  difficulty 
}: QuestionBrowserProps) {
  if (selectedQuestion) {
    return (
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-border">
          <Button variant="outline" onClick={() => onQuestionSelect(null)} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Questions
          </Button>
          <div className="flex items-center gap-3 mb-2">
            <Badge variant="secondary">{selectedQuestion.difficulty}</Badge>
            <h2 className="text-xl font-semibold">{selectedQuestion.title}</h2>
          </div>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                Problem Description
              </h3>
              <p className="text-foreground leading-relaxed">
                {selectedQuestion.description}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                <TestTube className="h-5 w-5" />
                Test Cases
              </h3>
              <div className="space-y-3">
                {selectedQuestion.test_cases.map((testCase, index) => (
                  <Card key={index} className="p-4">
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Input:</span>
                        <code className="block mt-1 p-2 bg-editor-bg rounded text-sm font-mono">
                          {testCase.input}
                        </code>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-muted-foreground">Expected Output:</span>
                        <code className="block mt-1 p-2 bg-editor-bg rounded text-sm font-mono">
                          {testCase.expected_output}
                        </code>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-border">
        <Button variant="outline" onClick={onBack} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Difficulty
        </Button>
        <h2 className="text-xl font-semibold">{difficulty} Problems</h2>
        <p className="text-muted-foreground">Choose a problem to solve</p>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {questions.map((question) => (
            <Card 
              key={question.id}
              className="p-4 cursor-pointer transition-all duration-200 hover:shadow-soft hover:border-primary/50"
              onClick={() => onQuestionSelect(question)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="secondary">{question.difficulty}</Badge>
                    <h3 className="font-medium">{question.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {question.description}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                    <TestTube className="h-3 w-3" />
                    {question.test_cases.length} test cases
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Solve
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}