export function addAttributes (el, objAttr) {
  Object.keys(objAttr).forEach((attr) => {
    el.setAttribute(attr, objAttr[attr])
  })
}

export function createElement (type, objAttr, children) {
  const el = type instanceof HTMLElement
    ? type
    : document.createElement(type)
  
  addAttributes(el, objAttr)

  if (children && children.length >= 0) {
    children.forEach((child) => {
      child instanceof HTMLElement
        ? el.appendChild(child)
        : el.innerHTML += child
    })
  }

  return el
}