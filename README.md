# mylocaldatabase
mylocaldatabase it's a local database based on AsynchStorage and pleex. It's for all project react native (ios, android and web) and Expo.
<p align="center">
 
</p>

<h1 align="center"> mylocaldatabase </h1>
<h3 align="center">
  Local Javascript Async Storage for ⚛️ react native and Expo
</h3>
<br />

<h3 align="center">Built with ❤ By Dubos Rudy</h3>
<br />

## Get Started

### Installation

install mylocaldatabase with npm or yarn
```bash
npm i mylocaldatabase
```
or
```bash
yarn add mylocaldatabase
```

<br />

this is example of creating schemas with mylocaldatabase
<br />

```jsx

import {MyLocalDatabase} from 'mylocaldatabase';

const my_collection = MyLocalDatabase.collection('test');

const my_schema = MyLocalDatabase.schema({
  name: String,
  age: Number,
});

my_collection.insert(
    {
      name: 'Jack',
      age: 12,
    },
    my_schema,
    (success) => // Success,
    (error) => console.error(error)
);

```

### This package helps you in:
- #### Having simple storage
- #### Create Schema and use them
- #### Type cheking for schemas
- #### Async workflow
- #### Integrated with async storage
- #### Save and use Json objects
- #### Built in searching api 

### Current api's:
- #### Collection
- #### Schema
- #### Insert
- #### removeItem
- #### removeItems
- #### getItem
- #### getItems
- #### clearCollection
- #### getAll
- #### Multiple insert
