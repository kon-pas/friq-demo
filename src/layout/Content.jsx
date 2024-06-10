import { twMerge } from 'tailwind-merge'

export default function Content({ children, className }) {
  return (
    <div
      className={twMerge(
        'relative w-full px-4 mx-auto max-w-screen-2xl sm:px-6',
        className
      )}
    >
      {children}
    </div>
  )
}
