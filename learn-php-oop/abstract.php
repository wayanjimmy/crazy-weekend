<?php

abstract class User
{
    protected $username;

    abstract public function stateYourRole();

    public function getUsername()
    {
        return $this->username;
    }

    public function setUsername($username)
    {
        $this->username = $username;
    }
}

class Admin extends User
{
    public function stateYourRole()
    {
        return 'admin';
    }
}

class Viewer extends User
{
    public function stateYourRole()
    {
        return 'viewer';
    }
}

$admin1 = new Admin();
$admin1->setUsername('Balthazar');
echo sprintf('User %s is %s', $admin1->getUsername(), $admin1->stateYourRole());
