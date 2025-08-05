import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react";

export interface TestResult {
  input: string;
  expected: string;
  actual: string;
  passed: boolean;
  error?: string;
}

interface ResultsPanelProps {
  results: TestResult[] | null;
  isRunning: boolean;
  error?: string;
}

export function ResultsPanel({ results, isRunning, error }: ResultsPanelProps) {
  if (isRunning) {
    return (
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-border">
          <h3 className="text-lg font-semibold">Results</h3>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Running your code...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-border">
          <h3 className="text-lg font-semibold">Results</h3>
        </div>
        <div className="flex-1 p-4">
          <Card className="p-4 border-destructive bg-destructive/5">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-destructive mb-2">Execution Error</h4>
                <pre className="text-sm text-destructive/90 whitespace-pre-wrap font-mono">
                  {error}
                </pre>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-border">
          <h3 className="text-lg font-semibold">Results</h3>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Run your code to see results</p>
          </div>
        </div>
      </div>
    );
  }

  const passedTests = results.filter(r => r.passed).length;
  const totalTests = results.length;
  const allPassed = passedTests === totalTests;

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Results</h3>
          <Badge variant={allPassed ? "default" : "destructive"}>
            {passedTests}/{totalTests} Passed
          </Badge>
        </div>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {results.map((result, index) => (
            <Card key={index} className={`p-4 ${result.passed ? 'border-success/50 bg-success/5' : 'border-destructive/50 bg-destructive/5'}`}>
              <div className="flex items-start gap-3">
                {result.passed ? (
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                )}
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Test Case {index + 1}</span>
                    <Badge variant={result.passed ? "default" : "destructive"} className="text-xs">
                      {result.passed ? "PASSED" : "FAILED"}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-muted-foreground">Input:</span>
                      <code className="block mt-1 p-2 bg-editor-bg rounded font-mono">
                        {result.input}
                      </code>
                    </div>
                    
                    <div>
                      <span className="font-medium text-muted-foreground">Expected:</span>
                      <code className="block mt-1 p-2 bg-editor-bg rounded font-mono">
                        {result.expected}
                      </code>
                    </div>
                    
                    <div>
                      <span className="font-medium text-muted-foreground">Your Output:</span>
                      <code className={`block mt-1 p-2 bg-editor-bg rounded font-mono ${
                        result.passed ? 'text-success' : 'text-destructive'
                      }`}>
                        {result.actual || 'No output'}
                      </code>
                    </div>
                    
                    {result.error && (
                      <div>
                        <span className="font-medium text-destructive">Error:</span>
                        <code className="block mt-1 p-2 bg-destructive/10 rounded font-mono text-destructive text-xs">
                          {result.error}
                        </code>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {allPassed && (
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary rounded-full text-primary-foreground font-medium">
              <CheckCircle className="h-5 w-5" />
              Congratulations! All tests passed!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}