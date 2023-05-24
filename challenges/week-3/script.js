function modalToggle(x) {
  $('.modal .modal-dialog').attr('class', 'modal-dialog ' + x + '  animated');
};

function showModal(x){
  var modalDialog = $('.modal .modal-dialog');
  console.log($('.modal-dialog').height());
  modalDialog.attr('class', 'modal-dialog  ' + x + '  animated');
  // Applying the top margin on modal to align it vertically center
  modalDialog.css("margin-top", $(document).height()/2 - 86.5);
}


$('#myModal').on('show.bs.modal', function (e) {
  showModal('bounceIn');
  
})
$('#myModal').on('hide.bs.modal', function (e) {
  modalToggle('zoomOut');
})