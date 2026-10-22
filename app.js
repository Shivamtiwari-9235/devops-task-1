const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

// UI ke liye public folder ko serve karna
app.use(express.static(path.join(__dirname, 'public')));

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;