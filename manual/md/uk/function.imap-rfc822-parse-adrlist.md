- [« imap_reopen](function.imap-reopen.md)
- [imap_rfc822_parse_headers
»](function.imap-rfc822-parse-headers.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Розбір адресного рядка

#imap_rfc822_parse_adrlist

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_rfc822_parse_adrlist — Розбір адресного рядка

### Опис

**imap_rfc822_parse_adrlist**(string `$string`, string
`$default_hostname`): array

Розбирає адресний рядок відповідно до
[» RFC2822](http://www.faqs.org/rfcs/rfc2822) для кожної адреси.

### Список параметрів

`string`
Рядок з адресами

`default_hostname`
Ім'я хоста за замовчуванням

### Значення, що повертаються

Повертає масив об'єктів з такими властивостями:

- mailbox - ім'я скриньки (користувача)
- host - ім'я хоста
- personal - персональне ім'я
- adl - "at-domain-list". Не використовується.

### Приклади

**Приклад #1 Приклад використання **imap_rfc822_parse_adrlist()****

` <?php$address_string u003d "Joe Doe <doe@example.com>, postmaster@example.com, root";$address_array  u003d imap_rfc822_parse_adrlist($address_string, "exarra.com || count($address_array) < 1) {    die("something is wrong
");}foreach ($address_array as $id u003d> $val) {   echo "# $id
";    echo "  mailbox : " . $val->mailbox . "
";    echo "  host    ::"" . $val->host . "
";    echo "  personal: " . $val->personal . "
";    echo "  adl     : " . $val->adl . "
";}?> `

Результат виконання цього прикладу:

# 0
mailbox : doe
host: example.com
personal: Joe Doe
adl :
#1
mailbox: postmaster
host: example.com
personal:
adl :
#2
mailbox: root
host: example.com
personal:
adl :

### Дивіться також

- [imap_rfc822_parse_headers()](function.imap-rfc822-parse-headers.md) -
Розбір рядка заголовка листа
