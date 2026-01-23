import React from 'react';
import styled from "styled-components";
import { PrimaryColor } from './stockAnalysisDashboard';

interface NewsLink {
  title: string;
  url: string;
};

interface NewsListProps {
  newsLinks: NewsLink[];
};

const NewsListContainer = styled.div`
  max-width: 100%;
`;


const NewsItem = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%; 
  margin-bottom: 10px;
  cursor: pointer;
`;

const NewsLink = styled.a`
  text-decoration: none;
  color: ${PrimaryColor};
  font-size: 12px;
`;

const ScrollableList = styled.div`
  max-height:80%;
  overflow-y: auto;
`;

const NewsList: React.FC<NewsListProps> = ({ newsLinks }) => {
  return (
    <NewsListContainer>
      <div style={{marginBottom: '10px'}}>In The News</div>
      <ScrollableList>
        {newsLinks.map((news, index) => (
          <NewsItem key={index}>
            <NewsLink href={news.url} title={news.title} target="_blank" rel="noopener noreferrer">
            {news.title}
            </NewsLink>
          </NewsItem>
        ))}
      </ScrollableList>
    </NewsListContainer>
  );
}

export default NewsList;
