import * as React from 'react';
import Radio from '@mui/material/Radio';
import Waiting from './Waitingcommodity';
import Commodityposted from './Commodityposted';


export default function Ordered() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const table = React.useMemo(() => {
    return selectedValue=="a" ? <Waiting/>:<Commodityposted/>
  },[selectedValue]);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
    <Radio
      checked={selectedValue === 'a'}
      onChange={handleChange}
      name="radio-buttons"
      inputProps={{ 'aria-label': 'A' }}
      value='a'
      label="Commodity"
    />
    waiting commodity
    <Radio
      checked={selectedValue === 'b'}
      onChange={handleChange}
      name="radio-buttons"
      inputProps={{ 'aria-label': 'B' }}
      value='b'
      label="Commodity"
    />  
    commodity posted
    {table}
    </div>
  );
}

