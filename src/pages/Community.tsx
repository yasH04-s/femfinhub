
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, MessageSquare, Users, Calendar, Heart, MessagesSquare, Share2 } from 'lucide-react';

const Community = () => {
  const communityPosts = [
    {
      id: 1,
      author: {
        name: 'Jessica Chen',
        role: 'Financial Coach',
        avatar: '/placeholder.svg',
      },
      time: '2 hours ago',
      content: 'Just posted a new article on how women can negotiate better salaries. Check it out in the resources section!',
      likes: 24,
      comments: 8,
      tags: ['Career', 'Negotiation'],
    },
    {
      id: 2,
      author: {
        name: 'Maya Johnson',
        role: 'Community Member',
        avatar: '/placeholder.svg',
      },
      time: '5 hours ago',
      content: "I just paid off my student loans! 🎉 It took me 5 years, but the debt-snowball method really worked for me. Happy to share tips with anyone who's interested.",
      likes: 56,
      comments: 12,
      tags: ['Debt-Free', 'Success Story'],
    },
    {
      id: 3,
      author: {
        name: 'Sarah Williams',
        role: 'Investment Advisor',
        avatar: '/placeholder.svg',
      },
      time: '1 day ago',
      content: "Hosting a free webinar next week on getting started with investing with just $100. Drop a comment if you're interested and I'll share the registration link.",
      likes: 32,
      comments: 15,
      tags: ['Investing', 'Beginners'],
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Financial Wellness Webinar',
      date: 'Oct 15, 2023',
      time: '7:00 PM EST',
      attendees: 45,
      hostName: 'Sarah Williams',
      hostRole: 'Investment Advisor',
      hostAvatar: '/placeholder.svg',
    },
    {
      id: 2,
      title: 'Networking Mixer: Women in Finance',
      date: 'Oct 22, 2023',
      time: '6:30 PM EST',
      attendees: 28,
      hostName: 'FemFinHub Team',
      hostRole: 'Organizers',
      hostAvatar: '/placeholder.svg',
    },
  ];

  const mentors = [
    {
      id: 1,
      name: 'Dr. Lisa Chen',
      role: 'Financial Planner',
      avatar: '/placeholder.svg',
      bio: '15+ years helping women achieve financial independence',
      specialties: ['Retirement Planning', 'Investment Strategies'],
      rating: 4.9,
      reviewCount: 124,
    },
    {
      id: 2,
      name: 'Amara Wilson',
      role: 'Entrepreneurship Coach',
      avatar: '/placeholder.svg',
      bio: 'Helping women scale their businesses and secure funding',
      specialties: ['Business Finance', 'Fundraising'],
      rating: 4.8,
      reviewCount: 98,
    },
    {
      id: 3,
      name: 'Jennifer Lopez',
      role: 'Debt Counselor',
      avatar: '/placeholder.svg',
      bio: 'Specialized in helping people become debt-free',
      specialties: ['Debt Management', 'Credit Repair'],
      rating: 5.0,
      reviewCount: 87,
    },
  ];

  return (
    <div className="container py-8">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold">Community</h1>
        <p className="text-muted-foreground">Connect with like-minded women, share experiences, and learn together.</p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search the community..." className="pl-10" />
        </div>
        <Button>
          <MessageSquare className="mr-2 h-4 w-4" />
          New Post
        </Button>
      </div>

      <Tabs defaultValue="feed" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="feed">
            <MessageSquare className="mr-2 h-4 w-4" />
            Feed
          </TabsTrigger>
          <TabsTrigger value="events">
            <Calendar className="mr-2 h-4 w-4" />
            Events
          </TabsTrigger>
          <TabsTrigger value="mentors">
            <Users className="mr-2 h-4 w-4" />
            Mentors
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="feed">
          <div className="space-y-6">
            {communityPosts.map((post) => (
              <Card key={post.id}>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{post.author.name}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">{post.author.role}</span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{post.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="mb-4">{post.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <div className="flex items-center gap-6">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <MessagesSquare className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="events">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date} at {event.time}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarImage src={event.hostAvatar} alt={event.hostName} />
                      <AvatarFallback>{event.hostName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{event.hostName}</p>
                      <p className="text-sm text-muted-foreground">{event.hostRole}</p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">{event.attendees} people attending</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">More Info</Button>
                  <Button>RSVP</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="mentors">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <Card key={mentor.id}>
                <CardHeader className="text-center pb-4">
                  <Avatar className="w-20 h-20 mx-auto mb-3">
                    <AvatarImage src={mentor.avatar} alt={mentor.name} />
                    <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <CardTitle>{mentor.name}</CardTitle>
                  <CardDescription>{mentor.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm mb-4">{mentor.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {mentor.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline">{specialty}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                    <span>⭐ {mentor.rating}</span>
                    <span>•</span>
                    <span>{mentor.reviewCount} reviews</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Schedule Session</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Community;
