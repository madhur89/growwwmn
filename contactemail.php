<?php 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["fname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $loanType = $_POST["floatingSelect"];
    $cibil = $_POST["cibil"];
    $loanAmount = $_POST["lamount"];
    $message = $_POST["message"];

    $to = "akashsaini5274@gmail.com"; // Replace with your email address
    $subject = "Contact us Enquiry";

    $emailContent = "Name: $name\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Phone: $phone\n";
    $emailContent .= "Loan Type: $loanType\n";
    $emailContent .= "Cibil: $cibil\n";
    $emailContent .= "Loan Amount: $loanAmount\n";
    $emailContent .= "Message:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    mail($to, $subject, $emailContent, $headers);

    // Redirect the user to a thank-you page after the email is sent
    header("Location: thank_you_page.html");
    exit(); // Ensure that no further code is executed after the redirect
}

?>