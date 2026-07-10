import TopicArt from './Illustration'

interface CardImageProps {
  /** Path to a real image (e.g. /img/s1-06.jpg). Falls back to TopicArt. */
  src?: string
  alt?: string
  id?: string
  category?: string
  className?: string
}

/**
 * Card artwork: renders the supplied brand image when one exists, otherwise
 * falls back to the topic-relevant SVG illustration. Images are lazy-loaded
 * and cover-cropped so any aspect container works.
 */
export default function CardImage({ src, alt = '', id, category, className = '' }: CardImageProps) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={`${className} object-cover`} />
  }
  return <TopicArt id={id} category={category} className={className} />
}
