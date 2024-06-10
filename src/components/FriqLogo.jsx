import { fonts } from '@/utils'
import { twMerge } from 'tailwind-merge'

function Text({ className }) {
  return (
    <span
      className={twMerge(
        fonts.syne.className,
        'text-2xl text-white',
        className
      )}
    >
      <span className="font-black">FRIQ</span>
      <span className="font-bold tracking-tight">Technology</span>
    </span>
  )
}

function Dots({ className, classNameDot }) {
  return (
    <div
      className={twMerge(
        'relative flex flex-row items-center gap-x-1 w-fit top-1 ml-[1px]',
        className
      )}
    >
      <div
        className={twMerge(
          'rounded-full hover:rounded-none w-2 h-2 bg-red-500',
          classNameDot
        )}
      />
      <div
        className={twMerge(
          'rounded-full hover:rounded-none w-2 h-2 bg-amber-500',
          classNameDot
        )}
      />
      <div
        className={twMerge(
          'rounded-full hover:rounded-none w-2 h-2 bg-green-500',
          classNameDot
        )}
      />
    </div>
  )
}

export default function FriqLogo({
  className,
  classNameText,
  classNameDot,
  classNameDots,
}) {
  return (
    <div className={twMerge('w-fit h-fit', className)}>
      <Dots
        className={classNameDots}
        classNameDot={classNameDot}
      />
      <Text className={classNameText} />
    </div>
  )
}
FriqLogo.Text = Text
FriqLogo.Dots = Dots
