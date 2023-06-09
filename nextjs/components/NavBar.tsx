"use client";

import Link from "next/link";
import styles from "./NavBar.module.css";

const NavNar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <Link
                    href="/"
                    className={`${styles.textColor} ${styles.size}`}
                    legacyBehavior
                >
                    Home
                </Link>

                <Link
                    href="dashBoard"
                    className={[styles.textColor2, styles.margin].join(" ")}
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
