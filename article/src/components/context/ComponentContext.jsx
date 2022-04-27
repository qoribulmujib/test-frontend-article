import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const ComponentContext = createContext();
export const ComponentProvider = (props) => {
  const [article, setArticle] = useState([
    {
      author: "",
      content: "",
      description: "",
      publishedAt: "",
      source: {
        id: "",
        name: "",
      },
      title: "",
      url: "",
      urlToImage: "",
    },
  ]);
  const [carousel, setCarousel] = useState([
    {
      url: "",
      urlToImage: "",
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      let result = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f8e0c8edaac141c7a18805435a433f39`
      );
      console.log("result => ", result.data.articles);
      let temp = result.data.articles.map((items) => {
        return {
          author: items?.author,
          content: items?.content,
          description: items?.description,
          publishedAt: items?.publishedAt,
          source: {
            id: items?.source?.id,
            name: items?.source?.name,
          },
          title: items?.title,
          url: items?.url,
          urlToImage: items?.urlToImage,
        };
      });
      let tempCarousel = result.data.articles.map((items, index) => {
        return {
          url: items?.url,
          urlToImage: items?.urlToImage,
        };
      });
      setArticle(temp);
      setCarousel(tempCarousel);
    };
    fetchData();
  }, []);
  return (
    <ComponentContext.Provider
      value={{
        article,
        setArticle,
        carousel,
        currentIndex,
        setCurrentIndex,
      }}
    >
      {props.children}
    </ComponentContext.Provider>
  );
};
