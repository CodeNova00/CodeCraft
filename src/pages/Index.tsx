import { useState } from "react";
import { DifficultySelector } from "@/components/DifficultySelector";
import { QuestionBrowser, Question } from "@/components/QuestionBrowser";
import { CodeEditor } from "@/components/CodeEditor";
import { ResultsPanel, TestResult } from "@/components/ResultsPanel";
import { questionsData } from "@/data/questions";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { useToast } from "@/hooks/use-toast";

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
type Language = 'python' | 'javascript';

const Index = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [results, setResults] = useState<TestResult[] | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const { toast } = useToast();

  const handleDifficultySelect = (difficulty: Difficulty) => {
    setSelectedDifficulty(difficulty);
    setSelectedQuestion(null);
    setResults(null);
    setError(undefined);
  };

  const handleQuestionSelect = (question: Question | null) => {
    setSelectedQuestion(question);
    setResults(null);
    setError(undefined);
  };

  const handleBackToDifficulty = () => {
    setSelectedDifficulty(null);
    setSelectedQuestion(null);
    setResults(null);
    setError(undefined);
  };

  // Mock code execution function - in a real app, this would call your backend
  const handleRunCode = async (code: string, language: Language) => {
    if (!selectedQuestion) return;

    setIsRunning(true);
    setError(undefined);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock results - in a real app, this would come from Judge0 API
      const mockResults: TestResult[] = selectedQuestion.test_cases.map((testCase, index) => {
        // Simple mock logic - in reality, this would be the actual code execution result
        const isCorrect = Math.random() > 0.3; // 70% chance of success for demo
        
        return {
          input: testCase.input,
          expected: testCase.expected_output,
          actual: isCorrect ? testCase.expected_output : "wrong_output",
          passed: isCorrect,
          error: !isCorrect && Math.random() > 0.5 ? "Runtime error: Example error message" : undefined
        };
      });
      
      setResults(mockResults);
      
      const passedTests = mockResults.filter(r => r.passed).length;
      const totalTests = mockResults.length;
      
      if (passedTests === totalTests) {
        toast({
          title: "🎉 All Tests Passed!",
          description: `Great job! Your solution passed all ${totalTests} test cases.`,
        });
      } else {
        toast({
          title: "Some Tests Failed",
          description: `${passedTests}/${totalTests} tests passed. Keep trying!`,
          variant: "destructive",
        });
      }
      
    } catch (err) {
      setError("Failed to execute code. Please try again.");
      toast({
        title: "Execution Error",
        description: "There was an error running your code.",
        variant: "destructive",
      });
    } finally {
      setIsRunning(false);
    }
  };

  // Show difficulty selector if no difficulty is selected
  if (!selectedDifficulty) {
    return (
      <div className="min-h-screen bg-background">
        <DifficultySelector
          selectedDifficulty={selectedDifficulty}
          onSelect={handleDifficultySelect}
        />
      </div>
    );
  }

  const questions = questionsData[selectedDifficulty] || [];

  // Show question browser if no question is selected
  if (!selectedQuestion) {
    return (
      <div className="min-h-screen bg-background">
        <QuestionBrowser
          questions={questions}
          selectedQuestion={selectedQuestion}
          onQuestionSelect={handleQuestionSelect}
          onBack={handleBackToDifficulty}
          difficulty={selectedDifficulty}
        />
      </div>
    );
  }

  // Show coding interface when question is selected
  return (
    <div className="h-screen bg-background">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel defaultSize={40} minSize={30}>
          <QuestionBrowser
            questions={questions}
            selectedQuestion={selectedQuestion}
            onQuestionSelect={handleQuestionSelect}
            onBack={handleBackToDifficulty}
            difficulty={selectedDifficulty}
          />
        </ResizablePanel>
        
        <ResizableHandle />
        
        <ResizablePanel defaultSize={60} minSize={40}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={60} minSize={40}>
              <CodeEditor
                onRunCode={handleRunCode}
                isRunning={isRunning}
              />
            </ResizablePanel>
            
            <ResizableHandle />
            
            <ResizablePanel defaultSize={40} minSize={30}>
              <ResultsPanel
                results={results}
                isRunning={isRunning}
                error={error}
              />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Index;