<?php
if (isset($_POST['make_payment'])) {
    if ($_POST['fname'] != '') {
        if ($_FILES["filename"]["error"] == UPLOAD_ERR_OK) {
            $target_dir = "careerenquiry/";
            $filen11 = preg_replace("/[^a-z0-9\_\-\.]/i", '', basename($_FILES["filename"]['name']));
            $finalfile = str_replace(" ", "", $filen11);
            $target_file = $target_dir . $finalfile;
            $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
            $extensions_arr = array("jpg", "jpeg", "png", "pdf", "doc", "docx", "odt", "ods");

            if (in_array($imageFileType, $extensions_arr)) {
                move_uploaded_file($_FILES["filename"]['tmp_name'], $target_file);

                $headers = "MIME-Version: 1.0\r\n";
                $headers .= "Content-type: text/html; charset=ISO-8859-1\r\n";
                $message = "Dear Admin,<br><br>Sombody has filled the Career Enquiry!<br><br>";
                $message .= '<table width="100%" style="border-collapse: collapse;border: 1px solid black;text-align:left;"><tbody><tr><th colspan="2"><u>Personal Information</u></th></tr><tr><td colspan="2">&nbsp;</td></tr><tr><th>Name</th><td>' . $_POST['fname'] . '</td></tr><tr><th>Phone</th><td>' . $_POST['phone'] . '</td></tr><tr><th>Email</th><td>' . $_POST['email'] . '</td></tr><tr><th>Message</th><td>' . $_POST['message'] . '</td></tr><tr><th>CV/Resume</th><td><a href="https://' . $_SERVER['HTTP_HOST'] . '/careerenquiry/' . $finalfile . '">Link</a></td></tr></tbody></table><br />';
                $message .=$message1;
                $message .='</tbody></table>';
                $message .= '<br>Thanks & Regards<br>Grow Money Capital';
                $subject = 'Career Enquiry';
                $to = 'akashsaini5274@gmail.com';
            } else {
                echo "Invalid file type. Allowed types: jpg, jpeg, png, pdf, doc, docx, odt, ods";
            }
        } else {
            echo "File upload error: " . $_FILES["filename"]["error"];
        }
    }
}
?>
