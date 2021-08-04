import React from 'react'
import { useMap } from 'react-leaflet';

export default function MapChild({center}) {
    const map = useMap();
    map.setView(center, map.getZoom());
    return  null;
}
