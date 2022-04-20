import Icon from './this';

export const registerSVGIcon = (vueApp) => {
    vueApp.component('c-icon', Icon);
    const requireAll = requireContext => requireContext.keys().map(requireContext);
    const req = require.context('../../assets/icon', false, /\.svg$/);
    requireAll(req);
}
