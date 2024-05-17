import React, { ReactNode } from 'react';
import { Checkbox as BaseCheckbox } from "@/components/ui/checkbox"; // Renamed import

interface CheckboxProps {
  id: string;
  children: ReactNode;
  className?: string;
  checked?: boolean; // Add the checked prop
}

const Checkbox = ({ id, children, className, checked }: CheckboxProps) => {
  return (
    <div className={`flex items-center space-x-2 mb-4 ${checked ? 'bg-blue' : ''}`}>
      <BaseCheckbox id={id} className={className} checked={checked} /> {/* Pass the checked prop */}
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
