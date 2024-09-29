import Headline from "./Headline";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { newsData, newsFetch } from "../store/atom";
import { useEffect } from "react";

function DynamicHeadline() {
  const fetchedData = useRecoilValueLoadable(newsFetch("?country=us"));
  console.log(fetchedData);
  const [news, setNews] = useRecoilState(newsData("?country=us"));
  console.log(news);

  useEffect(() => {
    if (fetchedData.state === "hasValue") {
      setNews(fetchedData.contents.articles);
    }
  }, [fetchedData]);

  {
    if (fetchedData.state === "loading") {
      return <Headline status={false} />;
    } else if (fetchedData.state === "hasValue") {
      return news.map((data, index) => {
        return (
          <Headline
            key={index}
            status={true}
            title={data.title}
            description={data.description}
          />
        );
      });
    }
  }
}

export default DynamicHeadline;
