import "@/styles/globals.scss";
import Head from "next/head";
import { useEffect, useState, createContext } from "react";
import LoginSignUp from "@/components/LoginSignUp/LoginSignUp";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

import { useRouter } from "next/router";

export const GlobalVariables = createContext();

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Scroll to the top when the route changes
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, [router.route]);

  const [ClientData, setClientData] = useState({});
  const [AvatarCollection, setAvatarCollection] = useState([
    "/profile-pic2.gif",
    "/profile-pic3.gif",
    "/profile-pic4.gif",
    "/profile-pic5.gif",
    "/profile-pic6.gif",
    "/profile-pic7.gif",
  ]);

  useEffect(() => {
    if (localStorage.ClientData === undefined || localStorage.ClientData === "")
      localStorage.setItem("ClientData", "{}");

    setClientData(JSON.parse(localStorage.ClientData));
  }, []);

  useEffect(() => {
    // console.log("Updated Client Data", ClientData);
    localStorage.setItem("ClientData", JSON.stringify(ClientData));
  }, [ClientData]);

  return (
    <GlobalVariables.Provider
      value={{
        ClientData: ClientData,
        setClientData: setClientData,
        AvatarCollection,
      }}
    >
      {Object.keys(ClientData).length !== 0 ? (
        <div className={"TheMainWindow"}>
          <Navbar />
          <div className="TheWindow">
            <div className={"LinkBar"}>
              <Link
                href={"/"}
                className={router.route === "/" ? "active-link" : ""}
                style={{ marginTop: 0 }}
              >
                <svg
                  fill="#000000"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 495.398 495.398"
                >
                  <g>
                    <g>
                      <g>
                        <path
                          fill="currentColor"
                          d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
				v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
				c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
				c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"
                        />
                        <path
                          fill="currentColor"
                          d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
				c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
				c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                Home
              </Link>
              {/* <hr /> */}
              <Link
                className={router.route === "/my-profile" ? "active-link" : ""}
                href={"/my-profile"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  id="profile"
                >
                  <g data-name="Layer 2">
                    <circle
                      fill="currentColor"
                      cx="16"
                      cy="6.96"
                      r="6"
                    ></circle>
                    <path
                      fill="currentColor"
                      d="M30.86,26.84a15.07,15.07,0,0,0-4.11-7.47A12.47,12.47,0,0,0,25.13,18,15,15,0,0,0,16,15,15.24,15.24,0,0,0,5.24,19.37a15.07,15.07,0,0,0-4.11,7.47,3.42,3.42,0,0,0,.69,2.88A3.52,3.52,0,0,0,4.58,31H27.42a3.52,3.52,0,0,0,2.75-1.32A3.42,3.42,0,0,0,30.86,26.84Z"
                    ></path>
                  </g>
                </svg>
                My Profile
              </Link>
              {/* <hr /> */}

              <Link
                className={router.route === "/continue" ? "active-link" : ""}
                href={"/continue"}
              >
                <svg
                  class="svg-icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M293.376 645.290667A256.085333 256.085333 0 0 0 753.408 597.333333h89.173333a341.461333 341.461333 0 0 1-610.816 109.568L128 810.666667v-256h256l-90.624 90.624z m437.290667-266.624A256.170667 256.170667 0 0 0 270.506667 426.666667H181.333333a341.546667 341.546667 0 0 1 610.986667-109.653334L896 213.333333v256h-256l90.666667-90.666666z"
                    fill="currentColor"
                  />
                </svg>
                Continue
              </Link>
              {/* <hr /> */}

              <Link
                className={router.route === "/watch-list" ? "active-link" : ""}
                href={"/watch-list"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 68 85"
                >
                  <g>
                    <path
                      fill="currentColor"
                      d="M10.8399048,28.8200684h7.9101563c1.2799072,0,2.3199463-1.0498047,2.3199463-2.3398438v-5.8901367   c0-1.2900391-1.0400391-2.3398438-2.3199463-2.3398438h-7.9101563c-1.2799072,0-2.3199463,1.0498047-2.3199463,2.3398438v5.8901367   C8.5199585,27.7702637,9.5599976,28.8200684,10.8399048,28.8200684z M12.6199341,22.0700684   c0-0.7202148,0.7800293-1.1601563,1.3900146-0.7797852l2.5500488,1.5595703c0.5799561,0.3500977,0.5799561,1.2001953,0,1.5600586   l-2.5500488,1.5600586c-0.6099854,0.3701172-1.3900146-0.0698242-1.3900146-0.7797852V22.0700684z"
                    />
                    <path
                      fill="currentColor"
                      d="M10.8399048,41.9001465h7.9101563c1.2799072,0,2.3199463-1.050293,2.3199463-2.3300781V33.670166   c0-1.2802734-1.0400391-2.3300781-2.3199463-2.3300781h-7.9101563c-1.2799072,0-2.3199463,1.0498047-2.3199463,2.3300781v5.8999023   C8.5199585,40.8498535,9.5599976,41.9001465,10.8399048,41.9001465z M12.6199341,34.880127   c0-0.7099609,0.7800293-1.1499023,1.3900146-0.7802734l2.5500488,1.5600586c0.5799561,0.3603516,0.5799561,1.2001953,0,1.5600586   l-2.5500488,1.5600586c-0.6099854,0.3701172-1.3900146-0.0698242-1.3900146-0.7797852V34.880127z"
                    />
                    <path
                      fill="currentColor"
                      d="M10.8399048,54.9899902h7.9101563c1.2799072,0,2.3199463-1.0400391,2.3199463-2.3300781v-5.8999023   c0-1.2797852-1.0400391-2.3300781-2.3199463-2.3300781h-7.9101563c-1.2799072,0-2.3199463,1.050293-2.3199463,2.3300781v5.8999023   C8.5199585,53.9499512,9.5599976,54.9899902,10.8399048,54.9899902z M12.6199341,47.880127   c0-0.7099609,0.7800293-1.1499023,1.3900146-0.7802734l2.5500488,1.5600586c0.5799561,0.3603516,0.5799561,1.2001953,0,1.5600586   l-2.5500488,1.5600586c-0.6099854,0.3701172-1.3900146-0.0698242-1.3900146-0.7797852V47.880127z"
                    />
                    <path
                      fill="currentColor"
                      d="M26.2400513,21.6799316H52.000061c0.5599365,0,1-0.449707,1-1c0-0.5498047-0.4400635-1-1-1H26.2400513   c-0.5500488,0-1,0.4501953-1,1C25.2400513,21.2302246,25.6900024,21.6799316,26.2400513,21.6799316z"
                    />
                    <path
                      fill="currentColor"
                      d="M26.2400513,26.9802246h14.0799561c0.5599365,0,1-0.4501953,1-1c0-0.550293-0.4400635-1-1-1H26.2400513   c-0.5500488,0-1,0.449707-1,1C25.2400513,26.5300293,25.6900024,26.9802246,26.2400513,26.9802246z"
                    />
                    <path
                      fill="currentColor"
                      d="M26.2400513,34.5202637H52.000061c0.5599365,0,1-0.4501953,1-1c0-0.5600586-0.4400635-1-1-1H26.2400513   c-0.5500488,0-1,0.4399414-1,1C25.2400513,34.0700684,25.6900024,34.5202637,26.2400513,34.5202637z"
                    />
                    <path
                      fill="currentColor"
                      d="M26.2400513,39.8200684h14.0799561c0.5599365,0,1-0.449707,1-1c0-0.5498047-0.4400635-1-1-1H26.2400513   c-0.5500488,0-1,0.4501953-1,1C25.2400513,39.3703613,25.6900024,39.8200684,26.2400513,39.8200684z"
                    />
                    <path
                      fill="currentColor"
                      d="M26.2400513,48.0598145h12.1599121c0.5500488,0,1-0.449707,1-1c0-0.5498047-0.4499512-1-1-1H26.2400513   c-0.5500488,0-1,0.4501953-1,1C25.2400513,47.6101074,25.6900024,48.0598145,26.2400513,48.0598145z"
                    />
                    <path
                      fill="currentColor"
                      d="M26.2400513,53.3601074h7.6599121c0.5500488,0,1-0.4501953,1-1c0-0.550293-0.4499512-1-1-1h-7.6599121   c-0.5500488,0-1,0.449707-1,1C25.2400513,52.9099121,25.6900024,53.3601074,26.2400513,53.3601074z"
                    />
                    <path
                      fill="currentColor"
                      d="M64.0700073,52.4401855l-3.6700439,1.25c-0.0297012-0.1451454,0.2607231-1.980896-1.3599854-3.2299805V8.2302246   c0-3.4399414-2.7999268-6.2402344-6.2399902-6.2402344H7.7200317c-3.4400635,0-6.2399902,2.800293-6.2399902,6.2402344v45.6196289   c0,3.4404297,2.7999268,6.2402344,6.2399902,6.2402344h31.5999756v2.3999023c0,1.9399414,1.5799561,3.5200195,3.5198975,3.5200195   h14.0400391c1.9400635,0,3.5200195-1.5800781,3.5200195-3.5200195v-0.4599609l3.6700439,1.25   c1.1349792,0.4172287,2.4499512-0.4312553,2.4499512-1.75v-7.3398438   C66.5199585,52.8901978,65.231102,52.0250549,64.0700073,52.4401855z M52.500061,8.7902832   c0,1.0195313-0.8300781,1.8398438-1.8400879,1.8398438c-1.0200195,0-1.8399658-0.8203125-1.8399658-1.8398438   c0-1.0200195,0.8199463-1.840332,1.8399658-1.840332C51.6699829,6.9499512,52.500061,7.7702637,52.500061,8.7902832z    M47.1900024,8.7902832c0,1.0195313-0.8200684,1.8398438-1.8400879,1.8398438s-1.8399658-0.8203125-1.8399658-1.8398438   c0-1.0200195,0.8199463-1.840332,1.8399658-1.840332S47.1900024,7.7702637,47.1900024,8.7902832z M41.8799438,8.7902832   c0,1.0195313-0.8199463,1.8398438-1.8399658,1.8398438c-1.0100098,0-1.8299561-0.8203125-1.8299561-1.8398438   c0-1.0200195,0.8199463-1.840332,1.8299561-1.840332C41.0599976,6.9499512,41.8799438,7.7702637,41.8799438,8.7902832z    M21.9299927,9.0002441v0.0595703c0,0.8105469-0.6600342,1.4702148-1.4699707,1.4702148H9.500061   c-0.8100586,0-1.4700928-0.659668-1.4700928-1.4702148V9.0002441c0-0.8100586,0.6600342-1.4702148,1.4700928-1.4702148H20.460022   C21.2699585,7.5300293,21.9299927,8.1901855,21.9299927,9.0002441z M3.4800415,15.5100098H57.039978v34.2202148   c-0.0499268-0.0102539-0.1099854-0.0102539-0.1600342-0.0102539H42.8399048c-1.9399414,0-3.5198975,1.5703125-3.5198975,3.5200195   v4.8500977H7.7200317c-2.3400879,0-4.2399902-1.8999023-4.2399902-4.2402344V15.5100098z M45.9700317,55.1599121   c0-1.2299805,1.3399658-1.9799805,2.3798828-1.3398438l4.3400879,2.6601563   c0.9757843,0.5993881,0.9939003,1.9851036,0.0799561,2.6098633c-0.3038063,0.2033615-4.5201492,2.7810745-4.4200439,2.7197266   c-1.039917,0.6401367-2.3798828-0.1098633-2.3798828-1.3398438C45.9700317,58.5670357,45.9700317,57.072628,45.9700317,55.1599121z   "
                    />
                  </g>
                </svg>
                Watch List
              </Link>
              {/* <hr />   */}
            </div>
            <div className="MainBody">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      ) : (
        <>
          <Head>
            <title>AnimixPlay</title>
            <meta name="description" content="Generated by create next app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <LoginSignUp
            ClientData={ClientData}
            setClientData={setClientData}
            AvatarCollection={AvatarCollection}
          />
        </>
      )}
    </GlobalVariables.Provider>
  );
}
