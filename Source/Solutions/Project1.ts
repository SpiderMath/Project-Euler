const GetTheStuffDone = {
	approach1(upperlimit: number) {
		const n3 = Math.floor((upperlimit - 1) / 3);
		const n5 = Math.floor((upperlimit - 1) / 5);
		const n15 = Math.floor((upperlimit - 1) / 15);

		const a3 = 3;
		const d3 = 3;

		const a5 = 5;
		const d5 = 5;

		const a15 = 15;
		const d15 = 15;

		const S3 = (n3 / 2) * ((2 * a3) + (n3 - 1) * d3);
		const S5 = (n5 / 2) * ((2 * a5) + (n5 - 1) * d5);
		const S15 = (n15 / 2) * ((2 * a15) + (n15 - 1) * d15);

		console.log(`${S3}\n${S5}\n${S15}`);

		return (S3 + S5) - S15;
	},
	approach2(upperlimit: number) {
		const n3 = Math.floor((upperlimit - 1) / 3);
		const n5 = Math.floor((upperlimit - 1) / 5);
		const n15 = Math.floor((upperlimit - 1) / 15);

		const a3 = 3;
		const a5 = 5;
		const a15 = 15;

		const An3 = (upperlimit - 1) - ((upperlimit - 1) % 3);
		const An5 = (upperlimit - 1) - ((upperlimit - 1) % 5);
		const An15 = (upperlimit - 1) - ((upperlimit - 1) % 15);

		const S3 = (n3 / 2) * (a3 + An3);
		const S5 = (n5 / 2) * (a5 + An5);
		const S15 = (n15 / 2) * (a15 + An15);

		console.log(`${S3}\n${S5}\n${S15}`);

		return (S3 + S5) - S15;
	},
};

console.log(GetTheStuffDone.approach1(1000));
console.log(GetTheStuffDone.approach2(1000));