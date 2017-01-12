(function () {

    angular.module("myApp").value("config", {
        "sections": [{
            "title": "Name",
            "content": "Position at Company",
            "image": "common/images/img1.jpg",
            "template": "profile",
            "sections": [{
                "title": "About Me",
                "content": "About me for person 1",
                "visibleTo": ['person1']
            }, {
                "title": "About Me",
                "content": "About me for person 2",
                "visibleTo": ['person2']
            }]
        }, {
            "title": "Section1",
            "content": "content of section1",
            "visibleTo": ['person1', 'person2'],
            "sections": [{
                "title": "Sub-section1",
                "content": "content of sub-section1",
                "visibleTo": ['person1']
            }, {
                "title": "Sub-section2",
                "content": "content of sub-section2",
                "visibleTo": ['person2']
            }],
            "gallery": [
                "common/images/img1.jpg",
                "common/images/img1.jpg"
            ]
        }, {
            "title": "Section2",
            "content": "content of section2",
            "visibleTo": ['person2']
        }, {
            "title": "Section2",
            "content": "content of section2",
            "visibleTo": ['person2'],
            "gallery": [
                "common/images/img1.jpg",
                "common/images/img1.jpg"
            ]
        }, {
            "title": "Section2",
            "content": "content of section2",
            "visibleTo": ['person2']
        }, {
            "title": "Section2",
            "content": "content of section2",
            "visibleTo": ['person2'],
            "gallery": [
                "common/images/img1.jpg",
                "common/images/img1.jpg"
            ]
        }]
    })
    .value("people", ['person1', 'person2'])
    .value("templates", {
        "default": "components/widget/templates/default.html",
        "profile": "components/widget/templates/profile.html"
    });

})();