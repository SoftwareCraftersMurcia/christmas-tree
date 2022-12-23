<?php declare(strict_types=1);

namespace KataTests;

use Kata\TheClass;
use PHPUnit\Framework\TestCase;

class MyClassTest extends TestCase
{
    /** @test */
    public function it_creates_a_tree(): void
    {
        $xxx = new TheClass();

        $result = $xxx->theMethod();

        $tree = <<<TXT
        *
        |
        TXT;

        self::assertSame($tree, $result);
    }
}
