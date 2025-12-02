/**
 * 文章目录组件 (Table of Contents)
 * 显示在文章详情页右侧，支持滚动高亮
 */

import { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface Heading {
  depth: number;
  slug: string;
  text: string;
}

interface TableOfContentsProps {
  headings: Heading[];
  className?: string;
}

export function TableOfContents({ headings, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0% -80% 0%',
        threshold: 0,
      }
    );

    // 观察所有标题元素
    headings.forEach((heading) => {
      const element = document.getElementById(heading.slug);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.slug);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className={cn("space-y-2", className)}>
      <h3 className="font-semibold text-sm text-foreground mb-4">目录</h3>
      <ScrollArea className="h-[calc(100vh-200px)]">
        <ul className="space-y-2 text-sm pr-4">
          {headings.map((heading) => (
            <li
              key={heading.slug}
              style={{ paddingLeft: `${(heading.depth - 1) * 0.75}rem` }}
            >
              <a
                href={`#${heading.slug}`}
                className={cn(
                  "block py-1 text-muted-foreground hover:text-foreground transition-colors",
                  "border-l-2 pl-3 -ml-px",
                  activeId === heading.slug
                    ? "border-primary text-foreground font-medium"
                    : "border-transparent hover:border-muted-foreground/50"
                )}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </nav>
  );
}

export default TableOfContents;
