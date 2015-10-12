var Order = Backbone.Model.extend({
  defaults: function(){
    return {
      order: []
    };
  },

  addOrder: function(menu) {
      this.set('order', this.get('order').concat([menu]));
      console.log(this.get('order'));
  },

  removeOrder: function(menu){
    this.set('order', _.without(this.get('order'),menu));
  },


  createOrder: function(order) {
    return _.contains(this.get('order'), order);
  }
});

export default new Order();
