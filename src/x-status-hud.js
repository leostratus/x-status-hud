/* x-status-hud */

(function(){

  xtag.register('x-status-hud', {
    lifecycle: {
      created: function(){
        this.xtag.textEl = document.createElement('strong');

        this.xtag.spinnerContainer = document.createElement('div');
        this.xtag.spinner = document.createElement('div');

        this.xtag.spinnerContainer.className = 'spinner';

        this.xtag.spinnerContainer.appendChild(this.xtag.spinner);
        this.appendChild(this.xtag.spinnerContainer);
        this.appendChild(this.xtag.textEl);
      }
    },

    methods: {
      toggle: function(){
        this.visible = this.visible ? false : true;
      },

      show: function (){
        this.visible = true;
      },

      hide: function (){
        this.visible = false;
      }
    },

    accessors: {
      visible: {
        attribute: { boolean: true }
      },

      label: {
        attribute: {},

        set: function(text) {
          this.xtag.textEl.innerHTML = text;
        }
      }
    }
  }); // End tag declaration
})();

