//@flow
import { API_URL, credentialsPolicy } from './';

export const PAGE_SIZE = process.env.REACT_APP_PAGE_SIZE || 25;
export const overpassBase =
  process.env.REACT_APP_OVERPASS_BASE ||
  '//overpass.osmcha.org/api/interpreter';
export const mapboxAccessToken =
  process.env.REACT_APP_MAPBOX_ACCESS_TOKEN ||
  'pk.eyJ1Ijoib3BlbnN0cmVldG1hcCIsImEiOiJjam10OXpmc2YwMXI5M3BqeTRiMDBqMHVyIn0.LIcIDe3TZLSDdTWDoojzNg';
export const enableRealChangesets = !process.env
  .REACT_APP_DISABLE_REAL_CHANGESETS;

export const nominatimBaseUrl = process.env.REACT_APP_NOMINATIM_BASE_URL || 'https://nominatim.openstreetmap.org';
export const nominatimCredentials = (process.env.REACT_APP_NOMINATIM_CREDENTIALS === 'enabled' ? credentialsPolicy : 'omit');
export const overpassApiUrl = process.env.REACT_APP_OVERPASS_API_URL || 'https://overpass-api.de/api/interpreter';
export const overpassCredentials = (process.env.REACT_APP_OVERPASS_CREDENTIALS === 'enabled' ? credentialsPolicy : 'omit');
export const osmBaseUrl = process.env.REACT_APP_OSM_BASE_URL || 'https://www.openstreetmap.org';
export const osmApiUrl = process.env.REACT_APP_OSM_API_URL || 'https://api.openstreetmap.org';
export const osmAuthUrl = process.env.REACT_APP_OSM_AUTH_URL || `${osmBaseUrl}/oauth/authorize`;
export const osmCredentials = (process.env.REACT_APP_OSM_CREDENTIALS === 'enabled' ? credentialsPolicy : 'omit');
export const osmchaSocialTokenUrl = `${API_URL}/social-auth/`;
export const osmchaUrl = API_URL.replace('api/v1', '');

// set a default from date x days before today
export const DEFAULT_FROM_DATE = parseInt(process.env.REACT_APP_DEFAULT_FROM_DATE || 2);
// exclude changesets newer than x minutes. It's needed because of the difference
// between the time a changeset is processed by OSMCha and the time its map
// visualization is available
export const DEFAULT_TO_DATE = parseInt(process.env.REACT_APP_DEFAULT_TO_DATE || 5);
export const PAGE_SIZE = parseInt(process.env.REACT_APP_PAGE_SIZE || 75);
export const osmUrl =
  process.env.REACT_APP_OSM_URL || 'https://www.openstreetmap.org';
export const isOfficialOSM = osmUrl === 'https://www.openstreetmap.org';
export const apiOSM =
  process.env.REACT_APP_OSM_API || 'https://api.openstreetmap.org/api/0.6';

export const whosThat =
  'https://whosthat.osmz.ru/whosthat.php?action=names&id=';

export const nominatimUrl =
  process.env.REACT_APP_NOMINATIM_URL ||
  'https://nominatim.openstreetmap.org/search.php';
