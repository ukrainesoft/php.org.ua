- [«
SVMModel::checkProbabilityModel](svmmodel.checkprobabilitymodel.md)
- [SVMModel::getLabels »](svmmodel.getlabels.md)

- [PHP Manual](index.md)
- [SVMModel](class.svmmodel.md)
- Конструктор класу SVMModel

# SVMModel::\_\_construct

(PECL svm \>u003d 0.1.0)

SVMModel::\_\_construct - Конструктор класу SVMModel

### Опис

public **SVMModel::\_\_construct**(string `$filename` u003d ?)

Створює об'єкт класу SVMModel. Зазвичай моделі створюються методом
SVM::train, але збережені моделі можна відновити безпосередньо.

### Список параметрів

`filename`
Ім'я файлу, у якому збережено модель.

### Помилки

Викидає виняток **SVMException** у разі виникнення помилки

### Дивіться також

- [SVMModel::load()](svmmodel.load.md) - Завантажує збережену
модель SVM
