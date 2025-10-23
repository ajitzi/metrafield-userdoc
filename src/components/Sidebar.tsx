import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { FileText } from "lucide-react";
import { cn } from "./ui/utils";

interface SidebarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
    language: "en" | "fr";
    setLanguage: (lang: "en" | "fr") => void;
    menuItems: Array<{
        id: string;
        label: string;
        icon: React.ComponentType<{ className?: string }>;
    }>;
    t: any;
}

export default function Sidebar({
    activeSection,
    setActiveSection,
    language,
    setLanguage,
    menuItems,
    t,
}: SidebarProps) {
    return (
        <aside className="w-64 min-h-screen bg-background border-r p-6 top-0" style={{position: "fixed"}}>
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-6 h-6 text-primary" />
                    <h2>Metrafield Admin</h2>
                </div>
                <p className="text-muted-foreground">
                    {language === "en" ? "Documentation" : "Documentation"}
                </p>
            </div>

            <nav className="space-y-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Button
                            key={item.id}
                            style={{textWrap: "wrap", textAlign: "left"}}
                            variant={activeSection === item.id ? "secondary" : "ghost"}
                            className={cn(
                                "w-full justify-start gap-2",
                                activeSection === item.id &&
                                "bg-primary/10 text-primary hover:bg-primary/20"
                            )}
                            onClick={() => setActiveSection(item.id)}
                        >
                            <Icon className="w-4 h-4" />
                            <span>{item.label}</span>
                        </Button>
                    );
                })}
            </nav>

            <Separator className="my-6" />

            {/* Language Toggle */}
            <div>
                <p className="text-muted-foreground mb-2">
                    {language === "en" ? "Language" : "Langue"}
                </p>
                <Tabs
                    value={language}
                    onValueChange={(v) => setLanguage(v as "en" | "fr")}
                    className="w-full"
                >
                    <TabsList className="w-full">
                        <TabsTrigger value="en" className="flex-1">
                            EN
                        </TabsTrigger>
                        <TabsTrigger value="fr" className="flex-1">
                            FR
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
        </aside>
    );
}