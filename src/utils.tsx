/* eslint-disable import/prefer-default-export */

export const format = (value: number): string => {
    if (value >= 1000000000) return `${(value / 1000000000).toFixed(1).replace(/\.0$/, '')}G`;
    if (value >= 1000000) return `${(value / 1000000).toFixed(1).replace(/\.0$/, '')}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(1).replace(/\.0$/, '')}K`;
    return value.toString();
};
