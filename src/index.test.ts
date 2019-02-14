import { Test } from './index';

test('Simple test', () => {
    const test = new Test();
    expect(test.getConfiguration()).toBeDefined();
    expect(test.getSearchService()).toBeDefined();
})