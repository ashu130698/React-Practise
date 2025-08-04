


function ThemeComponent() {
    const {theme}=useContext(ThemeContext);
    return ( 
        <div style={{background:theme==='light'?'#fff':'#333', color:theme==='light'?'#333':'#fff', padding:'20px' textalign:'center'}}>
              <h3>Theme Component</h3>
        </div>
     );
}

export default ThemeComponent;