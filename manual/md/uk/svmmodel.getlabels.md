- [« SVMModel::\_\_construct](svmmodel.construct.md)
- [SVMModel::getNrClass »](svmmodel.getnrclass.md)

- [PHP Manual](index.md)
- [SVMModel](class.svmmodel.md)
- Повертає позначки, на яких навчалася модель

# SVMModel::getLabels

(PECL svm u003d 0.1.5)

SVMModel::getLabels — Повертає позначки, на яких навчалася модель

### Опис

public **SVMModel::getLabels**(): array

Повертає масив міток (класів), на яких була навчена модель. Для
регресивної та однокласової моделі повертається порожній масив.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив міток

### Дивіться також

- [SVMModel::getNrClass()](svmmodel.getnrclass.md) - Повертає
кількість класів, для яких навчалася модель
