import { getTimestampSeconds } from '../utilities/date';

const toggleLock = id => ({
  type: 'TOGGLE_LOCK',
  timestamp: getTimestampSeconds(),
  slug: id,
});

export default toggleLock;

