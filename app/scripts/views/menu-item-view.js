import MenuItemCollection from 'models/menu-item-collection';
import order from 'models/order';

var MenuItemView = Backbone.View.extend({
  tagName: "li",
  template: JST['menu'],


events: {
    "click .js-price": "addToOrder"
},

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  addToOrder: function(e){
    e.preventDefault();
    order.addOrder(this.model);
    console.log("Good job");

  }
});

export default MenuItemView;
