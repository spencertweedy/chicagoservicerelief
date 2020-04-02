// Credit to W3Schools: https://www.w3schools.com/howto/howto_js_filter_elements.asp

// Define variables
var items = document.querySelectorAll(".item");
var filterButtons = document.querySelectorAll(".filter-button");
var allowedTypes = [];
var itemType = "";

// Start with the 'all' filter
// filterItems('all');

// Show items that pass the filter, hide those that don't
function filterItems(currentFilter) {
  // Fill allowedTypes array based on the current filter
  if (currentFilter == 'all') {
    allowedTypes = [];
  } else if (currentFilter == 'bars') {
    allowedTypes = ['bar','venue','theater'];
  } else if (currentFilter == 'restaurants') {
    allowedTypes = ['restaurant'];
  } else if (currentFilter == 'others') {
    allowedTypes = ['salon','other'];
  } else if (currentFilter == 'funds') {
    allowedTypes = ['fund'];
  }

  // Loop through the list items and act on them based on allowedTypes
  for (item of items) {
    // Fill itemType with current item's data-item-type attribute
    itemType = item.getAttribute("data-item-type");

    // Give the item the 'displayed' CSS class only if the current filter is 'all'
    // or if the item's itemType is included in the allowedTypes array
    if (currentFilter == 'all') {
      item.classList.add("displayed");
    } else if (allowedTypes.includes(itemType)) {
      item.classList.add("displayed");
    } else {
      item.classList.remove("displayed");
    }
  }
}

// Bind filter buttons to the filter function
// Thanks https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
filterButtons.forEach(filterButton => {
  // Get the filter button's filter data attribute
  var filterName = filterButton.getAttribute("data-filter-name");

  filterButton.addEventListener('click', function() {
    filterItems(filterName);
  });
})