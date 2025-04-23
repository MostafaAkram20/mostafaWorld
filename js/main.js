let otherLinks = $('#otherLinks');
let otherLinksMenu = $('#otherLinksMenu');

function showMenu() {
    otherLinksMenu.show(2000);
  otherLinksMenu.stop(true, true).animate({ opacity: 1 }, 300);

}

function hideMenu() {
  otherLinksMenu.stop(true, true).animate({ opacity: 0 }, 300, () => {
    otherLinksMenu.css('display', 'none');
  });
}

otherLinks.hover(showMenu);
otherLinksMenu.hover(showMenu, hideMenu);
