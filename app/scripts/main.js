import MenuItemCollection from "models/menu-item-collection";
import MenuCollectionView from "views/menu-collection-view";

  $(document).ready(function(){
  $('#container').append(JST.application());
    //  window.menuItemCollection = new MenuItemCollection();
    //   menuItemCollection.fetch();
    //   console.log(menuItemCollection);

      var menuItemCollection = new MenuItemCollection();
      console.log(menuItemCollection);

      var menuCollectionView = new MenuCollectionView({collection: menuItemCollection});
      $('.menu-container').html(menuCollectionView.render().el);
      menuItemCollection.fetch();

 });








// return this.model.get('products').map((p)+>{return p.toJSON();
