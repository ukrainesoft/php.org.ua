- [« Установка](soap.installation.md)
- [Типи ресурсів»] (soap.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](soap.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -------------------------------|--------------|--- --------------|------------------|
| [soap.wsdl_cache_enabled](soap.configuration.md#ini.soap.wsdl-cache-enabled) | 1 | PHP_INI_ALL | |
| [soap.wsdl_cache_dir](soap.configuration.md#ini.soap.wsdl-cache-dir) | /tmp | PHP_INI_ALL | |
| [soap.wsdl_cache_ttl](soap.configuration.md#ini.soap.wsdl-cache-ttl) | 86400 | PHP_INI_ALL | |
| [soap.wsdl_cache](soap.configuration.md#ini.soap.wsdl-cache) | 1 | PHP_INI_ALL | |
| [soap.wsdl_cache_limit](soap.configuration.md#ini.soap.wsdl-cache-limit) | 5 | PHP_INI_ALL | |

**Опції налаштування SOAP**

Коротке пояснення конфігураційних директив.

`soap.wsdl_cache_enabled` int
Включає або вимикає кешування WSDL.

`soap.wsdl_cache_dir` string
Встановлює шлях до директорії, де модуль SOAP зберігатиме
кеш-файли.

`soap.wsdl_cache_ttl` int
Встановлює кількість секунд (час життя) для файлів у кеші
вони будуть використовуватись замість оригінальних файлів.

`soap.wsdl_cache` int
Якщо параметр `soap.wsdl_cache_enabled` набуває значення "on", то ця
опція визначає тип кешування. Він може бути будь-яким з наступних
типів: **`WSDL_CACHE_NONE`** (`0`), **`WSDL_CACHE_DISK`** (`1`),
**`WSDL_CACHE_MEMORY`** (`2`) або **`WSDL_CACHE_BOTH`** (`3`). це також
може бути встановлений через масив `options` у конструкторі
[SoapClient](class.soapclient.md) або
[SoapServer](class.soapserver.md).

`soap.wsdl_cache_limit` int
Максимальна кількість кешованих в оперативній пам'яті
файли WSDL. Подальше додавання файлів до заповненої кеш-пам'яті буде
приводити до видалення з неї найстаріших файлів.
