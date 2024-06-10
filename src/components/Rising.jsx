import { useRef, useEffect } from 'react'

export default function Rising({ className }) {
  const pathRef = useRef(null)

  useEffect(() => {
    const path = pathRef.current
    const length = path.getTotalLength()
    path.style.transition = path.style.WebkitTransition = 'none'
    path.style.strokeDasharray = length + ' ' + length
    path.style.strokeDashoffset = length
    path.getBoundingClientRect()
    path.style.transition = path.style.WebkitTransition =
      'stroke-dashoffset 2s ease-in-out'
    path.style.strokeDashoffset = '0'
  }, [])

  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <path
          stroke="#000"
          strokeWidth="4.3"
          fill="none"
          d="M 0 0 H 100 M 100 0 L 96 2 M 100 0 L 96 -2"
          strokeDasharray=""
          strokeDashoffset="628.42"
          ref={pathRef}
        />
      </svg>
    </div>
  )
}

{
}
