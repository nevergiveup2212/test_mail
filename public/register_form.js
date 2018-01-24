RegisterForm = Ext.extend(Ext.Window, {
	constructor: function(options, config){
		var _config = config;
		var self = this;
		var _title = options['title'];
		var main_panel = this.build_main_panel();
		var _defaultConfig = $H({
			id: 'f_register',
			title: _title,
			closable: true,
			minimizable: false,
			width: 300,
			resizable: false,
			draggable: true,
			border: false,
			plain: true,
			layout: 'fit',
			items: [main_panel],
			closeAction: 'close'
		}).update(_config);

		Ext.apply(this, _defaultConfig.toObject());

		this.show_popup = function() {
			self.show();
		}

		RegisterForm.superclass.constructor.apply(this);
	},

	build_main_panel: function() {
		var panel = new Ext.FormPanel({
			id: 'mpanel',
			frame: true,
			autoHeight: true,
			width: 'auto',
			buttonAlign: 'center',
			labelAlign: 'left',
			defaultType: 'textfield',
			items: [{
          fieldLabel: 'Email',
          name: 'email',
          id: 'remail',
          allowBlank: false,
          labelStyle: "padding: 5px 5px 10px 8px",
          vType: 'email',
          regex:/^((([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z\s?]{2,5}){1,25})*(\s*?;\s*?)*)*$/,
          invalidText: 'The value in this field is invalid',
          blankText : 'Please enter email address(s)'
      	}, {
          fieldLabel: 'Full Name',
          name: 'fullname',
          id: 'rfname',
          allowBlank: false,
          labelStyle: "padding: 5px 5px 10px 8px"
	      }, {
          fieldLabel: 'Username',
          name: 'username',
          id: 'rusername',
          allowBlank: false,
          labelStyle: "padding: 5px 5px 10px 8px"
	      }, {
          fieldLabel: 'Password',
          name: 'password',
          id: 'rpassword',
          allowBlank: false,
          labelStyle: "padding: 5px 5px 10px 8px",
          minLength: 4,
          maxLength: 12,
          inputType: 'password'
	      }],
	    	buttons: [{
          text: 'Register',
          id: 'register',
          listeners: {
            click: function() {
              // handle here
            }
          }

      	}, {
	        // xtype: 'tbbutton',
	        text: 'Cancel',
	        handler: function() {
	            // your code here
        	}
      	}
      ]
		});

		return panel;
	}
});