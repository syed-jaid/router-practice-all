import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import Nav from '../Nav/Nav';

const Chart = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            p: 1000,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            p: 1210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            p: 290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            p: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            p: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            p: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            p: 3500,
        },
    ];

    return (
        <div>
            <Nav></Nav>
            <h1>Chart</h1>
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="p" stroke="#8884d8"></Line>
                <XAxis dataKey={'name'} />
                <YAxis dataKey={'uv'} />
            </LineChart>
        </div>
    );
};

export default Chart;