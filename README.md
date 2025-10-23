# Documentation App - Structure des fichiers

## 📁 Structure du projet

```
src/
├── components/
│   └── Sidebar.tsx            # Composant de la barre latérale de navigation
├── guidelines.tsx        # Composant principal de l'application
├── sections/
│   ├── IntroSection.tsx       # Section Introduction et Navigation
│   ├── ContentTypesSection.tsx # Section Template et Publication
│   ├── FieldsSection.tsx      # Section Types de champs
│   └── BestPracticesSection.tsx # Section Erreurs communes et Bonnes pratiques
├── styles
├── translations
├── types/
│   └── index.ts               # Définitions TypeScript centralisées
├── DocumentationApp.tsx        # Composant principal de l'application
├── index.css
├── index.ts                    # Point d'entrée avec tous les exports
└── main.tsx                    # Point d'entrée react
```

## 🔧 Description des fichiers

### `DocumentationApp.tsx`
- Composant racine de l'application
- Gère l'état de la section active et de la langue
- Importe et affiche les différentes sections
- Contient le header et le footer

### `components/Sidebar.tsx`
- Barre latérale de navigation
- Menu de navigation entre les sections
- Sélecteur de langue (EN/FR)
- Logo et titre de l'application

### `sections/IntroSection.tsx`
- Introduction générale à Metrafield
- Explication des vues Liste et Détail
- Notes importantes pour les utilisateurs

### `sections/ContentTypesSection.tsx`
- Création de templates
- Association avec les avions (warning critique)
- Étapes de création détaillées
- Section Publication

### `sections/FieldsSection.tsx`
- Propriétés communes à tous les champs
- Types de champs détaillés (Text, Number, DateTime, Boolean, etc.)
- Propriétés spécifiques de chaque type
- Support OCR pour certains champs

### `sections/BestPracticesSection.tsx`
- Tableau des erreurs communes
- Liste des bonnes pratiques
- Conseils d'utilisation

### `types/index.ts`
- Interfaces TypeScript pour tous les composants
- Types pour les traductions
- Types pour les propriétés des champs
- Structure complète de l'objet de traduction

## 🌍 Traductions

Les traductions doivent être importées séparément dans un fichier `translations.ts` qui n'est pas inclus ici.

Structure attendue :
```typescript
import { Translations } from './types';

export const translations: Translations = {
  en: { /* ... */ },
  fr: { /* ... */ }
};
```

## 🚀 Utilisation

```tsx
import { DocumentationApp } from './documentation-app';
import { translations } from './translations'; // À créer séparément

function App() {
  return <DocumentationApp />;
}
```

## 📦 Dépendances requises

Les composants UI suivants de shadcn/ui sont nécessaires :
- Card (CardHeader, CardTitle, CardDescription, CardContent)
- Alert (AlertDescription)
- Badge
- Button
- Tabs (TabsList, TabsTrigger)
- Separator
- Accordion (AccordionItem, AccordionTrigger, AccordionContent)
- Table (TableHeader, TableRow, TableHead, TableBody, TableCell)

Icons de lucide-react :
- FileText, Layers, Eye, Lightbulb, Home
- Info, AlertCircle, Plane, CheckCircle2
- List, Edit, GitBranch, Type, Hash
- Calendar, ToggleLeft, ListChecks, ImageIcon
- XCircle, ScanLine

## 🎨 Styles

L'application utilise Tailwind CSS avec les classes utilitaires suivantes :
- Couleurs : primary, secondary, destructive, muted
- Espacements : standard Tailwind (p-4, mb-6, etc.)
- Layouts : flex, grid
- États : hover, focus