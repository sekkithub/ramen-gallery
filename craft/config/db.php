<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */


$dev = array(
    'server' => 'localhost',
    'user' => 'homestead',
    'password' => 'secret',
    'database' => 'ramengallery_dev');

$staging = array(
    'server' => 'localhost',
    'user' => 'ramengallery',
    'password' => 'jK6ZjsNBUpqhyRJj',
    'database' => 'ramengallery_staging');

$production = array(
        'server' => 'localhost',
        'user' => 'ramengallery',
    'password' => 'jK6ZjsNBUpqhyRJj',
    'database' => 'ramengallery_production');

return array(
    '*' => array(
        'tablePrefix' => 'craft',
    ),
    '.dev' => $dev,
    'localhost' => $dev,
    '192.168.10.10' => $dev,
    'ramengallery.app' => $dev,
    'ramengallery.sekkithub-staging.com' => $staging,
    'ramengallery.sekkithub-production.com' => $production,
    'www.sample.com' => $production
);