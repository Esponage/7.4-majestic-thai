import MenuItemView from 'views/menu-item-view';
import MenuItemCollection from 'models/menu-item-collection';
import order from 'models/order';

var OrderView = Backbone.View.extend ({
  template:JST['order'],

  initialize: function(){
    this.listenTo(order, 'change', this.render);
  },

render: function(){
  console.log('tasty');
  this.$el.html(this.template(this.present()));
  return this;
},

present: function(){
  return {
    order: order.get("order").map((i) =>{
      return i.toJSON();
    })
  };
}


});

export default OrderView;
