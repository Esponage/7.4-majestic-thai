this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<div class=\"hero-header\"></div>\n\n<div class=\"search\">\n  <section class=\"search-div\">\n  <input class=\"search-menu\" type=\"text\" name=\"name\" value=\"\" placeholder=\"Search Menu Items\">\n  </section>\n</div>\n\n<div class=\"row\">\n  <div class=\"medium-6 columns menu-container\"></div>\n  <div class=\"medium-3 columns order-div\"></div>\n</div>\n";
},"useData":true});
this["JST"]["menu"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li class=\"js-dropdown\">"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</li>\n  <ul>\n      <li><h3>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3></li>\n      <li><p>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n      <li><button class=\"js-price\">"
    + alias3(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price","hash":{},"data":data}) : helper)))
    + "</button></li>\n  </ul>\n";
},"useData":true});
this["JST"]["order"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n\n<h4>Your Order</h4>\n<h5>Majestic Thai</h5>\n";
},"useData":true});