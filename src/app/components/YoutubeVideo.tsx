// Componente para incorporar um vídeo do YouTube nas páginas
// Recebe uma propriedade videoId, que é o identificador do vídeo do YouTube a ser exibido

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function YoutubeVideo ({ videoId }: { videoId: string }) {
    return (
        <Card className="max-w-3xl mx-auto">
            <CardHeader>
                <CardTitle>
                    Tutorial passo a passo
                </CardTitle>
            </CardHeader>
            <CardContent className="aspect-video">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Tutorial"
                    className="w-full h-full rounded-md"
                    frameBorder="0"
                    allowFullScreen
                />
            </CardContent>
        </Card>
    );
}
