import styles from './style.module.scss'
import React, { useState } from 'react'
import classNames from 'classnames'

type Props = {
  prefectures:
    | {
        prefCode: number
        prefName: string
      }[]

  onChange: (name: string, prefName: number, check: boolean) => void
}

const PrefecturesList: React.FC<Props> = ({ prefectures, onChange }) => {
  const [ListVisible, setListVisible] = useState<boolean>(true)
  const [checkedPrefectures, setCheckedPrefectures] = useState<string[]>([])

  return (
    <>
      {checkedPrefectures.length === 0 ? (
        <h3 className={styles.unchecked}>選択してください</h3>
      ) : (
        <div className={styles.checkedList}>
          <h3 className={styles.checked}>選択中:</h3>{' '}
          <p className={styles.checkedPrefectures}>{checkedPrefectures}</p>
        </div>
      )}

      <button className={ListVisible ? styles.toggle : ''} onClick={() => setListVisible(true)}>
        一覧を開く
      </button>
      <div className={ListVisible ? '' : styles.toggle}>
        <button onClick={() => setListVisible(false)}>一覧を閉じる</button>

        <div className={classNames(styles.PrefectureList)}>
          {prefectures.map((prefecture) => (
            <div
              className={classNames(
                styles.prefectureCheckboxes,
                checkedPrefectures.includes(prefecture.prefName + ' ') ? styles.CheckedBoxes : null,
              )}
              key={prefecture.prefName}
            >
              <input
                type='checkbox'
                name='PrefectureName'
                className={styles.prefectureCheck}
                onChange={(event) => {
                  onChange(prefecture.prefName, prefecture.prefCode, event.target.checked)
                  checkedPrefectures.includes(prefecture.prefName + ' ')
                    ? setCheckedPrefectures(
                        checkedPrefectures.filter(
                          (checkedPrefectures) => checkedPrefectures !== prefecture.prefName + ' ',
                        ),
                      )
                    : setCheckedPrefectures([...checkedPrefectures, prefecture.prefName + ' '])
                }}
                id={'checkbox' + prefecture.prefCode}
              />
              <label className={styles.text} htmlFor={'checkbox' + prefecture.prefCode}>
                {prefecture.prefName.length === 3
                  ? '\u00a0 ' + prefecture.prefName + '\u2007'
                  : prefecture.prefName}
              </label>
            </div>
          ))}
        </div>

        <button className={styles.forPhone} onClick={() => setListVisible(false)}>
          一覧を閉じる
        </button>
      </div>
    </>
  )
}

export default PrefecturesList
