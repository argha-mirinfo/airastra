import React, { useEffect, useState } from 'react'

const FlightSearchForm = () => {
    const [selectedTripType, setSelectedTripType] = useState(1)
    const [tripTypes, setTripTypes] = useState([
        {
            name: "One Way",
            value: "one_way",
            seleted: false,
            index: 0
        },
        {
            name: "Round Trip",
            value: "round_trip",
            seleted: true,
            index: 1
        },
    ])

    const handleTripSelect = (trip) => {
        tripTypes.forEach(value => {
            if(value.index == trip.index){
                value.seleted = true
            }else {
                value.seleted = false
            }
        })
        setTripTypes(tripTypes)
        setSelectedTripType(trip.index)
    }

    useEffect(() => {
        console.log("selectedTripType", selectedTripType)
    }, [selectedTripType])

    return (
        <div className='px-8 pt-13'>
            <div className='trip-select flex'>
                {
                    tripTypes.map((trip, index) => (
                        <div className={`flex items-center cursor-pointer mr-11`} onClick={() => handleTripSelect(trip)} key={index}>
                            <div className={`h-8.5 w-8.5 border-2 ${trip.seleted ? "border-radioColored" : "border-radioMuted"} rounded-full flex justify-center items-center`}>
                                <div className={`h-6 w-6 rounded-full ${trip.seleted ? "bg-primary" : "bg-white"}`}>

                                </div>
                            </div>
                            <p className={`text-2xl ${trip.seleted ? "text-radioColored" : "text-radioMuted"} ml-5`}>{trip.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FlightSearchForm