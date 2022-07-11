- [« Установка](exif.installation.md)
- [Типи ресурсів»] (exif.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](exif.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

Exif підтримує автоматичне перетворення коду символів
Unicode і JIS користувальницьких коментарів, коли модуль
[mbstring](ref.mbstring.md) доступний. При цьому коментар спочатку
декодується за допомогою зазначеного набору символів. Потім
результат кодується в іншому наборі символів, який має співпадати
з вашим `HTTP`-висновком.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -----------------------------------------|-------- -------|---------------------|------------------|
| [exif.encode_unicode](exif.configuration.md#ini.exif.encode-unicode) | "ISO-8859-15" | PHP_INI_ALL | |
| [exif.decode_unicode_motorola](exif.configuration.md#ini.exif.decode-unicode-motorola) | "UCS-2BE" | PHP_INI_ALL | |
| [exif.decode_unicode_intel](exif.configuration.md#ini.exif.decode-unicode-intel) | "UCS-2LE" | PHP_INI_ALL | |
| [exif.encode_jis](exif.configuration.md#ini.exif.encode-jis) | "" | PHP_INI_ALL | |
| [exif.decode_jis_motorola](exif.configuration.md#ini.exif.decode-jis-motorola) | "JIS" | PHP_INI_ALL | |
| [exif.decode_jis_intel](exif.configuration.md#ini.exif.decode-jis-intel) | "JIS" | PHP_INI_ALL | |

**Опції конфігурації Exif**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`exif.encode_unicode` string
`exif.encode_unicode` визначає набір символів UNICODE під час обробки
користувацьких коментарів. За замовчуванням це ISO-8859-15, який
повинен працювати для більшості неазіатських країн. Ця установка може
бути порожнім або має бути кодуванням, що підтримується mbstring. Якщо
вона порожня, використовується поточне внутрішнє кодування mbstring.

`exif.decode_unicode_motorola` string
`exif.decode_unicode_motorola` визначає внутрішнє кодування символів
зображення для Unicode-кодованих користувальницьких коментарів, якщо
зображення має байтовий порядок motorola (big-endian). Ця установка
не може бути порожнім, але ви можете вказати список кодувань,
підтримуваних mbstring. Типово UCS-2BE.

`exif.decode_unicode_intel` string
`exif.decode_unicode_intel` визначає внутрішнє кодування символів
зображення для Unicode-кодованих користувальницьких коментарів, якщо
зображення має байтовий порядок intel (little-endian). Ця установка
не може бути порожнім, але ви можете вказати список кодувань,
підтримуваних mbstring. Типово UCS-2LE.

`exif.encode_jis` string
`exif.encode_jis` визначає набір символів JIS для обробки
користувацьких коментарів. За замовчуванням – порожнє значення, яке
змушує функції використовувати поточне внутрішнє кодування mbstring.

`exif.decode_jis_motorola` string
`exif.decode_jis_motorola` визначає внутрішнє кодування символів
зображення для JIS-кодованих користувальницьких коментарів, якщо
зображення має байтовий порядок motorola (big-endian). Ця установка
не може бути порожнім, але ви можете вказати список кодувань,
підтримуваних mbstring. Типово JIS.

`exif.decode_jis_intel` string
`exif.decode_jis_intel` визначає внутрішнє кодування символів
зображення для JIS-кодованих користувальницьких коментарів, якщо
зображення має байтовий порядок intel (little-endian). Ця установка
не може бути порожнім, але ви можете вказати список кодувань,
підтримуваних mbstring. Типово JIS.
