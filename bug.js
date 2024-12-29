```javascript
// In a React Native component

const MyComponent = () => {
  const [data, setData] = useState(null);

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
        console.error('Error fetching data:', error);
        // Missing error handling here!  The app might crash or show nothing if the fetch fails
      }
    };

    fetchData();
  }, []);

  if (data === null) {
    return <Text>Loading...</Text>; //Shows loading text but no indication of actual errors
  }
  // ... rest of the component using data
};
```