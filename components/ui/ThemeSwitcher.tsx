// components/ThemeSwitcher.tsx
import useClientMounted from "@/utils/hooks/useClientMounted";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

export const ThemeSwitcher = () => {
  const [isSelected, setIsSelected] = useState(true);
  const isMounted = useClientMounted();
  const themes = useTheme();
  const { theme, setTheme } = themes;

  useEffect(() => {
    if (isMounted) {
      isSelected ? setTheme("light") : setTheme("dark");
    }
  }, [isMounted, isSelected, setTheme]);

  if (!isMounted) return null;

  return (
    <Switch
      isSelected={isSelected}
      onValueChange={setIsSelected}
      size="md"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <HiSun className={className} />
        ) : (
          <HiMoon className={className} />
        )
      }
    ></Switch>
  );
};
