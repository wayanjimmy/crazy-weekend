<?php

class User
{
	protected $username;
}

interface Author
{
	public function setAuthorPrivileges(array $privileges);

	public function getAuthorPrivileges();
}

interface Editor
{
	public function setEditorPrivileges(array $privileges);

	public function getEditorPrivileges();
}

class AuthorEditor extends User implements Author, Editor
{
	protected $authorPrivilegesArray;
	protected $editorPrivilegesArray;	

	public function setAuthorPrivileges(array $privileges)
	{

	}

	public function getAuthorPrivileges()
	{

	}

	public function setEditorPrivileges(array $privileges)
	{
	    
	}

	public function getAuthorPrivileges()
	{
	    
	}
} 