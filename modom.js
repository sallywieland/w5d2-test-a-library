(function () {
    'use strict'

    var one = function(selector) {
    return document.querySelector(selector)
    }
    var all = function(selectors) {
        return document.querySelectorAll(selectors)
    }
    var remove = function(selector) {
        return one(selector).remove()
    }
    var addClass = function(selector, className) {
        one(selector).classList.add(className)
    }
    var removeClass = function(selector, className) {
        return one(selector).classList.remove(className)
    }
    var hasClass = function(selector, className) {
        return one(selector).classList.contains(className)
    }
    var getAttr = function(selector, attribute) {
        return one(selector).getAttribute(attribute)
    }
    var setAttr = function(selector, attributeName, attributeValue) {
        return one(selector).setAttribute(attributeName, attributeValue)
    }
    var setHTML = function(selector, textInput) {
        return one(selector).innerHTML = textInput
    }
    var getHTML = function(selector) {
        return one(selector).innerHTML
    }

    var flipPage = function(degrees) {
        return document.body.style.transform = degrees
    }

// adventurer mode

    var ajax = function(url, success) {
        fetch(url)
        .then(response => response.json()) // boiler plate
        .then(success)
    }
    var getProp = function(selector, property) {
        return one(selector)[property]

    }
    var setProp = function(selector, property, value) {
        one(selector)[property] = value
    }

    var add = function(){
        var numbers = Array.from(arguments) // arguments is a keyword
        // console.log(numbers) // see all the arguments that are passed in --> looks like an array BUT IS NOT

        var total = numbers.reduce(function(previous, current) {
            return previous + current
        }, 0)

        return total
    }

    window.md = {
        one: one,
        all: all,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
        setAttr: setAttr,
        setHTML: setHTML,
        getHTML: getHTML,
        ajax: ajax,
        getProp: getProp,
        setProp: setProp,
        add: add,
        flipPage: flipPage
    }
}())
