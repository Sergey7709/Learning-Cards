import { forwardRef, memo, Ref, SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="8"
    viewBox="0 0 14 8"
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      d="M7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 7.26522 0.105357 7.51957 0.292893 7.70711C0.48043 7.89464 0.734784 8 1 8C1.26522 8 1.51957 7.89464 1.70711 7.70711C1.89464 7.51957 2 7.26522 2 7C2 5.67392 2.52678 4.40215 3.46447 3.46447C4.40215 2.52678 5.67392 2 7 2C8.32608 2 9.59785 2.52678 10.5355 3.46447C11.4732 4.40215 12 5.67392 12 7C12 7.26522 12.1054 7.51957 12.2929 7.70711C12.4804 7.89464 12.7348 8 13 8C13.2652 8 13.5196 7.89464 13.7071 7.70711C13.8946 7.51957 14 7.26522 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z"
      fill="black"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
