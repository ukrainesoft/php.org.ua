- [« yaz_ccl_parse](function.yaz-ccl-parse.md)
- [yaz_connect »](function.yaz-connect.md)

- [PHP Manual](index.md)
- [Функції YAZ](ref.yaz.md)
- Закриває з'єднання YAZ

# yaz_close

(PHP 4 u003d 4.0.1, PECL yaz u003d 0.9.0)

yaz_close — Закриває з'єднання YAZ

### Опис

**yaz_close**(resource `$id`): bool

Закриває з'єднання, яке визначається параметром `id`.

> **Примітка**:
>
> Функція закриє лише непостійні з'єднання, відкриті функцією
> [yaz_connect()](function.yaz-connect.md) з параметром `persistent`
> встановленим на значення **`false`**.

### Список параметрів

`id`
Дескриптор з'єднання, що повертається
[yaz_connect()](function.yaz-connect.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [yaz_connect()](function.yaz-connect.md) - Підготовка
з'єднання з сервером Z39.50
