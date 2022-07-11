- [« Установка](ffi.installation.md)
- [Типи ресурсів»] (ffi.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](ffi.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- ------|--------------|-----------------|---------- --------|
| [ffi.enable](ffi.configuration.md#ini.ffi.enable) | "Preload" | PHP_INI_SYSTEM | |
| [ffi.preload](ffi.configuration.md#ini.ffi.preload) | "" | PHP_INI_SYSTEM | |

**Опції налаштування FFI**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`ffi.enable` string
Дозволяє дозволити ('true') або заборонити ('false') використання
FFI API, або обмежити використання тільки для CLI SAPI та
передзавантажених файлів (``preload'`).

Обмеження FFI API впливають лише на клас [FFI](class.ffi.md), але не
на перезавантажені функції об'єкта [FFI\CData](class.ffi-cdata.md).
Це означає, що можна створити об'єкти [FFI\CData](class.ffi-cdata.md)
в передзавантажуваних файлах і потім використовувати безпосередньо зі скриптів PHP.

`ffi.preload` string
Дозволяє завантажувати прив'язки FFI під час старту, що неможливо з
[FFI::load()](ffi.load.md), якщо увімкнено
[opcache.preload_user](opcache.configuration.md#ini.opcache.preload-user).
Ця директива приймає список роздільників імен файлів
**`DIRECTORY_SEPARATOR`**. Завантажені прив'язки доступні за допомогою
виклику [FFI::scope()](ffi.scope.md).
