<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
    '*' => array(
        'omitScriptNameInUrls' => true,
        'generateTransformsAfterPageLoad' => false,
        'allowAutoUpdates' => false,
        'defaultImageQuality' => 75
    ),

    'localhost' => array(
        'devMode' => true,
        'siteUrl' => 'http://localhost:8888',
        'environment' => 'dev'
    ),

    '.app' => array(
        'devMode' => true,
        'siteUrl' => 'http://ramengallery.app',
        'environment' => 'dev'
    )
);