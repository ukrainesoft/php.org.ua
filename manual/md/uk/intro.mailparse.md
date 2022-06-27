- [«Mailparse](book.mailparse.md)
- [Встановлення та налаштування »](mailparse.setup.md)

- [PHP Manual](index.md)
- [Mailparse](book.mailparse.md)
-   Вступ

# Вступ

Mailparse – це модуль для аналізу та роботи з поштовими повідомленнями.
Модуль працює з повідомленнями, сумісними з [» RFC
822](http://www.faqs.org/rfcs/rfc822) та [» RFC
2045](http://www.faqs.org/rfcs/rfc2045) (`MIME`).

Mailparse не тримає в пам'яті копії файлів, що обробляються, що дуже
ефективно з погляду ресурсів для обробки об'ємних повідомлень.

> **Примітка**:
>
> Для Mailparse потрібна наявність модуля [mbstring](book.mbstring.md)
> і він повинен бути завантажений перед mailparse.
