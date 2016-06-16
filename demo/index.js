// JavaScript Document
var _box =$('#box');
var _interval=4000;
function gdb(){
	$("<dd style='height:0px;'><div class='fg-left'><span>1小时前</span></div><div class='fg-right'><h4>王**购了500000元</h4><a href='#'>银亿1号0617040</a></div></dd>").prependTo('#box dl');
	var _field=$('#box dl dd:first');
	_field.animate({height: '+53px'}, "slow");
	$('#box dl dd:last').remove()
	setTimeout(function(){
		gdb();
	},_interval);
}; 
gdb();
 
 
 
 
 