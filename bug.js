```javascript
// Incorrect usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({ name: 'John Doe' }, { $inc: { age: '1' } });
```