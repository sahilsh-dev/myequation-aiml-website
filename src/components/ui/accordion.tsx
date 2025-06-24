"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [expandedItems, setExpandedItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-gray-600 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 text-left  hover:bg-gray-900 transition-colors duration-300 flex items-center justify-between"
          >
            <span className="text-white font-medium text-lg">{item.title}</span>
            {expandedItems.includes(item.id) ? (
              <ChevronUp className="w-5 h-5 text-yellow-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-yellow-400" />
            )}
          </button>

          {expandedItems.includes(item.id) && (
            <div className="px-6 py-4 border-t border-gray-600">
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
