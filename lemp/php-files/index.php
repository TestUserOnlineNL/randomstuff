<!DOCTYPE html>
<html>

<head>
  <title>LEMP Server Project</title>
</head>

<body>
  <?php
  class Car
  {
    public $color;
    public $model;
    public function __construct($color, $model)
    {
      $this->color = $color;
      $this->model = $model;
    }
    public function message()
    {
      return "My car is a " . $this->color . " " . $this->model . "!";
    }
  }

  $myCar = new Car("black", "Volvo");
  echo $myCar->message();
  echo "<br>";
  $myCar = new Car("red", "Toyota");
  echo $myCar->message();

  #  ====

  $age = array("Peter" => "35", "Ben" => "37", "Joe" => "43");

  foreach ($age as $x => $val) {
    echo "$x = $val<br>";
  }
  ?>
</body>

</html>