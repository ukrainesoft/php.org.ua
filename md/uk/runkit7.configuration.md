- [« Установка](runkit7.installation.md)
- [Типи ресурсів»] (runkit7.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](runkit7.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Список змін |
|------------------------------------------------- -------------------------------------|------------ --|-----------------|------------------|
| [runkit.superglobal](runkit7.configuration.md#ini.runkit7.superglobal) | "" | PHP_INI_PERDIR | |
| [runkit.internal_override](runkit7.configuration.md#ini.runkit7.internal-override) | "0" | PHP_INI_SYSTEM | |

**Параметри конфігурації Runkit**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`runkit.superglobal` string
Розділений комами список імен змінних, які будуть
розглядатися як суперглобальні. Це значення має бути
встановлено в загальносистемному файлі php.ini, але може працювати в
контекстах конфігурації perdir в залежності від вашого SAPI.

**Приклад #1 Користувальницькі суперглобальні файли з
runkit.superglobalu003d\_FOO,\_BAR у php.ini**

` <?phpfunction show_values() {  echo "Foo is $_FOO
";  echo "Bar is $_BAR
";  echo "Baz is $_BAZ
";}$_FOO u003d 'foo';$_BAR u003d 'bar';$_BAZ u003d 'baz';/* Відобразить foo і bar, але не baz */show_values();?> `

`runkit.internal_override` bool
Дозволяє змінювати/перейменовувати/вилучати внутрішні функції.
