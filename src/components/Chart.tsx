import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import { Card, CardContent } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

type Store = { title: string; amount: number }
type ChartDatum = { browser: string; visitors: number; fill: string }



// this is where the component started from
const Chart = () => {
  const [chart, setChart] = React.useState<Store[]>(() => {
    const saved = localStorage.getItem("budgetsCard")
    return saved ? JSON.parse(saved) : [] 
    setChart(chart)
  })
  const chartData : ChartDatum[] = chart.map((dStored: Store, i: number) => ({ 
    browser: dStored.title, 
    visitors: dStored.amount, 
    fill: `var(--chart-${i+1})`
  }))

  const chartConfig = {
    visitors: {
      label: "Visitors",
    }
  } satisfies ChartConfig

  const totalBudget = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [chartData ])

  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0 h-200 w-70 p-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalBudget.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Budget
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default Chart