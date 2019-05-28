const { substractAsync, sumAsync } = require('./math');

/*
const sumAsync = (a, b) => {
    return Promise.resolve(a - b);
  }
  
  const subtractAsync = (a, b) => {
    return Promise.resolve(a - b);
  }
  */

test('sum async', async () => {
	const result = await sumAsync(3, 7);
	const expected = 10;

	expect(result).toBe(expected);
});

test('substrac async', async () => {
	const result = await substractAsync(10, 7);
	const expected = 3;

	expect(result).toBe(expected);
});

async function test(title, callback) {
	try {
		await callback();
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
				throw new Error(`${actual} is not equal to ${expected}`);
			}
		},
		toEqual() {},
		toBeGreaterThan() {}
	};
}
