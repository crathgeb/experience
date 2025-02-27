import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

type VerticalTabsProps = {
  initialValue?: string;
  children?: React.ReactNode;
  className?: string;
};

const VerticalTabs = ({
  initialValue,
  children,
  className,
}: VerticalTabsProps) => {
  return (
    <div className={cn('gap-3 sm:gap-4 w-full h-full p-2 sm:p-4', className)}>
      <Tabs
        defaultValue={initialValue}
        className="w-full flex gap-8"
        orientation="vertical"
      >
        {children}
      </Tabs>
    </div>
  );
};

type TabButtonsProps = {
  children?: React.ReactNode;
  className?: string;
};

const TabButtons = ({ children, className }: TabButtonsProps) => {
  return (
    <TabsList
      className={cn(
        'flex flex-col h-fit flex-shrink-0 bg-gray-50 dark:bg-gray-900 rounded-lg gap-2 w-72 p-2 border-2 border-gray-200 dark:border-gray-800',
        className
      )}
    >
      {children}
    </TabsList>
  );
};

type TabButtonProps = {
  children?: React.ReactNode;
  className?: string;
  value: string;
};

const TabButton = ({ children, className, value }: TabButtonProps) => {
  return (
    <TabsTrigger
      className={cn(
        'w-full text-left px-6 py-4 flex flex-col items-start gap-1 rounded-md bg-transparent data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-none transition-colors duration-200',
        className
      )}
      value={value}
    >
      {children}
    </TabsTrigger>
  );
};

type TabButtonTitleProps = {
  children?: React.ReactNode;
  className?: string;
};

const TabButtonTitle = ({ children, className }: TabButtonTitleProps) => {
  return (
    <span
      className={cn(
        'text-lg font-semibold text-gray-800 dark:text-gray-200 data-[state=active]:text-gray-900 dark:data-[state=active]:text-white',
        className
      )}
    >
      {children}
    </span>
  );
};

type TabButtonSubtitleProps = {
  children?: React.ReactNode;
  className?: string;
};

const TabButtonSubtitle = ({ children, className }: TabButtonSubtitleProps) => {
  return (
    <span
      className={cn(
        'text-sm text-gray-600 dark:text-gray-400 data-[state=active]:text-gray-700 dark:data-[state=active]:text-gray-300',
        className
      )}
    >
      {children}
    </span>
  );
};

interface TabContentHeaderProps {
  title: string;
  role: string;
  period: string;
  description: string;
  link?: string;
}

const TabContentHeader = ({
  title,
  role,
  period,
  description,
  link,
}: TabContentHeaderProps) => {
  return (
    <div className={cn('flex flex-col gap-2')}>
      <span
        className="text-lg font-semibold text-gray-800 dark:text-gray-200
                    data-[state=active]:text-gray-900 dark:data-[state=active]:text-white"
      >
        {title}
      </span>
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {role}
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400">{period}</p>
      </div>

      <p className="text-lg">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
        >
          {link}
        </a>
      )}
    </div>
  );
};

export {
  VerticalTabs,
  TabButtons,
  TabButton,
  TabButtonTitle,
  TabButtonSubtitle,
  TabContentHeader,
};
