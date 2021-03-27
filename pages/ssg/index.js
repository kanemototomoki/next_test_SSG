import Link from 'next/link';
import { useRouter } from 'next/router';

const SSGPage = (props) => {
  const { route } = useRouter();
  return (
    <ul>
      {props.articles.map((v) => {
        return (
          <li key={v.slug}>
            <Link href={route + '/' + v.slug}>
              <a>{v.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  )
};

export async function getStaticProps() {
  const data = await import('../../utils/data.json');
  return {
    props: {
      articles: data.articles,
    }
  }
}

export default SSGPage;
