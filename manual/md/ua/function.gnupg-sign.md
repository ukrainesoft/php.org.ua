- [«gnupg_setsignmode](function.gnupg-setsignmode.md)
- [gnupg_verify »](function.gnupg-verify.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Підписує переданий текст

#gnupg_sign

(PECL gnupg \>u003d 0.1)

gnupg_sign — Підписує переданий текст

### Опис

**gnupg_sign**(resource `$identifier`, string `$plaintext`): string

Підписує переданий у параметрі `plaintext` текст ключем, що був
раніше встановлений за допомогою
[gnupg_addsignkey](function.gnupg-addsignkey.md) та повертає
підписаний текст або підпис, залежно від того, що було
встановлено в [gnupg_setsignmode](function.gnupg-setsignmode.md).

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

`plaintext`
Простий текст для підписання.

### Значення, що повертаються

У разі успішного виконання функція повертає підписаний текст або
підпис. У разі помилки функція повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання **gnupg_sign()** у процедурному стилі**

` <?php$res u003d gnupg_init();gnupg_addsignkey($res,"8660281B6051D071D94B5B230549F9DC851566DC","test");$signed u003d gnupg_sign|

**Приклад #2 Приклад використання **gnupg_sign()** в
об'єктно-орієнтованому стилі**

` <?php$gpg u003d new gnupg();$gpg->addsignkey("8660281B6051D071D94B5B230549F9DC851566DC","test");$signed u003d $gpg->|
