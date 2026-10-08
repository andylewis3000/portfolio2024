<?php

// Patched copy of _inc/defaults/load-page.php, shared by both archived
// sites (sites/marosbistro and sites/yatesoutdoor). Upload to each site's
// _inc/defaults/ folder.

// DECODE FROM URL //

$raw = array("","","",'',"","","","","");
$edit = array("/","'"," ",'"',".",",","|","+","!");

$raw1 = array("-", "/", " ");
$edit1= array("+", "|", "-");

$raw2 = array("-","-","","-",'',"","","","","","","");
$edit2= array("-","/","'"," ",'"',".",",","(",")","!","@","|");

// GET PAGE //

$p = $_REQUEST['p'];
list($p,$p_id,$p_title) = explode(",", $p);

// Only allow names of existing pages: blocks path traversal via ?p=.
// Anything else falls back to the default (home) page.
$p = preg_replace('/[^A-Za-z0-9_-]/', '', (string) $p);
if ($p !== '' && !is_file(dirname(__DIR__, 2) . '/pages/' . $p . '.php')) {
	$p = '';
}

// GET CATEGORY //

$c = $_REQUEST['c'];
list($c_id) = explode(",", $c);

// SET DEFAULT PAGE, PAGE TITLE, META //

$page_title = "";
$meta = "";

// LOAD TITLES
include '_inc/core/titles.php';


// PROCESS PAGE TITLE AND META DATA FOR W3C/SEO //

$page_title = str_replace("&","&amp;",$page_title);
$meta = str_replace("&","&amp;",$meta);
$meta = trim(strip_tags($meta));

?>
