<?php
$track = 0;
$count = 1;
for ($i=800; $i>=1; $i--) {
    // echo $i;
    if ($track + $i <= 5000) {
        $track += $i;
    } else {
        $count++;
        $track = 0;
        $track += $i;
    }
}
echo $count;