ymaps.ready(init);

function init() {

        // Создание экземпляра карты.
    var myMap = new ymaps.Map('map', {
        center: [50.443705, 30.530946],
        zoom: 14
    }, {
        searchControlProvider: 'yandex#search'
    })

    createMenuGroup(groups[0]);

    function createMenuGroup (group) {
        collection = new ymaps.GeoObjectCollection(null, { preset: group.style });
        myMap.geoObjects.add(collection);
        for (var j = 0, m = group.items.length; j < m; j++) {
            createSubMenu(group.items[j], collection);
        }
    }

    function createSubMenu (item, collection) {
                // Создаем метку.
                placemark = new ymaps.Placemark(item.center, { balloonContent: item.name });

                // Добавляем метку в коллекцию.
                collection.add(placemark);
    }
    
        // Выставляем масштаб карты чтобы были видны все группы.
        myMap.setBounds(myMap.geoObjects.getBounds());
}