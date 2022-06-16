- [«gnupg_addsignkey](function.gnupg-addsignkey.md)
- [gnupg_clearencryptkeys »](function.gnupg-clearencryptkeys.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Видаляє всі ключі, які були встановлені для розшифровки раніше

#gnupg_cleardecryptkeys

(PECL gnupg \>u003d 0.5)

gnupg_cleardecryptkeys — Видалення всіх ключів, які були встановлені для
розшифровки раніше

### Опис

**gnupg_cleardecryptkeys**(resource `$identifier`): bool

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Процедурний приклад використання
**gnupg_cleardecryptkeys()****

` <?php$res u003d gnupg_init();gnupg_cleardecryptkeys($res);?> `

**Приклад #2 Об'єктно-орієнтований приклад використання
**gnupg_cleardecryptkeys()****

` <?php$gpg u003d new gnupg();$gpg->cleardecryptkeys();?> `
