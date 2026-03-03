type headingLevel = 'h1' | 'h2'

interface SectionHeadingProps {
  mainTitle: string
  subTitle: string
  as?: headingLevel
}
export default function SectionHeading({
  mainTitle,
  subTitle,
  as = 'h2',
}: SectionHeadingProps) {
  const HeadingTag = as
  return (
    <div className='flex flex-col items-center gap-1'>
      <span className='text-sm font-bold text-[#2faa8a] tracking-wide'>
        {subTitle}
      </span>
      <HeadingTag
        className={`font-bold ${as === 'h1' ? 'text-2xl md:text-4xl' : 'text-xl md:text-3xl'}`}
      >
        {mainTitle}
      </HeadingTag>
    </div>
  )
}
