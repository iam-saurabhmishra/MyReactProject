import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

function Toggle(props) {
  return (
    <DarkModeToggle
      mode={props.mode}
      dark="Dark"
      light="Light"
      size="sm"
      //We can adjust this one 
      activeLabelColor='white'
      //inactiveLabelColor='white'
     inactiveTrackColor="#e2e8f0"
      inactiveTrackColorOnHover="#f8fafc"
      inactiveTrackColorOnActive="#cbd5e1"
      activeTrackColor="#334155"
      activeTrackColorOnHover="#1e293b"
      activeTrackColorOnActive="#0f172a"
     inactiveThumbColor="#1e293b"
      activeThumbColor="#e2e8f0"
      onChange={props.toggleTheme}
    />
  );
}

export default Toggle