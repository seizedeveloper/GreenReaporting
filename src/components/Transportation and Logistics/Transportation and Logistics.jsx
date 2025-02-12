import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

export default function TransportationAndLogistics() {
  const [distance, setDistance] = useState(1000)
  const [mode, setMode] = useState('Motorcycle')
  const [emission, setEmission] = useState(0.1374)
  const [capacity, setCapacity] = useState(30)
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

  const fuelType = [
    'Motor Gasoline',
    'Diesel Fuel',
    'Residual Fuel Oil',
    'Aviation Gasoline',
    'Kerosene-Type Jet Fuel',
    'Liquefied Petroleum Gases (LPG)',
    'Ethanol (100%)',
    'Biodiesel (100%)',
    'Liquefied Natural Gas (LNG)',
    'Compressed Natural Gas (CNG)',
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

  const transportationMode = [
    'Air',
    'Sea',
    'Rail',
    'Road',
    'Courier',
    'Freight',
  ]

  const employeesVehicle = [
    'Passenger Car',
    'Light-Duty Truck',
    'Motorcycle',
    'Intercity Rail - Northeast Corridor',
    'Intercity Rail - Other Routes',
    'Intercity Rail - National Average',
    'Commuter Rail',
    'Transit Rail (i.e. Subway, Tram)',
    'Bus',
    'Air Short Haul (< 300 miles)',
    'Air Medium Haul (>= 300 miles, < 2300 miles)',
    'Air Long Haul (>= 2300 miles)',
  ]

  const handleInputChange = (event) => {
    setDistance(event.target.value)
  }

  const handleIndustrySelect = () => {
    navigate('/tr_report')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-900 mb-6">Vehicle Data</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Distance */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Modes of transportation
            </label>
            <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="">-- Select Mode --</option>
              {transportationMode.map((options, index) => (
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
              Vehicle types
            </label>
            <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="">-- Select vehicle --</option>
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

          <div>
            <label className="text-lg font-medium text-green-900">
              Fuel types
            </label>
            <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="">-- Select Fuel --</option>
              {fuelType.map((options, index) => (
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

          <div>
            <label className="text-lg font-medium text-green-900">
              Vehicle mileage
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="text"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-lg font-medium text-green-900">
              Fuel consumption
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="text"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-lg font-medium text-green-900">
              Average Distance Traveled per Day
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="text"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-lg font-medium text-green-900">
              Transportation Mode capacity
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="text"
                defaultValue="1000"
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
                type="text"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-900 mb-6">Energy use</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Distance */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Energy consumption for facilities
            </label>
            <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="">-- Select Energy --</option>
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
                type="text"
                defaultValue="30"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-900 mb-6">
          Facility energy consumption
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-lg font-medium text-green-900">
              Energy consumption for facilities
            </label>
            <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="">-- Select Energy --</option>
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

          <div>
            <label className="text-lg font-medium text-green-900">
              Quantity
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
          Office Operations
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-lg font-medium text-green-900">
              Number of offices
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="text"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
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
                type="text"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-lg font-medium text-green-900">
              Average Paper Usage per Employee
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="text"
                defaultValue="1000"
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
                type="text"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-900 mb-6">
          Employee commuting
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-lg font-medium text-green-900">
              Number of employees
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="text"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-lg font-medium text-green-900">
              Vehicle type
            </label>
            <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="">-- Select Vehical --</option>
              {employeesVehicle.map((options, index) => (
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

          <div>
            <label className="text-lg font-medium text-green-900">
              Vehicle mileage
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
              Fuel consumption
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="text"
                defaultValue="1000"
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
                type="text"
                defaultValue="1000"
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
                type="text"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-900 mb-6">
          Business travel
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Distance */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Number of business travels
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="text"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-lg font-medium text-green-900">
              Mode of transportation
            </label>
            <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="">-- Select Mode --</option>
              {transportationMode.map((options, index) => (
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

          <div>
            <label className="text-lg font-medium text-green-900">
              Vehicle types
            </label>
            <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="">-- Select Vehical --</option>
              {employeesVehicle.map((options, index) => (
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

          <div>
            <label className="text-lg font-medium text-green-900">
              Average distance traveled
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="text"
                defaultValue="1000"
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
                type="text"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-900 mb-6">
          Packaging Machinery
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Distance */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Number of Box Sealers
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="text"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          {/* Mode of Transportation */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Number of Tape Dispensers
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="text"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          {/* Emission */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Number of Labeling Machines
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="text"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-900 mb-6">
          Material Handling Equipment
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Distance */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Number of Pallet Jacks
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="text"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          {/* Mode of Transportation */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Number of Forklifts
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="text"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          {/* Emission */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Number of Conveyor Belts
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="text"
                defaultValue="1000"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto pt-6 ">
        <button
          onClick={handleIndustrySelect}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-lime-600  "
        >
          Next
        </button>
      </div>
    </div>
  )
}
