Ext.define('WebUI.view.LoginPopup', {
  extend: 'Ext.window.Window',
  alias : 'widget.login-popup',

  title : 'Login',
  layout: 'fit',
  autoShow: true,
  
  items: [{
    xtype: 'form',
    items: [{
      xtype:      'textfield',
      name:       'username',
      fieldLabel: 'User Name',
      allowBlank: false
    },{
      xtype:      'textfield',
      name:       'password',
      fieldLabel: 'Passsword'
    }],
    tbar: [{
      xtype: 'button',
      action:  'save',
      tooltip: 'Submit Changes',
      iconCls: 'icon-ok',
      formBind: true
    },{
      xtype: 'button',
      action:  'close',
      tooltip: 'Cancel Changes',
      iconCls: 'icon-cancel',
    }]
  }]
});
