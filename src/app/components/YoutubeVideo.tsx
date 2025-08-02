import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function YoutubeVideo ({ videoId}: { videoId: string }){
    return (
        <Card className="w-2xl mx-auto">
            <CardContent className="aspect-video">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Tutorial"
                    className="w-full h-full rounded-md"
                    frameBorder= "0"
                    allowFullScreen
                />
            </CardContent>
        </Card>
    );
}