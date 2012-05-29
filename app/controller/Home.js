Ext.define('WebUI.controller.Home', {
  extend: 'Ext.app.Controller',
  
  views:  ['Home'],
  stores: ['ProductInfo'],
  models: ['ProductInfo'],
  
  init: function() {
    this.control({
      'home': {
        beforeshow: this.refresh
      },
      'home button[action=refresh]': {
        click: this.refresh
      }
    });
    
  },
  
  refresh: function(button){
    this.getProductInfoStore().load();
  }
});
