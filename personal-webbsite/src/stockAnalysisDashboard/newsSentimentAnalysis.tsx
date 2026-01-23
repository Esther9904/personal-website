import React from "react"
import styled from "styled-components"
import { Doughnut } from "react-chartjs-2"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js"
import NumberStat from './numberStat'
import {VerticalAlignContainer,VerticalAlignContent} from './stockAnalysisDashboard'
import { ThemeGreen, ThemeYellow, ThemeRed} from './stockAnalysisDashboard'

// Register required chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

/* ---------------- Styled Components ---------------- */

const ChartWrapper = styled.div`
  width: 100%;
  height: 100%; /* Fill parent container height */
  display: flex;
  // flex-direction: column;
`;


const ChartContainer = styled.div`
  flex: 1; /* Take remaining height */
  position: relative; /* Required for Chart.js sizing */
  display: flex;
`;

const ChartArea = styled.div`
  flex: 1; /* Take remaining width */
  position: relative;
  width: 45%;
  display: flex;
`;

// const TextArea = styled.div``;

interface NewsSentimentAnalysisProps {
  newsTextAnalysis: any;
}

/* ---------------- Component ---------------- */

const NewsSentimentAnalysis: React.FC<NewsSentimentAnalysisProps> = ({ newsTextAnalysis }) => {

  const sentiment = newsTextAnalysis.data.sentiment

  const data = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        label: "Sentiment",
        data: [sentiment.pos, sentiment.neg, sentiment.neu],
        backgroundColor: [
          ThemeGreen,  // green
          ThemeRed,  // red
          ThemeYellow,  // yellow
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // 🔥 Important so height works
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          font: {
            size: 10,
          },
          boxWidth: 10,
          padding: 10,
        },
      },
    },
  };

  return (
    <ChartWrapper>

      <ChartContainer>
        <ChartArea>
         <Doughnut data={data} options={options} />
        </ChartArea>
        <VerticalAlignContainer>
          <VerticalAlignContent>
            <div>News Text Analysis</div> 
            <div style={{height: '40px'}}>
              <NumberStat
                value={newsTextAnalysis.metadata.sentenceAnalyzed}
                label="Sentences Analyzed"
              ></NumberStat>
            </div>
            <div style={{height: '40px'}}>
              <NumberStat
                value={newsTextAnalysis.metadata.wordsAnalyzed}
                label="Words Analyzed"
              ></NumberStat>
            </div>
          </VerticalAlignContent>
        </VerticalAlignContainer>
      </ChartContainer>
    </ChartWrapper>
  );
};

export default NewsSentimentAnalysis;
