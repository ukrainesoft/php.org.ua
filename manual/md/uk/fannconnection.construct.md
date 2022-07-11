- [«FANNConnection](class.fannconnection.md)
- [FANNConnection::getFromNeuron »](fannconnection.getfromneuron.md)

- [PHP Manual](index.md)
- [FANNConnection](class.fannconnection.md)
- Конструктор зв'язку

# FANNConnection::\_\_construct

(PECL fann u003d 1.0.0)

FANNConnection::\_\_construct - Конструктор зв'язку

### Опис

public **FANNConnection::\_\_construct**(int `$from_neuron`, int
`$to_neuron`, float `$weight`)

Створює новий зв'язок та ініціалізує його параметри. Після створення зв'язку
можна буде змінити лише її вагу.

### Список параметрів

`from_neuron`
Позиція стартового нейрону.

`to_neuron`
Позиція кінцевого нейрону.

`weight`
Вага зв'язку.
