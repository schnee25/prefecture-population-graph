import React, { useEffect, useState } from "react";
import axios from "axios";
import PrefecturesList from "../Components/PrefectureList/PrefecturesList";
import Graph from "../Components/Graph/Graph";

// const Apikey = process.env.REACT_APP_API_KEY;
const ApiKey = "owZHJwNQSeb7WDoUgRRiAWlJRXEhqP6Vr5NcYO8W";

console.log("aaa", ApiKey);

const Styles: { [key: string]: React.CSSProperties } = {
  graph: {
    padding: "10px",
  },
  label: {
    fontSize: "20px",
    padding: "0.5rem 2rem",
    borderLeft: "4px solid #000",
    marginLeft: "10pt",
  },
};

const Main: React.FC = () => {
  const [prefectures, setPreFectures] = useState<{
    message: null;
    result: {
      prefCode: number;
      prefName: string;
    }[];
  } | null>(null);
  const [prefPopulation, setPrefPopulation] = useState<
    { prefName: string; data: { year: number; value: number }[] }[]
  >([]);

  useEffect(() => {
    // 都道府県一覧を取得する
    // if (process.env.REACT_APP_API_KEY === undefined) return;
    axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers: { "X-API-KEY": ApiKey },
      })
      .then((results) => {
        setPreFectures(results.data);
      })
      .catch((error) => {});
  }, []);

  // チェックボックスをクリックした際の処理
  const handleClickCheck = (prefName: string, prefCode: number, check: boolean) => {
    let c_prefPopulation = prefPopulation.slice();

    // チェックをつけた処理
    if (check) {
      if (c_prefPopulation.findIndex((value) => value.prefName === prefName) !== -1) return;
      //   if (process.env.REACT_APP_API_KEY === undefined) return;
      axios
        .get(
          "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=" +
            String(prefCode),
          {
            headers: { "X-API-KEY": ApiKey },
          }
        )
        .then((results) => {
          c_prefPopulation.push({
            prefName: prefName,
            data: results.data.result.data[0].data,
          });

          setPrefPopulation(c_prefPopulation);
        })
        .catch((error) => {
          return;
        });
    }
    // チェックを外した処理
    else {
      const deleteIndex = c_prefPopulation.findIndex((value) => value.prefName === prefName);
      if (deleteIndex === -1) return;
      c_prefPopulation.splice(deleteIndex, 1);
      setPrefPopulation(c_prefPopulation);
    }
  };

  return (
    <main>
      <h2 style={Styles.label}>都道府県</h2>
      {prefectures && (
        <PrefecturesList prefectures={prefectures.result} onChange={handleClickCheck} />
      )}
      <h2 style={Styles.label}>人口推移グラフ</h2>
      <Graph populationData={prefPopulation} />
    </main>
  );
};

export default Main;
