require.register('main', function (exports, require, module) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _modelsMenuItemCollection = require('models/menu-item-collection');
    var _modelsMenuItemCollection2 = _interopRequireDefault(_modelsMenuItemCollection);
    var _viewsMenuCollectionView = require('views/menu-collection-view');
    var _viewsMenuCollectionView2 = _interopRequireDefault(_viewsMenuCollectionView);
    $(document).ready(function () {
        $('#container').append(JST.application());
        //  window.menuItemCollection = new MenuItemCollection();
        //   menuItemCollection.fetch();
        //   console.log(menuItemCollection);
        var menuItemCollection = new _modelsMenuItemCollection2['default']();
        console.log(menuItemCollection);
        var menuCollectionView = new _viewsMenuCollectionView2['default']({ collection: menuItemCollection });
        $('.menu-container').html(menuCollectionView.render().el);
        menuItemCollection.fetch();
    });    // return this.model.get('products').map((p)+>{return p.toJSON();
});
require.register('models/menu-item-collection', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _modelsMenuItem = require('models/menuItem');
    var _modelsMenuItem2 = _interopRequireDefault(_modelsMenuItem);
    var MenuItemCollection = Backbone.Collection.extend({
        model: _modelsMenuItem2['default'],
        url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronrestaurant?limit=100'
    });
    exports['default'] = MenuItemCollection;
    module.exports = exports['default'];
});
require.register('models/menuItem', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var MenuItem = Backbone.Model.extend({
        idAttribute: '_id',
        defaults: {
            name: '',
            description: '',
            price: '',
            type: ''
        }
    });
    exports['default'] = MenuItem;
    module.exports = exports['default'];
});
require.register('models/order', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var Order = Backbone.Model.extend({
        defaults: function defaults() {
            return { order: [] };
        },
        addItem: function addItem(order) {
            if (this.get('orders')) {
                this.set('orders', this.get('orders').concat([order]));
            }
        },
        removeItem: function removeItem(menu) {
            this.set('order', _.without(this.get('order'), menu));
        }    //   createOrder: function(order) {
             //     return _contains(this.get('order'), menu);
             //   }
    });
    exports['default'] = Order;
    module.exports = exports['default'];
});
require.register('views/menu-collection-view', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _viewsMenuItemView = require('views/menu-item-view');
    var _viewsMenuItemView2 = _interopRequireDefault(_viewsMenuItemView);
    var MenuCollectionView = Backbone.View.extend({
        tagName: 'ul',
        className: 'menu-view',
        initialize: function initialize() {
            this.listenTo(this.collection, 'add remove', this.render);
        },
        render: function render() {
            var self = this;
            this.$el.html('');
            console.log(this.collection);
            this.collection.each(function (menuItem) {
                var item = new _viewsMenuItemView2['default']({ model: menuItem });
                self.$el.append(item.render().el);
            });
            return this;
        }
    });
    exports['default'] = MenuCollectionView;
    module.exports = exports['default'];
});
require.register('views/menu-item-view', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _modelsMenuItemCollection = require('models/menu-item-collection');
    var _modelsMenuItemCollection2 = _interopRequireDefault(_modelsMenuItemCollection);
    var MenuItemView = Backbone.View.extend({
        tagName: 'li',
        template: JST['menu'],
        events: { 'click .js-dropdown': 'toggleDropdown' },
        render: function render() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    exports['default'] = MenuItemView;
    module.exports = exports['default'];
});
require.register('views/order-view', function (exports, require, module) {
    'use strict';
});
//# sourceMappingURL=app.js.map
