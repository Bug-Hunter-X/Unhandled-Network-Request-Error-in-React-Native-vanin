```javascript
// bugSolution.js
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('some-url');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
        {/* Add retry button or other logic here as needed */}
      </View>
    );
  }
  // ... rest of the component using data
};

export default MyComponent;
```