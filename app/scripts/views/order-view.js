import MenuItemView from 'views/menu-item-view';
import MenuItemCollection from 'models/menu-item-collection';

var OrderView = Backbone.View.extend ({
  template:JST['order'],

render: function(){
  console.log('tasty');
  this.$el.html(this.template(this.model));
  return this;
}

});

export default OrderView;
