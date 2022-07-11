- [«return](function.return.md)
- [include »](function.include.md)

- [PHP Manual](index.md)
- [Керування конструкції](language.control-structures.md)
- require

## require

(PHP 4, PHP 5, PHP 7, PHP 8)

`require` аналогічно [include](function.include.md), крім
того, що у разі виникнення помилки він також видасть фатальну помилку
рівня **`E_COMPILE_ERROR`**. Іншими словами, він зупинить виконання
скрипта, тоді як [include](function.include.md) тільки видав би
попередження **`E_WARNING`**, яке дозволило б скрипту продовжити
Виконання.

Дивіться документацію [include](function.include.md), щоб дізнатися
як він працює.
