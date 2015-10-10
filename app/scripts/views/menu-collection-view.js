import MenuItemView from 'views/menu-item-view';

var MenuCollectionView = Backbone.View.extend({
  tagName: "ul",
  className: "menu-view",

  initialize: function(){
    this.listenTo(this.collection, 'add remove', this.render);
  },

  render: function(){
    var self = this;
    this.$el.html('');
    console.log(this.collection);
    this.collection.each(function(menuItem){
      var item = new MenuItemView({model: menuItem});
      self.$el.append(item.render().el);
    });
    return this;
  }

});

export default MenuCollectionView;
