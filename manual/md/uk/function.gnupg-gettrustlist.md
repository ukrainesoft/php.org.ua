- [«gnupg_getprotocol](function.gnupg-getprotocol.md)
- [gnupg_import »](function.gnupg-import.md)

- [PHP Manual](index.md)
- [GnuPG Функції](ref.gnupg.md)
- Пошук довірчих елементів

# gnupg_gettrustlist

(PECL gnupg \>u003d 0.5)

gnupg_gettrustlist — Пошук довірчих елементів

### Опис

**gnupg_gettrustlist**(resource `$identifier`, string `$pattern`): array

### Список параметрів

`identifier`
Ідентифікатор gnupg, отриманий з
[gnupg_init()](function.gnupg-init.md) або **gnupg**.

`pattern`
Вираз для обмеження списку довірчих елементів лише тими,
які відповідають шаблону.

### Значення, що повертаються

У разі успішного виконання функція повертає масив довірчих
елементів. У разі помилки функція повертає **`null`**.

### Приклади

**Приклад #1 Приклад використання **gnupg_gettrustlist()** у процедурному
стилі**

` <?php$res u003d gnupg_init();$items u003d gnupg_gettrustlist($res);print_r($items);?> `

**Приклад #2 Приклад використання **gnupg_gettrustlist()** в
об'єктно-орієнтованому стилі**

` <?php$gpg u003d new gnupg();$items u003d $gpg->gettrustlist();print_r($items);?> `
