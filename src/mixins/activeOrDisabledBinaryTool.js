import { setToolDisabledForElement, setToolActiveForElement } from '../store/setToolMode.js';

/**
 * If one attempts to change mode to 'passive', redirect the tool to 'disabled'.
 *
 * @param {HTMLElement} element The element on which the tool resides.
 */
function passiveCallback (element) {
  setToolDisabledForElement(element, this.name);
}

/**
 * If one attempts to turn the tool 'enabled', redirect the tool to 'active'.
 *
 * @param {HTMLElement} element The element on which the tool resides.
 */
function enabledCallback (element) {
  setToolActiveForElement(element, this.name);
}


/**
 * @mixin activeOrDisabledBinaryTool - Redirect enabled/passive mode changes
 *                                     to active/disabled.
 */
export default {
  passiveCallback,
  enabledCallback
};
