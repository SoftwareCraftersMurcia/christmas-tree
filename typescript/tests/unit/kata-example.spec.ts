import { treeBuilder } from "../../src/tree";

describe('Tree in Typescript', () => {
  
    it('should build a tree based on two levels', () => {
      let resultado=" x\n"
                   +"xxx\n"
                   +" |";
        expect(treeBuilder(2)).toEqual(resultado);
    });
});




