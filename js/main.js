// Credit to W3Schools: https://www.w3schools.com/howto/howto_js_filter_elements.asp

// Define variables
var items = document.querySelectorAll(".item");
var filterButtons = document.querySelectorAll(".filter-button");
var allowedTypes = [];
var excludedTypes = [];
var itemType = "";

filterItems('all');

// Show items that pass the filter, hide those that don't
function filterItems(currentFilter) {
  // Fill allowedTypes array based on the current filter
  if (currentFilter == 'all') {
    excludedTypes = ['resource','resource-business','resource-list'];
    displayNotExcluded();
  } else if (currentFilter == 'bars') {
    allowedTypes = ['bar','venue','theater'];
    displayAllowed();
  } else if (currentFilter == 'restaurants') {
    allowedTypes = ['restaurant'];
    displayAllowed();
  } else if (currentFilter == 'others') {
    excludedTypes = ['bar','venue','restaurant','theater','salon','fund','resource','resource-business','resource-list'];
    displayNotExcluded();
  } else if (currentFilter == 'funds') {
    allowedTypes = ['fund'];
    displayAllowed();
  } else if (currentFilter == 'resources') {
    allowedTypes = ['resource','resource-business','resource-list'];
    displayAllowed();
  }
}

// Define function for displaying only items that match allowedTypes
function displayAllowed() {
  // Loop through the list items and act on them based on allowedTypes
  for (item of items) {
    // Fill itemType with current item's data-item-type attribute
    itemType = item.getAttribute("data-item-type");

    // Give the item the 'displayed' CSS class only if the item's itemType is included in the allowedTypes array
    if (allowedTypes.includes(itemType)) {
      item.classList.add("displayed");
    } else {
      item.classList.remove("displayed");
    }
  }
}

// Define function for displaying all items except those that match excludedTypes (a catch-all)
function displayNotExcluded() {
  // Loop through the list items and act on them based on excludedTypes
  for (item of items) {
    // Fill itemType with current item's data-item-type attribute
    itemType = item.getAttribute("data-item-type");

    if (excludedTypes.includes(itemType) == false) {
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

  filterButton.addEventListener('click', function(event) {
    // Prevent default link behavior
    event.preventDefault();

    // Remove 'active' CSS class from any button that currently has it
    var currentActiveButtons = document.getElementsByClassName("active");
    currentActiveButtons[0].classList.remove("active");

    // Add 'active' CSS class to current button
    filterButton.classList.add("active");

    // Call the 'filterItems' function
    filterItems(filterName);
  });
})