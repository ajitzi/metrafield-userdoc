import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    XCircle,
    Lightbulb,
    CheckCircle2,
} from "lucide-react";

interface BestPracticesSectionProps {
    language: "en" | "fr";
    t: any;
}

export default function BestPracticesSection({ language, t }: BestPracticesSectionProps) {
    return (
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
                                    <TableHead>{language === "en" ? "Error" : "Erreur"}</TableHead>
                                    <TableHead>{language === "en" ? "Consequence" : "Conséquence"}</TableHead>
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
                                    <p className="text-muted-foreground">{practice.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </>
    );
}