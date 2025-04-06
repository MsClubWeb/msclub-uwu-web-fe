import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "alt"> {
  alt: string
  aspectRatio?: "auto" | "square" | "video" | "portrait" | "custom"
  customAspectRatio?: string
  className?: string
  wrapperClassName?: string
  priority?: boolean
}

export function OptimizedImage({
  src,
  alt,
  aspectRatio = "auto",
  customAspectRatio,
  className,
  wrapperClassName,
  priority = false,
  ...props
}: OptimizedImageProps) {
  // Define aspect ratio classes
  const aspectRatioClasses = {
    auto: "",
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    custom: "",
  }

  // Custom style for custom aspect ratio
  const customStyle = aspectRatio === "custom" && customAspectRatio ? { aspectRatio: customAspectRatio } : {}

  return (
    <div
      className={cn("relative overflow-hidden", aspectRatioClasses[aspectRatio], wrapperClassName)}
      style={customStyle}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className={cn("object-cover", className)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        {...props}
      />
    </div>
  )
}

