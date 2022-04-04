import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='py-8 grid md:grid-cols-2 sm:grid-cols-1 '>

            <div className='flex flex-col items-center'>
                <h1 className='text-xl text-sky-600 my-5'>MONTH WISE SELL</h1>
                <LineChart width={400} height={500} data={data}>
                    <Line dataKey={'sell'}></Line>
                    <Legend>MONTH WISE SELL</Legend>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis dataKey={'sell'}></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-xl text-sky-600 my-5'>Investment VS Revenue</h1>
                <AreaChart
                    width={400}
                    height={500}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"month"} />
                    <YAxis dataKey={'investment'} />
                    <Tooltip />
                    <Area type="monotone" dataKey={"investment"} stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey={"revenue"} stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>

            </div>
            <div className='flex flex-col items-center mt-8'>
                <h1 className='text-xl text-sky-600 my-5'>Investment VS Revenue</h1>
                <BarChart
                    width={400}
                    height={500}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"month"} />
                    <YAxis dataKey={"investment"} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>
            <div className='flex flex-col items-center mt-8'>
            <h1 className='text-xl text-sky-600 my-5'>Investment VS Revenue</h1>
                <PieChart width={400} height={400}>
                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;