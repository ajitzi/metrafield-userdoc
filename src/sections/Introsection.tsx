import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "../components/ui/card";
import { Alert, AlertDescription } from "../components/ui/alert";
import {
    Info,
    Layers,
    List,
    Edit,
    CheckCircle2,
} from "lucide-react";

interface IntroSectionProps {
    language: "en" | "fr";
    t: any;
}

export default function IntroSection({ language, t }: IntroSectionProps) {
    return (
        <>
            {/* Introduction */}
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>{t.intro.title}</CardTitle>
                    <CardDescription>{t.intro.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Alert>
                        <Info className="h-4 w-4" />
                        <AlertDescription>
                            <strong>{language === "en" ? "Note:" : "Note :"}</strong> {t.intro.note}
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
                    <CardDescription>{t.navigation.description}</CardDescription>
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
                                {t.navigation.listView.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
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
                                {t.navigation.detailView.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}