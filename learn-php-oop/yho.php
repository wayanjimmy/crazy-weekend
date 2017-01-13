<?php

class Person
{
        public function walk()
        {
                echo "I'm walking\n";
        }
}

class Jimmy extends Person
{
        public function walk()
        {
                parent::walk();
                echo "Jimmy walking\n";
        }
}

$jimmy = new Jimmy();
$jimmy->walk();
