- [« SVMModel::getSvrProbability](svmmodel.getsvrprobability.md)
- [SVMModel::predict_probability »](svmmodel.predict-probability.md)

- [PHP Manual](index.md)
- [SVMModel](class.svmmodel.md)
- Завантажує збережену модель SVM

# SVMModel::load

(PECL svm \>u003d 0.1.00.1.0)

SVMModel::load — Завантажує збережену модель SVM

### Опис

public **SVMModel::load**(string `$filename`): bool

Завантажує збережену модель SVM із файлу, готову до класифікації та
регресу.

### Список параметрів

`filename`
Назва файлу для завантаження.

### Значення, що повертаються

У разі виникнення помилки викидає SVMException. В разі
успішного виконання повертає **`true`**.

### Дивіться також

- [SVMModel::save()](svmmodel.save.md) - Зберегти готову модель в
файл
