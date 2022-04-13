import Articles from "../components/Article/Article";
import { ArticleList } from "../data/articles";



const Blog = () => {
  const isBlog = ArticleList.length === 0 ? false : true 
  if(isBlog)
  return (
    <div className="container pt-5">
      <h1 className="h">My Articles</h1>

      <div className="row"><Articles/></div>
    </div>
  );
  else {
    return null;
  }
};

export default Blog;
