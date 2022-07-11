- [« Установка](yaml.installation.md)
- [Типи ресурсів»] (yaml.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](yaml.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- ---------------------------|--------------|------- ----------|--------------------------------------- --------------------------|
| [yaml.decode_binary](yaml.configuration.md#ini.yaml.decode-binary) | 0 | PHP_INI_ALL | |
| [yaml.decode_php](yaml.configuration.md#ini.yaml.decode-php) | 0 | PHP_INI_ALL | Додано до 1.2.0, до версії 2.0.0 значення за промовчанням було 1 |
| [yaml.decode_timestamp](yaml.configuration.md#ini.yaml.decode-timestamp) | 0 | PHP_INI_ALL | |
| [yaml.output_canonical](yaml.configuration.md#ini.yaml.output-canonical) | 0 | PHP_INI_ALL | |
| [yaml.output_indent](yaml.configuration.md#ini.yaml.output-indent) | 2 | PHP_INI_ALL | |
| [yaml.output_width](yaml.configuration.md#ini.yaml.output-width) | 80 | PHP_INI_ALL | |

**Опції налаштування Yaml**

Коротке пояснення конфігураційних директив.

`yaml.decode_binary` bool
За замовчуванням Off. Якщо встановити як On, то декодуватимуться
бінарні записи кодовані в base64 і мають тег
"tag:yaml.org,2002:binary".

`yaml.decode_php` bool
За замовчуванням Off. Якщо поставити як On, то серіалізовані об'єкти PHP з
явно заданим тегом "! php/object" будуть десеріалізовані.

`yaml.decode_timestamp` int
Контролює декодування явних та неявних скалярів
"tag:yaml.org,2002:timestamp" у потоці документів YAML. Значення по
замовчуванням дорівнює `0`, що означає відсутність декодування. Якщо поставити
`1`, то для розбору тимчасової мітки Unix буде використовуватись
[strtotime()](function.strtotime.md). Якщо поставити `2`, то для розбору
тимчасової мітки буде використовуватися
[date_create()](function.date-create.md), що створює об'єкт
[DateTime](class.datetime.md).

`yaml.output_canonical` boolean
За замовчуванням Off. Якщо поставити як On, то використовуватиметься канонічний
виведення форм.

`yaml.output_indent` int
Кількість прогалин для розділення секцій. Має бути в діапазоні від
`1` до `10`.

`yaml.output_width` int
Задає бажану ширину рядка. `-1` для необмеженої довжини.
