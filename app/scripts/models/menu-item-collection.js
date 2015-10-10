import MenuItem from 'models/menuItem';

var MenuItemCollection = Backbone.Collection.extend({
  model: MenuItem,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/aaronrestaurant?limit=100"
});

export default MenuItemCollection;
