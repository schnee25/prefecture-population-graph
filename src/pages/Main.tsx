import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './style.module.scss'
import PrefecturesList from '../Components/PrefectureList/PrefecturesList'
import Graph from '../Components/Graph/Graph'

// const Apikey = process.env.REACT_APP_API_KEY;
const ApiKey = 'owZHJwNQSeb7WDoUgRRiAWlJRXEhqP6Vr5NcYO8W'

const Main: React.FC = () => {
  const [prefectures, setPreFectures] = useState<{
    message: null
    result: {
      prefCode: number
      prefName: string
    }[]
  } | null>(null)
  const [prefPopulation, setPrefPopulation] = useState<
    { prefName: string; data: { year: number; value: number }[] }[]
  >([])

  useEffect(() => {
    axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: { 'X-API-KEY': ApiKey },
      })
      .then((results) => {
        setPreFectures(results.data)
      })
      .catch((error) => {
        return error
      })
  }, [])

  const handleClickCheck = (prefName: string, prefCode: number, check: boolean) => {
    const slicedPrefPopulation = prefPopulation.slice()

    if (check) {
      if (slicedPrefPopulation.findIndex((value) => value.prefName === prefName) !== -1) return
      axios
        .get(
          'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=' +
            String(prefCode),
          {
            headers: { 'X-API-KEY': ApiKey },
          },
        )
        .then((results) => {
          slicedPrefPopulation.push({
            prefName,
            data: results.data.result.data[0].data,
          })

          setPrefPopulation(slicedPrefPopulation)
        })
      // .catch((error) => {return})
    } else {
      const deleteIndex = slicedPrefPopulation.findIndex((value) => value.prefName === prefName)
      if (deleteIndex === -1) return
      slicedPrefPopulation.splice(deleteIndex, 1)
      setPrefPopulation(slicedPrefPopulation)
    }
  }

  return (
    <main>
      <h2 className={styles.label}>都道府県</h2>
      {prefectures && (
        <PrefecturesList prefectures={prefectures.result} onChange={handleClickCheck} />
      )}
      <h2 className={styles.label}>人口推移グラフ</h2>
      <Graph populationData={prefPopulation} />
    </main>
  )
}

export default Main
