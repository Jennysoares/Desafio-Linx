<?php
if(isset($_GET['size']) && $_GET['size'] > 520) {
    include_once('index.html');
} else {
    include_once('mobile.html');
} ?>