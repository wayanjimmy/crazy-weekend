<?php

class Gear
{
    protected $chainring;
    protected $cog;
    protected $wheel;

    public function __construct($chainring, $cog, $rim, $tire)
    {
        $this->chainring = $chainring;
        $this->cog = $cog;
        $this->wheel = new class($rim, $tire) {
            public $rim;
            public $tire;

            public function __construct($rim, $tire) {
                $this->rim = $rim;
                $this->tire = $tire;
            }

            public function diameter()
            {
                return $this->rim + ($this->tire * 2);
            }
        };
    }

    public function ratio()
    {
        return $this->chainring / (float) $this->cog;
    }

    public function gearInches()
    {
        return $this->ratio() * $this->wheel->diameter();
    }
}

$gear = new Gear(52, 11, 26, 1.5);
echo $gear->gearInches();
