<?php

interface Author
{
	public function setName($name);

	public function getName();	
}

class ArticleAuthor  implements Author
{
	protected $name;

	public function setName($name)
	{
		$this->name = $name;
	}

	public function getName()
	{
		return $this->name;
	}
}

class Article 
{
	protected $title;
	protected $author;

	public function __construct($title, Author $author)
	{
		$this->title = $title;
		$this->author = $author;
	}

	public function getTitle()
	{
		return $this->title;
	}

	public function getAuthor()
	{
		return $this->author;
	}
}

$author1 = new ArticleAuthor();
$author1->setName('Joe');

$article1 = new Article('To PHP and Beyond', $author1);

echo sprintf('%s by %s', $article1->getTitle(), $article1->getAuthor()->getName());