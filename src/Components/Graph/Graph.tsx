import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import styles from './style.module.scss'

type Props = {
  populationData: {
    prefName: string
    data: { year: number; value: number }[]
  }[]
}

const Graph: React.FC<Props> = ({ populationData }) => {
  const series: Highcharts.SeriesOptionsType[] = []
  const categories = []

  for (const p of populationData) {
    const data = []

    for (const pd of p.data) {
      data.push(pd.value)
      categories.push(String(pd.year))
    }
    series.push({
      type: 'line',
      name: p.prefName,
      data,
    })
  }

  const prefList = series.map((item) => {
    return item.name
  })
  const prefListStr = prefList.join(' ')

  const options: Highcharts.Options = {
    title: {
      text: prefListStr + ' の総人口推移',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories,
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
    chart: {
      backgroundColor: 'transparent',
    },
    series: series.length === 0 ? [{ type: 'line', name: '都道府県名', data: [] }] : series,
  }

  return (
    <div className={styles.graph}>
      <HighchartsReact highcharts={Highcharts} options={options} className={styles.Highcharts} />
    </div>
  )
}

export default Graph
