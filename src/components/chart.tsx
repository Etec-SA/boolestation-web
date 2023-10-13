import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: ['Sim, considero.', 'Não considero.'],
  datasets: [
    {
      label: 'Quantidade de pessoas.',
      data: [91, 3],
      backgroundColor: ['rgba(32, 213, 20, 0.2)', 'rgba(211, 11, 22, 0.2)'],
      borderColor: ['rgba(32, 213, 20, 1)', 'rgba(211, 11, 22, 1)'],
      borderWidth: 1,
    },
  ],
}

export function Chart() {
  return <Pie data={data} />
}
