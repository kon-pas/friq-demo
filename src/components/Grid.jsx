import { twMerge } from 'tailwind-merge'

export default function Grid() {
  return <div className={twMerge('absolute top-0 left-0 w-full h-full')}/>
}
