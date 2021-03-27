import Link from 'next/link';

const RootPage = () => {
  return (
    <>
      <h1>Hello!</h1>
      <ul>
        <li>
          <Link href="/about">
            <a>
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/authors/a/articles/b">
            <a>
              slug
            </a>
          </Link>
        </li>
        <li>
          <Link href="/ssg">
            <a>
              ssg
            </a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default RootPage;
