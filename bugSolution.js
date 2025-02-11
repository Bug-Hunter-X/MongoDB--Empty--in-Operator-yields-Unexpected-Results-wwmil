```javascript
//Solution: Using $exists operator to check for field presence
db.collection.find({ field: { $exists: true } }); 
//Alternative if you need more specific criteria, combine it with other queries
db.collection.find({ $or: [{field: { $exists: true, $nin: [] } }, {field: { $exists: false }}]})
```