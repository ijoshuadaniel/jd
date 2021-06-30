class JD {
  init(id) {
    return document.querySelector(id)
  }

  style(id, styles) {
    this.init(id).style = styles
  }
  // document

  activeElement() {
    document.activeElement
  }

  documentEventListener(event, callback) {
    document.addEventListener(event, callback)
  }

  adoptNode(node) {
    return document.adoptNode(node)
  }

  baseURI() {
    return document.baseURI
  }

  body() {
    return document.body
  }

  close() {
    return document.close()
  }

  cookie() {
    return document.cookie
  }

  characterSet() {
    return document.characterSet
  }

  createAttribute(name, value) {
    let att = document.createAttribute(name)
    att.value = value
  }

  createComment(comment) {
    document.createComment(comment)
  }

  createDocumentFragment() {
    return document.createDocumentFragment()
  }

  creteElement(element) {
    return document.creteElement(element)
  }

  creteEvent(event) {
    return document.createEvent(event)
  }

  createTextNode(text) {
    return document.createTextNode(text)
  }

  defaultView() {
    return document.defaultView
  }

  designModeOn() {
    document.designMode = 'on'
  }

  designModeOff() {
    document.designMode = 'off'
  }

  documentElement() {
    return document.documentElement
  }

  documentURI() {
    return document.documentURI
  }

  domain() {
    return document.domain
  }

  embeds() {
    return document.embeds
  }

  exeCommand(event) {
    return document.exeCommand(event)
  }

  forms() {
    return document.forms
  }

  fullScreenElement() {
    return document.fullscreenElement
  }

  fullScreenEnabled() {
    return document.fullscreenEnabled
  }

  getElementById(id) {
    return document.getElementById(id)
  }

  getElementByClassName(className) {
    return document.getElementsByClassName(className)
  }

  getElementByName(name) {
    return document.getElementsByName(name)
  }

  getElementByTagName(tagName) {
    return document.getElementsByTagName(tagName)
  }

  hasFocus() {
    return document.hasFocus()
  }

  head() {
    return document.head
  }

  images() {
    return document.images
  }

  implementation() {
    return document.implementation
  }

  importNode(node) {
    return document.importNode(node, true)
  }

  lastModified() {
    return document.lastModified
  }

  normalize() {
    document.normalize()
  }

  open() {
    document.open()
  }

  querySelector(selector) {
    return document.querySelector(selector)
  }

  querySelectorAll(selector) {
    return document.querySelectorAll(selector)
  }

  readyState() {
    return document.readyState
  }

  referrer() {
    return document.referrer
  }

  removeEventListener(event) {
    document.removeEventListener(event)
  }

  scripts() {
    return document.scripts
  }

  title() {
    return document.title
  }

  URL() {
    return document.URL
  }

  write(text) {
    document.write(text)
  }
  writeLn(text) {
    document.writeln(text)
  }

  // events

  abort(id, callback) {
    this.init(id).addEventListener('abort', callback)
  }

  afterPrint(id, callback) {
    this.init(id).addEventListener('afterprint', callback)
  }

  animationEnd(id, callback) {
    this.init(id).addEventListener('animationend', callback)
  }

  aanimationIteration(id, callback) {
    this.init(id).addEventListener('animationiteration', callback)
  }

  animationStart(id, callback) {
    this.init(id).addEventListener('animationstart', callback)
  }

  beforePrint(id, callback) {
    this.init(id).addEventListener('beforeprint', callback)
  }

  beforeUnload(id, callback) {
    this.init(id).addEventListener('beforeunload', callback)
  }

  blur(id, callback) {
    this.init(id).addEventListener('blur', callback)
  }

  canPlay(id, callback) {
    this.init(id).addEventListener('oncanplay', callback)
  }

  canPlayThrough(id, callback) {
    this.init(id).addEventListener('canplaythrough', callback)
  }

  change(id, callback) {
    this.init(id).addEventListener('change', callback)
  }

  click(id, callback) {
    this.init(id).addEventListener('click', callback)
  }

  contextMenu(id, callback) {
    this.init(id).addEventListener('contextmenu', callback)
  }

  copy(id, callback) {
    this.init(id).addEventListener('copy', callback)
  }

  cut(id, callback) {
    this.init(id).addEventListener('cut', callback)
  }

  dblClick(id, callback) {
    this.init(id).addEventListener('dblclick', callback)
  }

  drag(id, callback) {
    this.init(id).addEventListener('drag', callback)
  }

  dragEnd(id, callback) {
    this.init(id).addEventListener('dragend', callback)
  }

  dragEnter(id, callback) {
    this.init(id).addEventListener('dragenter', callback)
  }

  dragLeave(id, callback) {
    this.init(id).addEventListener('dragleave', callback)
  }

  dragOver(id, callback) {
    this.init(id).addEventListener('dragover', callback)
  }

  dragStart(id, callback) {
    this.init(id).addEventListener('dragstart', callback)
  }

  durationChange(id, callback) {
    this.init(id).addEventListener('durationchange', callback)
  }

  ended(id, callback) {
    this.init(id).addEventListener('ended', callback)
  }

  error(id, callback) {
    this.init(id).addEventListener('error', callback)
  }

  focus(id, callback) {
    this.init(id).addEventListener('focus', callback)
  }

  focusIn(id, callback) {
    this.init(id).addEventListener('focusin', callback)
  }

  fullScreenChange(id, callback) {
    this.init(id).addEventListener('fullscreenchange', callback)
  }

  fullScreenError(id, callback) {
    this.init(id).addEventListener('fullscreenerror', callback)
  }

  hashChange(id, callback) {
    this.init(id).addEventListener('hashChange', callback)
  }

  focus(id, callback) {
    this.init(id).addEventListener('focus', callback)
  }

  input(id, callback) {
    this.init(id).addEventListener('input', callback)
  }

  invalid(id, callback) {
    this.init(id).addEventListener('invalid', callback)
  }

  keyDown(id, callback) {
    this.init(id).addEventListener('keydown', callback)
  }

  keyPress(id, callback) {
    this.init(id).addEventListener('keypress', callback)
  }

  keyUp(id, callback) {
    this.init(id).addEventListener('keyup', callback)
  }

  load(id, callback) {
    this.init(id).addEventListener('load', callback)
  }

  loadedData(id, callback) {
    this.init(id).addEventListener('loadeddata', callback)
  }

  loadedMetaData(id, callback) {
    this.init(id).addEventListener('loadedmetadata', callback)
  }

  loadStart(id, callback) {
    this.init(id).addEventListener('loadstart', callback)
  }

  message(id, callback) {
    this.init(id).addEventListener('message', callback)
  }

  mouseDown(id, callback) {
    this.init(id).addEventListener('mousedown', callback)
  }

  mouseEnter(id, callback) {
    this.init(id).addEventListener('mouseenter', callback)
  }

  mouseLeave(id, callback) {
    this.init(id).addEventListener('mouseleave', callback)
  }

  mouseMove(id, callback) {
    this.init(id).addEventListener('mousemove', callback)
  }

  mouseOver(id, callback) {
    this.init(id).addEventListener('mouseover', callback)
  }

  mouseOut(id, callback) {
    this.init(id).addEventListener('mouseout', callback)
  }

  mosueUp(id, callback) {
    this.init(id).addEventListener('mosueup', callback)
  }

  offline(id, callback) {
    this.init(id).addEventListener('offline', callback)
  }

  online(id, callback) {
    this.init(id).addEventListener('online', callback)
  }

  open(id, callback) {
    this.init(id).addEventListener('open', callback)
  }

  pageHide(id, callback) {
    this.init(id).addEventListener('pagehide', callback)
  }

  pageShow(id, callback) {
    this.init(id).addEventListener('pageshow', callback)
  }

  paste(id, callback) {
    this.init(id).addEventListener('paste', callback)
  }

  pause(id, callback) {
    this.init(id).addEventListener('pause', callback)
  }

  paly(id, callback) {
    this.init(id).addEventListener('paly', callback)
  }

  playing(id, callback) {
    this.init(id).addEventListener('playing', callback)
  }

  popState(id, callback) {
    this.init(id).addEventListener('popstate', callback)
  }

  progress(id, callback) {
    this.init(id).addEventListener('progress', callback)
  }

  rateChange(id, callback) {
    this.init(id).addEventListener('ratechange', callback)
  }

  resize(id, callback) {
    this.init(id).addEventListener('resize', callback)
  }

  reset(id, callback) {
    this.init(id).addEventListener('reset', callback)
  }

  scroll(id, callback) {
    this.init(id).addEventListener('scroll', callback)
  }

  search(id, callback) {
    this.init(id).addEventListener('search', callback)
  }

  seeked(id, callback) {
    this.init(id).addEventListener('seeked', callback)
  }

  seeking(id, callback) {
    this.init(id).addEventListener('seeking', callback)
  }

  select(id, callback) {
    this.init(id).addEventListener('select', callback)
  }

  show(id, callback) {
    this.init(id).addEventListener('show', callback)
  }

  stalled(id, callback) {
    this.init(id).addEventListener('stalled', callback)
  }

  storage(id, callback) {
    this.init(id).addEventListener('storage', callback)
  }

  submit(id, callback) {
    this.init(id).addEventListener('submit', callback)
  }

  suspend(id, callback) {
    this.init(id).addEventListener('suspend', callback)
  }

  timeUpdate(id, callback) {
    this.init(id).addEventListener('timeupdate', callback)
  }

  toggle(id, callback) {
    this.init(id).addEventListener('toggle', callback)
  }

  touchCancel(id, callback) {
    this.init(id).addEventListener('touchcancel', callback)
  }

  touchEnd(id, callback) {
    this.init(id).addEventListener('touchend', callback)
  }

  touchMove(id, callback) {
    this.init(id).addEventListener('touchmove', callback)
  }

  touchStart(id, callback) {
    this.init(id).addEventListener('touchstart', callback)
  }

  transitionEnd(id, callback) {
    this.init(id).addEventListener('transitionend', callback)
  }

  unload(id, callback) {
    this.init(id).addEventListener('unload', callback)
  }

  volumeChange(id, callback) {
    this.init(id).addEventListener('volumechange', callback)
  }

  waiting(id, callback) {
    this.init(id).addEventListener('waiting', callback)
  }

  wheel(id, callback) {
    this.init(id).addEventListener('wheel', callback)
  }
}

const jd = new JD()
