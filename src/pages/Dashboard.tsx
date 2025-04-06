
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Activity, AlertCircle, ArrowRight, ArrowUpRight, Calendar, CreditCard, DollarSign, Users, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

// Mock data
const expenseData = [
  { name: 'Jan', amount: 1500 },
  { name: 'Feb', amount: 1700 },
  { name: 'Mar', amount: 1400 },
  { name: 'Apr', amount: 1800 },
  { name: 'May', amount: 2000 },
  { name: 'Jun', amount: 1600 },
];

const incomeData = [
  { name: 'Jan', amount: 3000 },
  { name: 'Feb', amount: 3200 },
  { name: 'Mar', amount: 3100 },
  { name: 'Apr', amount: 3400 },
  { name: 'May', amount: 3700 },
  { name: 'Jun', amount: 3900 },
];

const expenseBreakdown = [
  { name: 'Business Operations', value: 45 },
  { name: 'Office Space', value: 20 },
  { name: 'Marketing', value: 15 },
  { name: 'Employee Benefits', value: 10 },
  { name: 'Other', value: 10 },
];

const COLORS = ['#8B5CF6', '#D946EF', '#0EA5E9', '#5EEAD4', '#F97316'];

const investmentData = [
  { name: 'Traditional', value: 60 },
  { name: 'Crowdfunding', value: 15 },
  { name: 'Microloans', value: 10 },
  { name: 'Impact', value: 15 },
];

const upcomingPayments = [
  { 
    id: 1, 
    name: 'Business Loan Payment', 
    amount: '$450.00', 
    date: 'Aug 15, 2023', 
    status: 'upcoming'
  },
  { 
    id: 2, 
    name: 'Office Rent', 
    amount: '$1,200.00', 
    date: 'Aug 20, 2023', 
    status: 'upcoming'
  },
  { 
    id: 3, 
    name: 'Marketing Service', 
    amount: '$250.00', 
    date: 'Aug 26, 2023', 
    status: 'upcoming'
  },
];

const recentTransactions = [
  { 
    id: 1, 
    name: 'Supplier Payment', 
    amount: '-$750.00', 
    date: 'Aug 2, 2023', 
    status: 'completed'
  },
  { 
    id: 2, 
    name: 'Client Payment', 
    amount: '+$2,500.00', 
    date: 'Aug 1, 2023', 
    status: 'completed'
  },
  { 
    id: 3, 
    name: 'Software Subscription', 
    amount: '-$49.99', 
    date: 'July 28, 2023', 
    status: 'completed'
  },
];

const Dashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  const getTodaysDate = () => {
    return new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const handleAIInsightClick = () => {
    toast({
      title: "AI Insight Generated",
      description: "Based on your spending patterns, you could reduce office expenses by 15% through shared workspace arrangements.",
    });
  };

  return (
    <div className="p-4 md:p-8 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">{getGreeting()}, {user?.name || 'Entrepreneur'}</h1>
        <p className="text-muted-foreground">{getTodaysDate()}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Income</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$19,300</div>
            <p className="text-xs text-muted-foreground">
              +8% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$10,000</div>
            <p className="text-xs text-muted-foreground">
              +2% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Savings Goal</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <p className="text-xs text-muted-foreground">
              $6,500 of $10,000 target
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3/12</div>
            <p className="text-xs text-muted-foreground">
              25% of certification program
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Financial Overview</CardTitle>
            <CardDescription>Your income vs expenses for the past 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={expenseData.map((item, i) => ({
                  name: item.name,
                  expense: item.amount,
                  income: incomeData[i].amount,
                }))}
                margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="income" stroke="#8B5CF6" strokeWidth={2} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="expense" stroke="#F97316" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>AI Financial Insights</CardTitle>
            <CardDescription>Personalized recommendations based on your data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border bg-card p-3">
              <div className="flex items-start space-x-3">
                <Activity className="h-10 w-10 text-primary" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Cash Flow Management</p>
                  <p className="text-sm text-muted-foreground">Your business could benefit from restructuring payment terms with suppliers.</p>
                  <Button variant="link" size="sm" className="p-0 h-auto" onClick={handleAIInsightClick}>
                    Get Analysis <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-3">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-10 w-10 text-primary" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Investment Opportunity</p>
                  <p className="text-sm text-muted-foreground">Based on your profile, crowdfunding might be a suitable funding option.</p>
                  <Button variant="link" size="sm" className="p-0 h-auto" onClick={handleAIInsightClick}>
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-3">
              <div className="flex items-start space-x-3">
                <Calendar className="h-10 w-10 text-primary" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Upcoming Mentor Session</p>
                  <p className="text-sm text-muted-foreground">You have a business strategy session scheduled for tomorrow.</p>
                  <Button variant="link" size="sm" className="p-0 h-auto">
                    View Calendar <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="expenses">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="investments">Investments</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>
        <TabsContent value="expenses" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
                <CardDescription>Your monthly business expense categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie
                        data={expenseBreakdown}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {expenseBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your recent business expenses and income</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{transaction.name}</p>
                        <p className="text-xs text-muted-foreground">{transaction.date}</p>
                      </div>
                      <div className={`font-medium ${transaction.amount.startsWith('+') ? 'text-green-600' : ''}`}>
                        {transaction.amount}
                      </div>
                    </div>
                  ))}
                  <Button asChild size="sm" variant="outline" className="w-full">
                    <Link to="/expenses">View All Transactions</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="investments" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Investment Portfolio</CardTitle>
                <CardDescription>Your current investment allocation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie
                        data={investmentData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {investmentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Alternative Financing</CardTitle>
                <CardDescription>Explore funding options beyond traditional banks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border bg-card p-3">
                    <div className="flex items-start space-x-3">
                      <Users className="h-10 w-10 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Crowdfunding Campaign</p>
                        <p className="text-sm text-muted-foreground">Launch a campaign to fund your next business expansion.</p>
                        <Button asChild variant="link" size="sm" className="p-0 h-auto">
                          <Link to="/investments/crowdfunding">Explore <ArrowRight className="h-4 w-4 ml-1" /></Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card p-3">
                    <div className="flex items-start space-x-3">
                      <Activity className="h-10 w-10 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Impact Investing</p>
                        <p className="text-sm text-muted-foreground">Connect with investors who value social impact.</p>
                        <Button asChild variant="link" size="sm" className="p-0 h-auto">
                          <Link to="/investments/impact">Learn More <ArrowRight className="h-4 w-4 ml-1" /></Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card p-3">
                    <div className="flex items-start space-x-3">
                      <DollarSign className="h-10 w-10 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Microloans</p>
                        <p className="text-sm text-muted-foreground">Small loans with favorable terms for women entrepreneurs.</p>
                        <Button asChild variant="link" size="sm" className="p-0 h-auto">
                          <Link to="/investments/microloans">Check Eligibility <ArrowRight className="h-4 w-4 ml-1" /></Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Payments</CardTitle>
              <CardDescription>Scheduled payments for the next 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingPayments.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{payment.name}</p>
                      <p className="text-xs text-muted-foreground">{payment.date}</p>
                    </div>
                    <div className="font-medium">{payment.amount}</div>
                  </div>
                ))}
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link to="/payments">View Payment Schedule</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="community" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mentorship Programs</CardTitle>
              <CardDescription>Connect with experienced business mentors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-3">
                  <div className="flex items-start space-x-3">
                    <Users className="h-10 w-10 text-primary" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">1-on-1 Mentorship</p>
                      <p className="text-sm text-muted-foreground">Schedule personalized sessions with industry experts.</p>
                      <Button asChild variant="link" size="sm" className="p-0 h-auto">
                        <Link to="/community/mentorship">Book a Session <ArrowRight className="h-4 w-4 ml-1" /></Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-3">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-10 w-10 text-primary" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Upcoming Webinars</p>
                      <p className="text-sm text-muted-foreground">Join free webinars on business growth strategies.</p>
                      <Button asChild variant="link" size="sm" className="p-0 h-auto">
                        <Link to="/community/events">View Schedule <ArrowRight className="h-4 w-4 ml-1" /></Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-3">
                  <div className="flex items-start space-x-3">
                    <ArrowUpRight className="h-10 w-10 text-primary" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Women's Business Forum</p>
                      <p className="text-sm text-muted-foreground">Network with other women entrepreneurs.</p>
                      <Button asChild variant="link" size="sm" className="p-0 h-auto">
                        <Link to="/community/forum">Join Discussion <ArrowRight className="h-4 w-4 ml-1" /></Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
