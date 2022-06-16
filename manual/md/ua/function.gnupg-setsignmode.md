- [«gnupg_seterrormode](function.gnupg-seterrormode.md)
- [gnupg_sign »](function.gnupg-sign.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Встановлює режим підписування

# gnupg_setsignmode

(PECL gnupg \>u003d 0.1)

gnupg_setsignmode — Встановлює режим підписування

### Опис

**gnupg_setsignmode**(resource `$identifier`, int `$signmode`): bool

Встановлює режим підписування.

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

`sigmode`
Режим підписування.

`signmode` містить константу, яка вказує, який тип підпису повинен
бути зроблений. Можливі значення: **`GNUPG_SIG_MODE_NORMAL`**,
**`GNUPG_SIG_MODE_DETACH`** та **`GNUPG_SIG_MODE_CLEAR`**. За замовчуванням
використовується **`GNUPG_SIG_MODE_CLEAR`**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **gnupg_setsignmode()** у процедурному
стилі**

` <?php$res u003d gnupg_init();gnupg_setsignmode($res, GNUPG_SIG_MODE_DETACH); // виробляти роздільну підпис?

**Приклад #2 Приклад використання **gnupg_setsignmode()** в
об'єктно-орієнтованому стилі**

` <?php$gpg u003d new gnupg();$gpg->setsignmode(gnupg::SIG_MODE_DETACH); // виробляти роздільну підпис?
