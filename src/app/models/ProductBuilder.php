<?php

namespace app\models;
use app\models\Entity\Product;

class ProductBuilder extends EntityBuilder
{

    private  $price;

    public function price(float $price) {
        $this->price = $price;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getPrice()
    {
        return $this->price;
    }

    public function build(){
        return new Product($this);
    }
}
