- [« Прозоре підписування тексту](gnupg.examples-clearsign.md)
- [gnupg_adddecryptkey »](function.gnupg-adddecryptkey.md)

- [PHP Manual](index.md)
- [GnuPG](book.gnupg.md)
- GnuPG Функції

# GnuPG Функції

# Примітки

Цей модуль дозволяє використовувати зв'язок ключів поточного користувача.
Зв'язування, як правило, розташоване в \~/.gnupg/. Щоб вказати іншу
папку, збережіть шлях до зв'язки ключів у змінному оточенні GNUPGHOME.
Дивіться [putenv](function.putenv.md) для отримання додаткової інформації
інформації, як це зробити.

Деякі функції потребують специфікації ключа. Ця специфікація може
бути всім, що відноситься до унікального ключа (ідентифікатор
користувача, ідентифікатор ключа, відбитки пальців...). В цій
У документації використовується відбиток пальця у всіх прикладах.

> **Примітка**:
>
> Як альтернатива явно документованим функціям, що використовують
> resource, ви можете використовувати об'єктно-орієнтований стиль з
> за допомогою об'єктів **gnupg**.

## Зміст

- [gnupg_adddecryptkey](function.gnupg-adddecryptkey.md) — Додати
ключ для розшифровки
- [gnupg_addencryptkey](function.gnupg-addencryptkey.md) — Додає
ключ для шифрування
- [gnupg_addsignkey](function.gnupg-addsignkey.md) — Додати ключ
для підписання
- [gnupg_cleardecryptkeys](function.gnupg-cleardecryptkeys.md) -
Видаляє всі ключі, які були встановлені для розшифровки раніше
- [gnupg_clearencryptkeys](function.gnupg-clearencryptkeys.md) -
Видаляє всі ключі, які були встановлені для шифрування раніше
- [gnupg_clearsignkeys](function.gnupg-clearsignkeys.md) — Видаляє
всі ключі, які були встановлені для підписання раніше
- [gnupg_decrypt](function.gnupg-decrypt.md) - Розшифровує
переданий текст
- [gnupg_decryptverify](function.gnupg-decryptverify.md) -
Розшифровує та перевіряє підпис переданого тексту
- [gnupg_deletekey](function.gnupg-deletekey.md) — Видаляє ключ з
зв'язки ключів
- [gnupg_encrypt](function.gnupg-encrypt.md) - Шифрує заданий
текст
- [gnupg_encryptsign](function.gnupg-encryptsign.md) — Шифрує та
підписує переданий текст
- [gnupg_export](function.gnupg-export.md) — Експортує ключ
- [gnupg_getengineinfo](function.gnupg-getengineinfo.md) -
Повертає інформацію про движок
- [gnupg_geterror](function.gnupg-geterror.md) — Повертає текст
повідомлення про помилку, якщо функція не була виконана
- [gnupg_geterrorinfo](function.gnupg-geterrorinfo.md) — Повертає
інформацію про помилку
- [gnupg_getprotocol](function.gnupg-getprotocol.md) - Повертає
поточний активний протокол для всіх операцій
- [gnupg_gettrustlist](function.gnupg-gettrustlist.md) — Пошук
довірчих елементів
- [gnupg_import](function.gnupg-import.md) — Імпортує ключ
- [gnupg_init](function.gnupg-init.md) - Ініціалізувати GnuPG
- [gnupg_keyinfo](function.gnupg-keyinfo.md) - Повертає масив з
інформацією про всі ключі, які відповідають заданому шаблону
- [gnupg_listsignatures](function.gnupg-listsignatures.md) -
Перераховує підписи ключа
- [gnupg_setarmor](function.gnupg-setarmor.md) — Перемикає висновок
текстовому або бінарному режимі
- [gnupg_seterrormode](function.gnupg-seterrormode.md) -
Встановлює режим звітів про помилки (error_reporting)
- [gnupg_setsignmode](function.gnupg-setsignmode.md) — Встановлює
режим підписування
- [gnupg_sign](function.gnupg-sign.md) — Підписує переданий
текст
- [gnupg_verify](function.gnupg-verify.md) — Перевірка підпису
тексту
