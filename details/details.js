(function() {
  const id = new URL(window.location).searchParams.get('id');

  $.getJSON(`https://raw.githubusercontent.com/seattle-ejhack-tbd/seattle-ejhack-tbd.github.io/master/bill/${id}`).done(({title, introduced_at, sponsor, summary, text_link }) => {
    const paragraphs = summary.split('\n');
    $('#loading').remove()
    const $details = $('#details');
    const $title = $('<h4>').text(title)
    const $summary = paragraphs.map(paragraph => $('<p>').text(paragraph));
    $details.append($title, $summary);

  }).fail(console.error)


})();