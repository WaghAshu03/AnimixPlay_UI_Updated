import { useEffect } from "react";
import styles from "./PortraitShowCollection.module.scss";
import Link from "next/link";

const PortraitShowCollection = ({ ShowList, collectionClassName }) => {
  useEffect(() => {
    console.log("ShowList--", ShowList);
  }, []);
  return (
    <div className={`${styles.PortraitShowCollection} ${collectionClassName}`}>
      {ShowList.map((item, index) => {
        return (
          <Link href={`/${item.showId}?ep=1`} className={styles.PortraitShow}>
            <div className={styles.poster}>
              <img src={item.poster} alt={item.showId} />
            </div>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.tags}>
              {item.Tags.map((tag, tagIndex) => {
                return tagIndex === item.Tags.length - 1 ? (
                  <>{tag}</>
                ) : (
                  <>{tag}, </>
                );
              })}
            </div>
            <div className={styles.AvgDuration}>
              <div>Avg Duration</div>
              <div>
                <img src="/star.svg" alt="" />
                {item.avgDuration}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PortraitShowCollection;
