"use client"

import * as React from "react"
import { Moon, Sun, Palette, Sparkles, Leaf, Grape } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()

    const handleThemeChange = (newTheme: string) => {
        console.log('Switching theme from', theme, 'to', newTheme)
        setTheme(newTheme)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/90 backdrop-blur-sm border-amber-200 hover:bg-amber-50 dark:bg-amber-900/80 dark:border-amber-700 dark:hover:bg-amber-800 geisha:bg-pink-100/90 geisha:border-pink-300 geisha:hover:bg-pink-200 typica:bg-green-100/90 typica:border-green-300 typica:hover:bg-green-200 bourbon:bg-purple-100/90 bourbon:border-purple-300 bourbon:hover:bg-purple-200 shadow-lg"
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">切换主题</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-sm border-amber-200 dark:bg-amber-900/95 dark:border-amber-700 geisha:bg-pink-50/95 geisha:border-pink-300 typica:bg-green-50/95 typica:border-green-300 bourbon:bg-purple-50/95 bourbon:border-purple-300 shadow-xl min-w-[160px]">
                <DropdownMenuItem
                    onClick={() => handleThemeChange("light")}
                    className="hover:bg-amber-50 dark:hover:bg-amber-800 geisha:hover:bg-pink-100 typica:hover:bg-green-100 bourbon:hover:bg-purple-100 cursor-pointer"
                >
                    <Sun className="mr-2 h-4 w-4 text-amber-600" />
                    <span>浅色</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => handleThemeChange("dark")}
                    className="hover:bg-amber-50 dark:hover:bg-amber-800 geisha:hover:bg-pink-100 typica:hover:bg-green-100 bourbon:hover:bg-purple-100 cursor-pointer"
                >
                    <Moon className="mr-2 h-4 w-4 text-slate-600" />
                    <span>深色</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => handleThemeChange("system")}
                    className="hover:bg-amber-50 dark:hover:bg-amber-800 geisha:hover:bg-pink-100 typica:hover:bg-green-100 bourbon:hover:bg-purple-100 cursor-pointer"
                >
                    <Palette className="mr-2 h-4 w-4 text-gray-600" />
                    <span>系统</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => handleThemeChange("geisha")}
                    className="hover:bg-amber-50 dark:hover:bg-amber-800 geisha:hover:bg-pink-100 typica:hover:bg-green-100 bourbon:hover:bg-purple-100 cursor-pointer"
                >
                    <Sparkles className="mr-2 h-4 w-4 text-pink-600" />
                    <span>瑰夏</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => handleThemeChange("typica")}
                    className="hover:bg-amber-50 dark:hover:bg-amber-800 geisha:hover:bg-pink-100 typica:hover:bg-green-100 bourbon:hover:bg-purple-100 cursor-pointer"
                >
                    <Leaf className="mr-2 h-4 w-4 text-green-600" />
                    <span>铁皮卡</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => handleThemeChange("bourbon")}
                    className="hover:bg-amber-50 dark:hover:bg-amber-800 geisha:hover:bg-pink-100 typica:hover:bg-green-100 bourbon:hover:bg-purple-100 cursor-pointer"
                >
                    <Grape className="mr-2 h-4 w-4 text-purple-600" />
                    <span>波旁</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}