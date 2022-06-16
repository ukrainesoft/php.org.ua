- [« property_exists](function.property-exists.md)
- [Ctype »](book.ctype.md)

- [PHP Manual](index.md)
- [Функції роботи з класами та об'єктами](ref.classobj.md)
- Перевіряє, чи існує трейт

# trait_exists

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

trait_exists — Перевіряє, чи існує трейт

### Опис

**trait_exists**(string `$trait`, bool `$autoload` u003d **`true`**): bool

### Список параметрів

`trait`
Ім'я трейту для перевірки

`autoload`
Чи намагатиметься його завантажити автоматично

### Значення, що повертаються

Повертає **`true`**, якщо трейт існує, інакше
повертає **`false`**.
