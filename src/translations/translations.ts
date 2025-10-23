export default {
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
            note: "Almost all operations are performed within the Content Manager, Strapi's main content administration interface.",
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
                        "Each group can contain 7 different types of dynamic fields (see Dynamic Fields section)",
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
                    error: "⚠️ Duplicate fields without changing UUIDs ⚠️",
                    consequence:
                        "Breaks the conditional logic of the targeted field and the duplicated field",
                },
                {
                    error: "Template not associated with an Aircraft",
                    consequence: "Does not appear in user results",
                },
                {
                    error: "Fields created but not published",
                    consequence: "Absent from user rendering",
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
                        "Name zones and groups clearly to facilitate maintenance and administration",
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
            note: "Presque toutes les opérations s'effectuent dans le Content Manager, l'interface principale d'administration de contenu de Strapi.",
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
                        "Chaque groupe peut contenir 7 types de champs dynamiques différents (voir section Champs dynamiques)",
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
                    error: "⚠️ Dupliquer des champs sans regénérer les UUID ⚠️",
                    consequence:
                        "Casse la logique conditionnelle du champ ciblé et du champ dupliqué",
                },
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
                        "Nommer clairement les zones et groupes pour faciliter la maintenance et l'administration",
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