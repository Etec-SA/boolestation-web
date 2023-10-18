import React, { useState } from 'react'
import {
  PieChart,
  pieChartDefaultProps,
  PieChartProps,
} from 'react-minimal-pie-chart'

function Chart(props: PieChartProps) {
  const [hovered, setHovered] = useState<number | undefined>(undefined)

  const data = props.data.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: 'grey',
      }
    }
    return entry
  })

  const lineWidth = 60

  return (
    <PieChart
      style={{
        fontSize: '6px',
      }}
      className="h-80 my-5"
      data={data}
      radius={pieChartDefaultProps.radius - 6}
      lineWidth={60}
      segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
      animate
      label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
      labelPosition={100 - lineWidth / 2}
      labelStyle={{
        fill: '#fff',
        opacity: 0.75,
        pointerEvents: 'none',
      }}
      onMouseOver={(_, index) => {
        setHovered(index)
      }}
      onMouseOut={() => {
        setHovered(undefined)
      }}
      startAngle={250}
    />
  )
}

export default Chart
