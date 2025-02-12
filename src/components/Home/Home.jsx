import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [selectedIndustry, setSelectedIndustry] = useState('')
  const navigate = useNavigate()

  const industries = [
    'Technology and IT Services',
    'E-Commerce',
    'Courier Services',
    'Fashion',
    'Transportation and Logistics',
  ]

  const [companyName, setCompanyName] = useState('')
  const [companyWebsite, setCompanyWebsite] = useState('')
  const [companySize, setCompanySize] = useState('')
  const companySizes = ['Small', 'Medium', 'Large']

  const handleSubmit = () => {
    if (companyName && companyWebsite && selectedIndustry && companySize) {
      alert(
        `Form Submitted! Company: ${companyName}, Website: ${companyWebsite}, Industry: ${industry}, Size: ${companySize}`
      )
    } else {
      alert('Please fill out all fields.')
    }
  }

  const handleIndustrySelect = () => {
    switch (selectedIndustry) {
      case 'Technology and IT Services':
        navigate('/technology_it')
        break
      case 'E-Commerce':
        navigate('/e_commerce')
        break
      case 'Courier Services':
        navigate('/courier')
        break
      case 'Fashion':
        navigate('/fashion')
        break
      case 'Transportation and Logistics':
        navigate('/transportation')
        break
      default:
        alert('Please select an industry')
        break
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            Company Information
          </h2>
          <div className="space-y-4">
            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-orange-700">
                Company Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter company name"
              />
            </div>

            {/* Company Website */}
            <div>
              <label className="block text-sm font-medium text-orange-700">
                Company Website
              </label>
              <input
                type="url"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                value={companyWebsite}
                onChange={(e) => setCompanyWebsite(e.target.value)}
                placeholder="www.example.com"
              />
            </div>

            {/* Industry Dropdown */}
            <div>
              <label className="block text-sm font-medium text-orange-700">
                Industry
              </label>
              <select
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
              >
                <option className="text-gray-500 bg-red-200" value="">
                  -- Select Industry --
                </option>
                {industries.map((industry, index) => (
                  <option key={index} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            {/* Company Size Dropdown */}
            <div>
              <label className="block text-sm font-medium text-orange-700">
                Company Size
              </label>
              <select
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500"
                value={companySize}
                onChange={(e) => setCompanySize(e.target.value)}
              >
                <option className="text-gray-500" value="">
                  -- Select Company Size --
                </option>
                {companySizes.map((sizeOption, index) => (
                  <option key={index} value={sizeOption}>
                    {sizeOption}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleIndustrySelect}
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-lime-600"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
