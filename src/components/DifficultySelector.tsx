import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

interface DifficultySelectorProps {
  selectedDifficulty: Difficulty | null;
  onSelect: (difficulty: Difficulty) => void;
}

const difficultyConfig = {
  Beginner: {
    icon: "🌱",
    description: "Perfect for starting your coding journey",
    color: "from-green-500 to-emerald-500"
  },
  Intermediate: {
    icon: "⚡",
    description: "Challenge yourself with medium problems",
    color: "from-yellow-500 to-orange-500"
  },
  Advanced: {
    icon: "🚀",
    description: "Test your skills with complex algorithms",
    color: "from-red-500 to-pink-500"
  }
};

export function DifficultySelector({ selectedDifficulty, onSelect }: DifficultySelectorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
          Code Challenge Platform
        </h1>
        <p className="text-muted-foreground text-lg">
          Choose your difficulty level and start solving problems
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(Object.entries(difficultyConfig) as [Difficulty, typeof difficultyConfig.Beginner][]).map(([difficulty, config]) => (
          <Card
            key={difficulty}
            className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-primary border-2 ${
              selectedDifficulty === difficulty
                ? 'border-primary bg-gradient-card'
                : 'border-border hover:border-primary/50'
            }`}
            onClick={() => onSelect(difficulty)}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">{config.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{difficulty}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {config.description}
              </p>
              <Button
                variant={selectedDifficulty === difficulty ? "default" : "outline"}
                className="w-full"
              >
                {selectedDifficulty === difficulty ? "Selected" : "Select"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}