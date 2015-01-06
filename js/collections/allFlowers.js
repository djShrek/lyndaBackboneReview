var app = app || {};

app.FlowersCollection = Backbone.Collection.extend({

  model: app.singleFlower

});

app.europeanFlowerCollection = Backbone.Collection.extend({

  model: app.singleFlower

});
