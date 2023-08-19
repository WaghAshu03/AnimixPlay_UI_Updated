import styles from "./Tabs.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Tabs = ({ Name }) => {
  const router = useRouter();
  const Links = [
    {
      name: "Profile",
      link: "/my-profile",
    },
    {
      name: "Watch List",
      link: "/watch-list",
    },
    {
      name: "Recently Visited",
      link: "/recently-visited",
    },
  ];

  return (
    <div className={styles.Tabs}>
      <div>
        <h1>Hi👋, {Name}</h1>
        <div className={styles.Switches}>
          {Links.map((item, index) => {
            return (
              <Link
                href={item.link}
                className={
                  router.pathname === item.link ? styles.ActiveLink : ""
                }
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
