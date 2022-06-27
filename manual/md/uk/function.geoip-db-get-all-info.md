- [« geoip_db_filename](function.geoip-db-filename.md)
- [geoip_domain_by_name »](function.geoip-domain-by-name.md)

- [PHP Manual](index.md)
- [Функції GeoIP](ref.geoip.md)
- Повертає докладну інформацію про всі типи бази GeoIP

# geoip_db_get_all_info

(PECL geoip \>u003d 1.0.1)

geoip_db_get_all_info — Повертає докладну інформацію про всі типи
бази GeoIP

### Опис

**geoip_db_get_all_info**(): array

Функція **geoip_db_get_all_info()** повертає докладну інформацію про
всіх типах бази GeoIP як багатомірного масиву.

Ця функція доступна навіть за відсутності встановлених баз даних. При
цьому типи будуть перераховані та позначені як недоступні.

Імена різних ключів асоціативного масиву, що повертається:

- "available" -- Логічний тип, вказує доступна база (дивіться
[geoip_db_avail()](function.geoip-db-avail.md))
- "description" -- Опис бази даних
- "filename" -- Ім'я файлу бази даних на диску (дивіться
[geoip_db_filename()](function.geoip-db-filename.md))

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає асоціативний масив.

### Приклади

**Приклад #1 Приклад використання **geoip_db_get_all_info()****

Виводить масив, що містить всю інформацію про базу даних.

` <?php$infos u003d geoip_db_get_all_info();if (is_array($infos)) {   var_dump($infos);}?> `

Результат виконання цього прикладу:

array(11) {
[1]u003d>
array(3) {
["available"]u003d>
bool(true)
["description"]u003d>
string(21) "GeoIP Country Edition"
["filename"]u003d>
string(32) "/usr/share/GeoIP/GeoIP.dat"
}

[ ... ]

[11] u003d>
array(3) {
["available"]u003d>
bool(false)
["description"]u003d>
string(25) "GeoIP Domain Name Edition"
["filename"]u003d>
string(38) "/usr/share/GeoIP/GeoIPDomain.dat"
}
}

**Приклад #2 Приклад використання **geoip_db_get_all_info()****

Ви можете використовувати різноманітні константи як ключі для отримання
лише конкретної частини інформації.

` <?php$infos u003d geoip_db_get_all_info();if ($infos[GEOIP_COUNTRY_EDITION]['available']) {    echo $infos[GEOIP_COUNTRY_EDITION]['description'];}?

Результат виконання цього прикладу:

GeoIP Country Edition
