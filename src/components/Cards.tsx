import { cva } from "class-variance-authority";

interface cardProps {
  size:"lg" | "md" | "sm"
  layout: "screen"
  responsiveness: "sm"
  children : React.ReactNode
}

const cards = cva(" text-[#F1F5F9]", {
  variants: {
    size: {
      lg: "flex flex-col gap-7 xl:text-size-lg md:text-size-md text-sm max-w-[600px]",
      md: "flex flex-col gap-7 xl:text-size-md md:text-size-sm max-w-[400px]",
      sm: "flex flex-col gap-7 xl:text-size-sm md:text-size-xs w-full lg:max-w-[100px]",
    },
    layout: {
      screen: "p-5 bg-[#1E293B] rounded-xl",
    },
    responsiveness: {
      sm: ""
    }
  },
  compoundVariants: [],
});

const Card = ({children, size, layout, responsiveness}: cardProps) => {
    return (
        <div className={cards({size, layout, responsiveness})}>
            {children}
        </div>
    )
}

export default Card
