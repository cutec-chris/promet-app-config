var siConfig,tbToolbar;
dhtmlxEvent(window,"load",function(){
  console.log("Loading Install Page...");
  sbMain.addItem({id: 'siInstall', text: 'Einrichtung', icon: 'fa fa-refresh'});
  siTimes = window.parent.sbMain.cells('siConfig');
  });
});
