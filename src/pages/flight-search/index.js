import React, { useEffect, useRef, useState } from 'react'

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

    const airports = [{ "Code": "CGP", "Label": "Chattogram" }, { "Code": "CXB", "Label": "Cox\u0027s Bazar" }, { "Code": "DAC", "Label": "Dhaka" }, { "Code": "SPD", "Label": "Saidpur" }, { "Code": "ZYL", "Label": "Sylhet" }]

    const [fromAriportDDOpen, setFromAriportDDOpen] = useState(false)
    const [selectedFromAirport, setSelectedFromAirport] = useState({})
    const [toAriportDDOpen, setToAriportDDOpen] = useState(false)
    const [selectedToAirport, setSelectedToAirport] = useState({})

    const fromAriport = useRef(null)
    const formAirportDropDown = useRef(null)

    const toAriport = useRef(null)
    const toAirportDropDown = useRef(null)

    const handleTripSelect = (trip) => {
        tripTypes.forEach(value => {
            if (value.index == trip.index) {
                value.seleted = true
            } else {
                value.seleted = false
            }
        })
        setTripTypes(tripTypes)
        setSelectedTripType(trip.index)
    }

    const handleDropDown = (dropDownRef, motherRef, type) => {
        function handleClickOutside(event) {
            if (
                motherRef.current &&
                !motherRef.current.contains(event.target) &&
                !dropDownRef.current.contains(event.target)
            ) {
                if (type === "from") {
                    setFromAriportDDOpen(false);
                }
                if (type === "to") {
                    setToAriportDDOpen(false);
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
    };

    handleDropDown(formAirportDropDown, fromAriport, "from");
    handleDropDown(toAirportDropDown, toAriport, "to");

    const handleFromAirportDD = (event) => {
        event.stopPropagation()
    }

    const handleToAirportDD = (event) => {
        event.stopPropagation()
    }

    const handleSelectingAirport = (airport, type) => {
        if (type === "from") {
            setSelectedFromAirport(airport)
            setFromAriportDDOpen(false);
        }
        if(type === "to"){
            setSelectedToAirport(airport)
            setToAriportDDOpen(false);
        }
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

            <div className='parameter-selection mt-8.5'>
                <div className='grid grid-cols-12 gap-4 h-28'>

                    <div className='airport-selection col-span-6 border-2 border-radioMuted rounded-lg'>
                        <div className='h-full grid grid-cols-2'>

                            <div className='from-airport px-7.5 pt-4 border-r-2 border-radioMuted relative cursor-pointer' ref={fromAriport} onClick={() => setFromAriportDDOpen(prevState => !prevState)}>
                                <p className='text-base text-textSemiMuted font-bold'>From</p>
                                {
                                    selectedFromAirport.Label ? (
                                        <p className='text-2xl font-bold mt-4'>{selectedFromAirport.Label}</p>
                                    ) : (
                                        <p className='text-2xl text-radioMuted mt-4'>Choose Airport/City</p>
                                    )
                                }

                                <div className={`absolute w-47.5 h-60.5 py-7 rounded-lg left-0 top-30 cursor-default overflow-auto ${fromAriportDDOpen ? "block" : "hidden"}`} ref={formAirportDropDown} onClick={event => handleFromAirportDD(event)} style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)" }}>
                                    {
                                        airports.map((airport, index) => (
                                            <div className={`h-13 px-7.5 flex items-center hover:bg-primary cursor-pointer ${selectedFromAirport.Code == airport.Code ? "bg-primary" : "bg-white"}`} key={index} onClick={() => handleSelectingAirport(airport, "from")}>
                                                <p>{airport.Label}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className='to-airport px-7.5 pt-4 relative cursor-pointer' ref={toAriport} onClick={() => setToAriportDDOpen(prevState => !prevState)}>
                                <p className='text-base text-textSemiMuted font-bold'>Destination</p>
                                {
                                    selectedToAirport.Label ? (
                                        <p className='text-2xl font-bold mt-4'>{selectedToAirport.Label}</p>
                                    ) : (
                                        <p className='text-2xl text-radioMuted mt-4'>Choose Airport/City</p>
                                    )
                                }

                                <div className={`absolute w-47.5 h-60.5 py-7 rounded-lg left-0 top-30 cursor-default overflow-auto ${toAriportDDOpen ? "block" : "hidden"}`} ref={toAirportDropDown} onClick={event => handleToAirportDD(event)} style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)" }}>
                                    {
                                        airports.map((airport, index) => (
                                            <div className={`h-13 px-7.5 flex items-center hover:bg-primary cursor-pointer ${selectedToAirport.Code == airport.Code ? "bg-primary" : "bg-white"}`} key={index} onClick={() => handleSelectingAirport(airport, "to")}>
                                                <p>{airport.Label}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='date-selection col-span-3 border-2 border-radioMuted rounded-lg'>
                        g
                    </div>

                    <div className='passenger-number-selection col-span-3 border-2 border-radioMuted rounded-lg'>
                        b
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FlightSearchForm