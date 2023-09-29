import CenterText from './CenterText';
import './sidebar.css'; // If we remove this import then the default App.css .box class will get apply

function SidebarExample() {
  return (
   <div style={{
    backgroundColor: 'lightcoral',
    height: '100vh'
   }}>
     <CenterText text='SideBar'/>
     <div className='box' />
   </div>
  );
}

export default SidebarExample;