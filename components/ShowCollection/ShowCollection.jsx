import { useState } from "react";
import styles from "./ShowCollection.module.scss";
import Link from "next/link";

const removeEmptyVal = (lst) => {
  const temp = [];
  for (let i = 0; i < lst.length; i++) {
    if (lst[i] !== "") temp.push(lst[i]);
  }
  return temp;
};

const ShowCollection = ({
  ShowList,
  collectionClassName,
  CrossButtonStatus = false,
  CrossButtonFunction = () => {},
}) => {
  const [LoadLimit, setLoadLimit] = useState(8);

  return removeEmptyVal(ShowList).length !== 0 ? (
    <>
      <div className={styles.ShowCollection + " " + collectionClassName}>
        {!Array.isArray(ShowList) ? (
          <></>
        ) : (
          ShowList.map((item, index) => {
            return index + 1 <= LoadLimit ? (
              <div className={styles.LandscapeShowDiv}>
                <Link
                  key={`Landscape-show-${index}`}
                  href={`/${item.showId}?ep=1`}
                  className={styles.LandscapeShow}
                >
                  <div className={styles.LandscapeShowPoster}>
                    <img src={item.landscapePoster} alt={item.title} />

                    <div>
                      <img src="/play-filled.png" alt="" />
                    </div>
                  </div>

                  <div className={styles.LandscapeShowTitle}>{item.title}</div>

                  <div className={styles.LandscapeShowTags}>
                    {item.Tags.map((tag, tagIndex) => {
                      return tagIndex === item.Tags.length - 1 ? (
                        <>{tag}</>
                      ) : (
                        <>{tag}, </>
                      );
                    })}
                  </div>
                  <div className={styles.LandscapeShowDuration}>
                    <div>Avg Duration</div>
                    <div>
                      <img src="/star.svg" alt="" />
                      {item.avgDuration}
                    </div>
                  </div>
                </Link>

                {CrossButtonStatus && (
                  <button onClick={() => CrossButtonFunction(item.showId)}>
                    Remove
                  </button>
                )}
              </div>
            ) : (
              <></>
            );
          })
        )}
      </div>
      {LoadLimit < ShowList.length && (
        <div className={styles.LoadLimitContainer}>
          <button
            onClick={() => {
              setLoadLimit((prevVal) => prevVal + 8);
            }}
          >
            Load More
          </button>
        </div>
      )}
      <br />
      <br />
    </>
  ) : (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.9rem",
      }}
    >
      No Result Found
    </div>
  );
};

export default ShowCollection;
