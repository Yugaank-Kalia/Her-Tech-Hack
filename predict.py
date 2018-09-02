from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC, LinearSVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB # Gaussian Naive Bays
from sklearn.linear_model import Perceptron
from sklearn.linear_model import SGDClassifier #stochastic gradient descent
from sklearn.tree import DecisionTreeClassifier
import pandas as pd
import numpy as np
data=pd.read_csv("data.csv")
test=pd.read_csv("test.csv")
cols=data.columns
x=data[cols[:-1]]
y=data[cols[-1]]
model = RandomForestClassifier(n_estimators=100, random_state=1)
model.fit(x,y)
preds = model.predict_proba(test)
prediction=pd.DataFrame(preds)
prediction=prediction.drop(labels=1,axis=1)
preds=np.sort(prediction,axis=0)
prediction=pd.DataFrame(preds)
print(prediction)
prediction.to_json("predictions.json")