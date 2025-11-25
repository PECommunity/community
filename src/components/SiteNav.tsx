import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { navConfig } from '../config/nav';

export function SiteNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        {/* Logo */}
        <a href="/" className="mr-4 flex items-center space-x-2">
          <img src="/favicon.png" alt="PECommunity" className="h-8 w-8" />
          <span className="font-bold text-xl">
            PECommunity
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navConfig.mainNav.map((item) => (
              <NavigationMenuItem key={item.title} className={item.items ? "relative" : ""}>
                {item.items ? (
                  <>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4">
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {subItem.title}
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.title}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button 
                className="inline-flex items-center justify-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                aria-label="打开菜单"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="text-left">
                <SheetTitle>导航菜单</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-8 px-1">
                {navConfig.mainNav.map((item) => (
                  <div key={item.title}>
                    {item.items ? (
                      <div>
                        <div className="font-semibold text-base mb-2 px-3 py-2">{item.title}</div>
                        <div className="flex flex-col gap-1 pl-4">
                          {item.items.map((subItem) => (
                            <a
                              key={subItem.title}
                              href={subItem.href}
                              onClick={() => setOpen(false)}
                              className="text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md px-3 py-2 transition-all duration-200"
                            >
                              {subItem.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block text-base font-medium hover:text-primary hover:bg-accent rounded-md px-3 py-2 transition-all duration-200"
                      >
                        {item.title}
                      </a>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
