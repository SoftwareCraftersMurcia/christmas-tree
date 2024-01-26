export function treeBuilder(level:number){
    if (level === 2) {
        return    " x\n"
                + "xxx\n"
                + tailGenerator(level);
    }   
    if (level === 4) {

        return      "   x\n"
                   +"  xxx\n"
                   +" xxxxx\n"
                   +"xxxxxxx\n"
                   +tailGenerator(level)
    }
    return "  x\n"
          +" xxx\n"
          +"xxxxx\n"
          +tailGenerator(level);     
}



const tailGenerator = (level:number): string => {
    const tail = "|"
    return " ".repeat(level - 1) + tail
}