<?php

namespace App;

/**
 * @author Jimmy
 **/
class User
{
    protected $name;
    protected $team;

    public function __construct($name)
    {
	$this->name = $name;
    }

    public function joinTeam(Team $team)
    {
	$this->team = $team;
    }

    public function isOnTeam()
    {
	return !! $this->team;
    }
    
}
