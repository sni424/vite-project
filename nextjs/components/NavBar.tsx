"use client";

import Link from "next/link";
import styles from "./NavBar.module.css";
import { usePathname } from "next/navigation";

const NavNar = () => {
    const pathname = usePathname();

    return (
        <>
            <nav className={styles.nav}>
                <Link
                    href="/"
                    className={[
                        styles.textColor,
                        styles.size,
                        pathname === "/" ? `${styles.fontColor}` : "",
                    ].join(" ")}
                >
                    Home
                </Link>

                <Link
                    href="dashBoard"
                    className={[
                        styles.textColor2,
                        styles.margin,
                        pathname === "/dashBoard" ? `${styles.fontColor}` : "",
                    ].join(" ")}
                >
                    DashBoard
                </Link>
                <div>안녕</div>
                <style jsx>{`
                    div {
                        color: gold;
                        margin-left: 2rem;
                    }
                    div:hover {
                        cursor: pointer;
                        color: gray;
                    }
                `}</style>
            </nav>
        </>
    );
};

export default NavNar;
