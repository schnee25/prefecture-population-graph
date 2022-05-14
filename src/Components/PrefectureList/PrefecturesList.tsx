import React from "react";
import styles from "./style.module.scss";

type Props = {
  prefectures:
    | {
        prefCode: number;
        prefName: string;
      }[];

  onChange: (name: string, prefName: number, check: boolean) => void;
};

// 都道府県一覧のチェックボックスを表示するコンポーネント
const PrefecturesList: React.FC<Props> = ({ prefectures, onChange }) => {
  return (
    <>
      <div className={styles["PrefectureList"]}>
        {prefectures.map((prefecture) => (
          <div className={styles["prefectureCheckbox"]} key={prefecture.prefName}>
            <input
              type="checkbox"
              name="Prefecture name"
              onChange={(event) =>
                onChange(prefecture.prefName, prefecture.prefCode, event.target.checked)
              }
              id={"checkbox" + prefecture.prefCode}
            />
            <label className={styles["text"]} htmlFor={"checkbox" + prefecture.prefCode}>
              {prefecture.prefName.length === 3 ? " " + prefecture.prefName : prefecture.prefName}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

// const Styles: { [key: string]: React.CSSProperties } = {
//   PrefectureList: {
//     display: "flex",
//     flexWrap: "wrap",
//     padding: "10px",
//     justifyContent: "flex-start",
//     justifySelf: "auto",
//   },
//   text: { display: "contents", marginLeft: "1em", cursor: "pointer" },
//   prefectureCheckbox: {
//     borderRadius: "24px",
//     border: "solid 2px",
//     textAlign: "center",
//     padding: "5px 8px 5px 8px",
//     margin: "0.5rem",
//   },
// };
export default PrefecturesList;
