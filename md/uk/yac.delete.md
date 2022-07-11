- [« Yac::\_\_construct](yac.construct.md)
- [Yac::dump »](yac.dump.md)

- [PHP Manual](index.md)
- [Yac](class.yac.md)
- Видаляє елементи з кешу

# Yac::delete

(PECL yac \>u003d 1.0.0)

Yac::delete — Видаляє елементи з кешу

### Опис

public **Yac::delete**(string\|array `$keys`, int `$ttl` u003d ?): bool

Видаляє елементи з кешу

### Список параметрів

`keys`
Рядковий ключ або масив з декількох ключів, які потрібно видалити

`ttl`
Якщо задана затримка, видалення позначить елементи як неприпустимі
протягом ttl секунд.

### Значення, що повертаються
