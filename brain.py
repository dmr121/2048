from __future__ import absolute_import, division, print_function, unicode_literals
import functools

# Install TensorFlow

import tensorflow as tf
import numpy as np
import pandas as pd

df = pd.read_csv('data.csv')

target = df.pop('move')
dataset = tf.data.Dataset.from_tensor_slices((df.values, target.values))
train_dataset = dataset.shuffle(len(df)).batch(1)

def get_compiled_model():
    model = tf.keras.Sequential([
    tf.keras.layers.Dense(10, activation='relu'),
    tf.keras.layers.Dense(10, activation='relu'),
    tf.keras.layers.Dense(1, activation='sigmoid')
    ])

    model.compile(optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy'])
    return model

model = get_compiled_model()
model.fit(train_dataset, epochs=15)