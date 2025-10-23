import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion";
import {
    Layers,
    GitBranch,
    Type,
    Hash,
    Calendar,
    ToggleLeft,
    ListChecks,
    ImageIcon,
    CheckCircle2,
    ScanLine,
} from "lucide-react";

interface FieldsSectionProps {
    language: "en" | "fr";
    t: any;
}

export default function FieldsSection({ language, t }: FieldsSectionProps) {
    return (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Layers className="w-5 h-5" />
                    {t.fieldTypes.title}
                </CardTitle>
                <CardDescription>{t.fieldTypes.subtitle}</CardDescription>
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
                        {t.fieldTypes.commonProperties.properties.map((prop, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-3 p-3 bg-background rounded-lg border"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <strong>{prop.name}</strong>
                                        {prop.required && (
                                            <Badge variant="destructive">
                                                {language === "en" ? "Required" : "Requis"}
                                            </Badge>
                                        )}
                                        {prop.important && (
                                            <Badge className="bg-orange-500">
                                                {language === "en" ? "Important" : "Important"}
                                            </Badge>
                                        )}
                                    </div>
                                    <p className="text-muted-foreground">{prop.description}</p>
                                </div>
                            </div>
                        ))}
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
                    <Accordion type="single" collapsible className="w-full">
                        {/* Text Field */}
                        <AccordionItem value="field-text">
                            <AccordionTrigger>
                                <div className="flex items-center gap-3">
                                    <Type className="w-5 h-5 text-blue-600" />
                                    <span>{t.fieldTypes.types.text.name}</span>
                                    <Badge variant="outline">
                                        {language === "en" ? "Text Input" : "Saisie texte"}
                                    </Badge>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <FieldTypeContent
                                    type={t.fieldTypes.types.text}
                                    language={language}
                                    hasOCR={true}
                                />
                            </AccordionContent>
                        </AccordionItem>

                        {/* Number Field */}
                        <AccordionItem value="field-number">
                            <AccordionTrigger>
                                <div className="flex items-center gap-3">
                                    <Hash className="w-5 h-5 text-purple-600" />
                                    <span>{t.fieldTypes.types.number.name}</span>
                                    <Badge variant="outline">
                                        {language === "en" ? "Numeric Input" : "Saisie numérique"}
                                    </Badge>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <FieldTypeContent
                                    type={t.fieldTypes.types.number}
                                    language={language}
                                />
                            </AccordionContent>
                        </AccordionItem>

                        {/* DateTime Field */}
                        <AccordionItem value="field-datetime">
                            <AccordionTrigger>
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-green-600" />
                                    <span>{t.fieldTypes.types.datetime.name}</span>
                                    <Badge variant="outline">
                                        {language === "en" ? "Date/Time Picker" : "Sélecteur date/heure"}
                                    </Badge>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <FieldTypeContent
                                    type={t.fieldTypes.types.datetime}
                                    language={language}
                                />
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
                                <FieldTypeContent
                                    type={t.fieldTypes.types.boolean}
                                    language={language}
                                />
                            </AccordionContent>
                        </AccordionItem>

                        {/* Single Choice Field */}
                        <AccordionItem value="field-single">
                            <AccordionTrigger>
                                <div className="flex items-center gap-3">
                                    <ListChecks className="w-5 h-5 text-cyan-600" />
                                    <span>{t.fieldTypes.types.singleChoice.name}</span>
                                    <Badge variant="outline">
                                        {language === "en" ? "Single Selection" : "Sélection unique"}
                                    </Badge>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <FieldTypeContent
                                    type={t.fieldTypes.types.singleChoice}
                                    language={language}
                                />
                            </AccordionContent>
                        </AccordionItem>

                        {/* Multiple Choice Field */}
                        <AccordionItem value="field-multiple">
                            <AccordionTrigger>
                                <div className="flex items-center gap-3">
                                    <ListChecks className="w-5 h-5 text-indigo-600" />
                                    <span>{t.fieldTypes.types.multipleChoice.name}</span>
                                    <Badge variant="outline">
                                        {language === "en" ? "Multiple Selection" : "Sélection multiple"}
                                    </Badge>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <FieldTypeContent
                                    type={t.fieldTypes.types.multipleChoice}
                                    language={language}
                                />
                            </AccordionContent>
                        </AccordionItem>

                        {/* Image Field */}
                        <AccordionItem value="field-image">
                            <AccordionTrigger>
                                <div className="flex items-center gap-3">
                                    <ImageIcon className="w-5 h-5 text-pink-600" />
                                    <span>{t.fieldTypes.types.image.name}</span>
                                    <Badge variant="outline">
                                        {language === "en" ? "Image Upload" : "Upload d'image"}
                                    </Badge>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <FieldTypeContent
                                    type={t.fieldTypes.types.image}
                                    language={language}
                                />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </CardContent>
        </Card>
    );
}

// Component for field type content
function FieldTypeContent({ type, language, hasOCR = false }) {
    return (
        <div className="space-y-4 pt-4">
            <p className="text-muted-foreground">{type.description}</p>
            <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                <h4>
                    {language === "en" ? "Specific Properties:" : "Propriétés spécifiques :"}
                </h4>
                {type.properties.map((prop, idx) => (
                    <div
                        key={idx}
                        className="flex items-start gap-2 p-2 bg-background rounded border"
                    >
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <strong>{prop.name}</strong>
                                {prop.important && hasOCR && (
                                    <Badge variant="outline" className="flex items-center gap-1">
                                        <ScanLine className="w-3 h-3" />
                                        OCR
                                    </Badge>
                                )}
                                {prop.warning && (
                                    <Badge variant="destructive">{prop.warning}</Badge>
                                )}
                            </div>
                            <p className="text-muted-foreground">{prop.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 bg-primary/5 text-center">
                <ImageIcon className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                <p className="text-muted-foreground">{type.preview}</p>
            </div>
        </div>
    );
}