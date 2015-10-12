import MenuItemCollection from "models/menu-item-collection";
import MenuCollectionView from "views/menu-collection-view";
import OrderView from 'views/order-view';

  $(document).ready(function(){
  $('#container').append(JST.application());
    //  window.menuItemCollection = new MenuItemCollection();
    //   menuItemCollection.fetch();
    //   console.log(menuItemCollection);

      var menuItemCollection = new MenuItemCollection();

      var menuCollectionView = new MenuCollectionView({collection: menuItemCollection});
      $('.menu-container').html(menuCollectionView.render().el);
      menuItemCollection.fetch();

      var orderView = new OrderView();
      $('.order-div').html(orderView.render().el);


 });








// return this.model.get('products').map((p)+>{return p.toJSON();
