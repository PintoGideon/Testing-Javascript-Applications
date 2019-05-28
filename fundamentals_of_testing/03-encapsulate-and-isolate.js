const { substract, sum } = require('./math');

const sumTest = () => {
	const result = sum(3, 7);
	const expected = 10;

	expect(result).toBe(expected);
};
test('sum', sumTest);

const substractTest = () => {
	const result = substract(7, 3);
	const expected = 4;

	expect(result).toBe(expected);
};

test('substract', substractTest);

function test(title, callback) {
	try {
		callback();
		console.log(`✓ ${title}`);
	} catch (error) {
		console.error(`✗ ${title}`);
		console.error(error);
	}
}

function expect(actual) {
	return {
		toBe(expected) {
			if (actual !== expected) {
				throw new Error(`${actual} is not equal
                to ${expected}`);
			}
		},
		toEqual() {},
		toBeGreaterThan() {}
	};
}
