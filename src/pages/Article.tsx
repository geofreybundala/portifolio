import { Articles } from '../data/articles';

const Article = () => {
  const articleList = Articles.map((article) => (
    <div className="col-md-12 p-3 article-card mb-2">
      <div>{article.title}</div>
      <div>{article.description}</div>
    </div>
  ));

  return (
    <div className="container pt-5">
      <h1 className="h">My Articles</h1>

      <div className="row">{articleList}</div>
    </div>
  );
};

export default Article;
