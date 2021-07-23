<?php

namespace App\services;

use Exception;
use Twilio\Rest\Client;

class Sms
{

    public function sendSms($number, $token)
    {
        $receiverNumber = $number;
        $message = "Please use this token to login to your account $token";

        try {

            $account_sid = getenv("TWILIO_SID");
            $auth_token = getenv("TWILIO_TOKEN");
            $twilio_number = getenv("TWILIO_FROM");

            $client = new Client($account_sid, $auth_token);
            $client->messages->create($receiverNumber, [
                'from' => $twilio_number,
                'body' => $message
            ]);

            dd('SMS Sent Successfully.');
        } catch (Exception $e) {
            dd("Error: " . $e->getMessage());
        }
    }
}
