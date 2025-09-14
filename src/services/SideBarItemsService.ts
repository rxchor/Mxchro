// Menu items.
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { HomePage } from "@/pages/HomePage";
import MacroForm from "@/pages/MacroForm";
import { Home, Inbox, Settings, icons } from "lucide-react"
import React from "react";

export interface SideBarItem {
    title: string;
    url: string;
    icon: React.ComponentType<any>;
    component: React.ComponentType<any>;

}

const items: SideBarItem[] = [
  {
    title: "Home",
    url: "/",
    icon: Home,
    component: HomePage
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Inbox,
    component: ContactPage
  },
  {
    title: "About",
    url: "/about",
    icon: Settings,
    component: AboutPage
  }, 
  {
    title: "Create Macro",
    url: "/create-macro",
    icon: icons.Plus,
    component: MacroForm
  }
]

export function getSideBarItems(): SideBarItem[] {
    return items;
}