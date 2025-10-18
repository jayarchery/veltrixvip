<?php
$filePath = __DIR__ . "/staff_data.xml";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $position = htmlspecialchars($_POST['position']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);

    // Check if the XML file exists
    if (file_exists($filePath)) {
        // Load existing XML
        $xml = simplexml_load_file($filePath);
    } else {
        // Create a new XML structure
        $xml = new SimpleXMLElement('<staffRecords/>');
    }

    // Add new staff entry
    $staff = $xml->addChild('staff');
    $staff->addChild
