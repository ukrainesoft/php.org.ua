- [«Зумовлені константи](imap.constants.md)
- [imap_8bit »](function.imap-8bit.md)

- [PHP Manual](index.md)
- [IMAP](book.imap.md)
- Функції IMAP

# Функції IMAP

# Дивіться також

Цей документ не може вдаватися до деталей усіх питань, порушених
представленими функціями. Додаткова інформація представлена в
документації клієнтської бібліотеки (`docs/internal.txt`) та в наступних
документи RFC:

- [» RFC2821](http://www.faqs.org/rfcs/rfc2821):
`Simple Mail Transfer Protocol` (SMTP).
- [» RFC2822](http://www.faqs.org/rfcs/rfc2822):
`Standard for ARPA internet text messages`.
- [»RFC2060](http://www.faqs.org/rfcs/rfc2060):
'Internet Message Access Protocol' (IMAP) Version 4rev1.
- [» RFC1939](http://www.faqs.org/rfcs/rfc1939):
`Post Office Protocol Version 3` (POP3).
- [» RFC977](http://www.faqs.org/rfcs/rfc977):
`Network News Transfer Protocol` (NNTP).
- [»RFC2076](http://www.faqs.org/rfcs/rfc2076):
`Common Internet Message Headers`.
- [» RFC2045](http://www.faqs.org/rfcs/rfc2045) ,
[»RFC2046](http://www.faqs.org/rfcs/rfc2046) ,
[»RFC2047](http://www.faqs.org/rfcs/rfc2047) ,
[» RFC2048](http://www.faqs.org/rfcs/rfc2048) &
[» RFC2049](http://www.faqs.org/rfcs/rfc2049):
`Multipurpose Internet Mail Extensions` (MIME).

Детальний опис також доступний у книгах
[» `Programming Internet Email`](http://www.oreilly.com/catalog/progintemail/noframes.md)
Девіда Вуда (David Wood) і [» Managing
IMAP](http://oreilly.com/catalog/9780596000127/) авторів Діани Маллет
(Dianna Mullet) та Кевіна Маллет (Kevin Mullet).

## Зміст

- [imap_8bit](function.imap-8bit.md) — Конвертує 8-бітний рядок
у рядок у форматі quoted-printable
- [imap_alerts](function.imap-alerts.md) - Повертає все
попередження IMAP
- [imap_append](function.imap-append.md) — Додає рядкове
повідомлення у вказану поштову скриньку
- [imap_base64](function.imap-base64.md) — Декодувати текст
закодований BASE64
- [imap_binary](function.imap-binary.md) - Конвертує 8-бітну
рядок у рядок base64
- [imap_body](function.imap-body.md) — Прочитати тіло повідомлення
- [imap_bodystruct](function.imap-bodystruct.md) — Прочитати
структуру вказаної секції тіла заданого повідомлення
- [imap_check](function.imap-check.md) — Перевірити поточний поштовий
ящик
- [imap_clearflag_full](function.imap-clearflag-full.md) — Зняти з
повідомлення встановлені прапори
- [imap_close](function.imap-close.md) — Закрити потік IMAP
- [imap_create](function.imap-create.md) - Псевдонім
imap_createmailbox
- [imap_createmailbox](function.imap-createmailbox.md) — Створити
нова поштова скринька
- [imap_delete](function.imap-delete.md) — Позначити повідомлення для
видалення
- [imap_deletemailbox](function.imap-deletemailbox.md) — Видалити
Поштова скринька
- [imap_errors](function.imap-errors.md) — Отримати всі події
помилки IMAP
- [imap_expunge](function.imap-expunge.md) — Видалити всі позначені
для видалення повідомлення
- [imap_fetch_overview](function.imap-fetch-overview.md) - Огляд
інформації, що міститься в заголовках повідомлень
- [imap_fetchbody](function.imap-fetchbody.md) — Витягти конкретну
секцію тіла повідомлення
- [imap_fetchheader](function.imap-fetchheader.md) — Отримати
заголовок повідомлення
- [imap_fetchmime](function.imap-fetchmime.md) — Вийняти
MIME-заголовки для конкретної секції повідомлення
- [imap_fetchstructure](function.imap-fetchstructure.md) — Прочитати
структуру вказаного повідомлення
- [imap_fetchtext](function.imap-fetchtext.md) - Псевдонім imap_body
- [imap_gc](function.imap-gc.md) — Очистити кеш IMAP
- [imap_get_quota](function.imap-get-quota.md) — Отримати налаштування
рівня квоти та статистику використання поштових скриньок
- [imap_get_quotaroot](function.imap-get-quotaroot.md) — Отримати
налаштування квоти для кожного користувача
- [imap_getacl](function.imap-getacl.md) — Отримати ACL для
заданої поштової скриньки
- [imap_getmailboxes](function.imap-getmailboxes.md) — Прочитати
список поштових скриньок, повертаючи докладну інформацію по кожному з
них
- [imap_getsubscribed](function.imap-getsubscribed.md) - Список всіх
поштових скриньок, на які ви підписані
- [imap_header](function.imap-header.md) - Псевдонім imap_headerinfo
- [imap_headerinfo](function.imap-headerinfo.md) — Прочитати
заголовок повідомлення
- [imap_headers](function.imap-headers.md) — Отримати всі заголовки всіх
повідомлень у поштовій скриньці
- [imap_last_error](function.imap-last-error.md) — Отримати
останню помилку IMAP у поточному запиті
- [imap_list](function.imap-list.md) — Прочитати список поштових
ящиків
- [imap_listmailbox](function.imap-listmailbox.md) - Псевдонім
imap_list
- [imap_listscan](function.imap-listscan.md) — Отримати перелік
поштових скриньок, імена яких містять заданий рядок
- [imap_listsubscribed](function.imap-listsubscribed.md) - Псевдонім
imap_lsub
- [imap_lsub](function.imap-lsub.md) - Список усіх підписаних
поштових скриньок
- [imap_mail_compose](function.imap-mail-compose.md) — Створити
MIME-повідомлення на основі заданих обгортки та тіла
- [imap_mail_copy](function.imap-mail-copy.md) — Скопіювати
повідомлення у вказану поштову скриньку
- [imap_mail_move](function.imap-mail-move.md) — Перемістити
вказані повідомлення до вказаної поштової скриньки
- [imap_mail](function.imap-mail.md) — Надіслати email
- [imap_mailboxmsginfo](function.imap-mailboxmsginfo.md) — Отримати
інформацію про поточну поштову скриньку
- [imap_mime_header_decode](function.imap-mime-header-decode.md) -
Декодувати елементи заголовка
- [imap_msgno](function.imap-msgno.md) — Отримати номер повідомлення з
заданим UID
- [imap_mutf7_to_utf8](function.imap-mutf7-to-utf8.md) -
Декодувати змінений рядок UTF-7 у UTF-8
- [imap_num_msg](function.imap-num-msg.md) — Отримати кількість
повідомлень у поточній поштовій скриньці
- [imap_num_recent](function.imap-num-recent.md) — Отримати
кількість нових повідомлень у поточній поштовій скриньці
- [imap_open](function.imap-open.md) — Відкриває потік IMAP до
поштовій скриньці
- [imap_ping](function.imap-ping.md) — Перевірити, чи активний ще
потік IMAP
- [imap_qprint](function.imap-qprint.md) — Перетворити рядок з
формату "quoted-printable" у 8-бітний рядок
- [imap_rename](function.imap-rename.md) - Псевдонім
imap_renamemailbox
- [imap_renamemailbox](function.imap-renamemailbox.md) -
Перейменувати поштову скриньку
- [imap_reopen](function.imap-reopen.md) — Відкриває потік IMAP
до нової скриньки
- [imap_rfc822_parse_adrlist](function.imap-rfc822-parse-adrlist.md)
- Розбір адресного рядка
- [imap_rfc822_parse_headers](function.imap-rfc822-parse-headers.md)
- Розбір рядка заголовка листа
- [imap_rfc822_write_address](function.imap-rfc822-write-address.md)
— Отримати коректно сформовану e-mail адресу, задану ім'ям
скриньки, хоста та персональною інформацією
- [imap_savebody](function.imap-savebody.md) — Зберегти частину тіла
повідомлення у файл
- [imap_scan](function.imap-scan.md) - Псевдонім imap_listscan
- [imap_scanmailbox](function.imap-scanmailbox.md) - Псевдонім
imap_listscan
- [imap_search](function.imap-search.md) — Отримати повідомлення,
які відповідають заданим критеріям
- [imap_set_quota](function.imap-set-quota.md) — Встановити квоту
для заданої поштової скриньки
- [imap_setacl](function.imap-setacl.md) — Встановлення ACL для
заданої поштової скриньки
- [imap_setflag_full](function.imap-setflag-full.md) — Встановити
прапори на повідомлення
- [imap_sort](function.imap-sort.md) — Отримати та відсортувати
повідомлення
- [imap_status](function.imap-status.md) — Отримати інформацію про
статусу поштової скриньки
- [imap_subscribe](function.imap-subscribe.md) — Підписатися на
Поштова скринька
- [imap_thread](function.imap-thread.md) — Отримати дерево пов'язаних
повідомлень
- [imap_timeout](function.imap-timeout.md) — Встановити або отримати
час очікування imap
- [imap_uid](function.imap-uid.md) — Отримати UID за номером
повідомлення
- [imap_undelete](function.imap-undelete.md) — Знімає повідомлення
мітку видалення
- [imap_unsubscribe](function.imap-unsubscribe.md) — Відписатися від
поштової скриньки
- [imap_utf7_decode](function.imap-utf7-decode.md) - Декодує
рядок із модифікованого кодування UTF-7
- [imap_utf7_encode](function.imap-utf7-encode.md) - Перетворює
рядок ISO-8859-1 модифікований UTF-7
- [imap_utf8_to_mutf7](function.imap-utf8-to-mutf7.md) — Кодувати
рядок UTF-8 змінений UTF-7
- [imap_utf8](function.imap-utf8.md) - Перетворює MIME-кодований
текст у UTF-8
