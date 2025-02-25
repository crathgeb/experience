import { useTheme } from '@/components/theme-provider';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';

export function ThemeToggle() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { setTheme } = useTheme();

  const changeTheme = (checked: boolean) => {
    setIsChecked(checked);
    setTheme(checked ? 'dark' : 'light');
  };

  return <Switch checked={isChecked} onCheckedChange={changeTheme} />;
}
