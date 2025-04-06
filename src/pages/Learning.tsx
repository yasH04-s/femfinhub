
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Play, Book, Award, Clock, Star } from 'lucide-react';

const Learning = () => {
  const courses = [
    {
      id: 1,
      title: 'Financial Literacy Basics',
      description: 'Learn the fundamentals of personal finance and financial literacy.',
      progress: 75,
      category: 'Beginner',
      duration: '3 hours',
      rating: 4.8,
      enrolled: 2453,
    },
    {
      id: 2,
      title: 'Investment Strategies for Women',
      description: "Discover investment approaches tailored to women's financial goals.",
      progress: 30,
      category: 'Intermediate',
      duration: '5 hours',
      rating: 4.9,
      enrolled: 1892,
    },
    {
      id: 3,
      title: 'Understanding Credit Scores',
      description: 'Learn how credit works and strategies to improve your credit score.',
      progress: 0,
      category: 'Beginner',
      duration: '2 hours',
      rating: 4.7,
      enrolled: 1254,
    },
    {
      id: 4,
      title: 'Retirement Planning',
      description: 'Plan for a secure financial future with effective retirement strategies.',
      progress: 0,
      category: 'Advanced',
      duration: '4 hours',
      rating: 4.6,
      enrolled: 986,
    },
  ];

  return (
    <div className="container py-8">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold">Learning Hub</h1>
        <p className="text-muted-foreground">Expand your financial knowledge through our curated courses and resources.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <Badge variant={course.category === 'Beginner' ? 'default' : course.category === 'Intermediate' ? 'secondary' : 'destructive'}>
                  {course.category}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-4 w-4 mr-1 text-yellow-500 fill-yellow-500" />
                  <span>{course.rating}</span>
                </div>
              </div>
              <CardTitle className="text-xl mt-2">{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="flex justify-between items-center mb-2 text-sm">
                <span className="text-muted-foreground">{course.progress > 0 ? 'In Progress' : 'Not Started'}</span>
                <span className="font-medium">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2" />
              <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Book className="h-4 w-4 mr-1" />
                  <span>{course.enrolled.toLocaleString()} enrolled</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="sm">
                {course.progress > 0 ? (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Continue Learning
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Start Course
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-muted rounded-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <Award className="h-8 w-8 mr-3 text-primary" />
          <h2 className="text-2xl font-bold">Certification Tracks</h2>
        </div>
        <p className="text-muted-foreground mb-4">
          Complete a series of courses to earn a certification in specialized financial areas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Planning Certificate</CardTitle>
              <CardDescription>5 courses · 15 hours total</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" className="w-full">View Details</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Investment Specialist</CardTitle>
              <CardDescription>4 courses · 12 hours total</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Learning;
