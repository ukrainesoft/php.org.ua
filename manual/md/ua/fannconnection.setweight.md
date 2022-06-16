- [« FANNConnection::getWeight](fannconnection.getweight.md)
- [Igbinary »](book.igbinary.md)

- [PHP Manual](index.md)
- [FANNConnection](class.fannconnection.md)
- Встановлює вагу зв'язку

# FANNConnection::setWeight

(PECL fann u003d 1.0.0)

FANNConnection::setWeight — Встановлює вагу зв'язку

### Опис

public **FANNConnection::setWeight**(float `$weight`): void

Встановлює вагу зв'язку.

Цей метод відрізняється від
[fann_set_weight()](function.fann-set-weight.md). Він не оновлює
значення ваги у мережі. Значення в мережі оновиться лише після дзвінка
[fann_set_weight_array()](function.fann-set-weight-array.md).

### Список параметрів

`weight`
Вага зв'язку.

### Значення, що повертаються

Не повертає жодного значення.
