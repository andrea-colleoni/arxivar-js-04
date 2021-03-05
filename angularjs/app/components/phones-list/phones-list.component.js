angular.module("corsoNg").component("phonesList", {
  templateUrl: "components/phones-list/phones-list.template.html",
  controller: [
    "Phone",
    function (Phone) {
      // dependency injection
      var self = this; // this è lo scope del component
      self.orderProp = "age";

      self.phones = Phone.query();
    },
  ],
});
