import { treeBuilder } from "../../src/tree";

// Scenario: On a tree with 1 level
// Resolve the first line of the tree level 2 splitting by `\n`: -> "  x"
// Resolve the body of the tree taking into account that we have 1 less space at the beginning: " xxx"

describe('Tree in Typescript', () => {
    it('should build a tree based on two levels', () => {
      const tree=" x\n"
                   +"xxx\n"
                   +" |";
        expect(treeBuilder(2)).toEqual(tree);
    });

    it('should build a tree based on three levels', () => {
      const tree="  x\n"
                   +" xxx\n"
                   +"xxxxx\n"
                   +"  |";
        expect(treeBuilder(3)).toEqual(tree);
    });

    it('should build a tree based on four levels', () => {
      const tree="   x\n"
                   +"  xxx\n"
                   +" xxxxx\n"
                   +"xxxxxxx\n"
                   +"   |";
        expect(treeBuilder(4)).toEqual(tree);
    });
});




