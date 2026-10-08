<?php
	// LOAD PAGE DETAILS
  $query = "SELECT * FROM _user_pages WHERE url1 = '$p'";
  $result= mysqli_query($query);
	$val   = mysqli_fetch_array($result);
	$count = mysqli_num_rows($result);

	// SET VARIABLES
	$pgTitle    = $val['title1'];
	$pgURL      = $val['url1'];
	$pgMeta     = $val['meta1'];
	$pgSlide    = $val['photo1'];
	$pgHeadline = $val['headline1'];

	// ------------------------- //
	// MASTER CLASSES TITLES
	// ------------------------- //
	if ($p == 'master-classes')
	{
		
		// SET QUERY
		if ($p_id)
		{
		//	$query = "SELECT class1,meta1,photo1 FROM classes WHERE id1 = '$p_id'";
		} else {
	//		$query = "SELECT class1,meta1,photo1 FROM classes ORDER BY orderid1 ASC, id1 DESC LIMIT 1";
		}
		
		// RUN QUERY
		$result= mysqli_query($query);
		$val 	 = mysqli_fetch_array($result);
		
		// SET
		$pgTitle		= $val['class1'];	
		$meta 		= $val['meta1'];
 		$page_image	= $val['photo1'];

		// FORMAT 		
		if ($pgTitle)
			$pgTitle .= " - Master Classes";
 		if ($page_image)
	 		$page_image = $full_url . $page_image;

	}


	// ------------------------- //
	// CONTACT INFORMATION
	// ------------------------- //

		// QUERY: CONTACT
	//	$query = "SELECT * FROM contact LIMIT 1";
		$result= mysqli_query($query);
		$val   = mysqli_fetch_array($result);
		
		// SET ADDRESS & FORMMAIL
		$cAddress1 = nl2br(trim($val['address1']));
		$cAddress2 = nl2br(trim($val['address2']));
		$cPhone    = nl2br(trim($val['phone1']));
		$cEmail    = nl2br(trim($val['email1']));
		$cFormMail = $val['formmail1'];
	
		// FORMAT 	
		if ($cEmail)
			$cEmailDisplay = "<a aria-disabled=\"true\">$cEmail</a>";
	
	
		if (!$cFormMail)
			$cFormMail = $cEmail;
	
		if (!$cFormMail)
			$cFormMail = "john.c.meloche@gmail.com";
	
		// FULL ADDRESS FOR CONTACT PAGE
			$cAddressFull = $cAddress1;
		
		if ($cAddress1 && $cAddress2)
			$cAddressFull .= "&nbsp;&nbsp;|&nbsp;&nbsp;";
			
			$cAddressFull .= $cAddress2;
		


	// ------------------------- //
	// SOCIAL LINKS
	// ------------------------- //

		// QUERY: SOCIAL
	//	$query = "SELECT social_facebook,social_twitter,social_instagram FROM social LIMIT 1";
		$result= mysqli_query($query);
		$val   = mysqli_fetch_array($result);
		
		// SET LINKS
		$social_facebook  = $val['social_facebook'];
		$social_twitter   = $val['social_twitter'];
		$social_instagram = $val['social_instagram'];
		
		// FORMAT
		if ($social_facebook)
			$social_fb = "<a href=\"$social_facebook\" target=\"_blank\" class=\"icon-facebook\"></a>\n";

		if ($social_twitter)
			$social_tw = "<a href=\"$social_twitter\" target=\"_blank\" class=\"icon-twitter\"></a>\n";

		if ($social_instagram)
			$social_ig = "<a href=\"$social_instagram\" target=\"_blank\" class=\"icon-instagram\"></a>\n";
		
		
?>