<?php declare(strict_types=1);

namespace Kata;

class ChristmasTree
{
    public function print(int $height): string
    {

        $tree = str_pad('x' , $height, " ", STR_PAD_LEFT) . "\n";

        for ($i = 1; $i < $height; $i++) {
            $tree .= str_pad('x' , $i + 2, "x", STR_PAD_LEFT);
            $tree .= str_pad('' , $i + 2, " ", STR_PAD_LEFT) . "\n";
        }

        $trunk = str_pad('|' , $height, " ", STR_PAD_LEFT);
        $tree .= $trunk;



        return $tree;
    }
}
