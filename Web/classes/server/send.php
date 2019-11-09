<?php 

if (!empty($_POST)) {
    // üzenet alapértékei (küldő, tárgy)
    $success = false;
    $errormsg = '';
    $sender = '"Admin" <admin@drnagymatyas.hu>';
    $to = '"Dr. Nagy Mátyás" <info@drnagymatyas.hu>';
    $subject = 'üzenet a weboldalról';

    // form adatok
    $fromName = $_POST['name'];
    $fromEmail = $_POST['email'];
    $message = $_POST['message'];
    
    $message = 'Az üzenet feladója: '.
               '"'.$fromName.'" <'.$fromEmail.'>'.
               ' Az üzenet szövege: '.$message;

    try {
        // header adatok a form és alapadatokalapján
        $headers           =  array( 
            'Date'          => date('r', $_SERVER['REQUEST_TIME']),
            'Message-Id'    => '<' . $_SERVER['REQUEST_TIME'] . md5($_SERVER['REQUEST_TIME']) . '@' . $_SERVER['SERVER_NAME'] . '>',
            'Content-Type'  => 'text/html; charset=UTF-8', 
            'Content-Transfer-Encoding' => 'quoted-printable',
            'MIME-Version'  => '1.0',
            'From'          => $sender, 
            'To'            => $to, 
            'Reply-To'      => $fromEmail
        );

        $success = mail($to, $subject, $message, implode("\n", $headers));
            
    } catch (Exception $e){
        $errormsg .= $e->getMessage(). "\n";
        echo $errormsg;
    }

    // visszatérési érték
    if ($success){
        echo 'success';
    }
    else {
        echo $errormsg;
    }
}
?>