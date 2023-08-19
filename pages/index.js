import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ShowCollection from "@/components/ShowCollection/ShowCollection";
import PortraitShowCollection from "@/components/PortraitShowCollection/PortraitShowCollection";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalVariables } from "./_app";
import { useContext } from "react";

const removeNullValFromArr = (arr) => {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element !== null || element === undefined) {
      result.push(element);
    }
  }
  return result;
};

const removeValue = (arr, value) => {
  const filteredArray = arr.filter((item) => {
    return item !== value;
  });
  return filteredArray;
};

export default function Home() {
  const { ClientData, setClientData, AvatarCollection } =
    useContext(GlobalVariables);
  const [BannerData, setBannerData] = useState({
    _id: "64dfcc133130504c889319d2",
    showId: "attack-on-titan",
    landscapePoster:
      "https://abcd-3ea16.web.app/binary-data/poster%20landscape/Attack-on-Titan-Poster-Landscape.jpg",
    poster:
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/attack_on_titan.jpg",
    title: "Attack on Titan",
    description:
      "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations. After witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Based on Hajime Isayama's award-winning manga, Shingeki no Kyojin follows Eren, along with his adopted sister Mikasa Ackerman and his childhood friend Armin Arlert, as they join the brutal war against the titans and race to discover a way of defeating them before the last walls are breached. [Written by MAL Rewrite] ",
    Languages: ["Japanese"],
    aired: "Apr 7, 2013 to Sep 29, 2013",
    avgDuration: "24m",
    Tags: ["Adventure", "comedy", "Mystery", "Drama"],
    studios: ["Wit Studio"],
    Producers: [
      "Production I.G",
      "Dentsu",
      "Mainichi Broadcasting System",
      "Pony Canyon",
      "Kodansha",
      "Mad Box",
      "Pony Canyon Enterprise",
      "Wit Studio",
      " Funimation",
    ],
    episodes: [
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
      "https://abcd-3ea16.web.app/binary-data/poster%20portrait/Attack On Titan Season 1 Trailer - English Dubbed.mp4",
    ],
    createdAt: "2023-08-18T19:52:51.323Z",
    updatedAt: "2023-08-18T19:52:51.323Z",
    __v: 0,
  });
  const [SuggestionsCollection, setSuggestionsCollection] = useState([]);
  const [RecentlyVisited, setRecentlyVisited] = useState([]);
  const [WatchList, setWatchList] = useState([]);
  const [TrendingCollection, setTrendingCollection] = useState([]);
  const [WindowSize, setWindowSize] = useState(0);

  useEffect(() => {
    axios
      .get("/api/get-shows")
      .then(function (response) {
        setSuggestionsCollection(response.data.show);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});

    // Getting Recently Visited
    axios
      .post("/api/get-specific-shows", [
        "my-star",
        "drstone",
        "my-hero-academia-2",
        "attack-on-titan",
        "one-piece",
        "demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc",
      ])
      .then(function (response) {
        setTrendingCollection(removeNullValFromArr(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});

    // Getting User Data
    axios
      .post("/api/get-user", {
        username: ClientData.username,
        password: ClientData.password,
      })
      .then(function (response) {
        setClientData(response.data[0]);

        // Getting Recently Visited
        axios
          .post("/api/get-specific-shows", ClientData.RecentlyVisited)
          .then(function (response) {
            setRecentlyVisited(removeNullValFromArr(response.data));
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {});

        // Getting Recently Visited
        axios
          .post("/api/get-specific-shows", ClientData.WatchList)
          .then(function (response) {
            setWatchList(removeNullValFromArr(response.data));
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {});
      })
      .catch(function (error) {
        setClientData({});
        console.log(error);
        alert("Error Authentication, Please Login Again");
      })
      .finally(function () {});
  }, []);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWindowSize(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    console.log({
      ClientData,
      username: ClientData.username,
      password: ClientData.password,
    });
  }, [ClientData]);

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
              WatchList: !ClientData.WatchList.includes(showId)
                ? [...new Set([showId, ...ClientData.WatchList])]
                : removeValue(ClientData.WatchList, showId),
            },
          })
          .then(function (response) {
            if (!ClientData.WatchList.includes(showId)) {
              setClientData({ ...ClientData, ...response.data.New[0] });
            } else {
              setClientData({
                ...ClientData,
                WatchList: removeValue(ClientData.WatchList, showId),
              });
            }
            axios
              .post("/api/get-specific-shows", response.data.New[0].WatchList)
              .then(function (response) {
                setWatchList(removeNullValFromArr(response.data));
              })
              .catch(function (error) {
                console.log(error);
              });
            // console.log("after+-", ClientData.WatchList);
            // console.log("ddt", response.data.New[0].WatchList);
          })
          .catch(function (error) {
            setClientData({});
            console.log(error);
            alert("Error update, Please Login Again");
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

  return (
    <>
      <Head>
        <title>AnimixPlay</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar style={{}} /> */}
      <main className={styles.main}>
        {/* Banner */}
        <div className={styles.Banner}>
          <div
            className={styles.BannerBg}
            style={{ backgroundImage: `url(${BannerData.landscapePoster})` }}
          >
            &nbsp;
          </div>
          <div className={styles.BannerFront}>
            <div className={styles.BannerDetails}>
              <div>
                <h1>
                  <Link href={`/${BannerData.showId}?ep=1`}>
                    {BannerData.title}
                  </Link>
                </h1>
                <p>{BannerData.description}</p>
                <div>
                  <Link
                    href={`/${BannerData.showId}?ep=1`}
                    className={styles.BannerWatchNowButton}
                  >
                    Watch Now
                  </Link>
                  <button
                    className={styles.BannerAddToWatchListButton}
                    onClick={() => AddToList(BannerData.showId)}
                  >
                    {ClientData.WatchList.includes(BannerData.showId) ? (
                      <>- Remove from Watch List</>
                    ) : (
                      <>+ Add to Watch List</>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.BannerPoster}>
              <Link href={`/${BannerData.showId}?ep=1`}>
                <img src={"/banner-poster.jpg"} alt="" />
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0rem 2.25rem 0rem 2.25rem",
          }}
        >
          <hr
            style={{
              width: "100%",
              borderTop: 0,
              borderRight: 0,
              borderLeft: 0,
              borderBottom: "1px solid #2a2b2c",
            }}
          />
        </div>

        {/* Trending */}
        <div className={styles.Trending}>
          <h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 125"
              enable-background="new 0 0 100 100"
            >
              <g>
                <rect
                  x="18.335"
                  y="65.82"
                  fill="#07bf67"
                  width="12.98"
                  height="20.21"
                />
              </g>
              <g>
                <rect
                  x="35.185"
                  y="58.57"
                  fill="#07bf67"
                  width="12.99"
                  height="27.46"
                />
              </g>
              <g>
                <rect
                  x="51.655"
                  y="47.9"
                  fill="#07bf67"
                  width="12.979"
                  height="38.13"
                />
              </g>
              <g>
                <rect
                  x="68.506"
                  y="36.22"
                  fill="#07bf67"
                  width="12.989"
                  height="49.811"
                />
              </g>
              <path
                fill="#07bf67"
                d="M77.506,16.22v8.66c0,1.38-1.121,2.5-2.5,2.5c-1.381,0-2.5-1.12-2.5-2.5v-2  c-24.311,26.58-51.21,35.34-52.42,35.72c-0.25,0.08-0.5,0.12-0.75,0.12c-1.06,0-2.05-0.68-2.39-1.75c-0.41-1.31,0.31-2.72,1.63-3.14  c0.29-0.09,27.33-8.93,50.95-35.11h-3.189c-1.381,0-2.5-1.12-2.5-2.5s1.119-2.5,2.5-2.5h8.67c0.119,0,0.229,0.01,0.35,0.03  c0.05,0,0.1,0.01,0.14,0.02C76.646,14,77.506,15.01,77.506,16.22z"
              />
            </svg>
            Trending
          </h1>
          {WindowSize < 700 ? (
            <PortraitShowCollection
              ShowList={TrendingCollection}
              collectionClassName={styles.TrendingCollectionPortrait}
            />
          ) : (
            <ShowCollection
              ShowList={TrendingCollection}
              collectionClassName={styles.TrendingCollectionLandscape}
            />
          )}
        </div>

        {/* User Section */}
        <div className={styles.UserSection}>
          <h1>
            <svg
              class="svg-icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M293.376 645.290667A256.085333 256.085333 0 0 0 753.408 597.333333h89.173333a341.461333 341.461333 0 0 1-610.816 109.568L128 810.666667v-256h256l-90.624 90.624z m437.290667-266.624A256.170667 256.170667 0 0 0 270.506667 426.666667H181.333333a341.546667 341.546667 0 0 1 610.986667-109.653334L896 213.333333v256h-256l90.666667-90.666666z"
                fill="#07bf67"
              />
            </svg>
            Recently Visited
          </h1>

          <ShowCollection ShowList={RecentlyVisited} />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0rem 2.25rem 0rem 2.25rem",
            }}
          >
            <hr
              style={{
                width: "100%",
                borderTop: 0,
                borderRight: 0,
                borderLeft: 0,
                borderBottom: "1px solid #2a2b2c",
                margin: "3rem 0 1rem 0",
              }}
            />
          </div>

          <h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 68 85"
            >
              <g>
                <path
                  fill="#07bf67"
                  d="M10.8399048,28.8200684h7.9101563c1.2799072,0,2.3199463-1.0498047,2.3199463-2.3398438v-5.8901367   c0-1.2900391-1.0400391-2.3398438-2.3199463-2.3398438h-7.9101563c-1.2799072,0-2.3199463,1.0498047-2.3199463,2.3398438v5.8901367   C8.5199585,27.7702637,9.5599976,28.8200684,10.8399048,28.8200684z M12.6199341,22.0700684   c0-0.7202148,0.7800293-1.1601563,1.3900146-0.7797852l2.5500488,1.5595703c0.5799561,0.3500977,0.5799561,1.2001953,0,1.5600586   l-2.5500488,1.5600586c-0.6099854,0.3701172-1.3900146-0.0698242-1.3900146-0.7797852V22.0700684z"
                />
                <path
                  fill="#07bf67"
                  d="M10.8399048,41.9001465h7.9101563c1.2799072,0,2.3199463-1.050293,2.3199463-2.3300781V33.670166   c0-1.2802734-1.0400391-2.3300781-2.3199463-2.3300781h-7.9101563c-1.2799072,0-2.3199463,1.0498047-2.3199463,2.3300781v5.8999023   C8.5199585,40.8498535,9.5599976,41.9001465,10.8399048,41.9001465z M12.6199341,34.880127   c0-0.7099609,0.7800293-1.1499023,1.3900146-0.7802734l2.5500488,1.5600586c0.5799561,0.3603516,0.5799561,1.2001953,0,1.5600586   l-2.5500488,1.5600586c-0.6099854,0.3701172-1.3900146-0.0698242-1.3900146-0.7797852V34.880127z"
                />
                <path
                  fill="#07bf67"
                  d="M10.8399048,54.9899902h7.9101563c1.2799072,0,2.3199463-1.0400391,2.3199463-2.3300781v-5.8999023   c0-1.2797852-1.0400391-2.3300781-2.3199463-2.3300781h-7.9101563c-1.2799072,0-2.3199463,1.050293-2.3199463,2.3300781v5.8999023   C8.5199585,53.9499512,9.5599976,54.9899902,10.8399048,54.9899902z M12.6199341,47.880127   c0-0.7099609,0.7800293-1.1499023,1.3900146-0.7802734l2.5500488,1.5600586c0.5799561,0.3603516,0.5799561,1.2001953,0,1.5600586   l-2.5500488,1.5600586c-0.6099854,0.3701172-1.3900146-0.0698242-1.3900146-0.7797852V47.880127z"
                />
                <path
                  fill="#07bf67"
                  d="M26.2400513,21.6799316H52.000061c0.5599365,0,1-0.449707,1-1c0-0.5498047-0.4400635-1-1-1H26.2400513   c-0.5500488,0-1,0.4501953-1,1C25.2400513,21.2302246,25.6900024,21.6799316,26.2400513,21.6799316z"
                />
                <path
                  fill="#07bf67"
                  d="M26.2400513,26.9802246h14.0799561c0.5599365,0,1-0.4501953,1-1c0-0.550293-0.4400635-1-1-1H26.2400513   c-0.5500488,0-1,0.449707-1,1C25.2400513,26.5300293,25.6900024,26.9802246,26.2400513,26.9802246z"
                />
                <path
                  fill="#07bf67"
                  d="M26.2400513,34.5202637H52.000061c0.5599365,0,1-0.4501953,1-1c0-0.5600586-0.4400635-1-1-1H26.2400513   c-0.5500488,0-1,0.4399414-1,1C25.2400513,34.0700684,25.6900024,34.5202637,26.2400513,34.5202637z"
                />
                <path
                  fill="#07bf67"
                  d="M26.2400513,39.8200684h14.0799561c0.5599365,0,1-0.449707,1-1c0-0.5498047-0.4400635-1-1-1H26.2400513   c-0.5500488,0-1,0.4501953-1,1C25.2400513,39.3703613,25.6900024,39.8200684,26.2400513,39.8200684z"
                />
                <path
                  fill="#07bf67"
                  d="M26.2400513,48.0598145h12.1599121c0.5500488,0,1-0.449707,1-1c0-0.5498047-0.4499512-1-1-1H26.2400513   c-0.5500488,0-1,0.4501953-1,1C25.2400513,47.6101074,25.6900024,48.0598145,26.2400513,48.0598145z"
                />
                <path
                  fill="#07bf67"
                  d="M26.2400513,53.3601074h7.6599121c0.5500488,0,1-0.4501953,1-1c0-0.550293-0.4499512-1-1-1h-7.6599121   c-0.5500488,0-1,0.449707-1,1C25.2400513,52.9099121,25.6900024,53.3601074,26.2400513,53.3601074z"
                />
                <path
                  fill="#07bf67"
                  d="M64.0700073,52.4401855l-3.6700439,1.25c-0.0297012-0.1451454,0.2607231-1.980896-1.3599854-3.2299805V8.2302246   c0-3.4399414-2.7999268-6.2402344-6.2399902-6.2402344H7.7200317c-3.4400635,0-6.2399902,2.800293-6.2399902,6.2402344v45.6196289   c0,3.4404297,2.7999268,6.2402344,6.2399902,6.2402344h31.5999756v2.3999023c0,1.9399414,1.5799561,3.5200195,3.5198975,3.5200195   h14.0400391c1.9400635,0,3.5200195-1.5800781,3.5200195-3.5200195v-0.4599609l3.6700439,1.25   c1.1349792,0.4172287,2.4499512-0.4312553,2.4499512-1.75v-7.3398438   C66.5199585,52.8901978,65.231102,52.0250549,64.0700073,52.4401855z M52.500061,8.7902832   c0,1.0195313-0.8300781,1.8398438-1.8400879,1.8398438c-1.0200195,0-1.8399658-0.8203125-1.8399658-1.8398438   c0-1.0200195,0.8199463-1.840332,1.8399658-1.840332C51.6699829,6.9499512,52.500061,7.7702637,52.500061,8.7902832z    M47.1900024,8.7902832c0,1.0195313-0.8200684,1.8398438-1.8400879,1.8398438s-1.8399658-0.8203125-1.8399658-1.8398438   c0-1.0200195,0.8199463-1.840332,1.8399658-1.840332S47.1900024,7.7702637,47.1900024,8.7902832z M41.8799438,8.7902832   c0,1.0195313-0.8199463,1.8398438-1.8399658,1.8398438c-1.0100098,0-1.8299561-0.8203125-1.8299561-1.8398438   c0-1.0200195,0.8199463-1.840332,1.8299561-1.840332C41.0599976,6.9499512,41.8799438,7.7702637,41.8799438,8.7902832z    M21.9299927,9.0002441v0.0595703c0,0.8105469-0.6600342,1.4702148-1.4699707,1.4702148H9.500061   c-0.8100586,0-1.4700928-0.659668-1.4700928-1.4702148V9.0002441c0-0.8100586,0.6600342-1.4702148,1.4700928-1.4702148H20.460022   C21.2699585,7.5300293,21.9299927,8.1901855,21.9299927,9.0002441z M3.4800415,15.5100098H57.039978v34.2202148   c-0.0499268-0.0102539-0.1099854-0.0102539-0.1600342-0.0102539H42.8399048c-1.9399414,0-3.5198975,1.5703125-3.5198975,3.5200195   v4.8500977H7.7200317c-2.3400879,0-4.2399902-1.8999023-4.2399902-4.2402344V15.5100098z M45.9700317,55.1599121   c0-1.2299805,1.3399658-1.9799805,2.3798828-1.3398438l4.3400879,2.6601563   c0.9757843,0.5993881,0.9939003,1.9851036,0.0799561,2.6098633c-0.3038063,0.2033615-4.5201492,2.7810745-4.4200439,2.7197266   c-1.039917,0.6401367-2.3798828-0.1098633-2.3798828-1.3398438C45.9700317,58.5670357,45.9700317,57.072628,45.9700317,55.1599121z   "
                />
              </g>
            </svg>
            Watch List
          </h1>
          <ShowCollection ShowList={WatchList} />
          <br />
        </div>

        {/* Suggestions */}
        <div className={styles.Suggestions}>
          <h1>
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4 7V19H19V21H4C2 21 2 19 2 19V7H4M21.3 3H7.7C6.76 3 6 3.7 6 4.55V15.45C6 16.31 6.76 17 7.7 17H21.3C22.24 17 23 16.31 23 15.45V4.55C23 3.7 22.24 3 21.3 3M8 5H13V11H8V5M21 15H8V13H21V15M21 11H15V9H21V11M21 7H15V5H21V7Z"
              ></path>
            </svg>
            Suggestions
          </h1>

          <ShowCollection
            ShowList={SuggestionsCollection}
            collectionClassName={styles.SuggestionsCollection}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
