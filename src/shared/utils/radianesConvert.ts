export const radianesConvert = (lat: number, long: number) => {
	const latRadianes = (lat * Math.PI) / 180;
	const longRadianes = (long * Math.PI) / 180;

	return { latRadianes, longRadianes };
};
