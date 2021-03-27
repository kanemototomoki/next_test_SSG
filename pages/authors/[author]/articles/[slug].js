import { useRouter } from 'next/router';

const AuthorArticlePage = () => {
  const router = useRouter();
  const { author, slug } = router.query;
  return (
    <>
      <h1>Article: { author }</h1>
      <h1>slug: { slug }</h1>
    </>
  );
}

export default AuthorArticlePage;
