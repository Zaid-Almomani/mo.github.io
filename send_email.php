<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $letter = $_POST['letter'];

  $to = "zaidmomani07@gmail.com"; // Replace with your email address
  $subject = "New Letter from $name";
  $message = "Name: $name\nEmail: $email\n\nLetter:\n$letter";

  if (mail($to, $subject, $message)) {
    http_response_code(200);
    echo "Email sent successfully!";
  } else {
    http_response_code(500);
    echo "Failed to send email.";
  }
}
?>