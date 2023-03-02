import React from 'react';
import {
  Chart as ChartJs,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import styled from 'styled-components';

ChartJs.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler
);

const CharmingGraph = () => {
  // useEffect(() => {
  //   fetch('/data/dataGraph.json')
  //     .then(response => response.json())
  //     .then(data => setScoreList(data[0]));
  // }, []);
  return (
    <GraphContainer>
      <ScoreGraph>
        <GraphTitle>✔️ 매력 포인트 &nbsp;</GraphTitle>
        <Radar data={charmingData} options={labelFont} />
      </ScoreGraph>
      <ScoreGraph>
        <GraphTitle>✔️ 감정 포인트 &nbsp;</GraphTitle>
        <Radar data={emotionData} options={labelFont} />
      </ScoreGraph>
    </GraphContainer>
  );
};

const GraphTitle = styled.div`
  font-size: 23px;
  font-weight: 700;
  color: #57565c;
  margin-bottom: 10px;
  border-bottom: 12px solid #f1f1f3;
  display: inline-block;
`;

const ScoreGraph = styled.div`
  width: 400px;
  height: 400px;
`;

const GraphContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
`;

const charmingData = {
  labels: ['감독연출', '스토리', '영상미', '배우연기', 'OST'],
  datasets: [
    {
      label: 'Scores',
      data: [60, 70, 80, 85, 70],
      backgroundColor: 'rgb(112, 99, 255, 0.2)',
      pointBorderColor: [
        'rgb(255, 133, 179)',
        'rgb(254, 196, 70)',
        'rgb(142, 189, 255)',
        'rgb(100, 169, 178)',
        'rgb(178, 103, 183)',
      ],
      pointBorderWidth: 4,
      borderColor: '#7063ff',
    },
  ],
};

const emotionData = {
  labels: ['스트레스 해소', '무서움', '현실감', '몰입감', '긴장감'],
  datasets: [
    {
      label: 'Scores',
      data: [30, 60, 44, 83, 71],
      backgroundColor: 'rgb(112, 99, 255, 0.2)',
      pointBorderColor: [
        'rgb(255, 133, 179)',
        'rgb(254, 196, 70)',
        'rgb(142, 189, 255)',
        'rgb(100, 169, 178)',
        'rgb(178, 103, 183)',
      ],
      pointBorderWidth: 4,
      borderColor: '#7063ff',
    },
  ],
};

const labelFont = {
  scales: {
    r: {
      pointLabels: {
        font: {
          size: 18,
        },
      },
    },
  },
};
export default CharmingGraph;

// const CHARMING_DATA_LIST = [
//   { id: 1, title: '감독연출' },
//   { id: 2, title: '스토리' },
//   { id: 3, title: '영상미' },
//   { id: 4, title: '배우연기' },
//   { id: 5, title: 'OST' },
// ];

// const EMOTIOMAL_DATA_LIST = [
//   { id: 1, title: '스트레스 해소' },
//   { id: 2, title: '무서움' },
//   { id: 3, title: '현실감' },
//   { id: 4, title: '몰입감' },
//   { id: 5, title: '긴장감' },
// ];
