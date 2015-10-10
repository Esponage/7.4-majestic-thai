var Order = Backbone.Model.extend({
  defaults: function(){
    return {
      order: []
    };
  },

  addItem: function(order) {
    if(this.get('orders')) {
      this.set('orders', this.get('orders').concat([order]));
    }
  },

  removeItem: function(menu){
    this.set('order', _.without(this.get('order'),menu));
  }


//   createOrder: function(order) {
//     return _contains(this.get('order'), menu);
//   }
});

export default Order;
