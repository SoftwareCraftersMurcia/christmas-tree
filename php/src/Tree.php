<?php declare(strict_types=1);

namespace Kata;

class Tree
{
    public function generateWithHeight(int $height): string
    {
        if ($height == 1) {
            return <<<TXT
*
|
TXT;
        } else if ($height == 2) {
            return <<<TXT
 *
***
 |
TXT;
        }
    }
}
