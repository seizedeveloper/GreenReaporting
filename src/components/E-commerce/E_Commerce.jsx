import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function E_Commerce() {
  const [distance, setDistance] = useState(1000) // default value
  const [mode, setMode] = useState('Motorcycle') // default value
  const [emission, setEmission] = useState(0.1374) // default value
  const [capacity, setCapacity] = useState(30) // default value
  const Dropdown = ['option', 'option1', 'option2', 'option3']
  const navigate = useNavigate()

  const vehicalType = [
    'Passenger Cars',
    'Light-Duty Trucks',
    'Medium- and Heavy-Duty Vehicles',
    'Light-Duty Cars',
    'Light-Duty Trucks',
    'Medium-Duty Trucks',
    'Heavy-Duty Trucks',
    'Buses',
  ]

  const wasteType = [
    'Aluminum Cans',
    'Aluminum Ingot',
    'Steel Cans',
    'Copper Wire',
    'Glass',
    'HDPE',
    'LDPE',
    'PET',
    'LLDPE',
    'PP',
    'PS',
    'PVC',
    'PLA',
    'Corrugated Containers',
    'Magazines/Third-class mail',
    'Newspaper',
    'Office Paper',
    'Phonebooks',
    'Textbooks',
    'Dimensional Lumber',
    'Medium-density Fiberboard',
    'Food Waste (non-meat)',
    'Food Waste (meat only)',
    'Beef',
    'Poultry',
    'Grains',
    'Bread',
    'Fruits and Vegetables',
    'Dairy Products',
    'Yard Trimmings',
    'Grass',
    'Leaves',
    'Branches',
    'Mixed Paper (general)',
    'Mixed Paper (primarily residential)',
    'Mixed Paper (primarily from offices)',
    'Mixed Metals',
    'Mixed Plastics',
    'Mixed Recyclables',
    'Food Waste',
    'Mixed Organics',
    'Mixed MSW',
    'Carpet',
    'Desktop CPUs',
    'Portable Electronic Devices',
    'Flat-panel Displays',
    'CRT Displays',
    'Electronic Peripherals',
    'Hard-copy Devices',
    'Mixed Electronics',
    'Clay Bricks',
    'Concrete',
    'Fly Ash',
    'Tires',
    'Asphalt Concrete',
    'Asphalt Shingles',
    'Drywall',
    'Fiberglass Insulation',
    'Vinyl Flooring',
    'Wood Flooring',
  ]

  const energyType = [
    'AKMS (ASCC Miscellaneous)',
    'AZNM (WECC Southwest)',
    'CAMX (WECC California)',
    'HIOA (HICC Oahu)',
    'MROE (MRO East)',
    'MROW (MRO West)',
    'NEWE (NPCC New England)',
    'NWPP (WECC Northwest)',
    'NYCW (NPCC NYC/Westchester)',
    'NYLI (NPCC Long Island)',
    'NYUP (NPCC Upstate NY)',
    'PRMS (Puerto Rico Miscellaneous)',
    'RMPA (WECC Rockies)',
    'SPNO (SPP North)',
    'SPSO (SPP South)',
    'SRMV (SERC Mississippi Valley)',
    'SRMW (SERC Midwest)',
    'SRSO (SERC South)',
    'SRTV (SERC Tennessee Valley)',
    'SRVC (SERC Virginia/Carolina)',
    'ASCC Alaska Grid',
    'ASCC Miscellaneous',
    'ERCOT All',
    'FRCC All',
    'HICC Miscellaneous',
    'HICC Oahu',
    'MRO East',
    'MRO West',
    'NPCC Long Island',
    'NPCC New England',
    'NPCC NYC/Westchester',
    'NPCC Upstate NY',
    'RFC East',
    'RFC Michigan',
    'RFC West',
    'SERC Midwest',
    'SERC Mississippi Valley',
    'SERC South',
    'SERC Tennessee Valley',
    'SERC Virginia/Carolina',
    'SPP North',
    'SPP South',
    'WECC California',
    'WECC Northwest',
    'WECC Rockies',
    'WECC Southwest',
  ]

  const handleInputChange = (event) => {
    setDistance(event.target.value)
  }

  const handleIndustrySelect = () => {
    navigate('/e_report')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-900 mb-6">
          Office Energy Consumption
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Distance */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Type of energy
            </label>
            <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="">-- Select Energy Type --</option>
              {energyType.map((options, index) => (
                <option
                  key={index}
                  value={options}
                  className="text-lg font-medium"
                >
                  {options}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-900 mb-6">
          Facility energy consumption
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Distance */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Energy consumption for facilities
            </label>
            <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="">-- Select Energy Type --</option>
              {energyType.map((options, index) => (
                <option
                  key={index}
                  value={options}
                  className="text-lg font-medium"
                >
                  {options}
                </option>
              ))}
            </select>
          </div>

          {/* Mode of Transportation */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Quantity
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="number"
                defaultValue="30"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-900 mb-6">
          Office Operations
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-lg font-medium text-green-900">
              Number of Office
            </label>
            <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
              {distance} <span className="text-sm">KM</span>
            </div>
          </div>

          <div>
            <label className="text-lg font-medium text-green-900">
              Square Footage of Office Space
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="number"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-lg font-medium text-green-900">
              Number of Employees in office
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="number"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-900 mb-6">
          Office Furniture
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-lg font-medium text-green-900">
              Number of Desks
            </label>
            <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
              {distance} <span className="text-sm">KM</span>
            </div>
          </div>

          <div>
            <label className="text-lg font-medium text-green-900">
              Number of Chairs
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="number"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-lg font-medium text-green-900">
              Number of Filing Cabinets
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="number"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-900 mb-6">
          Datacenter Energy Consumption
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Distance */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Number of datacenters
            </label>
            <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
              {mode}
            </div>
          </div>

          {/* Mode of Transportation */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Average Power Consumption per Server
            </label>
            <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="">-- Select --</option>
              {energyType.map((options, index) => (
                <option
                  key={index}
                  value={options}
                  className="text-lg font-medium"
                >
                  {options}
                </option>
              ))}
            </select>
          </div>

          {/* Emission */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Cooling Systems Power Consumption
            </label>
            <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
              {mode}
            </div>
          </div>

          {/* Capacity of Bag */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Power Usage Effectiveness (PUE)
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="number"
                defaultValue="30"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-lg font-medium text-green-900">
              Type of energy
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="number"
                defaultValue="30"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-lg font-medium text-green-900">
              Energy consumption in a year
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="number"
                defaultValue="30"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-900 mb-6">
          Employee Commuting
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Distance */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Number of employees
            </label>
            <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
              {mode}
            </div>
          </div>

          {/* Mode of Transportation */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Vehicle types
            </label>
            <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="">-- Select Vehicle --</option>
              {vehicalType.map((options, index) => (
                <option
                  key={index}
                  value={options}
                  className="text-lg font-medium"
                >
                  {options}
                </option>
              ))}
            </select>
          </div>

          {/* Emission */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Vehicle mileage
            </label>
            <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
              {mode}
            </div>
          </div>

          {/* Capacity of Bag */}
          <div>
            <label className="text-lg font-medium text-green-900">
              fuel consumption
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="number"
                defaultValue="30"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-lg font-medium text-green-900">
              Average Distance Traveled
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="number"
                defaultValue="30"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-lg font-medium text-green-900">
              Average idling time
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="number"
                defaultValue="30"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-900 mb-6">
          Business Travel
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Distance */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Number of business travels
            </label>
            <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
              {mode}
            </div>
          </div>

          {/* Mode of Transportation */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Average Air Travel distance
            </label>
            <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
              {mode}
            </div>
          </div>

          {/* Emission */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Average Rail Travel distance
            </label>
            <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
              {mode}
            </div>
          </div>

          {/* Capacity of Bag */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Average Car distance
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="number"
                defaultValue="30"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-lg font-medium text-green-900">
              Average idling time
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="number"
                defaultValue="30"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-900 mb-6">Waste</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Distance */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Type of waste
            </label>
            <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="">-- Select Waste Type --</option>
              {wasteType.map((options, index) => (
                <option
                  key={index}
                  value={options}
                  className="text-lg font-medium"
                >
                  {options}
                </option>
              ))}
            </select>
          </div>

          {/* Mode of Transportation */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Quantity
            </label>
            <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
              {mode}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-900 mb-6">
          Office Operations
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Distance */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Number of offices
            </label>
            <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
              {mode}
            </div>
          </div>

          {/* Mode of Transportation */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Square Footage of Office Space
            </label>
            <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
              {mode}
            </div>
          </div>

          {/* Emission */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Number of Employees in office
            </label>
            <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
              {mode}
            </div>
          </div>

          {/* Capacity of Bag */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Average Paper Usage per Employee
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="number"
                defaultValue="30"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-lg font-medium text-green-900">
              Average Water Consumption
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="number"
                defaultValue="30"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-900 mb-6">Packaging</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Distance */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Packaging materials used
            </label>
            <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
              {mode}
            </div>
          </div>

          {/* Mode of Transportation */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Packaging weight
            </label>
            <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
              {mode}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto pt-6 ">
        <button
          onClick={handleIndustrySelect}
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 "
        >
          Next
        </button>
      </div>
    </div>
  )
}
