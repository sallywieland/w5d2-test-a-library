// Mocha & Chai Test Suite (for Tuesday's assignment)
var expect = chai.expect;

describe('MoDom', function() {
  describe('md Global Variable', function() {
    it('should exist', function() {
      expect(md).to.exist
    })
  })
  describe('md.one()', function() {
    it('should find one matching element using CSS selector', function() {
      md.one('span')
      // expect(document.querySelector('span'))
      expect(md.one('span').innerHTML).to.equal('Toggle navigation')
    })
  })
  describe('md.all()', function() {
    it('should find all matching elements using any CSS selector', function() {
      md.all('div')
      expect(md.all('div').length).to.equal(14)
    })
  })
  describe('md.remove()', function() {
    it('should remove an element', function() {
      md.remove('h4')
      expect(md.all('h4').length).to.equal(3)
    })
  })
  describe('md.addClass()', function() {
    it('should add a CSS class', function() {
      md.addClass('h4', 'red')
      expect(md.one('h4').classList.contains('red')).to.be.true
    })
  })
  describe('md.removeClass()', function() {
    it('should remove a CSS class', function() {
      md.removeClass('span', 'sr-only')
      expect(md.one('span').classList.contains('sr-only')).to.be.false
    })
  })
  describe('md.hasClass()', function() {
    it('should return true if an element contains a CSS class in it\'s CSS attribute', function() {
      md.hasClass('div', 'container-fluid')
      expect(md.one('div').classList.contains('container-fluid')).to.be.true
    })
  })
  describe('md.getAttr()', function() {
    it('should get an HTML attribute from an element', function() {
      md.getAttr('input', 'placeholder')
      expect(md.one('input').placeholder).to.equal('Search...')
    })
  })
  describe('md.setAttr()', function() {
    it('should set an HTML attribute on an element', function() {
      md.setAttr('input', 'placeholder', 'SEARCH')
      expect(md.one('input').placeholder).to.equal('SEARCH')
    })
  })
  describe('md.setHTML()', function() {
    it('should set the innerHTML of an element', function() {
      md.setHTML('.navbar-brand', 'hello')
      expect(md.one('.navbar-brand').innerHTML).to.equal('hello')
    })
  })
  describe('md.getHTML()', function() {
    it('should get the innerHTML of an element', function() {
      md.getHTML('.navbar-brand')
      expect(md.one('.navbar-brand').innerHTML).to.equal('hello')
    })
  })
  describe('md.flipPage()', function() {
      it('should flip the page upside down', function() {
          md.flipPage('rotate(180deg)')
          expect(document.body.style.transform).to.equal('rotate(180deg)')
      })
  })
})
