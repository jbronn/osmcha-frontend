// @flow
export function elementInViewport(element: HTMLElement) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth);
}
