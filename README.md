# MongoDB Update Query Bug
This repository demonstrates a common error in using the `$inc` operator in MongoDB update queries. The incorrect use of the operator leads to unexpected behavior. The solution demonstrates how to correctly use `$inc` operator.
## Bug
The bug lies in the improper use of the `$inc` operator, passing a string instead of a numerical value. This leads to the update operation failing silently or producing unintended results. 
## Solution
The solution shows the correct usage of the `$inc` operator, passing a numerical value to increment the age field correctly. This ensures the database operation executes as intended, updating the age field with the specified increment.
