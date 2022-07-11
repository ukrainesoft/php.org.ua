- [«php_strip_whitespace](function.php-strip-whitespace.md)
- [sapi_windows_cp_get »](function.sapi-windows-cp-get.md)

- [PHP Manual](index.md)
- [Різні функції](ref.misc.md)
- Перетворити рядок з однієї кодової сторінки на іншу

# sapi_windows_cp_conv

(PHP 7 \>u003d 7.1.0, PHP 8)

sapi_windows_cp_conv — Перетворити рядок з однієї кодової сторінки на
іншу

### Опис

**sapi_windows_cp_conv**(int\|string `$in_codepage`, int\|string
`$out_codepage`, string `$subject`): ?string

Перетворити рядок із однієї кодової сторінки на іншу.

### Список параметрів

`in_codepage`
Кодова сторінка рядка `subject`. Або ім'я або кодовий ідентифікатор
сторінки.

`out_codepage`
Кодова сторінка для перетворення рядка `subject`. Або ім'я або
ідентифікатор кодової сторінки

`subject`
Рядок для перетворення.

### Значення, що повертаються

Рядок `subject`, перетворений на `out_codepage` або **`null`**
у разі виникнення помилки.

### Помилки

Ця функція видасть помилки рівня E_WARNING, якщо передані неприпустимі
кодові сторінки, або якщо рядок у параметрі subject некоректний для
`in_codepage`.

### Дивіться також

- [sapi_windows_cp_get()](function.sapi-windows-cp-get.md) -
Отримати поточну кодову сторінку
- [iconv()](function.iconv.md) - Перетворює рядок з одного
кодування символів в іншу
