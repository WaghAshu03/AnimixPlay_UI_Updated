import styles from "./Navbar.module.scss";
import Link from "next/link";
import { GlobalVariables } from "@/pages/_app";
import { useContext, useEffect, useRef, useState } from "react";

const Navbar = (props) => {
  const { ClientData, setClientData, AvatarCollection } =
    useContext(GlobalVariables);

  const [DropDownEnabled, setDropDownEnabled] = useState(false);
  const targetElementRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        targetElementRef.current &&
        !targetElementRef.current.contains(event.target)
      ) {
        setDropDownEnabled(false);
      }
    };

    // Attach a click event listener to the document
    document.addEventListener("click", handleClickOutside);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.NavbarContainer}>
      <div className={styles.Navbar} style={props.style}>
        <Link href={"/"} className={styles.Logo}>
          AnimixPlay
        </Link>
        <div className={styles.SearchBox}>
          <div>
            <img src="/search-icon.png" alt="" />
            <input type="text" name="" id="" placeholder="Search" />
            <button>Filter</button>
          </div>
        </div>

        <div
          className={styles.UserProfileDropdownPic}
          id={styles.UserProfileDropdownPic}
          ref={targetElementRef}
        >
          <img
            src={AvatarCollection[0]}
            alt=""
            onClick={() => setDropDownEnabled((prevVal) => !prevVal)}
          />

          {DropDownEnabled && (
            <div className={styles.DropDown}>
              <Link href={"/my-profile"}>
                <img
                  src="/profile-icon.png"
                  alt=""
                  style={{
                    width: "1.9rem",
                    transform: "translateX(-5px)",
                    marginRight: "2px",
                  }}
                />
                My Profile
              </Link>

              <button
                href={"/"}
                onClick={() => {
                  setDropDownEnabled(false);
                  setClientData({});
                }}
              >
                <img
                  src="/logout.png"
                  alt=""
                  style={{
                    width: "1rem",
                    marginLeft: "0.25rem",
                  }}
                />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={styles.SearchBoxResponsive}>
        <div>
          <input type="text" placeholder="Search" />
          <button>Filter</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
