import L from 'leaflet';
import { withLeaflet, MapControl } from 'react-leaflet';
import 'leaflet.locatecontrol';
import ReactDOMServer from 'react-dom/server';

class LocateControl extends MapControl {
    createLeafletElement(props) {
        const {
            leaflet: { map },
            ...options
        } = props;

        const lc = L.control.locate(options).addTo(map);
        lc.start();
        return lc;
    }
}
export default withLeaflet(LocateControl);