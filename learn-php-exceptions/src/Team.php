<?php

namespace App;

/**
* @author Jimmy
*/
class Team
{
    protected $name;
    protected $size;

    public function __construct($name, $size = 5)
    {
        $this->name = $name;
        $this->size = $size; 
    }

    public function name()
    {
        return $this->name;
    }
}