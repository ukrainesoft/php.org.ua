- [«radius_cvt_string](function.radius-cvt-string.md)
- [radius_demangle »](function.radius-demangle.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Отримує mppe-ключі зі спотворених даних

# radius_demangle_mppe_key

(PECL radius \>u003d 1.2.0)

radius_demangle_mppe_key — Отримує mppe-ключі зі спотворених даних

### Опис

**radius_demangle_mppe_key**(resource `$radius_handle`, string
`$mangled`): string

При використанні MPPE з MS-CHAPv2, ключі надсилаються та одержуються
ключі спотворюються (дивіться [RFC
2548](http://www.faqs.org/rfcs/rfc2548)), проте ця функція марна,
оскільки я не думаю, що є чи буде реалізація PPTP-MPPE у PHP.

### Список параметрів

`radius_handle`
Ресурс RADIUS

`mangled`
Спотворені дані, які необхідно деформувати

### Значення, що повертаються

Повертає деформований рядок або **`false`** у разі виникнення
помилки.
