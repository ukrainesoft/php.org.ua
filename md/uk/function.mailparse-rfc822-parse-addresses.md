- [«mailparse_msg_parse](function.mailparse-msg-parse.md)
- [mailparse_stream_encode »](function.mailparse-stream-encode.md)

- [PHP Manual](index.md)
- [Mailparse](ref.mailparse.md)
- Розібрати адреси відповідно до RFC 822

#mailparse_rfc822_parse_addresses

(PECL mailparse \>u003d 0.9.0)

mailparse_rfc822_parse_addresses — Розібрати адреси відповідно до RFC
822

### Опис

**mailparse_rfc822_parse_addresses**(string `$addresses`): array

Розбирає список одержувачів відповідно до [» RFC
822](http://www.faqs.org/rfcs/rfc822). Список одержувачів зазвичай
знаходиться в заголовку `To:`.

### Список параметрів

`addresses`
Рядок, що містить адреси. Наприклад:
`Wez Furlong <wez@example.com>, doe@example.com`

> **Примітка**:
>
> Цей рядок не повинен містити назву заголовка.

### Значення, що повертаються

Повертає асоціативний масив для кожного отримувача з наступними
ключами:

| | |
|------------|------------------------------------ -------------------------------------------------- -----------------------|
| `display` | Ім'я одержувача. Якщо ця частина адреси не задана, то буде використано те саме значення, що і для address. |
| `address` | Адреса електронної пошти
| `is_group` | **`true`**, якщо одержувач є групою розсилки та **`false`**, якщо ні. |

### Приклади

**Приклад #1 Приклад використання
**mailparse_rfc822_parse_addresses()****

` <?php$to u003d 'Wez Furlong <wez@example.com>, doe@example.com';var_dump(mailparse_rfc822_parse_addresses($to));?> `

Результат виконання цього прикладу:

array(2) {
[0]u003d>
array(3) {
["display"]u003d>
string(11) "Wez Furlong"
["address"]u003d>
string(15) "wez@example.com"
["is_group"]u003d>
bool(false)
}
[1]u003d>
array(3) {
["display"]u003d>
string(15) "doe@example.com"
["address"]u003d>
string(15) "doe@example.com"
["is_group"]u003d>
bool(false)
}
}
