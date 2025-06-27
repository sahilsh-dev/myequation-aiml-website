"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface DropdownItem {
  id: number;
  title: string;
  description: string;
}

export default function Accordion({
  items,
  className,
}: {
  items: DropdownItem[];
  className?: string;
}) {
  const [expandedItem, setExpandedItem] = useState<number>();

  const toggleItem = (id: number) => {
    setExpandedItem(id);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => (
        <ScrollReveal direction="up" key={item.id} delay={0.1 * item.id}>
          <div
            key={item.id}
            className="border border-gray-600 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 text-left  hover:bg-gray-900 transition-colors duration-300 flex items-center justify-between"
            >
              <span className="text-white font-medium text-sm md:text-lg">
                {item.title}
              </span>
              {expandedItem === item.id ? (
                <ChevronUp className="w-5 h-5 text-yellow-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-yellow-400" />
              )}
            </button>

            {/* Animated content */}
            <div
              className={cn(
                "transition-all duration-300 overflow-hidden px-6 border-t border-gray-600",
                expandedItem === item.id
                  ? "max-h-96 opacity-100 py-4"
                  : "max-h-0 opacity-0 py-0"
              )}
              style={{
                transitionProperty: "max-height, opacity, padding",
              }}
            >
              <p className="text-gray-300 leading-relaxed text-xs md:text-sm">
                {item.description}
              </p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
