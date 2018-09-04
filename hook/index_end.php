<?php 
	exit;
	$ak_eatwhat = kv_get('ak_eatwhat');
	if($ak_eatwhat['eatwhat_index'] == 1){
		include _include(APP_PATH.'plugin/ak_eatwhat/eatwhat.php');
	}else{
		include _include(APP_PATH.'view/htm/index.htm');
	}
	exit;
?>

