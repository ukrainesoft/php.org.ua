- [«SVM::train](svm.train.md)
- [SVMModel::checkProbabilityModel
»](svmmodel.checkprobabilitymodel.md)

- [PHP Manual](index.md)
- [SVM](book.svm.md)
- Клас SVMModel

# Клас SVMModel

(PECL svm \>u003d 0.1.0)

## Вступ

SVMModel – це кінцевий результат процесу навчання. Він може бути
використано для класифікації раніше невідомих даних.

## Огляд класів

class **SVMModel** {

/\* Методи \*/

public [\_\_construct](svmmodel.construct.md)(string `$filename` u003d ?)

public [checkProbabilityModel](svmmodel.checkprobabilitymodel.md)():
bool

public [getLabels](svmmodel.getlabels.md)(): array

public [getNrClass](svmmodel.getnrclass.md)(): int

public [getSvmType](svmmodel.getsvmtype.md)(): int

public [getSvrProbability](svmmodel.getsvrprobability.md)(): float

public [load](svmmodel.load.md)(string `$filename`): bool

public [predict_probability](svmmodel.predict-probability.md)(array
`$data`): float

public [predict](svmmodel.predict.md)(array `$data`): float

public [save](svmmodel.save.md)(string `$filename`): bool

}

## Зміст

- [SVMModel::checkProbabilityModel](svmmodel.checkprobabilitymodel.md)
— Повертає true, якщо модель містить інформацію про ймовірність
- [SVMModel::\_\_construct](svmmodel.construct.md) - Конструктор
класу SVMModel
- [SVMModel::getLabels](svmmodel.getlabels.md) — Повертає позначки,
на яких навчалася модель
- [SVMModel::getNrClass](svmmodel.getnrclass.md) — Повертає
кількість класів, для яких навчалася модель
- [SVMModel::getSvmType](svmmodel.getsvmtype.md) — Отримати тип SVM,
з яким навчалася модель
- [SVMModel::getSvrProbability](svmmodel.getsvrprobability.md) -
Отримати величину сигми для регресійного типу
- [SVMModel::load](svmmodel.load.md) — Завантажує збережену модель
SVM
- [SVMModel::predict_probability](svmmodel.predict-probability.md) -
Повертає можливість класу для заданих даних
- [SVMModel::predict](svmmodel.predict.md) — Передбачити значення на
основі нових даних
- [SVMModel::save](svmmodel.save.md) — Зберегти готову модель у
файл
