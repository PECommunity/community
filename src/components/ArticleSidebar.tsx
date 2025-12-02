/**
 * 文章侧边栏组件
 * 显示栏目导航，用于文章详情页左侧
 */

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
}

interface ArticleSidebarProps {
  currentPath: string;
  sectionTitle: string;
  sectionHref: string;
  navItems: NavItem[];
  className?: string;
}

export function ArticleSidebar({
  currentPath,
  sectionTitle,
  sectionHref,
  navItems,
  className,
}: ArticleSidebarProps) {
  return (
    <aside className={cn("space-y-4", className)}>
      {/* 栏目标题 */}
      <div>
        <a 
          href={sectionHref}
          className="font-semibold text-lg text-foreground hover:text-primary transition-colors"
        >
          {sectionTitle}
        </a>
      </div>
      
      <Separator />
      
      {/* 导航列表 */}
      <ScrollArea className="h-[calc(100vh-250px)]">
        <nav className="pr-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPath === item.href || currentPath.startsWith(item.href + '/');
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "block py-2 px-3 rounded-md text-sm transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      isActive
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </ScrollArea>
      
      {/* 返回列表链接 */}
      <Separator />
      <a
        href={sectionHref}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 19-7-7 7-7"/>
          <path d="M19 12H5"/>
        </svg>
        返回{sectionTitle}列表
      </a>
    </aside>
  );
}

export default ArticleSidebar;
