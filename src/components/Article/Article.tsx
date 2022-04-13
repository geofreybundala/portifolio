import { ArticleList } from '../../data/articles';

const Articles = () => {
  const articleList = ArticleList.map((article) => (
    <div className="col-md-12 p-3 article-card mb-2">
      <div>{article.title}</div>
      <div>{article.description}</div>
    </div>
  ));

  return (
    <>{articleList}</>
  )
}

export default Articles
