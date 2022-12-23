<?php declare(strict_types=1);

namespace KataTests;

use Kata\Tree;
use PHPUnit\Framework\TestCase;

class TreeTest extends TestCase
{
    public function test_it_creates_a_tree(): void
    {
        $tree = new Tree();

        $result = $tree->generateWithHeight(1);

        $expected = <<<TXT
*
|
TXT;
        self::assertSame($expected, $result);
    }
}