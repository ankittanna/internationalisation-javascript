var language = {
    en: {
        header: 'en abc',
        subHeader1: 'en def',
        subHeader2: 'en ghi',
        description: 'en desc',
        subDescription: 'en subDesc',
        subSubDescription: 'en subSubDesc'
    },
    cn: {
        header: 'cn abc',
        subHeader1: 'cn def',
        subHeader2: 'cn ghi',
        description: 'cn desc',
        subDescription: 'cn subDesc',
        subSubDescription: 'cn subSubDesc'
    }
};

var SELECTED_LANGUAGE = 'cn';

var targetedElements = document.querySelectorAll('[data-text]');

targetedElements.forEach(function(element) {
    var key = element.getAttribute('data-text');

    if (element.childNodes.length >= 0) {
        element.childNodes.forEach(function(childNode) {
            // Node Type 3 = Text node
            if (childNode.nodeType === 3 && childNode.parentNode.getAttribute('data-text') === key && childNode.nodeValue.trim() !== '') {
                // alert(childNode.nodeValue.length)
                var languageKeyValue = childNode.nodeValue.replace(childNode.nodeValue.trim(), language[SELECTED_LANGUAGE][key]);
                childNode.nodeValue = childNode.nodeValue.substring(0, childNode.nodeValue.indexOf(childNode.nodeValue.trim())) + languageKeyValue;
            }
        })
    }

    if(element.hasChildNodes()) {
        console.log(element.hasChildNodes() + ' ' + key + ' '  + element.childNodes[1]);
    }
})



















