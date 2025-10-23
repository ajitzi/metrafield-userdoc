import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Info,
    AlertCircle,
    Plane,
    CheckCircle2,
    Eye,
} from "lucide-react";

interface ContentTypesSectionProps {
    language: "en" | "fr";
    t: any;
}

export default function ContentTypesSection({ language, t }: ContentTypesSectionProps) {
    return (
        <>
            {/* Création d'un Template */}
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>{t.template.title}</CardTitle>
                    <CardDescription>{t.template.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Location */}
                    <Alert>
                        <Info className="h-4 w-4" />
                        <AlertDescription>
                            <strong>{language === "en" ? "Location:" : "Emplacement :"}</strong> {t.template.location}
                        </AlertDescription>
                    </Alert>

                    {/* Composition */}
                    <div>
                        <h3 className="mb-3">{t.template.composition.title}</h3>
                        <p className="text-muted-foreground mb-3">{t.template.composition.description}</p>
                        <div className="space-y-2 pl-4 border-l-2 border-primary">
                            {t.template.composition.items.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
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
                                    <strong className="text-red-900">{t.template.aircraft.title}</strong>
                                </div>
                                <p className="text-red-900">{t.template.aircraft.description}</p>
                                <p className="text-red-800">{t.template.aircraft.note}</p>
                            </div>
                        </AlertDescription>
                    </Alert>

                    <Separator />

                    {/* Étapes de création */}
                    <div>
                        <h3 className="mb-4">{t.template.steps.title}</h3>
                        <Accordion type="single" collapsible className="w-full">
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
                                        {t.template.steps.step1.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
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
                                        {t.template.steps.step2.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
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
                                        {t.template.steps.step3.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
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
                                    <p className="pt-4 text-muted-foreground">{t.template.steps.step4.description}</p>
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
                            <strong>{language === "en" ? "Action:" : "Action :"}</strong> {t.publication.action}
                        </AlertDescription>
                    </Alert>
                    <Alert className="bg-green-50 border-green-200">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-green-900">
                            <strong>{language === "en" ? "Result:" : "Résultat :"}</strong> {t.publication.result}
                        </AlertDescription>
                    </Alert>
                </CardContent>
            </Card>
        </>
    );
}