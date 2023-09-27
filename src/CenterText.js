
function CenterText({text}) {
  return (
   <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '6vw',
    height: '100vh'
   }}>
    {text}
   </div>
  );
}

export default CenterText;