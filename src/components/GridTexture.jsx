import { twMerge } from 'tailwind-merge'

export default function GridTexture({ className, soft, heavy }) {
  if ((soft && heavy) || (!soft && !heavy)) throw Error('Invalid props')

  return (
    <div
      className={twMerge(
        'absolute w-full h-full top-0 left-0 bg-repeat bg-[length:150px_150px]',
        soft
          ? 'bg-[url("/textures/soft-grid.svg")]'
          : heavy
          ? 'bg-[url("/textures/heavy-grid.svg")]'
          : null,
        className
      )}
    />
  )
}
