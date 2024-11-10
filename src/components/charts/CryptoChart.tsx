import React from 'react';
import { ResponsiveLine } from '@nivo/line';

interface CryptoChartProps {
  data: {
    id: string;
    data: Array<{ x: string; y: number }>;
  }[];
}

const CryptoChart: React.FC<CryptoChartProps> = ({ data }) => {
  return (
    <div className="chart-container">
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 20, bottom: 40, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
        curve="cardinal"
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        enablePoints={false}
        theme={{
          axis: { domain: { line: { stroke: '#525252' } } },
          grid: { line: { stroke: '#525252', strokeWidth: 1 } },
          crosshair: { line: { stroke: '#f3f4f6', strokeWidth: 1 } },
          text: { fill: '#f3f4f6' },
        }}
        colors={['#6366f1']}
        enableGridX={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        enableArea={true}
        areaOpacity={0.15}
      />
    </div>
  );
};

export default CryptoChart;