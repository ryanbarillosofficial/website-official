/*
Navigation 

To Use client-side hooks
- https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates#active-nav-links
- https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#linking-to-dynamic-segments
- https://stackoverflow.com/questions/66703243/react-error-warning-each-child-in-a-list-should-have-a-unique-key-prop

To open/close navigation menu on screen size change
- https://medium.com/@a.pirus/how-to-create-a-responsive-navigation-bar-in-next-js-13-e5540789a017
 */
'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from "@/styles/components/navigation.module.scss"


// NavLink Class
class NavLink {
    title: string;
    route: string;

    constructor(
        name: string,
        route: string = name.toLowerCase()
    ) {
        // Set Link ID - requires proper capitalization
        this.title = name;
        if (name.toLowerCase() === "home" || name.toLowerCase() === "ryan barillos") {

            // Set Route
            this.route = "/";
        }
        else {
            this.route = `/${route}`;
        }
    }
}

// NavLink Instances
const lsNav: NavLink[] = [
    new NavLink("About Me", "about"),
    new NavLink("Projects"),
    new NavLink("Music"),
    new NavLink("Contact"),
];

const Navigation = () => {
    // NavLink states
    const [menuShow, set_menuShow] = useState(false);

    /*
    Keep watch on window width & Close Navigation Menu when screen size is large
    - https://stackoverflow.com/a/69968853
    */
    useEffect(() => {
        window.addEventListener('resize', () => {
            const sizeSmall = 800;
            if (window.innerWidth >= sizeSmall) {
                set_menuShow(false);
            }

        })
    }, [])


    const pathname = usePathname()
    return (
        <>
            {/* Navigation - View Horizontal */}
            <header className={`${styles.nav} ${styles.horizontal}`}>
                {/* Page Brand (in this name, First and Last Names) */}
                <div className={styles.nav_brand}>
                    <Link href="/" onClick={() => set_menuShow(false)}>Ryan Barillos</Link>
                </div>

                {/* Navigation Links */}
                <nav className={styles.nav_list} id={styles.horizontal}>
                    {lsNav.map((link) => {
                        // Check if page is active
                        const isActive = pathname.startsWith(link.route)

                        // Display all links
                        return (
                            <Link
                                key={link.title}
                                href={link.route}
                                className={styles.nav_btn}
                                id={isActive ? styles.active : ""}
                            >
                                {link.title}
                            </Link>
                        )
                    })}
                </nav>

                {/* Navigation Button - Only visible on small screens */}
                <div className={styles.nav_menu} onClick={() => set_menuShow(!menuShow)} id={menuShow ? styles.close : styles.open} />
            </header >
            {/* Navigation - View Vertical */}
            {menuShow && (
                <header className={`${styles.nav} ${styles.vertical}`}>
                    {/* Navigation Links */}
                    <nav className={styles.nav_list} id={styles.vertical}>
                        {lsNav.map((link) => {
                            // Check if page is active
                            const isActive = pathname.startsWith(link.route)

                            // Display all links
                            return (
                                <Link
                                    key={link.title}
                                    href={link.route}
                                    className={styles.nav_btn}
                                    id={isActive ? styles.active : ""}
                                    onClick={() => set_menuShow(!menuShow)}
                                >
                                    {link.title}
                                </Link>
                            )
                        })}
                    </nav>
                </header>)}

        </>
    )
}

export default Navigation