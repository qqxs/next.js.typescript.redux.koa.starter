import React from "react";
import Link from "next/link";
import Head from "next/head";
import cls from "classnames";
import styles from "./Layout.module.scss";
import Logo from "@components/Logo";

interface ILayoutProps {
  children: JSX.Element | JSX.Element[] | Element | Element[]; // 这个要注意
  title?: string;
  keywords?: string;
  description?: string;
  className?: string;
  headerClassName?: string;
  footerClaassName?: string;
}

interface INavItem {
  name: string;
  href: string;
}

const navList: INavItem[] = [
  {
    name: "Home",
    href: "/home"
  },
  {
    name: "Icon",
    href: "/icon"
  },
  {
    name: "Todolist",
    href: "/todolist"
  },
  {
    name: "Redux",
    href: "/redux"
  }
];

/**
 * 公共布局组件
 * @param {ILayoutProps} props
 */
const Layout: React.FC<ILayoutProps> = ({
  title,
  children,
  keywords,
  description,
  className,
  headerClassName,
  footerClaassName
}) => {
  const classNames = cls(styles.main, className);
  const headerClassNames = cls(styles.header, headerClassName);
  const footerClassNames = cls(styles.footer, footerClaassName);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="shortcut icon" href="/static/favicon/wikipedia.ico"></link>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:site_name"
          content="NEXT.js Typescript Koa Redux"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          property="og:description"
          content={description || "Next.js Typescript Koa Redux"}
        ></meta>
        <meta
          name="keywords"
          content={keywords || "Next.js Typescript Koa Redux"}
        ></meta>
        <meta
          name="description"
          content={description || "Next.js Typescript Koa Redux"}
        ></meta>
      </Head>
      <header className={headerClassNames}>
        <Link href="/">
          <a style={{ transform: "scale(.6)" }}>
            <Logo fill="#FFF" />
          </a>
        </Link>
        <nav>
          <ul className={styles.list}>
            {navList.map((nav: INavItem) => (
              <li key={nav.name} className={styles.listItem}>
                <Link href={nav.href}>{nav.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className={classNames}>{children}</main>
      <footer className={footerClassNames}>
        <div>
          <a href="https://github.com/freeshineit" target="_black">
            @ShineShao
          </a>
          2020
        </div>
      </footer>
    </>
  );
};

export default React.memo(Layout);
