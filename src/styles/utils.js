/**
 * Convers a px size to a em/rem size.
 *
 * @param {number} pxSize - the pixel size to convert
 * @param {number} [base] - the baseline font size
 */
export const getEmSize = (pxSize, base = 16) => pxSize / base;

/**
 * Formats em number value to string.
 *
 * @param {number} emSize - the em size to format
 * @param {boolean} [root] - whether we want to base on root element
 */
export const formatEm = (emSize, root = true) => `${emSize}${root ? 'rem' : 'em'}`;

/**
 * Formats px number value to string.
 *
 * @param {number} pxSize - the pixel size to format
 */
export const formatPx = pxSize => `${pxSize}px`;
