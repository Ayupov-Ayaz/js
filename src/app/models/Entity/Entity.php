<?php


namespace app\models\Entity;
use app\models\EntityBuilder;

class Entity
{

    private $id;
    private $name;

    /**
     * Entity constructor.
     * @param EntityBuilder $builder
     */
    public function __construct(EntityBuilder $builder)
    {
        $this->id = $builder->getId();
        $this->name = $builder->getName();
    }


    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId(int $id)
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name)
    {
        $this->name = $name;
    }
}

