import { Editor } from "@monaco-editor/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Play, RotateCcw } from "lucide-react";
import { useState } from "react";

type Language = 'python' | 'javascript';

interface CodeEditorProps {
  onRunCode: (code: string, language: Language) => void;
  isRunning?: boolean;
}

const languageTemplates = {
  python: `# Write your solution here
def solution():
    # Your code goes here
    pass

# Call your function
result = solution()
print(result)`,
  javascript: `// Write your solution here
function solution() {
    // Your code goes here
}

// Call your function
const result = solution();
console.log(result);`
};

export function CodeEditor({ onRunCode, isRunning = false }: CodeEditorProps) {
  const [code, setCode] = useState(languageTemplates.python);
  const [language, setLanguage] = useState<Language>('python');

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setCode(languageTemplates[newLanguage]);
  };

  const handleReset = () => {
    setCode(languageTemplates[language]);
  };

  const handleRun = () => {
    onRunCode(code, language);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Code Editor</h3>
          <div className="flex items-center gap-3">
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="python">
                  <div className="flex items-center gap-2">
                    🐍 Python
                  </div>
                </SelectItem>
                <SelectItem value="javascript">
                  <div className="flex items-center gap-2">
                    📦 JavaScript
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            
            <Button onClick={handleRun} disabled={isRunning} className="min-w-24">
              {isRunning ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  Running
                </div>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Run Code
                </>
              )}
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge variant="outline">
            {language === 'python' ? 'Python 3' : 'Node.js'}
          </Badge>
          <span className="text-xs text-muted-foreground">
            Write your solution and click "Run Code" to test
          </span>
        </div>
      </div>
      
      <div className="flex-1 relative">
        <Editor
          height="100%"
          language={language}
          value={code}
          onChange={(value) => setCode(value || '')}
          theme="vs-dark"
          options={{
            fontSize: 14,
            fontFamily: 'Fira Code, Monaco, Consolas, monospace',
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            lineNumbers: 'on',
            tabSize: language === 'python' ? 4 : 2,
            insertSpaces: true,
            automaticLayout: true,
            suggestOnTriggerCharacters: true,
            quickSuggestions: true,
            parameterHints: { enabled: true },
          }}
        />
      </div>
    </div>
  );
}