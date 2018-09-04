<?php 
!defined('DEBUG') AND exit('Access Denied.');
$action = param(3);

$eatwhat_nav = param('eatwhat_nav');
$eatwhat_index = param('eatwhat_index');

$ak_eatwhat = kv_get('ak_eatwhat');
if($method == 'GET') {

		$setting['hxcd'] = setting_get('hxcd');

if(empty($ak_eatwhat)) {
	$ak_eatwhat = array(
		'eatwhat_nav'=>$eatwhat_nav, 
		'eatwhat_index'=>$eatwhat_index, 
	);
	kv_set('ak_eatwhat', $ak_eatwhat);
}			
	

	$eatwhat_nav = form_radio_yes_no('eatwhat_nav',$ak_eatwhat['eatwhat_nav']);
	$eatwhat_index = form_radio_yes_no('eatwhat_index',$ak_eatwhat['eatwhat_index']);

	include _include(APP_PATH.'plugin/ak_eatwhat/setting.htm');		
	} else {
		$ak_eatwhat['eatwhat_nav'] = param('eatwhat_nav');
		$ak_eatwhat['eatwhat_index'] = param('eatwhat_index');
		kv_set('ak_eatwhat', $ak_eatwhat);	
		setting_set('hxcd', param('hxcd', '', FALSE));
		
		message(0, '修改成功');
}
	



?>
