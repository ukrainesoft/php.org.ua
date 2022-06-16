- [« Функції RpmInfo](ref.rpminfo.md)
- [rpmdbinfo »](function.rpmdbinfo.md)

- [PHP Manual](index.md)
- [Функції RpmInfo](ref.rpminfo.md)
- Додає тег, отриманий у запиті

#rpmaddtag

(PECL rpminfo \>u003d 0.5.0)

rpmaddtag — Додає тег, отриманий у запиті

### Опис

**rpmaddtag**(int `$tag`): bool

Додає додатковий витягнутий тег у наступних запитах.

### Список параметрів

`tag`
Одна з констант RPMTAG\_\*, перегляньте сторінку [константи
rpminfo](rpminfo.constants.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [rpminfo()](function.rpminfo.md) - Вийняти інформацію з RPM-файлу
- [rpmdbinfo()](function.rpmdbinfo.md) - Отримує інформацію від
встановленого RPM
- [rpmdbsearch()](function.rpmdbsearch.md) - Пошук RPM-пакетів
