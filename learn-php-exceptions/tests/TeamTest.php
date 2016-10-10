<?php

require __DIR__ . '/../vendor/autoload.php';

use App\Team;
use App\User;

class TeamTest extends PHPUnit_Framework_TestCase
{
    /** @test */
    public function a_team_has_a_name_and_size()
    {
	$team = $this->newTeam('Acme'); 

        $this->assertEquals('Acme',  $team->name());
	$this->assertEquals(5,  $team->size());
    }

    /** @test */
    public function a_team_can_add_a_user()
    {
	$team = $this->newTeam('Acme');

	$team->add(new User('Joe'));

	$this->assertCount(1, $team->members());
    }

    /** @test */
    public function a_team_can_add_multiple_users_at_once()
    {
	$team = $this->newTeam('Acme');

	$team->addMany([
	    new User('Joe'),
	    new User('Mary'),
	]);

	$this->assertCount(2, $team->members());
    }

    /** 
     * @test
     * @expectedException App\Exceptions\TeamIsFull
     */
    public function it_does_not_allow_new_members_once_the_maximum_size_has_been_reached()
    {
	$this->newTeam('Acme', 2)->addMany([
	    new User('Joe'),
	    new User('Mary'),
	    new User('John'),
	]);
    }

    /**
     * @test
     * @expectedException App\Exceptions\UserAlreadyOnTeam
     */
    public function a_user_may_not_join_a_team_if_they_are_already_on_one()
    {
	$bill = new User('Bill');
	$bill->joinTeam($this->newTeam('Acme'));

	$team = $this->newTeam('New Team', 2)->add($bill);
    }

    protected function newTeam($name, $size = 5)
    {
	return new Team($name, $size);
    }
}
