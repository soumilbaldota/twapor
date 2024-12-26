"use client"
import { useState } from 'react';
import { Card, CardHeader, CardContent } from "@twapor/components/ui/card";
import { Badge } from "@twapor/components/ui/badge";

interface Job {
    id: string;
    name: string;
    lastRunAt: Date;
    lastRunSuccess: boolean;
    searchHistory: string[];
}

export default function JobsPage() {
    const [jobs] = useState<Job[]>([
        {
            id: '1',
            name: 'Twitter Crawler',
            lastRunAt: new Date('2023-12-01T10:00:00'),
            lastRunSuccess: true,
            searchHistory: ['#tech', '#programming', '#AI'],
        },
        {
            id: '2',
            name: 'News Aggregator',
            lastRunAt: new Date('2023-12-01T09:30:00'),
            lastRunSuccess: false,
            searchHistory: ['technology', 'startup', 'innovation'],
        },
    ]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Jobs Dashboard</h1>
            
            <div className="grid gap-6">
                {jobs.map((job) => (
                    <Card key={job.id}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <h2 className="text-xl font-semibold">{job.name}</h2>
                            <Badge variant={job.lastRunSuccess ? "default" : "destructive"}>
                                {job.lastRunSuccess ? 'Success' : 'Failed'}
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="text-sm text-muted-foreground">
                                Last Run: {job.lastRunAt.toLocaleString()}
                            </div>
                            
                            <div className="mt-4">
                                <h3 className="font-medium mb-2">Search History</h3>
                                <div className="flex gap-2 flex-wrap">
                                    {job.searchHistory.map((term, index) => (
                                        <Badge key={index} variant="secondary">
                                            {term}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}