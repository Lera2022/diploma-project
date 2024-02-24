ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [50.26823978180608,53.594909999999885],
            zoom: 5,
            // controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 64,
            // Макет метки кластера pieChart.
            clusterIconLayout: "default#pieChart"
        });
    myMap.geoObjects.add(objectManager);

    // Создадим пунктов выпадающего списка.
    var listBoxItems = ['Грузоподъёмное оборудование', 'Складская техника', 'Станки', 'Строительное оборудование', 'Окрасочное оборудование', 'Генераторы и электростанции', 'Компрессоры воздушные', 'Сварочное оборудование', 'Пневматический инструмент', 'Профессиональное оборудование для общепита', 'Упаковочное и фасовочное оборудование', 'Материалы для гидроизоляции деформационных швов', 'Оборудование для обустройства дорог и парковок', 'Гидравлическое оборудование и инструменты', 'Оборудование для автосервиса', 'Оборудование для клининга', 'Промышленная вентиляция и отопление', 'Ультразвуковое оборудование', 'Насосное оборудование']
            .map(function (title) {
                return new ymaps.control.ListBoxItem({
                    data: {
                        content: title
                    },
                    state: {
                        selected: false
                    }
                })
            }),
        reducer = function (filters, filter) {
            filters[filter.data.get('content')] = filter.isSelected();
            return filters;
        },
        // Теперь создадим список.
        listBoxControl = new ymaps.control.ListBox({
            data: {
                content: 'Фильтр',
                title: 'Фильтр'
            },
            items: listBoxItems,
            state: {
                // Признак, развернут ли список.
                expanded: false,
                filters: listBoxItems.reduce(reducer, {})
            }
        });
    myMap.controls.add(listBoxControl);

    // Добавим отслеживание изменения признака, выбран ли пункт списка.
    listBoxControl.events.add(['select', 'deselect'], function (e) {
        var listBoxItem = e.get('target');
        var filters = ymaps.util.extend({}, listBoxControl.state.get('filters'));
        filters[listBoxItem.data.get('content')] = listBoxItem.isSelected();
        listBoxControl.state.set('filters', filters);
    });

    var filterMonitor = new ymaps.Monitor(listBoxControl.state);
    filterMonitor.add('filters', function (filters) {
        // Применим фильтр.
        objectManager.setFilter(getFilterFunction(filters));
    });

    function getFilterFunction(categories) {
        return function (obj) {
            var content = obj.properties.balloonContent;
            return categories[content]
        }
    }

    $.ajax({
        url: "data.json"
    }).done(function (data) {
        objectManager.add(data);
    });

}