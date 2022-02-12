import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import "./css/NewsItem.css";
function News() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6702142af4434627a1a69bb4d197561a`
      );
      console.log(response.data);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);
  const filter = articles.filter((article) => {
    return article.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="News">
      <div className="News__Header">
        <Flex w="100%" p={8}>
          <Heading fontWeight={500}>News Portal</Heading>
          <Spacer />
          <InputGroup w="300px">
            <InputLeftElement
              pointerEvents="auto"
              children={<SearchIcon color="black" />}
            />
            <Input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </InputGroup>
        </Flex>
      </div>
      <div className="News__Content">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
        >
          {filter.map((article) => {
            return (
              <GridItem  p={4} >
                <NewsItem
                  title={article.title}
                  url={article.url}
                  urlToImage={article.urlToImage}
                />
              </GridItem>
            );
          })}

          {articles.map((article) => {
            return (
              <GridItem w="100%" p={4}>
                <NewsItem
                  title={article.title}
                  url={article.url}
                  urlToImage={article.urlToImage}
                />
              </GridItem>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default News;
