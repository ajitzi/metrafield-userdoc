import React, { useState } from "react";
import {
  FileText,
  Layers,
  Eye,
  Lightbulb,
  Home,
} from "lucide-react";

// Import sections
import IntroSection from "@/sections/IntroSection";
import ContentTypesSection from "@/sections/ContentTypesSection";
import FieldsSection from "@/sections/FieldsSection";
import BestPracticesSection from "@/sections/BestPracticesSection";

// Import sidebar
import Sidebar from "@/components/Sidebar";
import translations from "@/translations/translations";

export default function DocumentationApp() {
  const [activeSection, setActiveSection] = useState("intro");
  const [language, setLanguage] = useState<"en" | "fr">("fr");

  // Assuming translations are imported from a separate file
  const t = translations[language];

  const menuItems = [
    { id: "intro", label: t.menu.intro, icon: Home },
    { id: "content-types", label: t.menu.contentTypes, icon: Layers },
    { id: "fields", label: t.menu.fields, icon: Eye },
    { id: "best-practices", label: t.menu.bestPractices, icon: Lightbulb },
  ];

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="flex">
          {/* Sidebar */}
          <Sidebar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              language={language}
              setLanguage={setLanguage}
              menuItems={menuItems}
              t={t}
          />

          {/* Main Content */}
          <main className="flex-1 p-8 ml-64" style={{marginLeft: 256}}>
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <h1 className="mb-2">{t.title}</h1>
                <p className="text-muted-foreground">{t.subtitle}</p>
              </div>

              {/* Render Active Section */}
              {activeSection === "intro" && <IntroSection language={language} t={t} />}
              {activeSection === "content-types" && <ContentTypesSection language={language} t={t} />}
              {activeSection === "fields" && <FieldsSection language={language} t={t} />}
              {activeSection === "best-practices" && <BestPracticesSection language={language} t={t} />}

              {/* Footer */}
              <div className="text-center text-muted-foreground pt-8 border-t mt-8">
                <p>
                  {language === "en"
                      ? "METRAField — Strapi Content Management Documentation"
                      : "METRAField — Documentation de gestion de contenu Strapi"}
                </p>
                <p className="mt-2">
                  {language === "en"
                      ? "For additional support, please contact your administrator."
                      : "Pour une assistance supplémentaire, veuillez contacter votre administrateur."}
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
  );
}