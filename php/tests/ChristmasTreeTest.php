<?php declare(strict_types=1);

namespace KataTests;

use Kata\ChristmasTree;
use PHPUnit\Framework\TestCase;

class ChristmasTreeTest extends TestCase
{
    /** @test */
    public function given_a_height_of_2_print_correct_tree(): void
    {
        $christmasTree = new ChristmasTree();

        $result = $christmasTree->print(2);

        $correctOutput = " x\n" .
                         "xxx\n" .
                         " |";

        self::assertSame(
            $correctOutput,
            $result
        );
    }

    /** @test */
    public function given_a_height_of_3_print_correct_tree(): void
    {
        $christmasTree = new ChristmasTree();

        $result = $christmasTree->print(3);

        $correctOutput = "  x\n" .
                         " xxx\n" .
                         "xxxxx\n".
                         "  |";

        self::assertSame(
            $correctOutput,
            $result
        );
    }

    /** @test */
    public function given_a_height_of_4_print_correct_tree(): void
    {
        $christmasTree = new ChristmasTree();

        $result = $christmasTree->print(4);

        $correctOutput = "   x\n" .
                         "  xxx\n" .
                         " xxxxx\n".
                         "xxxxxxx\n".
                         "   |";

        self::assertSame(
            $correctOutput,
            $result
        );
    }
}
