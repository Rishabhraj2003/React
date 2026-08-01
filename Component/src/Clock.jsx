const clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []); 

  return (
    <div>
      <h1>Clock {time}</h1>
    </div>
  );
}
export default clock;  