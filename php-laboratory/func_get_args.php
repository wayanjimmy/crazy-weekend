<?php

class Kentut 
{
    protected $meta = [];

    public function add()
    {
	foreach(func_get_args() as $meta) {
	    if (is_array($meta)) {
		$this->meta += $meta;
	    }
	}

	var_dump($this->meta);
    }
}

$kentut = new Kentut();
$kentut->add([
    'lengeh' => 'jimmy',
    'kamu' => 'lengeh',
]);

$kentut->add([
    'ketut' => 'lengeh'
]);
