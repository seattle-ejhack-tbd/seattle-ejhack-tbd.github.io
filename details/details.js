(function() {
  const id = new URL(window.location).searchParams.get('id');

  $.getJSON(`https://raw.githubusercontent.com/seattle-ejhack-tbd/seattle-ejhack-tbd.github.io/master/bill/${id}`).done(({title, introduced_at, sponsor, summary, text_link }) => {
    $('#loading').remove()
    const $details = $('#details');
    const $title = $('<h4>').text(title)
    const $summary = $('<p>').text(summary);
    const $sponsor = $('<p>').text(`Sponsored by ${sponsor}`);
    const $time = $('<p>').text(`Introduced ${introduced_at}`);
    const $link = $('<a>').attr('href', text_link).text('Full text');
    $details.append($title, $summary, $sponsor, $time, $link);


  }).fail(console.error)


})();