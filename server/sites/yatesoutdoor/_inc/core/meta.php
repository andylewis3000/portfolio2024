
<meta name="robots" content="noindex">
<meta property="og:title" content="Yates Outdoor Sales" />
<meta property="og:url" content="http://yatesoutdoor.com" />
<meta property="og:image" content="http://yatesoutdoor.com/2018/images/yates-outdoor-fb-banner.png" />
<meta property="og:site_name" content="Yates Outdoor Sales" />
<meta property="og:description" content="Outdoor Brand Sales, Strategy and Culture - Offering and supporting our retail partners with brands that compliment their geography, culture and customers end use is our mission." />
<?php  if ($_fb_id) { ?>		
<meta property="fb:app_id" content="<?=$_fb_id?>" />
<?php	} ?>	

<meta name="description" content="Offering and supporting our retail partners with brands that compliment their geography, culture and customers end use is our mission. If it be Outerwear, Apparel, Footwear, Camping Equipment, Ski Hardgoods or Outdoor Accessories, Yates Outdoor has you covered." />
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">

<?php
			
	// $p was already read and sanitized in _inc/defaults/load-page.php.
	// Re-reading it from the URL here bypassed that check.
	
	// SET DEFAULT HOME PAGE
	if (!$p) 
		$p = "home";

	
	// Build Titles
	switch($p)
	{
	
	case 'home':
		$title = '';
		$meta  = 'Yates Outdoor Sales - Outdoor Brand Sales, Strategy and Culture';
		break;
	case 'about':
		$title = 'About Us';
		$meta  = 'Yates Outdoor Sales - About Us';
		break;	
	case 'brands':
		$title = 'Our Brands';
		$meta  = 'Yates Outdoor Sales - Our Brands';
		break;
	case 'marmot':
		$title = 'Marmot';
		$meta  = 'Yates Outdoor Sales - Marmot';
		break;
	case 'gsi':
		$title = 'GSI Outdoors';
		$meta  = 'Yates Outdoor Sales - GSI Outdoors';
		break;
	case 'coghlans':
		$title = 'Coghlans';
		$meta  = 'Yates Outdoor Sales - Coghlans';
		break;
	case 'kuma':
		$title = 'Kuma Outdoor Gear';
		$meta  = 'Yates Outdoor Sales - Kuma Outdoor Gear';
		break;
	case 'craft':
		$title = 'Craft Sportswear';
		$meta  = 'Yates Outdoor Sales - Craft Sportswear';
		break;	
	case 'lifestraw':
		$title = 'Lifestraw';
		$meta  = 'Yates Outdoor Sales - Lifestraw';
		break;
	case 'drysure':
		$title = 'Drysure';
		$meta  = 'Yates Outdoor Sales - Drysure';
		break;
	case 'matador':
		$title = 'Matador';
		$meta  = 'Yates Outdoor Sales - Matador';
		break;
	case 'contact':
		$title = 'Contact';
		$meta  = 'Yates Outdoor Sales - Contact Us';
		break;
	}

	// Set Company Name
	$website_title = 'Yates Outdoor Sales';

	// Set Title

	if ($p == 'home')
	{
		$current_title = $website_title . " - Outdoor Brand Sales, Strategy and Culture";
	} else {
		$current_title = $website_title . " - " . $title;
	}
	
?>

<title><?=$current_title?></title>

<link rel="shortcut icon" type="image/ico" href="<?=$full_url?>favicon/favicon.ico" />