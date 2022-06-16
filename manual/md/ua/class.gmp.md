- [«gmp_xor](function.gmp-xor.md)
- [GMP::\_\_serialize »](gmp.serialize.md)

- [PHP Manual](index.md)
- [GMP](book.gmp.md)
- Клас GMP

# Клас GMP

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8)

## Вступ

Номер GMP. Підтримка наступних об'єктів перезавантажена
[arithmetic](language.operators.arithmetic.md),
[bitwise](language.operators.bitwise.md) та
[comparison](language.operators.comparison.md) оператори.

> **Примітка**:
>
> Об'єктно-орієнтований інтерфейс для маніпуляцій з об'єктами **GMP**
> відсутня. Використовуйте [процедурний GMP API](book.gmp.md).

class **GMP** {

/\* Методи \*/

public [\_\_serialize](gmp.serialize.md)(): array

public [\_\_unserialize](gmp.unserialize.md)(array `$data`): void

}

## Зміст

- [GMP::\_\_serialize](gmp.serialize.md) — Серіалізує об'єкт GMP
- [GMP::\_\_unserialize](gmp.unserialize.md) - Десеріалізує
параметр data в об'єкт GMP
