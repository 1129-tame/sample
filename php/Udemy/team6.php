<?php 
$array = range(2, 10);
print_r($array);

foreach ($array  as $val) {
    for($i=2; $i<$val; $i++) {
        if($val%$i == 0) {
          $b = $val;
          break;
        } 
      }
}
print_r($array);
