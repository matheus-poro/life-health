import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { ChartData, ChartOptions } from 'chart.js';

// import { Chart, ArgumentAxis, ValueAxis, BarSeries } from '@devexpress/dx-react-chart';
// import { ArgumentScale, ValueScale } from '@devexpress/dx-react-chart';
// import { scaleBand, scaleLinear } from '@devexpress/dx-chart-core';

// interface WeekData {
//     day: string;
//     hours: number;
//     activity: string;
// }

// const data: WeekData[] = [
//     { day: 'Monday', hours: 4, activity: 'Reading' },
//     { day: 'Tuesday', hours: 5, activity: 'Writing' },
//     { day: 'Wednesday', hours: 3, activity: 'Exercise' },
//     { day: 'Thursday', hours: 6, activity: 'Meeting' },
//     { day: 'Friday', hours: 2, activity: 'Coding' },
//     { day: 'Saturday', hours: 7, activity: 'Rest' },
//     { day: 'Sunday', hours: 4, activity: 'Cooking' },
// ];

// const data: any = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//         {
//             label: 'Sales',
//             data: [12, 19, 3, 5, 2, 3, 8],
//             backgroundColor: 'rgba(75,192,192,0.2)',
//             borderColor: 'rgba(75,192,192,1)',
//             borderWidth: 1,
//         },
//     ],
// };

// const options: any = {
//     scales: {
//         // y: {
//         //     beginAtZero: true,
//         // },
//     },
// };

// const MyChart = () => {
//     return <Bar data={data} options={options} />;
// };

const PhysicalActivityChart: React.FC = () => {
    return (
        <div></div>
        // <Bar data={data} options={options} />
        // <Chart
        //     data={data}
        // >
        //     <ArgumentScale factory={scaleBand} />
        //     <ArgumentAxis
        //     />
        //     <ValueScale factory={scaleLinear} />
        //     <ValueAxis
        //     />

        //     <BarSeries
        //         valueField="hours"
        //         argumentField="day"
        //     />
        // </Chart>
    );
};

export default PhysicalActivityChart;
