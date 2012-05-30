Ext.define('WebUI.view.layout.Content',{
  extend: 'Ext.panel.Panel',
  alias: 'widget.layout-content',
  
  layout: 'card',
  border: false,
  
  items: [{
    xtype: 'home'
  },{
    xtype: 'ContentError'
  }],
  
  tbar: [
    '->'
  ,{
    xtype:   'button',
    action:  'save',
    tooltip: 'Save Configuration',
    iconCls: 'icon-save'
  },{
    xtype:   'button',
    action:  'reboot',
    tooltip: 'Reboot System',
    iconCls: 'icon-reboot'
  },{
    xtype:   'button',
    action:  'login',
    tooltip: 'Login',
    iconCls: 'icon-add'
  },{
    xtype:   'button',
    action:  'logout',
    tooltip: 'Logout',
    iconCls: 'icon-logout'
  }]
});
