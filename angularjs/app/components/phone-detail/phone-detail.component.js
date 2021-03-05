angular.module("corsoNg").component("phoneDetail", {
    templateUrl: "components/phone-detail/phone-detail.template.html",
    controller: ['Phone', '$routeParams', function (Phone, $routeParams) {  // dependency injection
        var phoneId = $routeParams.phoneId;
        var self = this;

        self.showDetails = true;

        self.setImage = function (imgUrl) {
            self.mainImageUrl = imgUrl;
        }

        self.toggleDetails = function() {
            self.showDetails = !self.showDetails;
        }

        Phone.get({phoneId: phoneId}, function(phone) {
            self.phone = phone;
            self.setImage(self.phone.images[0]);
        });
    }],
  });