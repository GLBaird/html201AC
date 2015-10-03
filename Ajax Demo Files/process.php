<?php

echo "<p>Post Data Received:</p>";
echo "<pre>";
print_r($_POST);
echo "</pre>";

echo "<p>Get Data Received:</p>";
echo "<pre>";
print_r($_GET);
echo "</pre>";

echo "<p>The user name is {$_POST["surname"]}</p>";