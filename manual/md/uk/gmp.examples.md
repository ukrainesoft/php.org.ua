- [«Зумовлені константи](gmp.constants.md)
- [GMP Функції »](ref.gmp.md)

- [PHP Manual](index.md)
- [GMP](book.gmp.md)
- Приклади

# Приклади

**Приклад #1 Обчислення факторіалу за допомогою GMP**

`<?phpfunction fact($x){    $return u003d 1; for ($iu003d2; $i <u003d $x; $i++) {        $return u003d gmp_mul($return, $i); }   return $return;}echo gmp_strval(fact(1000)) . "
";?> `

Цей приклад досить швидко обчислить факторіал від 1000 (а це дуже
велике число).
