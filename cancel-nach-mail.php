<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $borrowerName = $_POST["bname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $loanAgreementNo = $_POST["loanno"];
    $nachCancelRequest = $_POST["floatingSelect"];
    $remarks = $_POST["mesage"];

    $to = "akashsaini5274@gmail.com"; // Replace with your email address
    $subject = "Cancel NACH Request";

    $emailContent = "Borrower Name: $borrowerName\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Phone: $phone\n";
    $emailContent .= "Loan Agreement Number: $loanAgreementNo\n";
    $emailContent .= "NACH Cancel Request: $nachCancelRequest\n";
    $emailContent .= "Remarks:\n$remarks";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    mail($to, $subject, $emailContent, $headers);

    // Redirect the user to a thank-you page after the email is sent
    header("Location: thank_you_page.html");
    exit(); // Ensure that no further code is executed after the redirect
}
?>
