"use client";

import { MapPin, Clock, Phone } from "lucide-react";

const locations = [
    {
        name: "Magdalena",
        address: "Av. Brasil 2890, Magdalena del Mar",
        hours: "Lun - Dom: 5:00 AM - 11:00 PM",
        phone: "+51 999 888 777",
        color: "from-yellow-500 to-yellow-600",
    },
    {
        name: "Surco",
        address: "Av. Primavera 1456, Santiago de Surco",
        hours: "Lun - Dom: 5:00 AM - 11:00 PM",
        phone: "+51 999 888 666",
        color: "from-gray-700 to-gray-900",
    },
    {
        name: "Punta Hermosa",
        address: "Av. Costanera 234, Punta Hermosa",
        hours: "Lun - Dom: 6:00 AM - 10:00 PM",
        phone: "+51 999 888 555",
        color: "from-yellow-600 to-yellow-700",
    },
    {
        name: "San Bartolo",
        address: "Malecón San Bartolo 567",
        hours: "Lun - Dom: 6:00 AM - 10:00 PM",
        phone: "+51 999 888 444",
        color: "from-gray-800 to-black",
    },
];

export function LocationsSection() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-black text-white mb-4">
                    Nuestras <span className="text-yellow-500">Sedes</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Encuentra la sede más cercana a ti y comienza tu
                    transformación
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {locations.map((location, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 border border-gray-800 hover:border-yellow-500 transition-all duration-300 overflow-hidden rounded-3xl group"
                    >
                        <div
                            className={`h-2 bg-gradient-to-r ${location.color}`}
                        />
                        <div className="p-8">
                            <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-yellow-500 transition-colors">
                                {location.name}
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300">
                                        {location.address}
                                    </span>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Clock className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300">
                                        {location.hours}
                                    </span>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Phone className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-300">
                                        {location.phone}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
