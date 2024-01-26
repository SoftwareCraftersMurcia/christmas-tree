import { tree } from "../../tree";

describe('kata tree', () => {
    it('should return a tree with 1 layers of leaves when we pass 1', () => {
        const result = tree(1)
        expect(result).toBe(`
x
|`);
    });
});