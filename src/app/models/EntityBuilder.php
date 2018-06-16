<?php


namespace app\models;
use app\models\Entity\Entity;

class EntityBuilder implements iBuilder {

    private $id;
    private $name;

    public function id(int $id){
        $this->id = $id;
        return $this;
    }

    public function name(string $name){
        $this->name = $name;
        return $this;
    }

    public function build(){
        return new Entity($this);
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


}