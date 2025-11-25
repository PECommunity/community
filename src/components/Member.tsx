import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

interface MemberProps {
  name: string;
  role: string;
  github?: string;
  url?: string;
  'client:load'?: boolean;
}

export function Member({ name, role, github, url }: MemberProps) {
  const imageSrc = url || '';

  // Get initials from name
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="relative flex justify-center h-36 w-24 shrink-0 overflow-hidden">
            {imageSrc ? (
              <img 
                src={imageSrc} 
                alt={name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-full bg-muted text-lg sm:text-xl">
                {initials}
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <CardTitle className="text-xs sm:text-sm">{name}</CardTitle>
            <CardDescription className="text-sm">{role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      {github && (
        <CardContent className="pt-0 flex justify-center">
          <a 
            href={`https://github.com/${github}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            @{github}
          </a>
        </CardContent>
      )}
    </Card>
  );
}

interface MembersProps {
  children: React.ReactNode;
}

export function Members({ children }: MembersProps) {
  return (
    <div className="mt-6 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}
