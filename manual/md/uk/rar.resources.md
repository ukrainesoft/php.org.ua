- [« Налаштування під час виконання](rar.configuration.md)
- [Предвизначені константи »](rar.constants.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](rar.setup.md)
- Типи ресурсів

## Типи ресурсів

Цей модуль використовує три внутрішні ресурси: дескриптор файлу,
повертається функцією [rar_open()](rararchive.open.md) –
[RarArchive](class.rararchive.md), вміст архіву, що повертається
функціями [rar_list()](rararchive.getentries.md) та
[rar_entry_get()](rararchive.getentry.md) –
[RarEntry](class.rarentry.md) та тип винятків
[RarException](class.rarexception.md).

Цей модуль також реєструє потоковий ресурс, званий "rar", та
обгортку URL, звану "rar wrapper", і відповідний їй префікс
"rar".
