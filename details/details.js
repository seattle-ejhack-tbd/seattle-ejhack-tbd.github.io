(function() {
  const id = new URL(window.location).searchParams.get('id');
  console.log(id);

  $.getJSON(`https://raw.githubusercontent.com/seattle-ejhack-tbd/seattle-ejhack-tbd.github.io/master/bill/${id}`).done(data => {
    console.log(data)
  }).fail(console.error)


})();