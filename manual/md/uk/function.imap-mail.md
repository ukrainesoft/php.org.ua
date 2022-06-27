- [« imap_mail_move](function.imap-mail-move.md)
- [imap_mailboxmsginfo »] (function.imap-mailboxmsginfo.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Надіслати email

#imap_mail

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_mail — Надіслати email

### Опис

**imap_mail**(
string `$to`,
string `$subject`,
string `$message`,
?string `$additional_headers` u003d **`null`**,
?string `$cc` u003d **`null`**,
?string `$bcc` u003d **`null`**,
?string `$return_path` u003d **`null`**
): bool

Ця функція дозволяє надсилати повідомлення з коректною обробкою
одержувачів Cc та Bcc.

Параметри `to`, `cc` та `bcc` - рядки, які будуть розібрані в
відповідно до [»RFC822](http://www.faqs.org/rfcs/rfc822).

### Список параметрів

`to`
Одержувач

`subject`
Тема листа

`message`
Тіло листа, дивіться
[imap_mail_compose()](function.imap-mail-compose.md)

`additional_headers`
Рядок із додатковими заголовками

`cc`

`bcc`
Одержувачі `bcc` отримають листа, але не будуть вказані в заголовках.

`return_path`
Використовуйте цей параметр для вказівки зворотної адреси для надсилання
звіту у разі невдалої доставки. Це зручно, коли PHP використовується
як поштовий клієнт кількома користувачами.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------|
| 8.0.0 | `additional_headers`, `cc`, `bcc` та `return_path` тепер допускають значення null. |

### Дивіться також

- [mail()](function.mail.md) - Надсилає електронну пошту
- [imap_mail_compose()](function.imap-mail-compose.md) - Створити
MIME-повідомлення на основі заданих обгортки та тіла
