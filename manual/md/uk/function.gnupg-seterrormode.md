- [«gnupg_setarmor](function.gnupg-setarmor.md)
- [gnupg_setsignmode »](function.gnupg-setsignmode.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Встановлює режим звітів про помилки (error_reporting)

# gnupg_seterrormode

(PECL gnupg \>u003d 0.6)

gnupg_seterrormode — Встановлює режим звітів про помилки
(error_reporting)

### Опис

**gnupg_seterrormode**(resource `$identifier`, int `$errormode`): void

Встановлює режим
[error_reporting](errorfunc.configuration.md#ini.error-reporting).

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

`errormode`
Режим помилок.

`errormode` містить константу, яка вказує, який тип error_reporting
має бути використаний. Можливі значення: **`GNUPG_ERROR_WARNING`**,
**`GNUPG_ERROR_EXCEPTION`** та **`GNUPG_ERROR_SILENT`**. За замовчуванням
використовується **`GNUPG_ERROR_SILENT`**.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **gnupg_seterrormode()** у процедурному
стилі**

` <?php$res u003d gnupg_init();gnupg_seterrormode($res, GNUPG_ERROR_WARNING); // виводити PHP-попередження у випадку виникнення помилки?> `

**Приклад #2 Приклад використання **gnupg_seterrormode()** в
об'єктно-орієнтованому стилі**

` <?php$gpg u003d new gnupg();$gpg->seterrormode(gnupg::ERROR_EXCEPTION); // виключення у випадку виникнення помилки?> `
