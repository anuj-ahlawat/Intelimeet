import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-900/30 to-transparent opacity-60 animate-pulse-slow"></div>
        
        {/* Floating dots pattern */}
        <div className="floating-dots"></div>
        
        {/* Center glow effect */}
        <div className="glow-effect"></div>
        
        {/* Grid lines */}
        <div className="grid-lines"></div>
        
        {/* Additional animated elements */}
        <div className="absolute top-[15%] left-[20%] w-48 h-48 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[15%] right-[20%] w-56 h-56 rounded-full bg-gradient-to-r from-blue-500/30 to-teal-500/30 blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[60%] left-[10%] w-52 h-52 rounded-full bg-gradient-to-r from-pink-500/30 to-purple-500/30 blur-2xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        
        {/* Additional overlay for more visible effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
      </div>
      
      <SignIn path="/sign-in" />
    </main>
  );
}