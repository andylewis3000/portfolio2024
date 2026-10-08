<?php 

// error_reporting(-1);
// ini_set('display_errors', 'On');

//error_reporting(0);

// DB CONNECT
//require '_connect/db_connect.php';

// INCLUDE SETUP FILES
include 'include.php';

//$menu_url="http://marosbistro.com/";
//$full_url=$menu_url . "2017/";

?>

<!DOCTYPE html> 
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://www.facebook.com/2008/fbml" xmlns:og="http://opengraphprotocol.org/schema/">

<head>
	<?php 
	// META
	include '_inc/core/meta.php';

	// LOAD SCRIPTS
	include '_inc/core/scripts.php';
	?>
</head>

<body>

	<?php 
	// ANALYTICS
	include_once("_inc/defaults/analytics.php");
	
	// ANALYTICS TRACKING
	include_once("_inc/core/analytics-tracking.php");

	?>
	
	<div class="sticky-contact">
		<div class="window">
			<div class="addy">
				<p>135 Kerr Street Oakville, Ontario l6k 3a6</p>
			</div>
			<div class="addy anim">
				<p><a aria-disabled="true">289.837.2389</a>&nbsp;&nbsp;<a aria-disabled="true">eat@marosbistro.com</a></p>
			</div>
			<div class="clear"></div>
		</div>
	</div>
		
	<?php
	
	// LANDING
	include 'pages/landing.php';
	
	// ABOUT
	 include 'pages/about.php';
	
	// TESTIMONIALS
	include 'pages/testimonials.php';
	
	// GALLERY
	include 'pages/gallery.php';
	
	// MENUS
	include 'pages/menus.php';
	
	// DELIVERY
	include 'pages/delivery.php';
	
	// CATERING
	include 'pages/catering.php';
	
	// CONTACT
	include 'pages/contact.php';
	
	// FOOTER
	include '_inc/structure/footer.php';

	// SCRIPTS
	include '_inc/core/scripts-bottom.php';
	
	?>
</body>
</html>
