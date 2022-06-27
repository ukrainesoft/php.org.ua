- [«gnupg_getengineinfo](function.gnupg-getengineinfo.md)
- [gnupg_geterrorinfo »](function.gnupg-geterrorinfo.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Повертає текст повідомлення про помилку, якщо функція не була виконана

#gnupg_geterror

(PECL gnupg \>u003d 0.1)

gnupg_geterror — Повернення тексту повідомлення про помилку, якщо функція не
була виконана

### Опис

**gnupg_geterror**(resource `$identifier`): string

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

### Значення, що повертаються

Повертає текст повідомлення про помилку, якщо сталася помилка, інакше
у разі повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання **gnupg_geterror()** у процедурному
стилі**

` <?php$res u003d gnupg_init();echo gnupg_geterror($res);?> `

**Приклад #2 Приклад використання **gnupg_geterror()** в
об'єктно-орієнтованому стилі**

` <?php$gpg u003d new gnupg();echo $gpg->geterror();?> `
