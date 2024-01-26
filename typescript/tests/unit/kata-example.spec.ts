import { tree } from "../../tree";

describe('kata tree', () => {
    it('should return a tree with 1 layers of leaves when we pass 1', () => {
        const result = tree(1)
        expect(result).toBe(`
x
|`);
    });

    it('should return a tree with 2 layers of leaves when we pass 2', () => {
        const result = tree(2)
        expect(result).toBe(`
 x
xxx
 |`);
    });

    it('should return a tree with 3 layers of leaves when we pass 3', () => {
        const result = tree(3)
        expect(result).toBe(`
  x
 xxx
xxxxx
  |`);
    });
});
