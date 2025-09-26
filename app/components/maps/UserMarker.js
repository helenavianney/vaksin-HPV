import { Marker, Popup, useMapEvents } from "react-leaflet";
import useUserLocation from "@/app/store/useUserLocation";

export default function UserMarker() {
  const { position, setPosition } = useUserLocation();
  
    const map = useMapEvents({
      locationfound(e) {
        setPosition({
          lat: e.latlng.lat,
          lng: e.latlng.lng
        });
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position} icon={redIcon}>
        <Popup>
          <div className="bg-white rounded-lg shadow-md p-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">📍</span>
              <p className="font-medium text-pink-600">Lokasi Kamu</p>
            </div>
          </div>
        </Popup>
      </Marker>
    );
  }