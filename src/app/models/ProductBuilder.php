<?php

namespace app\models;
use app\models\Entity\Product;

class ProductBuilder implements iBuilder
{

    private $id;
    private $name;
    private $price;

    public function id(int $id)
    {
        $this->id = $id;
        return $this;
    }

    public function name(string $name)
    {
        $this->name = $name;
        return $this;
    }

    public function price(float $price) {
        $this->price = $price;
        return $this;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }
    /**
     * @return float
     */
    public function getPrice()
    {
        return $this->price;
    }

    public function build(){
        return new Product($this);
    }
}
