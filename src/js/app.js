import '../css/index.css';
import './index.js';
// import '../svg/trophy.svg';

// require.context('../svg', false, /(?:)/);
// requireContext.keys().map(requireContext)

// function importAll(r) {
//     r.keys().forEach(r);
// }

// importAll(require.context('../img', false, /[0-9a-z]+\.jpg$/i))
// importAll(require.context('../svg', false, /[0-9a-z]+\.svg$/i))

requireContext = importAll(require.context('../img', false, /[0-9a-z]+\.jpg$/i))
requireContext.keys().map(requireContext)

requireContext2 = importAll(require.context('../svg', false, /[0-9a-z]+\.svg$/i))
requireContext2.keys().map(requireContext2)



