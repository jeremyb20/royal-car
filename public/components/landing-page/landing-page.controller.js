(() => {
  angular
  .module('royal-car')
  .controller('landingPageController', landingPageController);

  landingPageController.$inject = ['$state'];

  function landingPageController(){
    const vm = this;

    $(window).on('scroll', ()=>{
      if($(window).scrollTop() > 300) {
        angular.element('#estilosMenu nav').addClass('bg-black');
      }else {
        angular.element('#estilosMenu nav').removeClass("bg-black");
      }
      
    })
  }

})();
