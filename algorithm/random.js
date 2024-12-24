function random(data = new Uint8Array([]), percentage = 0.1) {
	// I honestly don't know what to come up with for a data manipulation algorithm.
	// Probably swap bytes?
	const c = data.byteLength * percentage;
	for (let i = 0; i < c; i++) {
		const index1 = Math.floor(Math.random() * data.byteLength), index2 = Math.floor(Math.random() * data.byteLength);
		[data[index1], data[index2]] = [data[index2], data[index1]];
	}
}
