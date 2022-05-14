import React, { useState } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

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
  const [ListVisible, setListVisible] = useState<boolean>(true);
  const [checkedPrefectures, setCheckedPrefectures] = useState<string[]>([]);
  console.log({ checkedPrefectures });
  return (
    <>
      {checkedPrefectures.length === 0 ? (
        <h3 className={styles["unchecked"]}>選択してください</h3>
      ) : (
        <div className={styles["checkedList"]}>
          <h3 className={styles["checked"]}>選択中:</h3> <p>{checkedPrefectures}</p>
        </div>
      )}

      <button className={ListVisible ? styles["toggle"] : ""} onClick={() => setListVisible(true)}>
        一覧を開く
      </button>
      <div className={ListVisible ? "" : styles["toggle"]}>
        <button onClick={() => setListVisible(false)}>一覧を閉じる</button>
        <div className={classNames(styles.PrefectureList)}>
          {prefectures.map((prefecture) => (
            <div className={styles["prefectureCheckbox"]} key={prefecture.prefName}>
              <input
                type="checkbox"
                name="Prefecture name"
                onChange={(event) => {
                  onChange(prefecture.prefName, prefecture.prefCode, event.target.checked);
                  checkedPrefectures.includes(prefecture.prefName + " ")
                    ? setCheckedPrefectures(
                        checkedPrefectures.filter(
                          (checkedPrefectures, index) =>
                            checkedPrefectures !== prefecture.prefName + " "
                        )
                      )
                    : setCheckedPrefectures([...checkedPrefectures, prefecture.prefName + " "]);
                }}
                id={"checkbox" + prefecture.prefCode}
              />
              <label className={styles["text"]} htmlFor={"checkbox" + prefecture.prefCode}>
                {prefecture.prefName.length === 3 ? " " + prefecture.prefName : prefecture.prefName}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PrefecturesList;
