import { Marker, Popup } from "react-leaflet";

export default function LabsMarker() {
    const { labs } = useLabsLocation();

    return labs.map(lab => (
      <Marker 
        key={lab.id} 
        position={[lab.latitude, lab.longitude]} 
        icon={yellowIcon}
      >
        <Popup>
          <div className="bg-white rounded-lg p-3 min-w-[200px]">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🏥</span>
              <h3 className="font-bold text-pink-600">{lab.name}</h3>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <span>📍</span> {lab.address}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <span>📞</span> {lab.phone}
              </p>
            </div>
          </div>
        </Popup>
      </Marker>
    ));
  }