const SSGDynamicPage = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </>
  )
}

export async function getStaticPaths() {
  const data = await import('../../utils/data.json');
  const paths = data.articles.map((v) => {
    return {
      params: {
        slug: v.slug
      }
    }
  });
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const data = await import('../../utils/data.json');
  const article = data.articles.find((v) => v.slug === slug);

  return {
    props: {
      title: article.title,
      body: article.body
    }
  }
}

export default SSGDynamicPage;
