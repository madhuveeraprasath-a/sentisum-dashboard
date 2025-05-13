"use client";
import React from "react";

interface ConversationFilterProps {
  sentiments: string[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const ConversationFilter = (props: ConversationFilterProps) => {
  const { activeFilter, setActiveFilter, sentiments } = props;

  return (
    <div className="border-b border-neutral-400">
      <div className="flex gap-4 p-4 overflow-x-auto ">
        {sentiments.map((filter) => (
          <div
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`min-w-max px-4 border border-neutral-300 py-2 rounded-md capitalize cursor-pointer transition-colors ${
              activeFilter !== filter ? "bg-white" : "bg-neutral-400"
            }`}
          >
            {filter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationFilter;
