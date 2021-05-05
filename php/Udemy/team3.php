<?php
$count = 0;
for ($i=1; $i<= 20000; $i++) {
    if ($i % 3 == 0) {
        $count += $i;
    } elseif (strpbrk($i, 3)) {
        $count += $i;
    }
}
// if (strpbrk(29, 3)) {
//     echo 123;
// }
echo $count;