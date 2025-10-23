// Main App Component
export { default as DocumentationApp } from "./DocumentationApp";

// Sidebar Component
export { default as Sidebar } from "./components/Sidebar";

// Section Components
export { default as IntroSection } from "./sections/IntroSection";
export { default as ContentTypesSection } from "./sections/ContentTypesSection";
export { default as FieldsSection } from "./sections/FieldsSection";
export { default as BestPracticesSection } from "./sections/BestPracticesSection";

// Types
export type {
    MenuItem,
    FieldProperty,
    FieldType,
    CommonError,
    BestPractice,
    NavigationView,
    TemplateStep,
    Translation,
    Language,
    Translations,
} from "./types";