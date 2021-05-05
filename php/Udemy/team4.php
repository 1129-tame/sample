<?php
$count = 0;
for ($i=1; $i<5000; $i++) {
    $count += 1 / $i;
    if ($count > 9) {
        $result = $i;
        break;
    }
}
echo $i;