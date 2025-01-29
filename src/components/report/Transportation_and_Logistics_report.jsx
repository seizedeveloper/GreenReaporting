import React from 'react'
import { Doughnut, Bar } from 'react-chartjs-2'
import 'chart.js/auto' // Required for Chart.js v3+

const TransportationAndLogistics = () => {
  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {/* Cards Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <Card title="Total emission" value="30 tCO2e" />
        <Card title="Emission avoided" value="5 tCO2e" />
        <Card title="Total supplier emission" value="18 tCO2e" />
        <Card title="Progress achieved" value="60%" />
      </div>

      {/* Graphs Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Emission Bar Chart */}
        <div
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
          }}
        >
          <h3 style={{ textAlign: 'center' }}>Emission per category</h3>
          <EmissionBarChart />
        </div>

        {/* Doughnut Charts Section */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          <CircularGraph
            title="Emission by scope"
            dataLabels={['Scope 1', 'Scope 2', 'Scope 3']}
            dataValues={[51, 38, 14]}
            colors={['#4CAF50', '#2196F3', '#FFC107']}
          />
          <CircularGraph
            title="Total Emission/Offset"
            dataLabels={['Offset', 'Total Emission']}
            dataValues={[5, 30]}
            colors={['#8BC34A', '#FF5722']}
          />
          <CircularGraph
            title="Supplier Emission"
            dataLabels={[
              'Supplier 1',
              'Supplier 2',
              'Supplier 3',
              'Supplier 4',
              'Supplier 5',
            ]}
            dataValues={[40, 30, 20, 10, 5]}
            colors={['#3F51B5', '#009688', '#FFC107', '#F44336', '#795548']}
          />
        </div>
      </div>
    </div>
  )
}

// Card Component
const Card = ({ title, value }) => (
  <div
    style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center',
      flex: '1',
      minWidth: '200px',
      backgroundColor: 'E3F5FF',
    }}
  >
    <h3>{title}</h3>
    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{value}</p>
  </div>
)

// Bar Chart Component
const EmissionBarChart = () => {
  const data = {
    labels: [
      'Category 1',
      'Category 2',
      'Category 3',
      'Category 4',
      'Category 5',
    ],
    datasets: [
      {
        label: 'Emissions (tCO2e)',
        data: [100, 200, 150, 80, 50],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return <Bar data={data} options={options} />
}

// Circular (Doughnut) Chart Component
const CircularGraph = ({ title, dataLabels, dataValues, colors }) => {
  const data = {
    labels: dataLabels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    cutout: '70%', // Controls the inner radius for the doughnut effect
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true, // Matches the circular legend style
          boxWidth: 10, // Smaller legend indicators
        },
      },
      title: {
        display: true,
        text: title,
        font: { size: 16 },
        padding: { top: 10, bottom: 10 },
      },
    },
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        width: '300px',
        height: '300px',
        margin: '0 auto',
      }}
    >
      <Doughnut data={data} options={options} />
    </div>
  )
}

export default TransportationAndLogistics
