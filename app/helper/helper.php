<?php
if (!function_exists('slug')) {
    function slug($string)
    {
        $slug = trim($string); // trim the string
        $slug = preg_replace('/[^a-zA-Z0-9 -]/', '', $slug); // only take alphanumerical characters, but keep the spaces and dashes too...
        $slug = str_replace(' ', '-', $slug); // replace spaces by dashes
        $slug = strtolower($slug);  // make it lowercase
        return $slug;
    }
}

if (!function_exists('sendToken')) {
    function sendToken($number, $name, $token)
    {

        $curl = curl_init();
        $message = "Dear $name use this token to login to your portal $token";
        $postFields = ["to" => $number, "message" => $message, "sender_name" => "lapsit"];
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'http://sandbox-api.sendchamp.com/api/v1/sms/send',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => json_encode($postFields),
            CURLOPT_HTTPHEADER => array(
                'Accept: application/json',
                'Authorization: Bearer sendchamp_test_$2y$10$U2SHG5T2F/cr0jfzNCKgguHv.23plvJP/75EzZjF5MtLXz65SDrQi',
                'Content-Type: application/json'
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);
        if ($err) {
            var_dump($err);
        }
        curl_close($curl);
        return json_decode($response);
    }
}
