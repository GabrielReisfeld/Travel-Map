import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Room, Star } from "@material-ui/icons";
import "./App.css";

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 48,
    longitude: 10,
    zoom: 4,
  });
  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
      >
        <Marker
          latitude={48.858093}
          longitude={2.294694}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Room style={{ fontSize: viewport.zoom * 5, color: "slateblue" }} />
        </Marker>
        {/* <Popup
          latitude={48.858093}
          longitude={2.294694}
          closeButton={true}
          closeOnClick={false}
          //onClose={() => togglePopup(false)}
          anchor="bottom"
        >
          <div className="card">
            <label>Place</label>
            <h4 className="place">Eifell</h4>
            <label>Review</label>
            <p className="desc">Beutiful place</p>
            <label>Rating</label>
            <div>
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
            </div>
            <label>Information</label>
            <span className="username">
              Created by <b>Pepe</b>
            </span>
            <span className="date">1 hour ago</span>
          </div>
        </Popup> */}
      </ReactMapGL>
    </div>
  );
}

export default App;
