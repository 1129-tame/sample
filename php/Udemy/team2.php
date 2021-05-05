<?php
$result = 0;
for ($i=1; $i<100; $i++) {
    $result += pow($i, 4);
}
echo $result . "\n";
echo pow(1, 4);