<?php

namespace App;

class Collection implements \ArrayAccess
{
    protected $items;

    public function __construct($items)
    {
        $this->items = $items;
    }

    public function map($callback)
    {
        return new static(array_map($callback, $this->items));
    }

    public function filter($callback)
    {
        return new static(array_filter($this->items, $callback));
    }

    public function toArray()
    {
        return $this->items;
    }

    public static function make($items)
    {
        return new static($items);
    }

    public function offsetExists($offset)
    {
    	return array_key_exists($offset, $this->items);
    }

    public function offsetGet($offset)
    {
    	return $this->items[$offset];
    }

    public function offsetSet($offset, $value)
    {
    	if ($offset == null) {
    		$this->items[] = $value;
    	} else {
    		$this->items[$offset] = $value;
    	}
    }

    public function offsetUnset($offset)
    {
    	unset($this->items[$offset]);
    }
}
