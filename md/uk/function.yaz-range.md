- [« yaz_present](function.yaz-present.md)
- [yaz_record »](function.yaz-record.md)

- [PHP Manual](index.md)
- [Функції YAZ](ref.yaz.md)
- Визначає діапазон записів для отримання

# yaz_range

(PHP 4 u003d 4.0.1, PECL yaz u003d 0.9.0)

yaz_range — Визначає діапазон записів для отримання

### Опис

**yaz_range**(resource `$id`, int `$start`, int `$number`): void

Визначає діапазон записів для отримання.

Функція має бути викликана перед
[yaz_search()](function.yaz-search.md) або
[yaz_present()](function.yaz-present.md).

### Список параметрів

`id`
Ресурс з'єднання, повернутий
[yaz_connect()](function.yaz-connect.md).

`start`
Визначає позицію першого запису, який потрібно отримати. Номери записів
ідуть від 1 до [yaz_hits()](function.yaz-hits.md).

`number`
Визначає діапазон записів для отримання.

### Значення, що повертаються

Функція не повертає значення після виконання.
