- [« fann_train](function.fann-train.md)
- [FANNConnection::\_\_construct »](fannconnection.construct.md)

- [PHP Manual](index.md)
- [FANN] (book.fann.md)
- Клас FANNConnection

# Клас FANNConnection

(No version information available, might only be in Git)

## Вступ

**FANNConnection** використовується для зв'язку нейронної мережі. Об'єкти цього
класу використовуються у функціях
[fann_get_connection_array()](function.fann-get-connection-array.md) та
[fann_set_weight_array()](function.fann-set-weight-array.md).

## Огляд класів

class **FANNConnection** {

/\* Властивості \*/

public `$from_neuron`;

public `$to_neuron`;

public `$weight`;

/\* Методи \*/

public [\_\_construct](fannconnection.construct.md)(int
`$from_neuron`, int `$to_neuron`, float `$weight`)

public [getFromNeuron](fannconnection.getfromneuron.md)(): int

public [getToNeuron](fannconnection.gettoneuron.md)(): int

public [getWeight](fannconnection.getweight.md)(): void

public [setWeight](fannconnection.setweight.md)(float `$weight`): void

}

## Властивості

`from_neuron`
Перший нейрон (початковий)

`to_neuron`
Другий нейрон (кінцевий)

`weight`
Вага зв'язку

## Зміст

- [FANNConnection::\_\_construct](fannconnection.construct.md) -
Конструктор зв'язку
- [FANNConnection::getFromNeuron](fannconnection.getfromneuron.md) -
Повертає позицію стартового нейрона
- [FANNConnection::getToNeuron](fannconnection.gettoneuron.md) -
Повертає позицію кінцевого нейрона
- [FANNConnection::getWeight](fannconnection.getweight.md) -
Повертає вагу зв'язку
- [FANNConnection::setWeight](fannconnection.setweight.md) -
Встановлює вагу зв'язку
