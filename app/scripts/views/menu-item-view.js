import MenuItemCollection from 'models/menu-item-collection';

var MenuItemView = Backbone.View.extend({
  tagName: "li",
  template: JST['menu'],


events: {
    "click .js-dropdown": "toggleDropdown"
},

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

export default MenuItemView;
