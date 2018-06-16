<?php

namespace app\models\Entity;
use app\models\ProductBuilder;

class Product extends Entity {

    private $price;

    public function __construct(ProductBuilder $builder)
    {
        parent::__construct($builder);

        $this->price = $builder->getPrice();

    }

    /**
     * @return mixed
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * @param mixed $price
     */
    public function setPrice($price)
    {
        $this->price = $price;
    }

    public function __toString()
    {
        return 'product:' . $this->getId() . '/' . $this->getName() . '/' . $this->getPrice();
    }


}
