import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { GalleryHorizontal, LucideIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useState } from "react";
import { Dialog as FullscreenDialog } from "./ui/dialog";

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string;
  image?: string;
  icon?: LucideIcon;
  longDescription?: string;
  gallery?: string[];
}

const ProjectCard = ({ title, description, tools, image, icon: Icon, longDescription, gallery = [] }: ProjectCardProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = gallery.length > 0 ? gallery : [
    "photo-1488590528505-98d2b5aba04b",
    "photo-1487058792275-0ad4aaf24ca7",
    "photo-1498050108023-c5249f4df085",
    "photo-1483058712412-4245e9b90334"
  ].map(id => `https://images.unsplash.com/${id}`);

  const toolsList = tools.split(", ");

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Card className="group cursor-pointer overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              {image ? (
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                  <span className="text-gray-500">Project Preview</span>
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  {Icon && <Icon className="w-5 h-5 text-primary" />}
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <GalleryHorizontal className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{description}</p>
              <div className="flex flex-wrap gap-1">
                {toolsList.slice(0, 3).map((tool, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tool}
                  </Badge>
                ))}
                {toolsList.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{toolsList.length - 3}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 h-[80vh]">
            {/* Left sidebar */}
            <div className="flex flex-col h-full overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-2xl">
                  {Icon && <Icon className="w-6 h-6 text-primary" />}
                  <span>{title}</span>
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-wrap gap-2 mt-4">
                {toolsList.map((tool, index) => (
                  <Badge key={index} variant="secondary" className="bg-opacity-20">
                    {tool}
                  </Badge>
                ))}
              </div>
              <p className="mt-6 text-muted-foreground">
                {longDescription || description}
              </p>
            </div>

            {/* Right side carousel */}
            <div className="relative h-full flex flex-col">
              <Carousel className="w-full flex-1">
                <CarouselContent className="h-full">
                  {images.map((img, index) => (
                    <CarouselItem key={index} className="h-full">
                      <div 
                        className="relative h-full cursor-pointer"
                        onClick={() => setSelectedImage(img)}
                      >
                        <img
                          src={img}
                          alt={`${title} preview ${index + 1}`}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-2 mt-4">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
              </Carousel>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Fullscreen image dialog */}
      <FullscreenDialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] h-[95vh] p-0">
          <div className="relative w-full h-full">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Fullscreen preview"
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </DialogContent>
      </FullscreenDialog>
    </>
  );
};

export default ProjectCard;