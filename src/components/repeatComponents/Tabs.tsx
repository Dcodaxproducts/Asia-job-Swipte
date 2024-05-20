// components/Tabs.js
"use client"
import { useState } from 'react';

// Define the type for the tabs prop
type Tab = {
  title: string;
  content: JSX.Element;
};

type TabsProps = {
  tabs: Tab[];
};

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="overflow-hidden">
      <div className="border-b border-gray-200">
        <div className="flex">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`relative text-lg px-4 py-2 text-gray-600 ${activeTab === index ? 'text-modaltext' : 'text-signininput4'}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
              {activeTab === index && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue"></span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="p-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
