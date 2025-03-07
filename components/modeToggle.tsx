import { useTheme } from "next-themes";
import { IoIosMoon, IoMdSunny } from "react-icons/io";

export default function ModeToggle() {
  const { setTheme, theme } = useTheme();
  return theme === "dark" ? (
    <IoMdSunny onClick={() => setTheme("light")} />
  ) : (
    <IoIosMoon onClick={() => setTheme("dark")} />
  );
}
