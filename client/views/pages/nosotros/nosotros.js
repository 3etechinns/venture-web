import { Template } from 'meteor/templating'
import { $ } from 'meteor/jquery'


Template.nosotros.onRendered(function () {
  $('.parallax').parallax()
  $('select').material_select()
  this.subscribe('Teams')
})


Template.nosotros.helpers({
  managers: function() {
    return Teams.find({manager:true}, { sort: { index: 1 } }).fetch()
  },
  team: function() {
    return Teams.find({manager:false}, { sort: { index: 1 } }).fetch()
  }
});