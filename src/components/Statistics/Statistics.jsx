import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';

const Statistics = () => {
    const sonData = useLoaderData();
    const [lData, setLData] = useState([]);

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('DonationPage')) || [];
        setLData(localData);
    }, []);
    console.log(lData)

    const totalDonations = sonData?.length; // Fix the error here
    const yourDonations = lData.length;

    const pieData = [
        {
            name: "Total Donation",
            value: totalDonations
        },
        {
            name: "Your Donation",
            value: yourDonations
        }
    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <section>
            <div className='flex justify-center items-center text-center lg:ml-28'>
                <PieChart width={400} height={400}>
                    <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className='flex flex-col md:flex-row justify-center gap-x-7 items-center text-center lg:ml-28 mb-28'>
                <div className='flex items-center gap-x-3'>
                    <p>Your Donation</p>
                    <div className='bg-[#FF444A] h-4 w-12 rounded mt-1'></div>
                    <p>{yourDonations}</p>
                </div>
                <div className='flex items-center gap-x-3'>
                    <p>Total Donation</p>
                    <div className='bg-[#00C49F] h-4 w-12 rounded mt-1'></div>
                    <p>{totalDonations}</p>
                </div>
            </div>
        </section>
    );
};

export default Statistics;
