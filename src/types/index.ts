import * as React from "react"// Types for menu items


export interface MenuItem {
    id: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
}

// Types for field properties
export interface FieldProperty {
    name: string;
    description: string;
    required?: boolean;
    important?: boolean;
    warning?: string;
}

// Types for field type
export interface FieldType {
    name: string;
    description: string;
    properties: FieldProperty[];
    preview: string;
}

// Types for common errors
export interface CommonError {
    error: string;
    consequence: string;
}

// Types for best practices
export interface BestPractice {
    title: string;
    description: string;
}

// Types for navigation views
export interface NavigationView {
    title: string;
    description: string;
    features: string[];
}

// Types for template steps
export interface TemplateStep {
    title: string;
    items?: string[];
    description?: string;
}

// Main translation interface structure
export interface Translation {
    title: string;
    subtitle: string;
    menu: {
        intro: string;
        contentTypes: string;
        fields: string;
        bestPractices: string;
    };
    intro: {
        title: string;
        description: string;
        note: string;
    };
    navigation: {
        title: string;
        description: string;
        listView: NavigationView;
        detailView: NavigationView;
    };
    template: {
        title: string;
        description: string;
        location: string;
        composition: {
            title: string;
            description: string;
            items: string[];
        };
        aircraft: {
            title: string;
            warning: string;
            description: string;
            note: string;
        };
        steps: {
            title: string;
            step1: TemplateStep;
            step2: TemplateStep;
            step3: TemplateStep;
            step4: TemplateStep;
        };
    };
    publication: {
        title: string;
        description: string;
        checklist: string[];
        action: string;
        result: string;
    };
    fieldTypes: {
        title: string;
        subtitle: string;
        commonProperties: {
            title: string;
            description: string;
            properties: FieldProperty[];
        };
        types: {
            text: FieldType;
            number: FieldType;
            datetime: FieldType;
            boolean: FieldType;
            singleChoice: FieldType;
            multipleChoice: FieldType;
            image: FieldType;
        };
    };
    commonErrors: {
        title: string;
        errors: CommonError[];
    };
    bestPractices: {
        title: string;
        practices: BestPractice[];
    };
}

// Type for language options
export type Language = "en" | "fr";

// Type for translations object
export type Translations = {
    [key in Language]: Translation;
};