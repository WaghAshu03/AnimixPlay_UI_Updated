import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Show.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { GlobalVariables } from "../_app";
import { useContext } from "react";
import ShowCollection from "@/components/ShowCollection/ShowCollection";

const removeValue = (arr, value) => {
  const filteredArray = arr.filter((item) => {
    return item !== value;
  });
  return filteredArray;
};

const show = () => {
  const [SuggestionsCollection, setSuggestionsCollection] = useState([]);
  const [VideoUrl, setVideoUrl] = useState("");
  const [EpisodeList, setEpisodeList] = useState([]);
  const [PageNotFound, setPageNotFound] = useState(false);
  const { ClientData, setClientData, AvatarCollection } =
    useContext(GlobalVariables);

  const [ShowData, setShowData] = useState({
    showId: "",
    poster: "",
    title: "",
    description: "",
    Languages: [],
    aired: "",
    avgDuration: "",
    MAL_score: "",
    Tags: [],
    studios: [],
    Producers: [],
    episodes: [],
  });
  const router = useRouter();

  useEffect(() => {
    const showId = router.query.show;
    const epNo = router.query.ep;

    if (showId !== undefined) {
      axios
        .post("/api/update-user", {
          username: ClientData.username,
          password: ClientData.password,
          update: {
            RecentlyVisited: [
              ...new Set([router.query.show, ...ClientData.RecentlyVisited]),
            ],
          },
        })
        .then(function (response) {
          setClientData({ ...ClientData, ...response.data.New[0] });
          setPageNotFound(false);
        })
        .catch(function (error) {
          setClientData({});
          console.log(error);
          alert("Error Authentication, Please Login Again");
        });

      axios
        .post("/api/get-show", {
          showId: showId,
        })
        .then(function (response) {
          console.log(response.data.show[0]);
          if (response.data.show[0] === undefined) setPageNotFound(true);
          if (epNo > response.data.show[0].episodes.length || epNo < 1)
            setPageNotFound(true);
          setShowData(response.data.show[0]);
          let a = response.data.show[0].episodes[epNo - 1];
          setVideoUrl(
            a
              .replace(
                "https://abcd-3ea16.web.app/binary-data/poster%20portrait/",
                "https://wt-data-660fe.web.app/"
              )
              .replace(" ", "%20")
          );
          setEpisodeList(response.data.show[0].episodes);
          setPageNotFound(false);
        })
        .catch(function (error) {
          setPageNotFound(true);
          console.log("abcerr", error);
        });
    }

    console.log({ showId, epNo }, router);
  }, [router.query]);

  const AddToList = (showId) => {
    // Getting Updated user data
    axios
      .post("/api/get-user", {
        username: ClientData.username,
        password: ClientData.password,
      })
      .then(function (response) {
        setClientData(response.data[0]);
        console.log(ClientData);

        // Getting Updated user data
        axios
          .post("/api/update-user", {
            username: ClientData.username,
            password: ClientData.password,
            update: {
              WatchList: !ClientData.WatchList.includes(router.query.show)
                ? [...new Set([router.query.show, ...ClientData.WatchList])]
                : removeValue(ClientData.WatchList, router.query.show),
            },
          })
          .then(function (response) {
            if (!ClientData.WatchList.includes(router.query.show)) {
              setClientData({ ...ClientData, ...response.data.New[0] });
            } else {
              setClientData({
                ...ClientData,
                WatchList: removeValue(ClientData.WatchList, router.query.show),
              });
            }
          })
          .catch(function (error) {
            setClientData({});
            console.log(error);
            alert("Error Authentication, Please Login Again");
          })
          .finally(function () {});
      })
      .catch(function (error) {
        setClientData({});
        console.log(error);
        alert("Error Authentication, Please Login Again");
      })
      .finally(function () {});
  };

  useEffect(() => {
    axios
      .get("/api/get-shows")
      .then(function (response) {
        console.log(response.data.show);
        setSuggestionsCollection(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  useEffect(() => {
    console.log({ ShowData });
  }, [ShowData]);

  useEffect(() => {
    console.log({ VideoUrl });
  }, [VideoUrl]);

  return PageNotFound ? (
    <>PageNotFound</>
  ) : (
    <>
      <main className={styles.main}>
        <div className={styles.Banner}>
          <div
            style={{
              backgroundImage: `url(${ShowData.landscapePoster})`,
            }}
          ></div>
          <div>
            <div>
              <img src={ShowData.poster} alt="" />
            </div>
            <div>
              <h1>{ShowData.title}</h1>
              <p>{ShowData.description}</p>
            </div>
          </div>
        </div>
        <div className={styles.PlayerAndRecords}>
          <div>
            <button
              className={styles.AddToWatchListButton}
              onClick={() => AddToList(ShowData.showId)}
            >
              {ClientData.WatchList.includes(ShowData.showId) ? (
                <>- Remove from Watch List</>
              ) : (
                <>+ Add to Watch List</>
              )}
            </button>
            <div>
              <div style={{ marginBottom: "4px" }}>Tags</div>
              <div
                style={{
                  color: "gray",
                  fontSize: "0.9rem",
                }}
              >
                {ShowData.Tags.map((item, index) => {
                  return ShowData.Tags.length - 1 === index ? (
                    <>{item}</>
                  ) : (
                    <>{item}, </>
                  );
                })}
              </div>
            </div>
            <div>
              <div style={{ marginBottom: "4px" }}>Studios</div>
              <div
                style={{
                  color: "gray",
                  fontSize: "0.9rem",
                }}
              >
                {ShowData.studios.map((item, index) => {
                  return ShowData.studios.length - 1 === index ? (
                    <>{item}</>
                  ) : (
                    <>{item}, </>
                  );
                })}
              </div>
            </div>
            <div>
              <div style={{ marginBottom: "4px" }}>Producers</div>
              <div
                style={{
                  color: "gray",
                  fontSize: "0.9rem",
                }}
              >
                {ShowData.Producers.map((item, index) => {
                  return ShowData.Producers.length - 1 === index ? (
                    <>{item}</>
                  ) : (
                    <>{item}, </>
                  );
                })}
              </div>
            </div>

            <div>
              <div style={{ marginBottom: "4px" }}>Avg Duration</div>
              <div
                style={{
                  color: "gray",
                  fontSize: "0.9rem",
                }}
              >
                {ShowData.avgDuration}
              </div>
            </div>
          </div>

          <div>
            {VideoUrl !== "" && (
              <video
                key={`${VideoUrl}${Math.random()}`}
                autoPlay
                muted
                loop
                controls
              >
                <source src={VideoUrl} type="video/mp4" />
              </video>
            )}
            <h2>Episodes</h2>
            <div>
              {ShowData.episodes.map((item, index) => {
                return (
                  <Link
                    href={`/${ShowData.showId}?ep=${index + 1}`}
                    className={
                      router.query.ep === `${index + 1}`
                        ? styles.activeEpisode
                        : ""
                    }
                  >
                    {index + 1}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <br />
      <br />
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "1.8rem",
          marginBottom: "1.6rem",
          marginLeft: "1.1rem",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          style={{
            color: "#07bf67",
            width: "30px",
            aspectRatio: "1/1",
            objectFit: "contain",
            marginRight: "0.7rem",
          }}
        >
          <path
            fill="currentColor"
            d="M4 7V19H19V21H4C2 21 2 19 2 19V7H4M21.3 3H7.7C6.76 3 6 3.7 6 4.55V15.45C6 16.31 6.76 17 7.7 17H21.3C22.24 17 23 16.31 23 15.45V4.55C23 3.7 22.24 3 21.3 3M8 5H13V11H8V5M21 15H8V13H21V15M21 11H15V9H21V11M21 7H15V5H21V7Z"
          ></path>
        </svg>
        Suggestions
      </h1>
      <ShowCollection
        ShowList={SuggestionsCollection}
        CrossButtonStatus={false}
        CrossButtonFunction={() => {}}
        maxWidth={"92vw"}
      />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default show;
