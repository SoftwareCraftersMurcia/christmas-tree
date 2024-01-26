export function treeBuilder(level:number){
    if (level === 2) {
        return    topLeafGenerator(level) + '\n'
                + "xxx\n"
                + tailGenerator(level);
    }   
    if (level === 4) {

        return      topLeafGenerator(level) + '\n'
                   +"  xxx\n"
                   +" xxxxx\n"
                   +"xxxxxxx\n"
                   +tailGenerator(level)
    }
    if (level === 5) {

        return     topLeafGenerator(level) + '\n'
                   +"   xxx\n"
                   +"  xxxxx\n"
                   +" xxxxxxx\n"
                   +"xxxxxxxxx\n"
                   +tailGenerator(level)
    }
    return topLeafGenerator(level) + '\n'
          +" xxx\n"
          +"xxxxx\n"
          +tailGenerator(level);     
}



const tailGenerator = (level:number): string => {
    const tail = "|"
    return " ".repeat(level - 1) + tail;
}

const topLeafGenerator = (level: number): string => {
    const leaf = 'x';
    return " ".repeat(level - 1) + leaf;
}