import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">CodeCraft</h1>
          </div>
          <Link to="/challenges">
            <Button>Start Coding</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Master Your Coding Skills
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Level Up Your
            <span className="text-primary block">Programming Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Challenge yourself with carefully crafted coding problems. From beginner to expert, 
            we have questions that will push your limits and expand your knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/challenges">
              <Button size="lg" className="w-full sm:w-auto">
                <Code className="mr-2 h-5 w-5" />
                Start Challenges
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">Why Choose CodeCraft?</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform is designed to help you grow as a developer through hands-on practice
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Multiple Difficulty Levels</CardTitle>
              <CardDescription>
                From easy warm-ups to expert challenges, find problems that match your skill level
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Real-time Code Editor</CardTitle>
              <CardDescription>
                Write, test, and debug your code with our integrated development environment
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Instant Feedback</CardTitle>
              <CardDescription>
                Get immediate results on your solutions with detailed test case feedback
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Coding?</h3>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of developers who are improving their skills with CodeCraft
            </p>
            <Link to="/challenges">
              <Button size="lg" variant="secondary">
                Begin Your Journey
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 CodeCraft. Built for developers, by developers.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;