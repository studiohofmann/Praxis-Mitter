'use client';

import { useMemo, useState } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

interface MapProps {
    center?: {
        lat: number;
        lng: number;
    };
    zoom?: number;
}

export default function Map({
    center = {
        lat: 47.398692694801,
        lng: 8.533587922089271
    },
    zoom = 15
}: MapProps) {
    const [loadError, setLoadError] = useState<Error | null>(null);

    const containerStyle = {
        width: '100%',
        height: '400px', // Fixed height
    };

    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        scrollwheel: true,
    }), []);

    if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
        return <div className="h-[400px] flex items-center justify-center bg-gray-100">
            Google Maps API key is missing
        </div>;
    }

    if (loadError) {
        return <div className="h-[400px] flex items-center justify-center bg-gray-100">
            Error loading Google Maps: {loadError.message}
        </div>;
    }

    return (
        <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <LoadScript
                googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
                onError={(err) => setLoadError(err)}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={zoom}
                    options={options}
                >
                    <MarkerF position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
}