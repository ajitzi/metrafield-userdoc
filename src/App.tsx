import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { Alert, AlertDescription } from "./components/ui/alert";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "./components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { Button } from "./components/ui/button";
import {
  FileText,
  AlertCircle,
  Info,
  Lightbulb,
  List,
  Layers,
  Plane,
  CheckCircle2,
  XCircle,
  Eye,
  Edit,
  Type,
  Hash,
  Calendar,
  ToggleLeft,
  ListChecks,
  Image as ImageIcon,
  GitBranch,
  ScanLine,
  BookOpen,
  Folder,
  Settings,
} from "lucide-react";
import { Separator } from "./components/ui/separator";
import { cn } from "./components/ui/utils";

type Section =
  | "intro"
  | "content-types"
  | "fields"
  | "best-practices";

export default function App() {
  const [language, setLanguage] = useState<"en" | "fr">("en");
  const [activeSection, setActiveSection] =
    useState<Section>("intro");

  const content = {
    en: {
      title: "User Guide — Strapi Backoffice (Metrafield)",
      subtitle: "Template Creation & Content Management",
      menu: {
        intro: "Introduction & General Info",
        contentTypes: "Content Types & Publication",
        fields: "Dynamic Fields",
        bestPractices: "Best Practices & FAQ",
      },
      intro: {
        title: "Introduction",
        description:
          "This comprehensive guide will walk you through the content management system in Strapi, specifically focusing on creating and managing inspection templates for Metrafield.",
        note: "All operations are performed within the Content Manager, Strapi's main content administration interface.",
      },
      navigation: {
        title: "General Navigation",
        description:
          "Understanding the Content Manager interface",
        listView: {
          title: "List View",
          description:
            "Each content type (Template, Zone, Field Group, etc.) has a list view where you can:",
          features: [
            "View multiple items at once with a quick preview",
            "Select multiple items using checkboxes",
            "Perform bulk actions:",
            "Delete multiple elements at once",
            "Publish multiple elements with a single click",
          ],
        },
        detailView: {
          title: "Detail View",
          description:
            "Clicking on an item opens its individual edit page where you can:",
          features: [
            "Modify all properties and fields",
            "Add or remove relations to other content types",
            "Manage publication status (Draft / Published)",
          ],
        },
      },
      template: {
        title: "Creating a Template",
        description:
          "Templates are configurable data structures that define the foundation of content displayed to end users.",
        location: "Navigate to: Content Manager → Templates",
        composition: {
          title: "Template Composition",
          description:
            "A template is composed of several nested entities:",
          items: [
            "The template itself (content foundation)",
            "Zones (logical sections of the template)",
            "Field groups (sets of custom fields within a zone)",
          ],
        },
        aircraft: {
          title: "Aircraft Association",
          warning: "CRITICAL",
          description:
            "A template MUST be associated with at least one Aircraft to appear in user results.",
          note: "Without this association, the template will remain invisible to end users, even if published.",
        },
        steps: {
          title: "Recommended Creation Steps",
          step1: {
            title: "Create the main template",
            items: [
              "Go to Content Manager → Templates → Create new entry",
              "Fill in the basic fields (name, manufacturer, type, etc.)",
              "Save without publishing to avoid premature deployment",
            ],
          },
          step2: {
            title: "Create associated zones",
            items: [
              "In Content Manager → Zones, create the necessary zones for your template",
              'Each zone represents a logical section (e.g., "Technical Specifications", "Performance", "Engine")',
            ],
          },
          step3: {
            title: "Create field groups within each zone",
            items: [
              "In Content Manager → Field Groups, create the field sets that will compose your zones",
              "A field group can be reused across multiple zones or templates",
            ],
          },
          step4: {
            title: "Add dynamic fields to each group",
            description:
              "Each group can contain up to 7 types of dynamic fields (see Dynamic Fields section)",
          },
        },
      },
      fieldTypes: {
        title: "Dynamic Field Types - Detailed Reference",
        subtitle:
          "Comprehensive guide to all field types and their configurations",
        commonProperties: {
          title: "Common Properties (All Field Types)",
          description:
            "These properties are available for all field types:",
          properties: [
            {
              name: "Name",
              description: "Display name of the field",
              required: true,
            },
            {
              name: "Description",
              description:
                "Explanatory text for the field purpose",
              required: false,
            },
            {
              name: "isRequired",
              description:
                "Whether the field must be completed",
              required: false,
            },
            {
              name: "isComment_accepted",
              description:
                "Allow users to add comments to this field",
              required: false,
            },
            {
              name: "Placeholder",
              description:
                "Placeholder text shown in empty fields",
              required: false,
            },
            {
              name: "HelpText",
              description:
                "Additional help text displayed near the field",
              required: false,
            },
            {
              name: "Conditional Logic",
              description:
                "Display this field conditionally based on another field's value. Paste the UUID of a target field from the template in target_field_uuid",
              required: false,
              important: true,
            },
          ],
        },
        types: {
          text: {
            name: "Text",
            icon: "Type",
            description:
              "Text input field with various input types and validation options",
            properties: [
              {
                name: "Min length",
                description: "Minimum number of characters",
              },
              {
                name: "Max length",
                description: "Maximum number of characters",
              },
              {
                name: "Input type",
                description:
                  "Type of input: input, textarea, email, phone, url",
              },
              {
                name: "Regex (pattern)",
                description:
                  "Regular expression pattern to validate and format the string",
              },
              {
                name: "Default value",
                description:
                  "Pre-filled value when the field is displayed",
              },
              {
                name: "isOCR",
                description:
                  "Enable OCR (Optical Character Recognition) in the mobile app",
                important: true,
              },
            ],
            preview:
              "Visual preview placeholder for mobile app representation",
          },
          number: {
            name: "Number",
            icon: "Hash",
            description:
              "Numeric input field with various display options",
            properties: [
              {
                name: "Input type",
                description:
                  "Display type: input, decimal, slider",
              },
              {
                name: "Slider",
                description: "Slider input type",
                warning:
                  "NON-FUNCTIONAL - Needs testing everywhere",
              },
              {
                name: "OCR",
                description:
                  "Enable OCR (Optical Character Recognition) in the mobile app",
              },
            ],
            preview:
              "Visual preview placeholder for mobile app representation",
          },
          datetime: {
            name: "Date / Time",
            icon: "Calendar",
            description:
              "Date and/or time picker with various configuration options",
            properties: [
              {
                name: "Type",
                description:
                  "Display type: date only or datetime",
              },
              {
                name: "Limits",
                description:
                  "With or without date/time range limits",
              },
              {
                name: "Default value",
                description:
                  "Option to use current date/time as default or force it",
              },
            ],
            preview:
              "Visual preview placeholder for mobile app representation",
          },
          boolean: {
            name: "Boolean",
            icon: "ToggleLeft",
            description:
              "Yes/No field with multiple display options",
            properties: [
              {
                name: "Logic",
                description:
                  "Simple yes/no. If required, positive choice is mandatory",
              },
              {
                name: "Display types",
                description:
                  "Different visual representations: toggle, radio, button",
              },
            ],
            preview:
              "Visual preview placeholder for mobile app representation",
          },
          singleChoice: {
            name: "Single Choice",
            icon: "ListChecks",
            description:
              "Select one option from a predefined list",
            properties: [
              {
                name: "Display types",
                description:
                  "Visual representations: radio, button, select dropdown",
              },
              {
                name: "Options with images",
                description:
                  "Ability to add images to each option",
              },
              {
                name: '"Other" option',
                description:
                  'Enable a custom "Other" option for user input',
              },
            ],
            preview:
              "Visual preview placeholder for mobile app representation",
          },
          multipleChoice: {
            name: "Multiple Choice",
            icon: "ListChecks",
            description:
              "Select multiple options from a predefined list",
            properties: [
              {
                name: "Display types",
                description:
                  "Visual representations: checkboxes, buttons, multi-select",
              },
              {
                name: "Options with images",
                description:
                  "Ability to add images to each option",
              },
              {
                name: '"Other" option',
                description:
                  'Enable a custom "Other" option for user input',
              },
            ],
            preview:
              "Visual preview placeholder for mobile app representation",
          },
          image: {
            name: "Image",
            icon: "ImageIcon",
            description:
              "Image upload field with configuration options",
            properties: [
              {
                name: "Upload mode",
                description: "Single image or multiple images",
              },
              {
                name: "Maximum",
                description:
                  "Maximum number of images (for multiple mode)",
              },
              {
                name: "Aspect ratio",
                description:
                  "Choose the aspect ratio for uploaded images",
              },
            ],
            preview:
              "Visual preview placeholder for mobile app representation",
          },
        },
      },
      publication: {
        title: "Publication",
        description: "Once you have:",
        checklist: [
          "Created the template and correctly associated it with an Aircraft",
          "Added all zones, groups, and fields and verified them",
        ],
        action:
          "Publish each element (template, zones, groups, fields).",
        result:
          "Published elements associated with an Aircraft will then become visible to users.",
      },
      commonErrors: {
        title: "Common Errors to Avoid",
        errors: [
          {
            error: "Template not associated with an Aircraft",
            consequence: "Does not appear in user results",
          },
          {
            error: "Fields created but not published",
            consequence: "Absent from user rendering",
          },
          {
            error:
              'Modification without "Save" before "Publish"',
            consequence: "Changes lost",
          },
          {
            error: "Empty zone or zone without field group",
            consequence: "Invisible section",
          },
        ],
      },
      bestPractices: {
        title: "Best Practices",
        practices: [
          {
            title: "Build progressively",
            description:
              "Always create the template as a draft first, then progressively build its zones and fields",
          },
          {
            title: "Clear naming",
            description:
              "Name zones and groups clearly to facilitate maintenance",
          },
          {
            title: "Publish when complete",
            description:
              "Only publish when everything is complete to avoid the appearance of partially configured elements",
          },
          {
            title: "Test with real Aircraft",
            description:
              "Test with a real Aircraft before final validation",
          },
        ],
      },
    },
    fr: {
      title:
        "Guide Utilisateur — Backoffice Strapi (Metrafield)",
      subtitle: "Création de Templates & Gestion de Contenu",
      menu: {
        intro: "Introduction & Infos générales",
        contentTypes: "Types de contenus & Publication",
        fields: "Champs dynamiques",
        bestPractices: "Bonnes pratiques & FAQ",
      },
      intro: {
        title: "Introduction",
        description:
          "Ce guide complet vous accompagne dans la gestion du contenu dans Strapi, en se concentrant spécifiquement sur la création et la gestion de templates d'inspection pour Metrafield.",
        note: "Toutes les opérations s'effectuent dans le Content Manager, l'interface principale d'administration de contenu de Strapi.",
      },
      navigation: {
        title: "Navigation générale",
        description:
          "Comprendre l'interface du Content Manager",
        listView: {
          title: "Vue Liste",
          description:
            "Chaque type de contenu (Template, Zone, Groupe de champs, etc.) dispose d'une vue liste où vous pouvez :",
          features: [
            "Visualiser plusieurs éléments à la fois avec un aperçu rapide",
            "Sélectionner plusieurs items avec les cases à cocher",
            "Effectuer des actions groupées :",
            "Supprimer plusieurs éléments en une fois",
            "Publier plusieurs éléments en un seul clic",
          ],
        },
        detailView: {
          title: "Vue Détail",
          description:
            "En cliquant sur un élément, vous accédez à sa page d'édition individuelle où vous pouvez :",
          features: [
            "Modifier toutes les propriétés et champs",
            "Ajouter ou supprimer des relations avec d'autres types de contenu",
            "Gérer le statut de publication (Draft / Published)",
          ],
        },
      },
      template: {
        title: "Création d'un Template",
        description:
          "Les templates sont des structures de données configurables qui définissent la base du contenu affiché aux utilisateurs finaux.",
        location: "Naviguer vers : Content Manager → Templates",
        composition: {
          title: "Composition d'un Template",
          description:
            "Un template est composé de plusieurs entités imbriquées :",
          items: [
            "Le template lui-même (base du contenu)",
            "Des zones (sections logiques du template)",
            "Des groupes de champs (ensembles de champs personnalisés dans une zone)",
          ],
        },
        aircraft: {
          title: "Association avec un Aircraft",
          warning: "CRITIQUE",
          description:
            "Un template DOIT impérativement être associé à au moins un Aircraft pour apparaître dans les résultats utilisateur.",
          note: "Sans cette association, il restera invisible pour les utilisateurs finaux, même publié.",
        },
        steps: {
          title: "Étapes de création recommandées",
          step1: {
            title: "Créer le template principal",
            items: [
              "Rendez-vous dans Content Manager → Templates → Create new entry",
              "Remplissez les champs de base (nom, constructeur, type, etc.)",
              "Sauvegardez sans publier pour éviter toute diffusion prématurée",
            ],
          },
          step2: {
            title: "Créer les zones associées",
            items: [
              "Dans Content Manager → Zones, créez les différentes zones nécessaires à votre template",
              'Chaque zone correspond à une partie logique du contenu (ex : "Caractéristiques techniques", "Performances", "Moteur")',
            ],
          },
          step3: {
            title:
              "Créer les groupes de champs dans chaque zone",
            items: [
              "Dans Content Manager → Groupes de champs, créez les ensembles de champs qui composeront vos zones",
              "Un groupe de champs peut être réutilisé entre plusieurs zones ou templates",
            ],
          },
          step4: {
            title:
              "Ajouter les champs dynamiques dans chaque groupe",
            description:
              "Chaque groupe peut contenir jusqu'à 7 types de champs dynamiques (voir section Champs dynamiques)",
          },
        },
      },
      fieldTypes: {
        title:
          "Types de champs dynamiques - Référence détaillée",
        subtitle:
          "Guide complet de tous les types de champs et leurs configurations",
        commonProperties: {
          title:
            "Propriétés communes (tous les types de champs)",
          description:
            "Ces propriétés sont disponibles pour tous les types de champs :",
          properties: [
            {
              name: "Nom",
              description: "Nom d'affichage du champ",
              required: true,
            },
            {
              name: "Description",
              description:
                "Texte explicatif sur l'objectif du champ",
              required: false,
            },
            {
              name: "isRequired",
              description:
                "Si le champ doit obligatoirement être complété",
              required: false,
            },
            {
              name: "isComment_accepted",
              description:
                "Permettre aux utilisateurs d'ajouter des commentaires à ce champ",
              required: false,
            },
            {
              name: "Placeholder",
              description:
                "Texte indicatif affiché dans les champs vides",
              required: false,
            },
            {
              name: "HelpText",
              description:
                "Texte d'aide additionnel affiché près du champ",
              required: false,
            },
            {
              name: "Logique conditionnelle",
              description:
                "Afficher ce champ conditionnellement en fonction de la valeur d'un autre champ. Coller l'UUID du champ cible du template dans target_field_uuid",
              required: false,
              important: true,
            },
          ],
        },
        types: {
          text: {
            name: "Texte",
            icon: "Type",
            description:
              "Champ de saisie de texte avec différents types d'input et options de validation",
            properties: [
              {
                name: "Longueur min",
                description: "Nombre minimum de caractères",
              },
              {
                name: "Longueur max",
                description: "Nombre maximum de caractères",
              },
              {
                name: "Type d'input",
                description:
                  "Type de saisie : input, textarea, email, phone, url",
              },
              {
                name: "Regex (pattern)",
                description:
                  "Expression régulière permettant de valider et formater la chaîne de caractères",
              },
              {
                name: "Valeur par défaut",
                description:
                  "Valeur pré-remplie lors de l'affichage du champ",
              },
              {
                name: "isOCR",
                description:
                  "Activation de l'OCR (reconnaissance optique de caractères) dans l'application mobile",
                important: true,
              },
            ],
            preview:
              "Espace réservé pour l'aperçu visuel de la représentation dans l'app mobile",
          },
          number: {
            name: "Nombre",
            icon: "Hash",
            description:
              "Champ de saisie numérique avec différentes options d'affichage",
            properties: [
              {
                name: "Type d'input",
                description:
                  "Type d'affichage : input, decimal, slider",
              },
              {
                name: "Slider",
                description: "Type d'input curseur",
                warning: "NON FONCTIONNEL - À tester partout",
              },
              {
                name: "OCR",
                description:
                  "Activation de l'OCR (reconnaissance optique de caractères) dans l'application mobile",
              },
            ],
            preview:
              "Espace réservé pour l'aperçu visuel de la représentation dans l'app mobile",
          },
          datetime: {
            name: "Date / Heure",
            icon: "Calendar",
            description:
              "Sélecteur de date et/ou heure avec différentes options de configuration",
            properties: [
              {
                name: "Type",
                description:
                  "Type d'affichage : date seule ou datetime",
              },
              {
                name: "Limites",
                description:
                  "Avec ou sans limites de plage date/heure",
              },
              {
                name: "Valeur par défaut",
                description:
                  "Option d'utiliser la date/heure actuelle par défaut ou de la forcer",
              },
            ],
            preview:
              "Espace réservé pour l'aperçu visuel de la représentation dans l'app mobile",
          },
          boolean: {
            name: "Booléen",
            icon: "ToggleLeft",
            description:
              "Champ Oui/Non avec plusieurs options d'affichage",
            properties: [
              {
                name: "Logique",
                description:
                  "Simple oui/non. Si required, choix positif obligatoire",
              },
              {
                name: "Types d'affichage",
                description:
                  "Différentes représentations visuelles : toggle, radio, button",
              },
            ],
            preview:
              "Espace réservé pour l'aperçu visuel de la représentation dans l'app mobile",
          },
          singleChoice: {
            name: "Choix unique",
            icon: "ListChecks",
            description:
              "Sélectionner une option parmi une liste prédéfinie",
            properties: [
              {
                name: "Types d'affichage",
                description:
                  "Représentations visuelles : radio, button, select déroulant",
              },
              {
                name: "Options avec images",
                description:
                  "Possibilité d'ajouter des images pour chaque option",
              },
              {
                name: 'Option "Autre"',
                description:
                  'Activer une option personnalisée "Autre" pour saisie utilisateur',
              },
            ],
            preview:
              "Espace réservé pour l'aperçu visuel de la représentation dans l'app mobile",
          },
          multipleChoice: {
            name: "Choix multiples",
            icon: "ListChecks",
            description:
              "Sélectionner plusieurs options parmi une liste prédéfinie",
            properties: [
              {
                name: "Types d'affichage",
                description:
                  "Représentations visuelles : checkboxes, buttons, multi-select",
              },
              {
                name: "Options avec images",
                description:
                  "Possibilité d'ajouter des images pour chaque option",
              },
              {
                name: 'Option "Autre"',
                description:
                  'Activer une option personnalisée "Autre" pour saisie utilisateur',
              },
            ],
            preview:
              "Espace réservé pour l'aperçu visuel de la représentation dans l'app mobile",
          },
          image: {
            name: "Image",
            icon: "ImageIcon",
            description:
              "Champ d'upload d'image avec options de configuration",
            properties: [
              {
                name: "Mode d'upload",
                description: "Image unique ou images multiples",
              },
              {
                name: "Maximum",
                description:
                  "Nombre maximum d'images (pour le mode multiple)",
              },
              {
                name: "Aspect ratio",
                description:
                  "Choisir le ratio d'aspect pour les images uploadées",
              },
            ],
            preview:
              "Espace réservé pour l'aperçu visuel de la représentation dans l'app mobile",
          },
        },
      },
      publication: {
        title: "Publication",
        description: "Une fois que vous avez :",
        checklist: [
          "Créé le template et correctement associé à un Aircraft",
          "Ajouté toutes les zones, groupes et champs et vérifié",
        ],
        action:
          "Publiez chaque élément (template, zones, groupes, champs).",
        result:
          "Les éléments publiés et associés à un Aircraft deviendront alors visibles côté utilisateur.",
      },
      commonErrors: {
        title: "Erreurs fréquentes à éviter",
        errors: [
          {
            error: "Template non associé à un Aircraft",
            consequence:
              "N'apparaît pas dans les résultats utilisateurs",
          },
          {
            error: "Champs créés mais non publiés",
            consequence: "Absents du rendu utilisateur",
          },
          {
            error: 'Modification sans "Save" avant "Publish"',
            consequence: "Changements perdus",
          },
          {
            error: "Zone vide ou sans groupe de champ",
            consequence: "Section invisible",
          },
        ],
      },
      bestPractices: {
        title: "Bonnes pratiques",
        practices: [
          {
            title: "Construire progressivement",
            description:
              "Toujours créer le template en brouillon d'abord, puis construire progressivement ses zones et champs",
          },
          {
            title: "Nommage clair",
            description:
              "Nommer clairement les zones et groupes pour faciliter la maintenance",
          },
          {
            title: "Publier quand complet",
            description:
              "Publier uniquement quand tout est complet pour éviter l'apparition d'éléments partiellement configurés",
          },
          {
            title: "Tester avec un Aircraft réel",
            description:
              "Tester avec un Aircraft réel avant validation finale",
          },
        ],
      },
    },
  };

  const t = content[language];

  const menuItems = [
    {
      id: "intro" as Section,
      label: t.menu.intro,
      icon: BookOpen,
    },
    {
      id: "content-types" as Section,
      label: t.menu.contentTypes,
      icon: Folder,
    },
    {
      id: "fields" as Section,
      label: t.menu.fields,
      icon: Settings,
    },
    {
      id: "best-practices" as Section,
      label: t.menu.bestPractices,
      icon: Lightbulb,
    },
  ];

  const renderIntroSection = () => (
    <>
      {/* Introduction */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{t.intro.title}</CardTitle>
          <CardDescription>
            {t.intro.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>
                {language === "en" ? "Note:" : "Note :"}
              </strong>{" "}
              {t.intro.note}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Navigation générale */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-5 h-5" />
            {t.navigation.title}
          </CardTitle>
          <CardDescription>
            {t.navigation.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Vue Liste */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <List className="w-5 h-5 text-primary" />
                <h3>{t.navigation.listView.title}</h3>
              </div>
              <p className="text-muted-foreground mb-3">
                {t.navigation.listView.description}
              </p>
              <ul className="space-y-2">
                {t.navigation.listView.features.map(
                  (feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Vue Détail */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Edit className="w-5 h-5 text-primary" />
                <h3>{t.navigation.detailView.title}</h3>
              </div>
              <p className="text-muted-foreground mb-3">
                {t.navigation.detailView.description}
              </p>
              <ul className="space-y-2">
                {t.navigation.detailView.features.map(
                  (feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );

  const renderContentTypesSection = () => (
    <>
      {/* Création d'un Template */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{t.template.title}</CardTitle>
          <CardDescription>
            {t.template.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Location */}
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>
                {language === "en"
                  ? "Location:"
                  : "Emplacement :"}
              </strong>{" "}
              {t.template.location}
            </AlertDescription>
          </Alert>

          {/* Composition */}
          <div>
            <h3 className="mb-3">
              {t.template.composition.title}
            </h3>
            <p className="text-muted-foreground mb-3">
              {t.template.composition.description}
            </p>
            <div className="space-y-2 pl-4 border-l-2 border-primary">
              {t.template.composition.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Aircraft Association - Critical Warning */}
          <Alert className="border-red-500 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Plane className="w-4 h-4 text-red-600" />
                  <strong className="text-red-900">
                    {t.template.aircraft.title}
                  </strong>
                  <Badge variant="destructive">
                    {t.template.aircraft.warning}
                  </Badge>
                </div>
                <p className="text-red-900">
                  {t.template.aircraft.description}
                </p>
                <p className="text-red-800">
                  {t.template.aircraft.note}
                </p>
              </div>
            </AlertDescription>
          </Alert>

          <Separator />

          {/* Étapes de création */}
          <div>
            <h3 className="mb-4">{t.template.steps.title}</h3>
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              {/* Step 1 */}
              <AccordionItem value="step-1">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <Badge>1</Badge>
                    <span>{t.template.steps.step1.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pt-4">
                    {t.template.steps.step1.items.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Step 2 */}
              <AccordionItem value="step-2">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <Badge>2</Badge>
                    <span>{t.template.steps.step2.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pt-4">
                    {t.template.steps.step2.items.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Step 3 */}
              <AccordionItem value="step-3">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <Badge>3</Badge>
                    <span>{t.template.steps.step3.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pt-4">
                    {t.template.steps.step3.items.map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Step 4 */}
              <AccordionItem value="step-4">
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <Badge>4</Badge>
                    <span>{t.template.steps.step4.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pt-4 text-muted-foreground">
                    {t.template.steps.step4.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </CardContent>
      </Card>

      {/* Publication */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            {t.publication.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>{t.publication.description}</p>
          <ul className="space-y-2 pl-4">
            {t.publication.checklist.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Alert className="bg-blue-50 border-blue-200">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-900">
              <strong>
                {language === "en" ? "Action:" : "Action :"}
              </strong>{" "}
              {t.publication.action}
            </AlertDescription>
          </Alert>
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-900">
              <strong>
                {language === "en" ? "Result:" : "Résultat :"}
              </strong>{" "}
              {t.publication.result}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </>
  );

  const renderFieldsSection = () => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Layers className="w-5 h-5" />
          {t.fieldTypes.title}
        </CardTitle>
        <CardDescription>
          {t.fieldTypes.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Common Properties */}
        <div className="border-2 border-primary/30 rounded-lg p-4 bg-primary/5">
          <div className="flex items-center gap-2 mb-3">
            <GitBranch className="w-5 h-5 text-primary" />
            <h3>{t.fieldTypes.commonProperties.title}</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            {t.fieldTypes.commonProperties.description}
          </p>
          <div className="space-y-3">
            {t.fieldTypes.commonProperties.properties.map(
              (prop, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-background rounded-lg border"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <strong>{prop.name}</strong>
                      {prop.required && (
                        <Badge variant="destructive">
                          {language === "en"
                            ? "Required"
                            : "Requis"}
                        </Badge>
                      )}
                      {prop.important && (
                        <Badge className="bg-orange-500">
                          {language === "en"
                            ? "Important"
                            : "Important"}
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground">
                      {prop.description}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        <Separator />

        {/* Field Types Details */}
        <div>
          <h3 className="mb-4">
            {language === "en"
              ? "Field Types - Detailed Reference"
              : "Types de champs - Référence détaillée"}
          </h3>
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {/* Text Field */}
            <AccordionItem value="field-text">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <Type className="w-5 h-5 text-blue-600" />
                  <span>{t.fieldTypes.types.text.name}</span>
                  <Badge variant="outline">
                    {language === "en"
                      ? "Text Input"
                      : "Saisie texte"}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-4">
                  <p className="text-muted-foreground">
                    {t.fieldTypes.types.text.description}
                  </p>
                  <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                    <h4>
                      {language === "en"
                        ? "Specific Properties:"
                        : "Propriétés spécifiques :"}
                    </h4>
                    {t.fieldTypes.types.text.properties.map(
                      (prop, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 p-2 bg-background rounded border"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <strong>{prop.name}</strong>
                              {prop.important && (
                                <Badge
                                  variant="outline"
                                  className="flex items-center gap-1"
                                >
                                  <ScanLine className="w-3 h-3" />
                                  OCR
                                </Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground">
                              {prop.description}
                            </p>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 bg-primary/5 text-center">
                    <ImageIcon className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      {t.fieldTypes.types.text.preview}
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Number Field */}
            <AccordionItem value="field-number">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <Hash className="w-5 h-5 text-purple-600" />
                  <span>{t.fieldTypes.types.number.name}</span>
                  <Badge variant="outline">
                    {language === "en"
                      ? "Numeric Input"
                      : "Saisie numérique"}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-4">
                  <p className="text-muted-foreground">
                    {t.fieldTypes.types.number.description}
                  </p>
                  <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                    <h4>
                      {language === "en"
                        ? "Specific Properties:"
                        : "Propriétés spécifiques :"}
                    </h4>
                    {t.fieldTypes.types.number.properties.map(
                      (prop, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 p-2 bg-background rounded border"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <strong>{prop.name}</strong>
                              {prop.warning && (
                                <Badge variant="destructive">
                                  {prop.warning}
                                </Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground">
                              {prop.description}
                            </p>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 bg-primary/5 text-center">
                    <ImageIcon className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      {t.fieldTypes.types.number.preview}
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* DateTime Field */}
            <AccordionItem value="field-datetime">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <span>
                    {t.fieldTypes.types.datetime.name}
                  </span>
                  <Badge variant="outline">
                    {language === "en"
                      ? "Date/Time Picker"
                      : "Sélecteur date/heure"}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-4">
                  <p className="text-muted-foreground">
                    {t.fieldTypes.types.datetime.description}
                  </p>
                  <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                    <h4>
                      {language === "en"
                        ? "Specific Properties:"
                        : "Propriétés spécifiques :"}
                    </h4>
                    {t.fieldTypes.types.datetime.properties.map(
                      (prop, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 p-2 bg-background rounded border"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <strong className="mb-1">
                              {prop.name}
                            </strong>
                            <p className="text-muted-foreground">
                              {prop.description}
                            </p>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 bg-primary/5 text-center">
                    <ImageIcon className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      {t.fieldTypes.types.datetime.preview}
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Boolean Field */}
            <AccordionItem value="field-boolean">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <ToggleLeft className="w-5 h-5 text-orange-600" />
                  <span>{t.fieldTypes.types.boolean.name}</span>
                  <Badge variant="outline">
                    {language === "en" ? "Yes/No" : "Oui/Non"}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-4">
                  <p className="text-muted-foreground">
                    {t.fieldTypes.types.boolean.description}
                  </p>
                  <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                    <h4>
                      {language === "en"
                        ? "Specific Properties:"
                        : "Propriétés spécifiques :"}
                    </h4>
                    {t.fieldTypes.types.boolean.properties.map(
                      (prop, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 p-2 bg-background rounded border"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <strong className="mb-1">
                              {prop.name}
                            </strong>
                            <p className="text-muted-foreground">
                              {prop.description}
                            </p>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 bg-primary/5 text-center">
                    <ImageIcon className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      {t.fieldTypes.types.boolean.preview}
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Single Choice Field */}
            <AccordionItem value="field-single">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <ListChecks className="w-5 h-5 text-cyan-600" />
                  <span>
                    {t.fieldTypes.types.singleChoice.name}
                  </span>
                  <Badge variant="outline">
                    {language === "en"
                      ? "Single Selection"
                      : "Sélection unique"}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-4">
                  <p className="text-muted-foreground">
                    {
                      t.fieldTypes.types.singleChoice
                        .description
                    }
                  </p>
                  <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                    <h4>
                      {language === "en"
                        ? "Specific Properties:"
                        : "Propriétés spécifiques :"}
                    </h4>
                    {t.fieldTypes.types.singleChoice.properties.map(
                      (prop, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 p-2 bg-background rounded border"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <strong className="mb-1">
                              {prop.name}
                            </strong>
                            <p className="text-muted-foreground">
                              {prop.description}
                            </p>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 bg-primary/5 text-center">
                    <ImageIcon className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      {t.fieldTypes.types.singleChoice.preview}
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Multiple Choice Field */}
            <AccordionItem value="field-multiple">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <ListChecks className="w-5 h-5 text-indigo-600" />
                  <span>
                    {t.fieldTypes.types.multipleChoice.name}
                  </span>
                  <Badge variant="outline">
                    {language === "en"
                      ? "Multiple Selection"
                      : "Sélection multiple"}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-4">
                  <p className="text-muted-foreground">
                    {
                      t.fieldTypes.types.multipleChoice
                        .description
                    }
                  </p>
                  <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                    <h4>
                      {language === "en"
                        ? "Specific Properties:"
                        : "Propriétés spécifiques :"}
                    </h4>
                    {t.fieldTypes.types.multipleChoice.properties.map(
                      (prop, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 p-2 bg-background rounded border"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <strong className="mb-1">
                              {prop.name}
                            </strong>
                            <p className="text-muted-foreground">
                              {prop.description}
                            </p>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 bg-primary/5 text-center">
                    <ImageIcon className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      {
                        t.fieldTypes.types.multipleChoice
                          .preview
                      }
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Image Field */}
            <AccordionItem value="field-image">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <ImageIcon className="w-5 h-5 text-pink-600" />
                  <span>{t.fieldTypes.types.image.name}</span>
                  <Badge variant="outline">
                    {language === "en"
                      ? "Image Upload"
                      : "Upload d'image"}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-4">
                  <p className="text-muted-foreground">
                    {t.fieldTypes.types.image.description}
                  </p>
                  <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                    <h4>
                      {language === "en"
                        ? "Specific Properties:"
                        : "Propriétés spécifiques :"}
                    </h4>
                    {t.fieldTypes.types.image.properties.map(
                      (prop, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 p-2 bg-background rounded border"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <strong className="mb-1">
                              {prop.name}
                            </strong>
                            <p className="text-muted-foreground">
                              {prop.description}
                            </p>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 bg-primary/5 text-center">
                    <ImageIcon className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      {t.fieldTypes.types.image.preview}
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );

  const renderBestPracticesSection = () => (
    <>
      {/* Common Errors */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <XCircle className="w-5 h-5 text-red-600" />
            {t.commonErrors.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    {language === "en" ? "Error" : "Erreur"}
                  </TableHead>
                  <TableHead>
                    {language === "en"
                      ? "Consequence"
                      : "Conséquence"}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {t.commonErrors.errors.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{item.error}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {item.consequence}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
            {t.bestPractices.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {t.bestPractices.practices.map((practice, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p>{practice.title}</p>
                  <p className="text-muted-foreground">
                    {practice.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="flex">
        {/* Left Sidebar Menu */}
        <aside className="w-64 min-h-screen bg-background border-r p-6 sticky top-0">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-6 h-6 text-primary" />
              <h2>Metrafield</h2>
            </div>
            <p className="text-muted-foreground">
              {language === "en"
                ? "Documentation"
                : "Documentation"}
            </p>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={
                    activeSection === item.id
                      ? "secondary"
                      : "ghost"
                  }
                  className={cn(
                    "w-full justify-start gap-2",
                    activeSection === item.id &&
                      "bg-primary/10 text-primary hover:bg-primary/20",
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

          {/* Language Toggle in Sidebar */}
          <div>
            <p className="text-muted-foreground mb-2">
              {language === "en" ? "Language" : "Langue"}
            </p>
            <Tabs
              value={language}
              onValueChange={(v) =>
                setLanguage(v as "en" | "fr")
              }
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

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="mb-2">{t.title}</h1>
              <p className="text-muted-foreground">
                {t.subtitle}
              </p>
            </div>

            {/* Render Active Section */}
            {activeSection === "intro" && renderIntroSection()}
            {activeSection === "content-types" &&
              renderContentTypesSection()}
            {activeSection === "fields" &&
              renderFieldsSection()}
            {activeSection === "best-practices" &&
              renderBestPracticesSection()}

            {/* Footer */}
            <div className="text-center text-muted-foreground pt-8 border-t mt-8">
              <p>
                {language === "en"
                  ? "Metrafield — Strapi Content Management Documentation"
                  : "Metrafield — Documentation de gestion de contenu Strapi"}
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