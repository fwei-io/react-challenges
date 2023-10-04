import PageData from '../helper/data/PageData';
import CodeBlock from '../components/CodeBlock';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
  
export const optionsBarChart = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Bar Chart',
        },
    },
};
  
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
export const dataBarChart = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export default function ChartJSDemo() {
    const page = PageData.filter((element) => element.path == "/ChartJSDemo")[0]

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap mb-6'>
                <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left
                 text-slate-900 dark:text-white'>
                    {page.name}
                </h2>
                <p className='mt-5 text-slate-500'>Challenge: {page.description}</p>
            </div>
            <div className='w-8/12 mx-auto mb-16'>
                <Bar options={optionsBarChart} data={dataBarChart} />
            </div>
            <CodeBlock code={code} />
        </div>
    );
}

const code = `
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
  
export const optionsBarChart = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};
  
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
export const dataBarChart = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export default function ChartJSDemo() {
    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-8/12 mx-auto mb-16'>
                <Bar options={optionsBarChart} data={dataBarChart} />
            </div>
            <CodeBlock code={code} />
        </div>
    );
}
`;