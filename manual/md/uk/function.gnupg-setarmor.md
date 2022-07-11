- [«gnupg_listsignatures](function.gnupg-listsignatures.md)
- [gnupg_seterrormode »](function.gnupg-seterrormode.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Перемикає висновок у текстовому або бінарному режимі

#gnupg_setarmor

(PECL gnupg \>u003d 0.1)

gnupg_setarmor — Перемикає вивод у текстовому або бінарному режимі

### Опис

**gnupg_setarmor**(resource `$identifier`, int `$armor`): bool

Перемикає висновок у текстовому або бінарному режимі.

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

`armor`
У разі не нульового цілого числа, функція включає текстовий режим
виводу (за замовчуванням). У разі 0 виведення в бінарному режимі.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **gnupg_setarmor()** у процедурному
стилі**

` <?php$res u003d gnupg_init();gnupg_setarmor($res,1); // текстовий режим висновку;gnupg_setarmor($res,0); // бінарний режим висновку;?> `

**Приклад #2 Приклад використання **gnupg_setarmor()** в
об'єктно-орієнтованому стилі**

` <?php$gpg u003d new gnupg();$gpg->setarmor(1); // текстовий режим висновку;$gpg->setarmor(0); // бінарний режим висновку;?> `
