'use strict';


(function () {
    var app = {
        /*data: {},
        localization: {
            defaultCulture: 'en',
            cultures: [{
                name: "English",
                code: "en"
            }]
        },
        navigation: {
            viewModel: kendo.observable()
        },
        user: { UserEmailAddress: '' },*/
    };

    var bootstrap = function () {
        $(function () {
            app.mobileApp = new kendo.mobile.Application(document.body, {
                skin: 'fiori',
                statusBarStyle: 'hidden',
                initial: 'components/mainView/view.html',
            });

            //kendo.bind($('.navigation-link-text'), app.navigation.viewModel);
        });
    };
        bootstrap();
    window.app = app;

    }());

    /// start app modules
    (function localization(app) {
        var localization = app.localization = kendo.observable({
            cultures: app.localization.cultures,
            defaultCulture: app.localization.defaultCulture,
            currentCulture: '',
            strings: {},
            viewsNames: [],
            registerView: function (viewName) {
                app[viewName].set('strings', getStrings() || {});

                this.viewsNames.push(viewName);
            }
        }),
            i, culture, cultures = localization.cultures,
            getStrings = function () {
                var code = localization.get('currentCulture'),
                    strings = localization.get('strings')[code];

                return strings;
            },
            updateStrings = function () {
                var i, viewName, viewsNames,
                    strings = getStrings();

                if (strings) {
                    viewsNames = localization.get('viewsNames');

                    for (i = 0; i < viewsNames.length; i++) {
                        viewName = viewsNames[i];

                        app[viewName].set('strings', strings);
                    }

                    app.navigation.viewModel.set('strings', strings);
                }
            },
            loadCulture = function (code) {
                $.getJSON('cultures/' + code + '/app.json',
                    function onLoadCultureStrings(data) {
                        localization.strings.set(code, data);
                    });
            };

        localization.bind('change', function onLanguageChange(e) {
            if (e.field === 'currentCulture') {
                var code = e.sender.get('currentCulture');

                updateStrings();
            } else if (e.field.indexOf('strings') === 0) {
                updateStrings();
            } else if (e.field === 'cultures' && e.action === 'add') {
                loadCulture(e.items[0].code);
            }
        });

        for (i = 0; i < cultures.length; i++) {
            loadCulture(cultures[i].code);
        }

        localization.set('currentCulture', localization.defaultCulture);
    })(window.app);