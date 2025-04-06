
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  GraduationCap, 
  DollarSign, 
  LineChart, 
  Users, 
  AlarmClock, 
  MessageSquare, 
  LifeBuoy,
  Settings,
  X 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const isMobile = useIsMobile();

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" />, path: '/dashboard' },
    { name: 'Learning', icon: <GraduationCap className="h-5 w-5" />, path: '/learning' },
    { name: 'Expenses', icon: <DollarSign className="h-5 w-5" />, path: '/expenses' },
    { name: 'Investments', icon: <LineChart className="h-5 w-5" />, path: '/investments' },
    { name: 'Community', icon: <Users className="h-5 w-5" />, path: '/community' },
    { name: 'Emergency', icon: <AlarmClock className="h-5 w-5" />, path: '/emergency' },
    { name: 'AI Chatbot', icon: <MessageSquare className="h-5 w-5" />, path: '/chatbot' },
    { name: 'Help', icon: <LifeBuoy className="h-5 w-5" />, path: '/help' },
    { name: 'Settings', icon: <Settings className="h-5 w-5" />, path: '/settings' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-sidebar border-r transition-transform duration-300 ease-in-out",
          isMobile && !sidebarOpen && "-translate-x-full",
          isMobile && sidebarOpen && "translate-x-0",
          !isMobile && !sidebarOpen && "-translate-x-full md:translate-x-0 md:w-16",
          !isMobile && sidebarOpen && "md:w-64"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <span className={cn(
            "font-bold text-lg bg-clip-text text-transparent hero-gradient",
            !sidebarOpen && !isMobile && "hidden md:block md:w-16 md:overflow-hidden"
          )}>
            {sidebarOpen || isMobile ? "FemFinHub" : "FFH"}
          </span>
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>
        
        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground",
                  !sidebarOpen && !isMobile && "justify-center md:px-2"
                )}
                onClick={isMobile ? () => setSidebarOpen(false) : undefined}
              >
                {item.icon}
                <span className={cn(
                  "text-sm font-medium",
                  !sidebarOpen && !isMobile && "hidden"
                )}>
                  {item.name}
                </span>
              </NavLink>
            ))}
          </nav>
        </ScrollArea>
      </aside>
    </>
  );
};

export default Sidebar;
