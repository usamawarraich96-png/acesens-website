import TopicArt from './Illustration'

interface CardImageProps {
  /** Topic selectors — the art is generated from whichever is provided. */
  variant?: string
  icon?: string
  id?: string
  category?: string
  alt?: string
  className?: string
}

/**
 * Card artwork. Renders a topic-relevant, code-generated SVG illustration
 * (navy / blue / white line art) chosen from the card's variant, icon, service
 * id, or category — no photography. Cover-cropped so any aspect container works.
 */
export default function CardImage({ variant, icon, id, category, className = '' }: CardImageProps) {
  return <TopicArt variant={variant} icon={icon} id={id} category={category} className={className} />
}
