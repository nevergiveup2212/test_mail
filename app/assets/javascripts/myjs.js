var login_form = new Ext.Window({
        url: 'login_form.submit',
        id: 'newuser',
        renderTo: document.body,
        frame: true,
        layout: 'form',
        closeAction: 'hide',
        title: 'New user',
        width: 450,
        items: [{
               xtype: 'textfield',
                fieldLabel: 'Email',
                emptyText:'email@examle.com',
                name: 'lblemail',
                id: 'email',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Name',
                emptyText:'Your name',
                name: 'lblname',
                id: 'name',
                allowBlank: false

            },

            {
                xtype: 'textfield',
                fieldLabel: 'Login',
                emptyText:'Your login name',
                name: 'lbllogin',
                id: 'login',
                allowBlank: false
            }
            ],
            buttons: [{
                text: 'Create',
                listeners: {
                    click: function() {
                        var name = Ext.getCmp('name').getValue();
                        var email = Ext.getCmp('email').getValue();
                        var login = Ext.getCmp('login').getValue();

                        Ext.Ajax.request({
                            url: '/create',

                            success: function(response, opts) {
                                Ext.getCmp('myGrid').getStore().load();
                                login_form.hide();
                                Ext.getCmp('myGrid').getView().reload();
                                
                                
                            },
                            failure: function(response, opts){
                                Ext.MessageBox.alert("Error", "Can't create user!");
                            },
                            jsonData: { name: name, email: email, login: login }
                            
                        });
                    }

                }
            },
                {
                    text: 'Back',
                    handler: function() {

                    login_form.hide();
                    }
                }
            ]
        
            // ,
            // {
            //     xtype: 'tbbutton',
            //     text: 'Create user',
            //     id: 'submit',
                

            // }, {
            //     xtype: 'tbbutton',
            //     text: 'Back',
                

            // }]
});