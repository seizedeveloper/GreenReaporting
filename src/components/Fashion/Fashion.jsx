import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

export default function Fashion() {
  const [distance, setDistance] = useState(1000) // default value
  const [mode, setMode] = useState('Motorcycle') // default value
  const [emission, setEmission] = useState(0.1374) // default value
  const [capacity, setCapacity] = useState(30) // default value
  const Dropdown = ['option', 'option1', 'option2', 'option3']
  const navigate = useNavigate()

  const transportationType = [
    'Medium- and Heavy-Duty Truck',
    'Rail',
    'Aircraft',
    'Waterborne Craft',
  ]

  const transportationMode = [
    'Air',
    'Sea',
    'Rail',
    'Road',
    'Courier',
    'Freight',
  ]

  const packagingMaterials = [
    'Plastic Bag (Strong Reusable)',
    'Plastic Bag (Basic Reusable)',
    'Paper Bag',
    'Plastic Bag (Single Use)',
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

  const chemicalsUsed = [
    'Formaldehyde',
    'Azo Dyes',
    'Phthalates',
    'Chlorine',
    'Perfluorinated Chemicals (PFCs)',
    'Nonylphenol Ethoxylates (NPEs)',
    'Heavy Metals',
    'Solvents',
    'Bleach',
    'Detergents',
    'Pesticides',
    'Flame Retardants',
    'Optical Brighteners',
    'Softening Agents',
    'Antimicrobial Agents',
  ]

  const materialComposition = [
    'Cotton',
    'Polyester',
    'Wool',
    'Silk',
    'Linen',
    'Nylon',
    'Rayon',
    'Spandex',
    'Leather',
    'Denim',
    'Acrylic',
    'Viscose',
    'Cashmere',
    'Hemp',
    'Bamboo',
    'Modal',
  ]

  const handleInputChange = (event) => {
    setDistance(event.target.value)
  }

  const handleIndustrySelect = () => {
    navigate('/f_report')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-900 mb-6">
          Product Information
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Distance */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Product type
            </label>
            <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="">-- Select Industry --</option>
              {Dropdown.map((options, index) => (
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
              Product name
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
              Quantity produced per batch
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
              SKU or product code
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
          Supply Chain Data
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Distance */}
          <div>
            <label className="text-lg font-medium text-green-900">Name</label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="text"
                defaultValue="30"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          {/* Mode of Transportation */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Location
            </label>
            <div className="flex items-center bg-green-100 rounded px-3 py-2 mt-2">
              <input
                type="text"
                defaultValue="30"
                className="bg-transparent w-full text-lg font-medium text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          {/* Emission */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Material
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
          Material and quantity
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-lg font-medium text-green-900">
              Material composition
            </label>
            <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="">-- Select Material --</option>
              {materialComposition.map((options, index) => (
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
        <h1 className="text-2xl font-bold text-green-900 mb-6">Chemicals</h1>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-lg font-medium text-green-900">
              Chemicals used
            </label>
            <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="">-- Select Chemicals used --</option>
              {chemicalsUsed.map((options, index) => (
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
          Manufacturing
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-lg font-medium text-green-900">
              Average energy consumption per batch
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

          <div>
            <label className="text-lg font-medium text-green-900">
              Power Usage Effectiveness (PUE)
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
        <h1 className="text-2xl font-bold text-green-900 mb-6">Disposal</h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Distance */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Amount of disposal
            </label>
            <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
              {mode}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-900 mb-6">
          Transportation
        </h1>

        <h1 className="text-xl font-semibold text-green-900 mb-6">
          Raw Material Transportation
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Distance */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Quantity
            </label>
            <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
              {mode}
            </div>
          </div>

          {/* Mode of Transportation */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Transportation Mode
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

          {/* Emission */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Transportation type
            </label>
            <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="">-- Select Type --</option>
              {transportationType.map((options, index) => (
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

          {/* Capacity of Bag */}
          <div>
            <label className="text-lg font-medium text-green-900">
              Transportation Mode capacity
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
              Distance
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
        <div className="mt-6">
          <h1 className="text-xl font-semibold text-green-900 mb-6">
            Manufacturing Facility to Distribution Center
          </h1>

          <div className="grid grid-cols-2 gap-6">
            {/* Distance */}
            <div>
              <label className="text-lg font-medium text-green-900">
                Quantity
              </label>
              <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
                {mode}
              </div>
            </div>

            {/* Mode of Transportation */}
            <div>
              <label className="text-lg font-medium text-green-900">
                Transportation Mode
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

            {/* Emission */}
            <div>
              <label className="text-lg font-medium text-green-900">
                Transportation type
              </label>
              <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
                <option value="">-- Select Type --</option>
                {transportationType.map((options, index) => (
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

            {/* Capacity of Bag */}
            <div>
              <label className="text-lg font-medium text-green-900">
                Transportation Mode capacity
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
                Distance
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
          <div className="mt-6">
            <h1 className="text-xl font-semibold text-green-900 mb-6">
              Distribution Center to Retailer
            </h1>

            <div className="grid grid-cols-2 gap-6">
              {/* Distance */}
              <div>
                <label className="text-lg font-medium text-green-900">
                  Quantity
                </label>
                <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
                  {mode}
                </div>
              </div>

              {/* Mode of Transportation */}
              <div>
                <label className="text-lg font-medium text-green-900">
                  Transportation Mode
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

              {/* Emission */}
              <div>
                <label className="text-lg font-medium text-green-900">
                  Transportation type
                </label>
                <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
                  <option value="">-- Select Type --</option>
                  {transportationType.map((options, index) => (
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

              {/* Capacity of Bag */}
              <div>
                <label className="text-lg font-medium text-green-900">
                  Transportation Mode capacity
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
                  Distance
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
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-bold text-green-900 mb-6">Packaging</h1>

          <div className="grid grid-cols-2 gap-6">
            {/* Distance */}
            <div>
              <label className="text-lg font-medium text-green-900">
                Packaging materials used
              </label>
              <select className="h-11 mt-2 w-full py-2 px-2 items-center rounded bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
                <option value="">-- Select Industry --</option>
                {packagingMaterials.map((options, index) => (
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
                Packaging weight
              </label>
              <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
                {mode}
              </div>
            </div>

            {/* Emission */}
            <div>
              <label className="text-lg font-medium text-green-900">
                Dimensions
              </label>
              <div className="bg-green-100 text-green-800 font-medium p-3 rounded-md mt-2">
                {mode}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-bold text-green-900 mb-6">
            Retail Data
          </h1>

          <div className="grid grid-cols-2 gap-6">
            {/* Distance */}
            <div>
              <label className="text-lg font-medium text-green-900">
                Retail Store Energy Consumption
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
                Average number of items in the store
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
    </div>
  )
}
