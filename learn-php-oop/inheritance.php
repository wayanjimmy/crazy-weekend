<?php

class User {
	protected $username;

	public function setUsername($username)
	{
	   	$this->username = $username; 
	}

	public function getUsername()
	{
		return $this->username;
	}
}

class Admin extends User {

	public function expressYourRole()
	{
		return 'Admin';
	}

	public function sayHello()
	{
		return sprintf('Hello %s, %s!', $this->expressYourRole(), $this->username);
	}
}

$admin1 = new Admin();
$admin1->setUsername('Balthazar');
echo $admin1->sayHello();