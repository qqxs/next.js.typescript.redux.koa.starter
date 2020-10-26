import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <nav>
      <Link href="/">
        <a href="/">Index</a>
      </Link>
      <Link href="/ssg">
        <a href="/ssg">SSG</a>
      </Link>
      <Link href="/ssr">
        <a href="/ssr">SSR</a>
      </Link>
      <style jsx>
        {`
          a {
            margin-right: 25px;
          }
        `}
      </style>
    </nav>
  );
};

export default Nav;
