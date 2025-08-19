import { cva } from "class-variance-authority";

interface cardProps {
  size:"lg" | "md" | "sm"
  layout: "screen"
  children : React.ReactNode
}

const cards = cva(" text-gray-900", {
  variants: {
    size: {
      lg: "flex flex-col gap-7 xl:text-size-lg md:text-size-md text-sm max-w-[600px]",
      md: "flex flex-col gap-7 xl:text-size-md md:text-size-sm max-w-[400px]",
      sm: "flex flex-col gap-3 xl:text-size-sm md:text-size-xs w-full lg:max-w-[400px] h-25",
    },
    layout: {
      screen: "p-5 bg-white rounded-xl",
    },
  },
  compoundVariants: [],
});

const Card = ({children, size, layout}: cardProps) => {
    return (
        <div className={cards({size, layout})}>
            {children}
        </div>
    )
}

export default Card
