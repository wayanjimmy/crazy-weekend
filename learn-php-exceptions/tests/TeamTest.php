<?php

use App\Team;

class TeamTest extends PHPUnit_Framework_TestCase
{
    /** @test */
    public function a_team_has_a_name_and_size()
    {
        $team = new Team('Acme', 5);

        $this->assertEquals('Acme',  $team->name());
    }
}
