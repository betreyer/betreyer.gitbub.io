function adjustContainers () {
	var clientWidth = Ext.lib.Dom.getViewportWidth ();
	var clientHeight = Ext.lib.Dom.getViewportHeight();

	var cNavbarWidth = Ext.get("cnavbar").getWidth();
	var cHeaderHeight = Ext.get("cheader").getHeight();
	var cCopyrightHeight = Ext.get ("ccopyright").getHeight();

	Ext.get("cheader").setWidth(clientWidth);
	var cNavbarHeight = clientHeight-cHeaderHeight-cCopyrightHeight-10;
	Ext.get("cnavbar").setHeight(cNavbarHeight);
	Ext.get("cmain").setHeight(cNavbarHeight);
	Ext.get("cmain").setWidth(clientWidth-cNavbarWidth-10);
	Ext.get("ccopyright").setWidth(clientWidth-10);
}

Ext.fly(window).on("resize", adjustContainers());
adjustContainers();

Ext.onReady(function() {
	var ceLinks = Ext.select("UL[id=navbar] LI");

	ceLinks.on("mouseover", function(e,t) {
		Ext.get(this).addClass("hovered");
		e.stopEvent();
	});
	ceLinks.on("mouseout", function (e,t){
		Ext.get(this).removeClass("hovered");
		e.stopEvent(); 
	});
});

// document.location.href="http://www.wikipedia.org";
// var wright=window.confirm("Вам исполнилось 18 лет?");
// if (!(wright))  document.location.href="http://www.wikipedia.org";
// 	